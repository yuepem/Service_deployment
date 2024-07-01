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
    <header className="py-8 ">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Logo />
          </li>
          {!session ? (
            <li>
              <Button asChild>
                <Link href="/auth/login" className=" gap-2">
                  <KeyRound size={20}/>
                  Login
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
