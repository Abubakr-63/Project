import { deleteProduct, updateProduct } from "@/src/lib/products";
import { NextResponse } from "next/server";

type Ctx = { params: Promise<{ id: string }> };

export async function DELETE(_: Request, { params }: Ctx) {
  const { id } = await params;
  await deleteProduct(Number(id));
  return NextResponse.json({ success: true });
}

export async function PATCH(request: Request, { params }: Ctx) {
  const { id } = await params;
  const { name, price } = await request.json();
  const product = await updateProduct(Number(id), name, Number(price));
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(product);
}