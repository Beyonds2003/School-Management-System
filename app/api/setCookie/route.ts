import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request, res: Response) {
  const { jwt } = await req.json();

  cookies().set({
    name: "jwt",
    value: jwt,
    httpOnly: true,
    path: "/",
    sameSite: 'none',
    secure: true
  });

  return NextResponse.json({ message: "Set Cookie" })
}
