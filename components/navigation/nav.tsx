import { auth } from "@/server/auth";
import Link from "next/link";


import UserBtn from "./user-btn";
import { Button } from "../ui/button";
import { KeyRound } from 'lucide-react';
import { FaHome } from "react-icons/fa";

export default async function Nav() {
  const session = await auth();
  // console.log(session);

  return (
    <header className="py-8 ">
      <nav>
        <ul className="flex justify-between">
          <li>
           <Link href={'/'}><FaHome size={40} className="mx-4"/></Link>
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
