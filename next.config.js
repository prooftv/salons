/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const reactSvg = require("next-react-svg");
const path = require("path");

module.exports = withPlugins(
  [
    [
      reactSvg,
      {
        include: path.resolve(__dirname, "src/assets/svg"),
      },
    ],
  ],
  {
    swcMinify: true,
    reactStrictMode: true,
    images: {
      domains: ["cdn.sanity.io", "lh3.googleusercontent.com"],
      deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      // loader: "imgix", // Uncomment this line for STATIC EXPORT
      // path: "", // Uncomment this line for STATIC EXPORT
    },
    env: {
      production_type: "server", // Change variable to "static" for STATIC EXPORT
      GOOGLE_API_KEY: "AIzaSyDUcxMNnz5ofM1JUMQUb4mRFm25Lpxt5co&v=3",
      MAPBOX_TOKEN:
        "pk.eyJ1IjoicHJvb2Z0diIsImEiOiJja3R5Z3BmYm4wOWF4MzBwYzRucjdrZ3hzIn0.XV5_VzN2Lg7RA3d-sD55hw",
      AUTH0_SECRET:
        "9191842c6bac28d6fb447207015df6761c69b92c2d2d6876c676f55303311904",
      AUTH0_BASE_URL: "https://mrsalons.vercel.app/",
      AUTH0_ISSUER_BASE_URL: "https://mrsalons.us.auth0.com",
      AUTH0_CLIENT_ID: "efiukUliuhpfC7bxNCvrrH7W7qP1LKo6",
      AUTH0_CLIENT_SECRET:
        "dfibIjpKWO_YG6xCdTstEbYUu3ct1nwguGpGb6nfW8ctV2_NR3p_5bGknVB3sZBm",
    },
    // trailingSlash: true, // Uncomment this line for STATIC EXPORT
    webpack: (config) => {
      config.resolve.modules.push(path.resolve(__dirname));

      return config;
    },
  }
);
