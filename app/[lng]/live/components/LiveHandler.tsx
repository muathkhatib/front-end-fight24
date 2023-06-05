"use client";
import React from "react";
import UpcomingFightCard from "@/components/UpcomingFightCard";
import ListCardsSection from "@/components/ListCardsSection";
import AdvertisementSection from "@/components/AdvertisementSection";

function LiveHandler({ liveVideos, advertisements, filteringList }: any) {
  const videosFilterHandler = ({ type }: { type: string }) => {
    const videosCards = liveVideos
      .filter(({ fields }: any) => {
        // @ts-ignore
        const { matchType }: string[] = fields;
        return (matchType.toLowerCase() as string) === type.toLowerCase();
      })
      .map((item: any) => (
        <UpcomingFightCard key={item.sys.id} data={item.fields} />
      ));
    return videosCards.length > 0 ? videosCards : null;
  };

  return (
    <>
      {filteringList.slice(0, 1).map((e: string) => {
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
      <AdvertisementSection data={advertisements[1].fields} />

      {filteringList.slice(1).map((e: string) => {
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
  );
}

export default LiveHandler;
