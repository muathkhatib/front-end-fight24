import React from "react";
import HomeBanner from "@/components/HomePage/HomeBanner";
import UpcomingFightCard from "@/components/UpcomingFightCard";
import FreeLatestVideosCard from "@/components/FreeLatestVideosCard";
import ListCardsSection from "@/components/ListCardsSection";
import { yellowLiveStreamIcon } from "@/assets/images";
import { useTranslation } from "../../i18n";
import ContentService from "../../../src/utils/content-service";
import { FreeLatestVideos, UpComingFights } from "../../../src/@types/generic";

interface Props {
  params: {
    lng: string;
  };
}

export default async function page({ params: { lng } }: Props) {
  const [upcomingFights, freeLatestVideos, pageVeranstaltungen] =
    await Promise.all([
      ContentService.instance.getEntriesByType<UpComingFights>(
        "upComingFights"
      ),
      ContentService.instance.getEntriesByType<FreeLatestVideos>(
        "freeLatestVideos"
      ),
      ContentService.instance.getEntriesByType("pageveranstaltungen"),
    ]);
  const { t } = await useTranslation(lng, "veranstaltungen-page");

  const sections = (
    pageVeranstaltungen[0]?.fields?.sectionDates as string[]
  )?.sort((a, b) => b.localeCompare(a));

  const videosFilterHandler = ({ date }: { date: string }) => {
    const videosCards = freeLatestVideos
      .filter(({ fields }) => {
        const { eventDate } = fields;
        return (eventDate as string)?.split("-")[0] === date;
      })
      .map((item) => (
        <FreeLatestVideosCard key={item.sys.id} data={item.fields} />
      ));
    return videosCards.length > 0 ? videosCards : null;
  };

  return (
    <>
      <HomeBanner />
      <ListCardsSection
        icon={yellowLiveStreamIcon}
        title={t("upcomingFightsTitle")}
      >
        {upcomingFights.map((item) => (
          <UpcomingFightCard key={item.sys.id} data={item.fields} />
        ))}
      </ListCardsSection>
      {sections?.length > 0 &&
        sections.map(
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
