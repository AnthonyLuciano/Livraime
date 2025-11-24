import { addressSchema } from "@/types/validators/address.schema";
import z from "zod";

export type Address = z.infer<typeof addressSchema>;
