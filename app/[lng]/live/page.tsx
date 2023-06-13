import React from "react";
import HomeBanner from "@/components/HomePage/HomeBanner";
import ContentService from "../../../src/utils/content-service";
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
  const [upcomingFights, live, advertisements] = await Promise.all([
    ContentService.instance.getEntriesByType("upComingFights"),
    ContentService.instance.getEntriesByType("live"),
    ContentService.instance.getEntriesByType("advertisements"),
  ]);
  const { t } = await useTranslation(lng, "home-page");

  return (
    <>
      <HomeBanner />
      <ListCardsSection
        icon={yellowLiveStreamIcon}
        title={t("upcomingFightsTitle")}
      >
        {upcomingFights.map((item) => (
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
