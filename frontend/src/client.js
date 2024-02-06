// file for connecting to sanity(backend)
import { SanityClient}  from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
require('dotenv').config();

export const client = SanityClient({
    projectId: process.env.REACT_APP_SNAITY_ID,
    dataset: "production",
    apiVersion: "2024-02-06",
    useCdn: true,
    token: process.env.REACT_APP_SNAITY_TOEKN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) =>builder.image(source)