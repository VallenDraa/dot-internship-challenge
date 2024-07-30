import { type User } from "@/features/authentication/types/user-type";
import { Avatar } from "@/features/shared/components/ui/avatar";

export type UserProfileProps = {
	user: User;
};

export const UserProfileSkeleton = () => (
	<div className="flex animate-pulse items-center gap-2">
		<div className="h-4 w-16 rounded bg-neutral-100" />
		<div className="size-10 rounded-full bg-neutral-100" />
	</div>
);

export const UserProfile = (props: UserProfileProps) => {
	const { user } = props;

	return (
		<div className="flex items-center gap-2">
			<span className="text-sm font-bold">{user.username}</span>
			<Avatar src={user.image} alt={user.username} />
		</div>
	);
};
