import { createClient } from "contentful";
import { config } from "dotenv";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTENTFUL_SPACE_ID: string;
      CONTENTFUL_ACCESS_TOKEN: string;
    }
  }
}

config();

export default class ContentService {
  static get instance() {
    return new ContentService();
  }

  client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  async getEntriesByType<T>(type: string) {
    return (
      await this.client.getEntries<any>({
        content_type: type,
      })
    ).items;
  }
}
