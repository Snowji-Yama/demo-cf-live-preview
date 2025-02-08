import { ContentfulClientApi, createClient } from "contentful";

const client = createClient({
  space: process.env.CF_SPACE || "",
  accessToken: process.env.CF_DELIVERY_TOKEN || "",
  environment: process.env.CF_ENV
}).withoutUnresolvableLinks;

const previewClient = createClient({
  space: process.env.CF_SPACE || "",
  accessToken: process.env.CF_PREVIEW_TOKEN || "",
  environment: process.env.CF_ENV,
  host: "preview.contentful.com"
}).withoutUnresolvableLinks;

export const getCFClient = (draftMode: boolean): ContentfulClientApi<"WITHOUT_UNRESOLVABLE_LINKS"> => {
  return draftMode ? previewClient : client;
};
