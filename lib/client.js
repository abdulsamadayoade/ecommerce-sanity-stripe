import { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = new SanityClient({
  projectId: "5g8ipcca",
  dataset: "production",
  apiVersion: "2022-07-17",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const imageUrlFor = (source) => builder.image(source);
