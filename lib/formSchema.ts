import { z } from "zod";

export const createStudentFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
  year: z.enum(["1", "2", "3", "4", "5", "6"]),
  term: z.enum(["First", "Second"]),
  major: z.enum(["It", "Civil", "Archi", "Ep", "Ec", "Mc"]),
  gender: z.enum(["Male", "Female"]),
});
