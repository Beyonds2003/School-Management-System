import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request, res: Response) {
  const data = await req.json();

  cookies().set({
    name: "jwt",
    value: data.jwt,
    httpOnly: true,
    path: "/",
  });

  return NextResponse.json({ message: "Set Cookie" })
}
