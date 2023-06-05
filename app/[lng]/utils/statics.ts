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
  "Talk",
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
  title: "NOOR vs KHALID",
  timeAndTypeOfCompetition: "Full Night",
  matchType: ["Royal FC"],
};
