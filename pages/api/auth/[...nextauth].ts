import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // !!! Should be stored in .env file.
    Auth0Provider({
      clientId: `${process.env.AUTH_CLIENTID}`,
      clientSecret: `${process.env.AUTH_CLIENTSECRET}`,
      issuer: `${process.env.AUTH_ISSUER}`,
    }),
  ],
  secret: `UItTuD1HcGXIj8ZfHUswhYdNd40Lc325R8VlxQPUoR0=`,
};
export default NextAuth(authOptions);
