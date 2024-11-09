import React from "react";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

const JWT_SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string;

export const getUserRole = (): string | null => {
  const token = cookies().get("jwt");

  if (!token || !JWT_SECRET_KEY) return null;

  try {
    const userData: any = jwt.verify(token.value, JWT_SECRET_KEY);

    return userData.type;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

export const getUserData = (
  role: "teacher" | "student"
): {
  id: string;
  email: string;
  name: string;
  image: string;
  type: string;
} => {
  const token = cookies().get("jwt");

  console.log("Token", token, "env: ", JWT_SECRET_KEY);

  if (!token || !JWT_SECRET_KEY) {
    redirect("/login");
  }

  let route = "/";

  try {
    const userData: any = jwt.verify(token.value, JWT_SECRET_KEY);

    if (userData.type !== role) {
      console.log("Redirect to ", userData.type);
      redirect(`/${userData.type}`);
    }

    route = `/${userData.type}`;

    return userData;
  } catch (error) {
    console.log("error", error);
    redirect(route);
  }
};

const Test = () => {
  return <div>Test</div>;
};

export default Test;
