"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

export default function UserBtn({ user }: Session) {
  return (
    <div>
      <h1>{user?.name}</h1>
      <Button className="gap-2" onClick={() => signOut()}>
        <LogOut size={16} />
        sign out
      </Button>
    </div>
  );
}
