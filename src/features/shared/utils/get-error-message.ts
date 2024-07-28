import { isAxiosError } from "axios";
import z from "zod";

export const UNAUTHED_PAGE_VISIT_MESSAGE =
	"You are unauthenticated, please make sure you are logged in!";
export const DEFAULT_ERROR_MESSAGE =
	"Something went wrong. Please try again later.";

export function getErrorMessage(
	err: unknown,
	defaultMessage = DEFAULT_ERROR_MESSAGE,
) {
	if (isAxiosError(err)) {
		if (err.response) {
			if ("message" in err.response.data) {
				return (err.response.data as { message: string }).message;
			}
		}
	}

	if (err instanceof z.ZodError) {
		const errors = err.issues.map(issue => issue.message);
		return errors.join("\n");
	}

	return defaultMessage;
}
