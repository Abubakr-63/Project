import { deleteUser, updateUser } from "@/src/lib/products";
import { NextResponse } from "next/server";

export async function GET(request: Request,
  { params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    return NextResponse.json({id})
}

export async function DELETE(request:Request, {params}) {
  const {id} = await params;
  deleteUser(Number(id));
  return NextResponse.json({success : true})
}

export async function PATCH(request:Request, {params}) {
  const {id} = await params;
  const body = await request.json();
  updateUser(Number(id), body);
}