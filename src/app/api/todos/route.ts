import { products } from "@/src/lib/products";
import { NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json(products)
}

export async function POST(request:Request) {
    const body = await request.json();
    const newProduct = {id  : Date.now(), ...body};
    products.push(newProduct);
    return NextResponse.json(newProduct, {status : 201})
}