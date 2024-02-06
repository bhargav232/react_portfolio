// filefor connecting to sanity(backend)
import  SanityClient  from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = SanityClient({
    projectId: "yhpfbu2r",
    dataset: "production",
    apiVersion: "2024-02-06",
    useCdn: true,
    token: "sk80AxqAya48clacTXGBgmZuoxdMP3oTGESAkHVTwOY85mJmYIoroRO1mKYjgvzEtrT1Eukkq2H5a9R92WIOexM0tP7AXQNgtM8ILmML69XhEKl2EssY87u0XmAaAFpDnngW4mnZkYQ8S7eRhViePyA1FKFI4zHkuQfTE7uZZfUZb4A6ceFg"
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
