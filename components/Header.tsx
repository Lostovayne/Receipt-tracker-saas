"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Shield } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div
      className={cn(
        "p-4 flex justify-between items-center",
        isHomePage ? "bg-blue-50" : "bg-white border-b border-blue-50",
      )}
    >
      <Link href={"/"} className="flex items-center">
        <Shield className="size-6 text-blue-600 mr-2" />
        <h1 className="text-xl font-semibold">Expensio</h1>
      </Link>

      <div className="flex items-center space-x-4">
        <SignedIn>
          <Link href={"/receipts"}>
            <Button variant={"outline"} size={"sm"} >My Receipts</Button>
          </Link>
          <Link href={"/manage-plan"}>
            <Button size={"sm"}  >Manage Plan</Button>
          </Link>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <Button>Login</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
};

export default Header;
