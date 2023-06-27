// @ts-nocheck
import React from "react";
import HomeBanner from "@/components/HomePage/HomeBanner";
import SubscribeSection from "@/components/SubscribeSection";
import AdvertisementSection from "@/components/AdvertisementSection";
import NewsItem from "./components/NewsItem";
import { useTranslation } from "../../i18n";
import ContentService from "@contentfulClient";
import { News } from "../../../src/@types/generic";

interface Props {
  params: {
    lng: string;
  };
}

async function page({ params: { lng } }: Props) {
  const [news, advertisements, upComingFights] = await Promise.all([
    ContentService.instance.getEntriesByType<News>("news", lng),
    ContentService.instance.getEntriesByType("advertisements", lng),
    ContentService.instance.getEntriesByType("upComingFights", lng),
  ]);
  const { t } = await useTranslation(lng, "veranstaltungen-page");

  return (
    <>
      <HomeBanner upComingFights={upComingFights} />
      <div className="container">
        <h1 className="my-12 text-5xl font-black">Nachricht</h1>
        <div className="flex justify-between flex-wrap py-7">
          {news.slice(0, 4).map((item) => (
            <NewsItem key={item.sys.id} data={item} lng={lng} />
          ))}
          <SubscribeSection lng={lng} />
          {news.slice(4, 8).map((item) => (
            <NewsItem key={item.sys.id} data={item} lng={lng} />
          ))}
          <AdvertisementSection
            data={advertisements}
            positionName="News Menu Page Center"
          />

          {news.slice(8).map((item) => (
            <NewsItem key={item.sys.id} data={item} lng={lng} />
          ))}
        </div>
      </div>
    </>
  );
}

export default page;
