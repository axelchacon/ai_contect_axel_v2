"use client";
import React, { use } from "react";
import { Logo } from "@/components/logo";
import { CreditCard, History, WandSparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menulist = [
	{
		name: "Magic Tools",
		icon: WandSparkles,
		path: "/dashboard",
	},
	{
		name: "Output History",
		icon: History,
		path: "/dashboard/history",
	},
	{
		name: "Upgrade",
		icon: CreditCard,
		path: "/dashboard/upgrade",
	},
];

const Sidebar = () => {
	const path = usePathname();
	console.log("pathh", path);
	return (
		<div className="p-5 bg-white h-[800px] flex flex-col">
			<Logo />
			<div className="mt-10 h-max flex flex-col justify-between">
				{menulist.map((menu) => (
					<Link
						key={menu.name}
						href={menu.path}
						className={cn(
							"flex mb-2 items-center gap-2 hover:bg-primary hover:text-white cursor-pointer p-3 rounded-lg",
							path === menu.path && "bg-primary text-white"
						)}>
						<menu.icon className="w-6 h-6"></menu.icon>
						<h2 className="text-lg">{menu.name}</h2>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
