import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
   
  ],
  pages: {
    signIn: '/login',
  }
};
export default NextAuth(authOptions);
