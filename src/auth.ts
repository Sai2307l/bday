import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "saathwika" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Credentials:", credentials);
        if (!credentials) {
          throw new Error("Credentials are required");
        }
        const { username, password } = credentials;
        if (username !== "saathwika" || password !== "password") {
          throw new Error("Invalid credentials");
        }
        const user = {
          id: "1",
          name: "Saathwika",
          email: "dsaathwika20@gmail.com",
        };
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (user) {
        session.user.id = user.id;
        session.user.name = user.name ?? "Saathwika";
        session.user.email = user.email ?? "dsaathwika20@gmail.com";
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name ?? "Saathwika";
        token.email = user.email ?? "dsaathwika20@gmail.com";
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 10 * 60, // 10 minutes
    updateAge: 10 * 60, // 10 minutes
  },
  secret: process.env.NEXTAUTH_SECRET,
});
