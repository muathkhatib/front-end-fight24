import React from "react";
import HomeBanner from "@/components/HomePage/HomeBanner";
import SubscribeSection from "@/components/SubscribeSection";
import AdvertisementSection from "@/components/AdvertisementSection";
import NewsItem from "./components/NewsItem";
import { useTranslation } from "../../i18n";
import ContentService from "../../../src/utils/content-service";
import { News } from "../../../src/@types/generic";

interface Props {
  params: {
    lng: string;
  };
}

async function page({ params: { lng } }: Props) {
  const [news, advertisements] = await Promise.all([
    ContentService.instance.getEntriesByType<News>("news"),
    ContentService.instance.getEntriesByType("advertisements"),
  ]);
  const { t } = await useTranslation(lng, "veranstaltungen-page");

  return (
    <>
      <HomeBanner />
      <div className="container">
        <h1 className="my-12 text-5xl font-black">Nachricht</h1>
        <div className="flex justify-between flex-wrap py-7">
          {news.slice(0, 4).map((item) => (
            <NewsItem key={item.sys.id} data={item} />
          ))}
          <SubscribeSection lng={lng} />
          {news.slice(4, 8).map((item) => (
            <NewsItem key={item.sys.id} data={item} />
          ))}
          {/* @ts-ignore */}
          <AdvertisementSection data={advertisements[1].fields} />

          {news.slice(8).map((item) => (
            <NewsItem key={item.sys.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default page;
