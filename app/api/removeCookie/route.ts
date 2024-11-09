import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: Request, res: Response) {

  cookies().delete('jwt')

  return NextResponse.json({ message: "Remove Cookie" })
}

