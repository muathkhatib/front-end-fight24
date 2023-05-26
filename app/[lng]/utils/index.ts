import FreeLatestVideosCard from "@/components/FreeLatestVideosCard";

// interface videosFilterHandlerProps {
//   videosList: any[];
//   matchType: string;
// }

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

// export function videosFilterHandler({
//   videosList,
//   matchType,
// }: videosFilterHandlerProps) {
//   const filterResult = videosList
//     .filter((entry) => entry.fields.matchType[0].toLowerCase() === matchType)
//     .map((item) => (
//       <FreeLatestVideosCard key={item.sys.id} data={item.fields} />
//     ));
//   return filterResult;
// }
