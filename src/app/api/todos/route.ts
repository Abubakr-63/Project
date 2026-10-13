import { getProducts, createProduct } from "@/src/lib/products";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(await getProducts());
}

export async function POST(request: Request) {
  const { name, price } = await request.json();
  const product = await createProduct(name, Number(price));
  return NextResponse.json(product, { status: 201 });
}