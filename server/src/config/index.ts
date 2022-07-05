import dotenv from "dotenv";

dotenv.config();

export const DB = process.env.DB!;
export const PORT = parseInt(process.env.PORT!);
export const secret = process.env.SECRET!;
