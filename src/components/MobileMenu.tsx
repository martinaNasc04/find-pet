import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function MobileMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden" asChild>
                <Button className="cursor-pointer" variant="outline">
                    <Menu />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem className="font-semibold cursor-pointer hover:underline">
                        <Link href="/user">Seu perfil</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="font-semibold cursor-pointer hover:underline">
                        <Link href="/pets">Pets</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="font-semibold cursor-pointer hover:underline">
                        <Link href="/pets/new">Anunciar um pet</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="font-semibold cursor-pointer hover:underline">
                        <Link href="/pets/view-pets">
                            Visualizar pets postados
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <UserButton showName />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
