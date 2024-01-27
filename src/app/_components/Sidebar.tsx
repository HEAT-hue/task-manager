'use client';
import { NavLink } from "@/lib/definitions";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiCircleList } from "react-icons/ci";
import { FaCheckDouble, FaSignOutAlt } from "react-icons/fa";
import { RiHome6Line, RiTodoLine } from "react-icons/ri";

const links: NavLink[] = [
    {
        label: 'All Tasks',
        href: '/',
        icon: <RiHome6Line />
    },
    {
        label: 'Important!',
        href: '/important',
        icon: <CiCircleList />
    },
    {
        label: 'Completed!',
        href: '/completed',
        icon: <FaCheckDouble />
    },
    {
        label: 'Do it now!',
        href: '/incomplete',
        icon: <RiTodoLine />
    },
]

const Sidebar = () => {

    // Side navigation
    return (
        <nav
            className="relative py-5 h-full flex flex-col justify-between w-[15rem] bg-colorBg2 dark:bg-colorBg2Dark border border-borderColor2 rounded-[0.2rem]"
        >
            {/* Profile container */}
            <div className="flex justify-center gap-x-3 items-center relative p-3 w-max mx-auto">
                {/* Profile Overlay */}
                <div className="absolute inset-0 w-full h-full blur-[1px] rounded-md transition-all opacity-[0.2] border-1 border-[borderColor2] bg-colorBg3 dark:bg-colorBg3Dark z-0"></div>

                {/* Profile image */}
                <Image className="rounded-full" src={"/avatar1.png"} width={70} height={70} alt="profile-image"></Image>

                {/* title */}
                <h1 className="flex flex-col text-[1rem]">
                    <span>John</span>
                    <span>Doe</span>
                </h1>
            </div>

            {/* Nav links */}
            <NavLinks />

            {/* Sign out */}
            <div className="cursor-pointer flex pl-5 py-2 gap-x-4 items-center hover:bg-activeNavLinkHover">
                <FaSignOutAlt />
                <span>Sign out</span>
            </div>
        </nav>
    )
}

// Side bar nav links
const NavLinks = () => {

    // Get current path name to check for active states
    const pathname = usePathname();

    return (
        <ul className="flex flex-col gap-y-2">
           
            {links.map((link, index: number) => {
                return (
                   
                    <li
                        key={index}
                        className={classNames({
                            "pl-5 py-2 hover:bg-activeNavLinkHover": true,
                            "bg-activeNavLinkHover border-r-4 border-colorGreenDark": pathname == link.href,
                        })}
                    >
                        <Link href={link.href}>
                            <div
                                className={classNames({
                                    "relative flex gap-x-4 items-center font-[500] text-colorGreyDark dark:text-colorGrey0": true
                                })}
                            >
                                <span
                                    className={
                                        classNames({
                                            "dark:text-colorIcons2Dark": pathname == link.href,
                                            "text-colorIcons2 dark:text-colorIconsDark": true
                                        })
                                    }
                                >{link.icon}</span>
                                <span> {link.label}</span>
                            </div>
                        </Link>
                    </li>
                )
            })}
        </ul >
    )
}

export default Sidebar