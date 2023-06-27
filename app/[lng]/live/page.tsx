import React from "react";
import HomeBanner from "@/components/HomePage/HomeBanner";
import ContentService from "@contentfulClient";
import ListCardsSection from "@/components/ListCardsSection";
import UpcomingFightCard from "@/components/UpcomingFightCard";
import { liveSections } from "@/utils/statics";
import { yellowLiveStreamIcon } from "@/assets/images";
import { useTranslation } from "../../i18n";
import LiveHandler from "./components/LiveHandler";

interface Props {
  params: {
    lng: string;
  };
}

export default async function page({ params: { lng } }: Props) {
  const [upComingFights, live, advertisements] = await Promise.all([
    ContentService.instance.getEntriesByType("upComingFights", lng),
    ContentService.instance.getEntriesByType("live", lng),
    ContentService.instance.getEntriesByType("advertisements", lng),
  ]);
  const { t } = await useTranslation(lng, "home-page");

  return (
    <>
      <HomeBanner upComingFights={upComingFights} />
      <ListCardsSection
        icon={yellowLiveStreamIcon}
        title={t("upcomingFightsTitle")}
      >
        {upComingFights.map((item: any) => (
          <UpcomingFightCard key={item.sys.id} data={item} />
        ))}
      </ListCardsSection>

      <LiveHandler
        advertisements={advertisements}
        liveVideos={live}
        filteringList={liveSections}
      />
    </>
  );
}
