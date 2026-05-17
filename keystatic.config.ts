import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        publishedDate: fields.date({
          label: "Published Date",
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Growth Marketing", value: "growth-marketing" },
            { label: "Demand Gen", value: "demand-gen" },
            { label: "Paid Media", value: "paid-media" },
            { label: "SEO", value: "seo" },
            { label: "PLG / SLG", value: "plg-slg" },
          ],
          defaultValue: "growth-marketing",
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
