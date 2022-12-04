import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "k9dm3coe",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: "skXmMYOyii1W2uKbs9DkBimmZIoawAoZSsZu6onmmzM7cKXrlMoSNGihuj8gyQa7FIVNpAs9dDOMhth3FhtOvvksEjpS18fgUzcFGoTotTXD4XMguRQkA0s5q1elLHzpSlaZYBRwk3uNjos8aAC4sQD9w3CyJzXXVXRBpLuwTEMDXDkF6MKX",

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
