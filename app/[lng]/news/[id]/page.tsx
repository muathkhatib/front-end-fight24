import React, { FC } from "react";
import ContentService from "@contentfulClient";

import { useTranslation } from "../../../i18n";
import ListCardsSection from "@/components/ListCardsSection";
import NewsCardItem from "@/components/NewsCardItem";
import FreeLatestVideosCard from "@/components/FreeLatestVideosCard";
import { dateHandler } from "@/utils";

import NewsPageContent from "./NewsPageContent";

export const revalidate = 10;

interface Props {
  params: {
    id: string;
    lng: string;
  };
}

interface entryByIdProps {
  sys: {
    contentType: {
      sys: {
        id: any;
      };
    };
  };
  fields: [
    {
      date: string | Date;
      image: {
        fields: {
          file: {
            url: string;
          };
          title: string;
        };
      };
      author: {
        fields: {
          authorName: string;
        };
      };
    }
  ];
}

async function page({ params: { id, lng } }: Props) {
  const { t } = await useTranslation(lng, "home-page");
  const [entryById, news, freeLatestVideos] = await Promise.all([
    // Get Event by id
    ContentService.instance.getEntryById<entryByIdProps>(id, lng),
    ContentService.instance.getEntriesByType("news", lng),
    ContentService.instance.getEntriesByType("freeLatestVideos", lng),
  ]);
  // @ts-ignore
  const { year, month, day } = dateHandler(entryById.fields.date);

  return (
    <>
      <div className="container mb-8">
        <span className="text-base-yellow text-2xl leading-[32px]">
          {day}.{month}.{year}
        </span>
        <h1 className="text-5xl font-black w-10/12 my-1">
          {(entryById.fields.title as string).toUpperCase()}
        </h1>
        <span className="text-2xl text-base-yellow font-light">
          {entryById.fields.subTitle as string}
        </span>
        {/* @ts-ignore */}
        {entryById.fields?.image?.fields.file.url && (
          <img
            className="w-full xs:h-[fit-content] lg:h-[722px] mt-5 object-contain"
            // @ts-ignore
            src={`https:${entryById.fields.image?.fields.file.url}`}
            //@ts-ignore
            alt={entryById.fields.image.fields.title}
          />
        )}
        <NewsPageContent data={entryById} />
        <div className="flex flex-col items-end">
          <div>
            <p className="text-2xl ">
              <span className="text-base-gray leading-[32px]">
                Artikel Autor:{" "}
              </span>
              {/* @ts-ignore */}
              {entryById?.fields?.author?.fields.authorName}
            </p>
            <p className="text-base-yellow text-2xl ">
              <span className="text-base-gray leading-[32px]">
                Letzte Aktualisierung:{" "}
              </span>
              {day}.{month}.{year}
            </p>
          </div>
        </div>

        <ListCardsSection
          title={t("newsTitle")}
          type="secondary"
          showAllUrl="/news"
        >
          {news.map((item) => (
            <NewsCardItem key={item.sys.id} data={item} />
          ))}
        </ListCardsSection>

        <ListCardsSection title="TV">
          {freeLatestVideos && freeLatestVideos.length > 0
            ? freeLatestVideos
                .slice(0, 10)
                .map((item: any) => (
                  <FreeLatestVideosCard
                    key={item.sys.id}
                    data={item}
                    showTypeName={true}
                  />
                ))
            : null}
        </ListCardsSection>
      </div>
    </>
  );
}

export default page;
