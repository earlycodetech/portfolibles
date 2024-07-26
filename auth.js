import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const {auth,handlers,signIn,signOut} = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRECT
        }),
    ],
})