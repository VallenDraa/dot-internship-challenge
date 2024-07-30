import type React from "react";
import { HeadingSubheading } from "../ui/heading-subheading";
import { Card } from "../ui/card";
import { LogoutButton } from "@/features/authentication/components/ui/logout-button";
import {
	UserProfile,
	UserProfileSkeleton,
} from "@/features/authentication/components/ui/user-profile";
import { useLoggedInUser } from "@/features/authentication/query/get-logged-in-user-query";
import { useAccessToken } from "@/features/authentication/query/get-access-token";
import { Transition } from "@headlessui/react";

export type SelectionsLayoutProps = Readonly<{
	children: React.ReactNode;
	title: string;
	subtitle: string;
}>;

export const SelectionsLayout = (props: SelectionsLayoutProps) => {
	const { data: accessToken } = useAccessToken();
	const { data: user, isLoading } = useLoggedInUser(accessToken ?? "", {
		queryConfig: { enabled: Boolean(accessToken) },
	});

	return (
		<main className="flex h-screen flex-col items-center justify-center">
			<Card>
				<div className="mb-8 flex justify-between gap-2">
					<LogoutButton />

					{isLoading || !user ? (
						<UserProfileSkeleton />
					) : (
						<Transition
							show
							as="div"
							enter="transition duration-200 ease-in-out"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition duration-200 ease-in-out"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<UserProfile user={user} />
						</Transition>
					)}
				</div>

				<div className="mb-8 space-y-2 text-center">
					<HeadingSubheading
						heading={props.title}
						subHeading={props.subtitle}
					/>
				</div>

				{props.children}
			</Card>
		</main>
	);
};
