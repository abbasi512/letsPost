import NextAuth , {type NextAuthOptions} from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from "@/lib/prisma";
// @ts-ignore
import { compare } from "bcrypt";

export const options :NextAuthOptions ={
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60 * 30,
      },
      providers: [
        CredentialsProvider({
          credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" },
          },
          async authorize(credentials) {
            const { email, password } = credentials ?? {};
            if (!email || !password) {
              throw new Error("Missing email or password");
            }
          
            const user = await prisma.user.findUnique({
              where: {
                email: email.toLowerCase(),
              },
            });
          
            if (!user || user.password !== password) {
              throw new Error("Invalid email or password");
            }
          
            return user as any;
          }
        }),
      ],
}