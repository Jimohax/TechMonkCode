import React from "react";
import Link from "next/link";

const NavBar = () => {

    const links = [
        {label: "Dashboard", href: "/"},
        {label: "Issues", href: "/issues"},
        {label: "Cart", href: "/cart"}

    ]

    
	return (
		<nav className="flex space-x-6 border-b mb-5 px-2 h-14 items-center">
			<Link href="/">Logo</Link>
			<ul className="flex space-x-6">
                {links.map(link=><Link className="text-zinc-500 hover:text-zinc-800 transition-colors" href="/" key={link.href}>{link.label}</Link>)}
				
			</ul>
		</nav>
	);
};

export default NavBar;
