"use client";
import React from "react";
import FreeLatestVideosCard from "@/components/FreeLatestVideosCard";
import ListCardsSection from "@/components/ListCardsSection";
import AdvertisementSection from "@/components/AdvertisementSection";
import { useSearchParams } from "next/navigation";

function TvHandler({
  freeLatestVideos,
  advertisements,
  filteringList,
  lng,
}: any) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  const videosFilterHandler = ({ type }: { type: string }) => {
    const videosCards = freeLatestVideos
      .filter(({ fields }: any) => {
        // @ts-ignore
        const { matchType }: string[] = fields;
        return (matchType[0].toLowerCase() as string) === type.toLowerCase();
      })
      .map((item: any) => (
        <FreeLatestVideosCard key={item.sys.id} data={item} />
      ));
    return videosCards.length > 0 ? videosCards : null;
  };

  return (
    <>
      {searchQuery ? (
        <>
          {/* @ts-ignore */}
          <AdvertisementSection data={advertisements[0].fields} />
          {filteringList
            .filter(
              // @ts-ignore
              (e: string) => e.toLowerCase() === searchQuery.toLowerCase()
            )
            .map((e: string) => {
              const videos = videosFilterHandler({ type: e.toLowerCase() });
              return (
                videos && (
                  <ListCardsSection key={e} title={e}>
                    {videos}
                  </ListCardsSection>
                )
              );
            })}
        </>
      ) : (
        <>
          {filteringList.slice(0, 2).map((e: string) => {
            const videos = videosFilterHandler({ type: e });
            return (
              videos && (
                <ListCardsSection key={e} title={e}>
                  {videos}
                </ListCardsSection>
              )
            );
          })}
          {/* @ts-ignore */}
          <AdvertisementSection data={advertisements[0].fields} />

          {filteringList.slice(2).map((e: string) => {
            const videos = videosFilterHandler({ type: e });
            return (
              videos && (
                <ListCardsSection key={e} title={e}>
                  {videos}
                </ListCardsSection>
              )
            );
          })}
        </>
      )}
    </>
  );
}

export default TvHandler;
