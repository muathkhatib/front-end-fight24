interface NavLink {
  title: string;
  to: string;
}

interface Link {
  title: string;
  to: string;
  nestedNav?: NavLink[];
}

export const tvSections: string[] = [
  "Armdrücken",
  "BJJ",
  "Boxen",
  "Doku",
  "Karate",
  "Kickboxen",
  "MMA",
  "Muay Thai",
  "Pro Wrestling",
  "Ringen",
  "Show",
];

export const liveSections: string[] = [
  "Am Beliebtesten",
  "TV",
  "Zuletzt Hinzugefügt",
  "Top Heis",
  "Boxen",
  "MMA",
  "Royal FC",
  "Auch Beliebt",
  "Pro Wrestling",
];

export const navbarTvLinks: Link[] = [
  {
    title: "TV",
    to: "tv",
    nestedNav: [
      {
        title: "Armdrücken",
        to: "tv?q=armdrücken",
      },
      {
        title: "BJJ",
        to: "tv?q=bjj",
      },
      {
        title: "Boxen",
        to: "tv?q=boxen",
      },
      {
        title: "Doku",
        to: "tv?q=doku",
      },
      {
        title: "Karate",
        to: "tv?q=karate",
      },
      {
        title: "Kickboxen",
        to: "tv?q=kickboxen",
      },
      {
        title: "MMA",
        to: "tv?q=mma",
      },
      {
        title: "Muay Thai",
        to: "tv?q=muay thai",
      },
      {
        title: "Pro Wrestling",
        to: "tv?q=pro wrestling",
      },
      {
        title: "Ringen",
        to: "tv?q=ringen",
      },
      {
        title: "Show",
        to: "tv?q=show",
      },
      {
        title: "Talk",
        to: "tv?q=talk",
      },
    ],
  },
  {
    title: "Veranstaltungen",
    to: "events",
  },
  {
    title: "Nachricht",
    to: "news",
  },
  {
    title: "Eintrittskarten",
    to: "tickets",
  },
];

export const staticCardObject = {
  metadata: {
    tags: [],
  },
  sys: {
    space: {
      sys: {
        type: "Link",
        linkType: "Space",
        id: "i3zd4wzyxxuz",
      },
    },
    id: "1k9G9BQs5UFNL3j5wrmm0f",
    type: "Entry",
    createdAt: "2023-05-27T12:37:56.891Z",
    updatedAt: "2023-06-05T00:11:04.921Z",
    environment: {
      sys: {
        id: "master",
        type: "Link",
        linkType: "Environment",
      },
    },
    revision: 4,
    contentType: {
      sys: {
        type: "Link",
        linkType: "ContentType",
        id: "freeLatestVideos",
      },
    },
    locale: "en-US",
  },
  fields: {
    previewImage: {
      metadata: {
        tags: [],
      },
      sys: {
        space: {
          sys: {
            type: "Link",
            linkType: "Space",
            id: "i3zd4wzyxxuz",
          },
        },
        id: "7Ftz4FMXtdUlyvJjaugPWy",
        type: "Asset",
        createdAt: "2023-05-24T12:37:28.650Z",
        updatedAt: "2023-05-24T12:37:28.650Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 1,
        locale: "en-US",
      },
      fields: {
        title: "IMAGE-9",
        file: {
          url: "//images.ctfassets.net/i3zd4wzyxxuz/7Ftz4FMXtdUlyvJjaugPWy/3f95f734293cefd6f528f31f9cc51b06/IMAGE-9.jpg",
          details: {
            size: 26875,
            image: {
              width: 162,
              height: 164,
            },
          },
          fileName: "IMAGE-9.jpg",
          contentType: "image/jpeg",
        },
      },
    },
    tagColor: "#141414",
    tagName: "KO",
    tagTextColor: "#ffffff",
    championName: "ROYAL FC",
    title: "NOORISTANI vs ABID (2)",
    timeAndTypeOfCompetition: "Full Night",
    matchType: ["BJJ"],
    eventDate: "2022-06-15T00:00+03:00",
    price: 0,
  },
};
