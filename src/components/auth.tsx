import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";

export const Auth = () => {
	return (
		<div>
			<SignedOut>
				<SignInButton><Button>Sign in</Button></SignInButton>
			</SignedOut>
			<SignedIn>
				<UserButton></UserButton>
			</SignedIn>
		</div>
	);
};
