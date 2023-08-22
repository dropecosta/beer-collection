import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { BeerModel } from "@/models/beer";

export const POST = async (req: Request | NextRequest, res: any) => {
    await dbConnect();
    try {
        const body = await req.json();
        const newBeer = await BeerModel.create(body);
        return NextResponse.json({data: newBeer}, {status: 201});
    } catch (error) {
        return NextResponse.json({data: null}, {status: 500})
    }
}

export const GET = async (req: any, res: any) => {
    await dbConnect();
    try {
        const result = await BeerModel.find({});
        return NextResponse.json({data: result}, {status: 200});
    } catch (error) {
        return NextResponse.json({data: null}, {status: 500})
    }
}