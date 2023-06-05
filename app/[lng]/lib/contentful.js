import { createClient } from "contentful";

export const client = createClient({
  space: "i3zd4wzyxxuz",
  accessToken: "Yh4v8NL5ZgVaVAQDt6fIUzmGb00ZoDj31kjcjGRt5io",
});

// Retrieve the list of blog posts from Contentful
export const getBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: "testArticle",
  });
  console.log({ response });
  return response.items;
};
