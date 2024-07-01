"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";

export default function UserBtn({ user }: Session) {
  return (
    <div>
      <h1>{user?.name}</h1>
      <button className="bg-sky-200" onClick={() => signOut()}>
        sign out
      </button>
    </div>
  );
}
