
import connectDB from "@/lib/db";
import Contact from "@/model/contact.model";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectDB()
        const {email, name, message} = await request.json()
        await Contact.create({
            email, name, message
        })
        return NextResponse.json({ message: "Message sent" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 503 })
    }
}