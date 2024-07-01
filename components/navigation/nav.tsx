import { auth } from "@/server/auth";
import Link from "next/link";

import Logo from "./logo";
import UserBtn from "./user-btn";
import { Button } from "../ui/button";
import { KeyRound } from 'lucide-react';

export default async function Nav() {
  const session = await auth();
  // console.log(session);

  return (
    <header className="bg-slate-500 py-4">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Logo />
          </li>
          {!session ? (
            <li>
              <Button asChild>
                <Link href="/api/auth/signin" className=" gap-2">
                  <KeyRound size={20}/>
                  Sign in
                </Link>
              </Button>
            </li>
          ) : (
            <li>
              <UserBtn expires={session?.expires} user={session?.user} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
