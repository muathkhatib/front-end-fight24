import React from "react";
import HomeBanner from "@/components/HomePage/HomeBanner";
import ContentService from "@contentfulClient";
import { FreeLatestVideos } from "../../../src/@types/generic";
import TvHandler from "@/components/TvHandler";
import { tvSections } from "@/utils/statics";

export default async function page({ params: { lng } }: any) {
  const [freeLatestVideos, advertisements, upComingFights] = await Promise.all([
    ContentService.instance.getEntriesByType<FreeLatestVideos>(
      "freeLatestVideos",
      lng
    ),
    ContentService.instance.getEntriesByType("advertisements", lng),
    ContentService.instance.getEntriesByType("upComingFights", lng),
  ]);

  return (
    <>
      <HomeBanner upComingFights={upComingFights} />
      <TvHandler
        advertisements={advertisements}
        freeLatestVideos={freeLatestVideos}
        filteringList={tvSections}
      />
    </>
  );
}
