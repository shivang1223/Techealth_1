import Contact from "@/components/Contact";
import connectDB from "../../lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    await connectDB()
    try {
        const { inputValue } = await request.json()
        console.log(inputValue);

        return NextResponse.json({ message: "Message sent" }, { status: 201 })
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({ error: error.message }, { status: 503 })
    }
}