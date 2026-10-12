import { NextResponse } from "next/server";

let products = [
    {
        id : 1, 
        name : 'Abubakr',
        price : 20
    },
    {
        id : 2, 
        name : 'Umar',
        price : 40
    }
];

export async function GET() {
    return NextResponse.json(products)
}

export async function POST(request:Request) {
    const body = await request.json();
    const newProduct = {id  : Date.now(), ...body};
    products.push(newProduct);
    return NextResponse.json(newProduct, {status : 201})
}