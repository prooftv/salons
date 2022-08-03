import {
  createClient,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";

import createImageUrlBuilder from "@sanity/image-url";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import ReactTooltip from "react-tooltip";

import { config } from "@utils/configs";

// import sanityClient from "@sanity/client";

// const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
// const SANITY_PROJECT_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;

// export const apiURL = (query) => {
//   const SANITY_API_URL = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;

//   return SANITY_API_URL;
// };

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const imageBuilder = (source) =>
  createImageUrlBuilder(config).image(source);

export const usePreviewSubscriptionHook = createPreviewSubscriptionHook(config);

export const useCurrentUser = createCurrentUserHook(config);

export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);

export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
});

export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;

export default sanityClient;

// export default sanityClient({
//   projectId: `${SANITY_PROJECT_ID}`,
//   dataset: `${SANITY_PROJECT_DATASET}`,
//   apiVersion: "2021-08-31",
//   useCdn: true,
// });
