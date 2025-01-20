import Contact from "@/model/contact.model.js";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name, email, message } = await request.json()
        const data = await Contact.create(
            { name, email, message }
        )

        return NextResponse.json({ message: "Message sent", data }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 503 })
    }
}