"use client";

import { AuthCard } from "./auth-card";

export default function LoginForm() {
    return (
        <AuthCard
            cardTitle="Welcome back"
            backButtonHref="./api/auth/signin"
            backButtonLabel="Create an account"
            showSocials={true}
            
        >
            {/* <div>
                <h1></h1>
            </div> */}
        </AuthCard>
    )
}