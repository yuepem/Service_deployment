"use client"

import { Button } from "@radix-ui/themes"
import Link from "next/link"

type  backButtonType = {
    href: string
    label: string
}

export default function BackButton({href, label}: backButtonType) {
    return (
        <Button className="flex flex-col items-center w-full gap-4 ">
            <Link aria-label="Back" href={href} className=" outline outline-2 rounded-full py-2 px-7 bg-black text-white font-xs " > {label}</Link>
        </Button>
    )
}