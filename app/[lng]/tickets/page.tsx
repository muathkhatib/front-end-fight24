import React from "react";
import HomeBanner from "@/components/HomePage/HomeBanner";
import TicketCard from "./components/TicketCard";
import ContentService from "@contentfulClient";

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const [tickets, upComingFights] = await Promise.all([
    ContentService.instance.getEntriesByType("tickets"),
    ContentService.instance.getEntriesByType("upComingFights", lng),
  ]);
  return (
    <>
      <HomeBanner upComingFights={upComingFights} />
      <div className="container mb-8">
        <h3 className="my-12 text-5xl font-black">Nachricht</h3>
        <div className="flex flex-col items-center">
          <h5 className="text-base-yellow mb-8">AKTUELL</h5>
          {tickets.length > 0 &&
            tickets.map((item: any) => (
              <TicketCard lng={lng} key={item.sys.id} data={item} />
            ))}
        </div>
      </div>
    </>
  );
}
