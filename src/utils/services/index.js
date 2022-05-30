import sanityClient from "@sanity/client";

export const apiURL = (query) => {
  const SANITY_API_URL = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;

  return SANITY_API_URL;
};

export default sanityClient({
  projectId: "3fct4gna",
  dataset: "production",
  useCdn: true,
});
