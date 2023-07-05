import React from "react";
import ContentService from "@contentfulClient";
import { FreeLatestVideos } from "../../../../src/@types/generic";
import TvHandler from "@/components/TvHandler";
import { tvSections } from "@/utils/statics";
import VideoPlayerSection from "../components/VideoPlayerSection";

export const revalidate = 10;

interface Props {
  params: { lng: string; id: string };
}

async function page({ params: { lng, id } }: Props) {
  const [freeLatestVideos, advertisements, entryData] = await Promise.all([
    ContentService.instance.getEntriesByType<FreeLatestVideos>(
      "freeLatestVideos",
      lng
    ),
    ContentService.instance.getEntriesByType("advertisements", lng),
    ContentService.instance.getEntryById(id, lng),
  ]);

  return (
    <>
      <VideoPlayerSection data={entryData} />
      <TvHandler
        advertisements={advertisements}
        freeLatestVideos={freeLatestVideos}
        filteringList={tvSections}
      />
    </>
  );
}
export default page;
