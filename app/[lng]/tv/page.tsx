import React from "react";
import HomeBanner from "@/components/HomePage/HomeBanner";
import ContentService from "../../../src/utils/content-service";
import { FreeLatestVideos } from "../../../src/@types/generic";
import TvHandler from "@/components/TvHandler";
import { tvSections } from "@/utils/statics";

export default async function page() {
  const [freeLatestVideos, advertisements] = await Promise.all([
    ContentService.instance.getEntriesByType<FreeLatestVideos>(
      "freeLatestVideos"
    ),
    ContentService.instance.getEntriesByType("advertisements"),
  ]);

  return (
    <>
      <HomeBanner />
      <TvHandler
        advertisements={advertisements}
        freeLatestVideos={freeLatestVideos}
        filteringList={tvSections}
      />
    </>
  );
}
