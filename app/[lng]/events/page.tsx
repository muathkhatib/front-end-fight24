// @ts-nocheck
import React from "react";
import HomeBanner from "@/components/HomePage/HomeBanner";
import UpcomingFightCard from "@/components/UpcomingFightCard";
import FreeLatestVideosCard from "@/components/FreeLatestVideosCard";
import ListCardsSection from "@/components/ListCardsSection";
import AdvertisementSection from "@/components/AdvertisementSection";

import { yellowLiveStreamIcon } from "@/assets/images";
import { useTranslation } from "../../i18n";
import ContentService from "@contentfulClient";
import { FreeLatestVideos, UpComingFights } from "../../../src/@types/generic";

interface Props {
  params: {
    lng: string;
  };
}

export default async function page({ params: { lng } }: Props) {
  const [
    upcomingFights,
    freeLatestVideos,
    pageVeranstaltungen,
    upComingFights,
    advertisements,
  ] = await Promise.all([
    ContentService.instance.getEntriesByType<UpComingFights>(
      "upComingFights",
      lng
    ),
    ContentService.instance.getEntriesByType<FreeLatestVideos>(
      "freeLatestVideos",
      lng
    ),
    ContentService.instance.getEntriesByType("pageveranstaltungen", lng),
    ContentService.instance.getEntriesByType("upComingFights", lng),
    ContentService.instance.getEntriesByType("advertisements", lng),
  ]);
  const { t } = await useTranslation(lng, "veranstaltungen-page");

  const sections = (
    pageVeranstaltungen[0]?.fields?.sectionDates as string[]
  )?.sort((a, b) => b.localeCompare(a));

  const videosFilterHandler = ({ date }: { date: string }) => {
    const videosCards: any = freeLatestVideos
      .filter(({ fields }) => {
        const { eventDate } = fields;
        return (eventDate as string)?.split("-")[0] === date;
      })
      .map((item) => <FreeLatestVideosCard key={item.sys.id} data={item} />);
    return videosCards.length > 0 ? videosCards : null;
  };

  return (
    <>
      <HomeBanner upComingFights={upComingFights} />
      <ListCardsSection
        icon={yellowLiveStreamIcon}
        title={t("upcomingFightsTitle")}
      >
        {upcomingFights.map((item) => (
          <UpcomingFightCard key={item.sys.id} data={item} />
        ))}
      </ListCardsSection>
      {sections?.length > 0 &&
        sections.slice(0, 1).map(
          (itemDate: any) =>
            videosFilterHandler({ date: itemDate }) && (
              <ListCardsSection key={itemDate} title={itemDate}>
                {videosFilterHandler({ date: itemDate })}
              </ListCardsSection>
            )
        )}

      <AdvertisementSection
        data={advertisements}
        positionName="Events Page Center"
      />
      {sections?.length > 0 &&
        sections.slice(2).map(
          (itemDate: any) =>
            videosFilterHandler({ date: itemDate }) && (
              <ListCardsSection key={itemDate} title={itemDate}>
                {videosFilterHandler({ date: itemDate })}
              </ListCardsSection>
            )
        )}
    </>
  );
}
