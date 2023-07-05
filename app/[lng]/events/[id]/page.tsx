import React from "react";
import EventItem from "../components/EventItem";
import ContentService from "@contentfulClient";
import FreeLatestVideosCard from "@/components/FreeLatestVideosCard";
import ListCardsSection from "@/components/ListCardsSection";

export const revalidate = 10;

async function EventPage({ params: { id, lng } }: any) {
  const [freeLatestVideos, entryById] = await Promise.all([
    ContentService.instance.getEntriesByType("freeLatestVideos", lng),
    // Get Event by id
    ContentService.instance.getEntryById(id),
  ]);

  return (
    <div className="mb-28">
      <EventItem data={entryById} />
      <ListCardsSection title="TV">
        {freeLatestVideos && freeLatestVideos.length > 0
          ? freeLatestVideos
              .slice(0, 10)
              .map((item: any) => (
                <FreeLatestVideosCard
                  key={item.sys.id}
                  data={item}
                  showTypeName={true}
                />
              ))
          : null}
      </ListCardsSection>
    </div>
  );
}

export default EventPage;
