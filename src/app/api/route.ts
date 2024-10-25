import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
	try {
		const { userId } = auth();
		if (!userId) {
			return new NextResponse("User not Authenticated", { status: 401 });
		}
		const { title, description, templateUsed } = await req.json();
		const createNewOutput = await db.aIOutput.create({
			data: {
				userId: userId,
				title: title,
				description: description,
				templateUsed,
			},
		});
		revalidatePath("/");
		return NextResponse.json(createNewOutput, { status: 200 });
	} catch (error) {
		return new NextResponse("POST AI GENERATE: New Output Generation error", {
			status: 500,
		});
	}
}
