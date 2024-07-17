import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/Database";
import User from "@/models/User";

export const authOption = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    //invoked in successfull sign in
    async signIn({ profile }) {
      //1. connect to database
      await connectDB();
      //2. check if the user exit
      const userExists = await User.findOne({ email: profile.email });
      //3. if not! add the user to database
      if (!userExists) {
        const userName = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          userName,
          image: profile.picture,
        });
      }
      //4. return true to allow sign in
      return true;
    },
    //modified the session object
    async session({ session }) {
      //1. get user from databse
      const user = await User.findOne({email: session.user.email})
      //2. assign the userid in the session
      session.user.id = user.id.toString();
      //3. return session
      return session;
    },
  },
};
