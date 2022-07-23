import sanityClient from "@sanity/client";

const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const SANITY_PROJECT_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const apiURL = (query) => {
  const SANITY_API_URL = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;

  return SANITY_API_URL;
};

export default sanityClient({
  projectId: `${SANITY_PROJECT_ID}`,
  dataset: `${SANITY_PROJECT_DATASET}`,
  useCdn: true,
});
