import React from "react";
import HomeBanner from "@/components/HomePage/HomeBanner";
import TicketCard from "./components/TicketCard";
import ContentService from "../../../src/utils/content-service";

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const [tickets] = await Promise.all([
    ContentService.instance.getEntriesByType("tickets"),
  ]);
  return (
    <>
      <HomeBanner />
      <div className="container mb-8">
        <h3 className="my-12 text-5xl font-black">Nachricht</h3>
        <div className="flex flex-col items-center">
          <h5 className="text-base-yellow mb-8">AKTUELL</h5>
          {tickets.length > 0 &&
            tickets.map((item: any) => (
              <TicketCard lng={lng} key={item.sys.id} data={item.fields} />
            ))}
        </div>
      </div>
    </>
  );
}
