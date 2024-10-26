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
  term: z.enum(["1", "2"]),
  rollNum: z.coerce.number(),
  major: z.enum(["it", "civil", "archi", "ep", "ec", "mc"]),
  gender: z.enum(["male", "female"]),
});

export const createSubjectFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  code: z.string().min(1, { message: "Code is required" }),
  year: z.enum(["1", "2", "3", "4", "5", "6"]),
  term: z.enum(["1", "2"]),
  major: z.enum(["it", "civil", "archi", "ep", "ec", "mc"]),
});

export const createTeacherFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
  major: z.enum(["it", "civil", "archi", "ep", "ec", "mc"]),
  gender: z.enum(["male", "female"]),
  role: z.enum(["teacher", "admin"]).default("teacher"),
});

export const createTeacherSubjectFormSchema = z.object({
  year: z.enum(["1", "2", "3", "4", "5", "6"]),
  term: z.enum(["1", "2"]),
  subjects: z.array(z.any()).nonempty(),
});

export const editTimetableFormSchema = z.object({
  major: z
    .string()
    .max(30, { message: "Major must be less than 50 characters" }),
  majorCode: z
    .string()
    .max(20, { message: "Major Code must be less than 20 characters" }),
});

export const createExamFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  year: z.enum(["1", "2", "3", "4", "5", "6"]),
  term: z.enum(["1", "2"]),
  major: z.enum(["it", "civil", "archi", "ep", "ec", "mc"]),
  description: z.string().max(1000),
  date: z.date(),
  time: z.string().min(1),
  examType: z.enum(["final", "tutorial", "assignment"]),
});

export const createEventFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string(),
  date: z.date(),
  time: z.string().min(1, { message: "Time is required" }),
});

export const studentTeacherLoginForm = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  password: z.string(),
});
