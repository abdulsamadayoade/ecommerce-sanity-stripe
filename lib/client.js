import { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = new SanityClient({
  projectId: "",
  dataset: "",
  apiVersion: "",
  useCdn: true,
  token: ""
});
