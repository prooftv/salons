import { handleAuth } from "@auth0/nextjs-auth0";

console.log("Base URL: ", process.env.AUTH0_BASE_URL);

export default handleAuth();
