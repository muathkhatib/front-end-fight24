import React from "react";
import ContentService from "../../../../src/utils/content-service";
import EventItem from "../components/EventItem";

export default async function EventPage({ params: { id } }: any) {
  // Get Event by id
  const data = await ContentService.instance.getEntry(id);

  return (
    <div>
      <EventItem data={data} />
    </div>
  );
}
