import React from "react";
import ContentService from "@contentfulClient";
import HomeBanner from "@/components/HomePage/HomeBanner";
import { tvSections } from "@/utils/statics";

import BuyTicket from "../components/BuyTicket";

interface Props {
  params: { lng: string; id: string };
}

async function page({ params: { lng, id } }: Props) {
  const [entryData, upComingFights] = await Promise.all([
    ContentService.instance.getEntryById(id, lng),
    ContentService.instance.getEntriesByType("upComingFights", lng),
  ]);
  return (
    <div>
      <HomeBanner upComingFights={upComingFights} />
      <BuyTicket data={entryData} />
    </div>
  );
}

export default page;
