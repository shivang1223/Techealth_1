
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        
        await connectDB()

        return NextResponse.json({ message: "Database connected " }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 503 })
    }
}