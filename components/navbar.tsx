"use client"
import Image from "next/image"
import Link from "next/link";
import { Hamburger } from "../components/icons/Icon"
import { useState } from "react";

export const navItems = [
    {
        id: 1,
        title: "Home",
        href: "/",
    },
    {
        id: 2,
        title: "About",
        href: "/about",
    },
    {
        id: 3,
        title: "Services",
        href: "/services",
    },
    {
        id: 4,
        title: "Pricing",
        href: "/pricing",
    },
    {
        id: 5,
        title: "Blog",
        href: "/blog",
    },
    {
        id: 6,
        title: "Contact",
        href: "/contact",
    },
];
export const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="relative bg-white max-w-4xl mx-auto md:mt-4 px-2 py-2 flex justify-between 
        items-center md:rounded-full border border-neutral-200 md:shadow-input">
            <Image src="https://ui.aceternity.com/logo.png"
                alt="logo"
                width={30}
                height={30}
                className="rounded-full"
            />
            <div className="hidden md:flex items-center gap-4 text-sm mr-10">
                {navItems.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
            <button onClick={() => setOpen(!open)} className="md:hidden flex">
                <Hamburger />
            </button>
            {
                open && (
                    <div className="transition-all duration-300 md:hidden absolute inset-x-0 bg-white rounded-md shadow-input top-12 max-w-[100%] mx-auto">
                        <div className="flex flex-col items-start gap-4 text-sm p-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className="text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    )
}