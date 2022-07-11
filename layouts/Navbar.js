import React from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
	{
		id: 1,
		href: "/",
		label: "Home",
	},
	{
		id: 2,
		href: "/shop",
		label: "Shop",
	},
	{
		id: 3,
		href: "/about",
		label: "About",
	},
	{
		id: 4,
		href: "/contact",
		label: "Contact",
	},
	{
		id: 5,
		href: "/our-story",
		label: "Our Story",
	},
];

const Navbar = () => {
	return (
		<nav className="flex justify-between h-16 nav px-5 border-b border-dark">
			<Link href="/">
				<a className="flex items-center">
					<Image
						src="/assets/images/svg/essence_logo_dark.svg"
						alt="logo"
						width={100}
						height={25}
					/>
				</a>
			</Link>

			<ul className="hidden md:flex md:items-center md:space-x-10">
				{navLinks.map(({ id, href, label }) => (
					<li key={id}>
						<Link href={href}>
							<a className="text-base">{label}</a>
						</Link>
					</li>
				))}
			</ul>

			<div className="flex">
				<button className="px-3 border-x border-dark">
					<Image
						src="/assets/images/svg/search_icon.svg"
						alt="logo"
						width={30}
						height={30}
					/>
				</button>

				<button className="px-3">
					<Image
						src="/assets/images/svg/shopping_cart_icon.svg"
						alt="logo"
						width={30}
						height={30}
					/>
				</button>

				<button className="px-3 text-center text-sm sm:text-base border-l border-dark">
					Menu
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
