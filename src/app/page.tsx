import { Auth } from "@/components/auth";
import { Logo } from "@/components/logo";
import { ArrowRight, CheckCircle, Globe } from "lucide-react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
	const { userId } = auth();
	if (userId) {
		redirect("/dashboard");
	}
	return (
		<div className="flex flex-col min-h-screen">
			<header className="px-4 mt-5 lg:px-6 h-14 flex items-center">
				<Logo />

				<nav className="ml-auto hidden lg:flex  gap-4 sm:gap-6">
					<Auth />
				</nav>
			</header>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100">
					<div className="container px-4 md:px-6 mx-auto">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Ultimate AI Content Generator
								</h1>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
									Our plattform offers a suite of powerful tools to help you
									generate social media contents with the power of AI.
								</p>
							</div>
							<div className="space-x-4">
								<button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4">
									Get Started
								</button>
								<button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-gray-100 h-10 py-2 px-4">
									Learn More
								</button>
							</div>
						</div>
					</div>
				</section>
				<section id="features" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6 mx-auto">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
							Our Features
						</h2>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							<div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
								<CheckCircle className="w-12 h-12 mb-4 text-blue-600" />
								<h3 className="text-xl font-bold mb-2">Easy to Use</h3>
								<p>
									Our intuitive interface makes it simple for anyone to get
									started and be productive from day one.
								</p>
							</div>
							<div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
								<Globe className="w-12 h-12 mb-4 text-blue-600" />
								<h3 className="text-xl font-bold mb-2">Global Reach</h3>
								<p>
									Connect with users and businesses from around the world,
									expanding your market effortlessly.
								</p>
							</div>
							<div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
								<ArrowRight className="w-12 h-12 mb-4 text-blue-600" />
								<h3 className="text-xl font-bold mb-2">Scalable Solution</h3>
								<p>
									Grow your business with our scalable infrastructure that
									adapts to your needs as you expand.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section
					id="about"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
					<div className="container px-4 md:px-6 mx-auto">
						<div className="grid gap-10 lg:grid-cols-2">
							<div className="space-y-4">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
									About StartupX
								</h2>
								<p className="text-gray-500">
									StartupX was founded with a vision to empower businesses of
									all sizes. Our team of experts is dedicated to creating
									innovative solutions that drive growth and efficiency.
								</p>
							</div>
							<div className="space-y-4">
								<h3 className="text-xl font-bold">Our Mission</h3>
								<p className="text-gray-500">
									To provide cutting-edge technology solutions that enable
									businesses to thrive in the digital age, fostering innovation
									and sustainable growth.
								</p>
								<button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-gray-100 h-10 py-2 px-4">
									Learn More About Us
								</button>
							</div>
						</div>
					</div>
				</section>
				<section id="contact" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6 mx-auto">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
									Get in Touch
								</h2>
								<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
									Have questions or want to learn more? We're here to help.
									Reach out to our team today.
								</p>
							</div>
							<div className="w-full max-w-sm space-y-2">
								<form className="flex flex-col space-y-4">
									<input
										className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
										placeholder="Your email"
										type="email"
									/>
									<textarea
										className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
										placeholder="Your message"></textarea>
									<button
										type="submit"
										className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4">
										Send Message
									</button>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500">
					© 2024 StartupX Inc. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link className="text-xs hover:underline underline-offset-4" href="#">
						Terms of Service
					</Link>
					<Link className="text-xs hover:underline underline-offset-4" href="#">
						Privacy Policy
					</Link>
				</nav>
			</footer>
		</div>
	);
}
