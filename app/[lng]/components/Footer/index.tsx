import React from "react";
import {
  youtubeIcon,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  phoenixBudoshopLogo,
  blackLogo,
} from "../../assets/images";
import Link from "next/link";
import Image from "next/image";

const socialMediaList: { icon: string; url: string; alt: string }[] = [
  {
    icon: youtubeIcon,
    url: "https://www.youtube.com",
    alt: "youtube",
  },
  {
    icon: instagramIcon,
    url: "https://www.instagram.com",
    alt: "Instagram",
  },
  {
    icon: facebookIcon,
    url: "https://www.facebook.com",
    alt: "Facebook",
  },
  {
    icon: twitterIcon,
    url: "https://www.twitter.com",
    alt: "Twitter",
  },
];

const pagesList: { url: string; title: string }[] = [
  {
    url: "impressum",
    title: "Impressum",
  },
  {
    url: "datenschutz",
    title: "Datenschutz",
  },
  {
    url: "jugendschutz",
    title: "Jugendschutz",
  },
  {
    url: "kontaktiere-uns",
    title: "Kontaktiere uns",
  },
];
const Footer = () => {
  return (
    <footer className="w-screen bg-base-yellow flex items-center flex-col pb-[75px] footer">
      <div className="mt-16">
        <h1 className="text-base-black text-5xl font-black">Folgen Sie uns</h1>
      </div>
      <div className="flex items-center justify-between my-16">
        {socialMediaList.map(({ icon, url, alt }) => (
          <Link
            key={`${url}-${alt}`}
            href={url}
            className="mx-4 w-[70px] h-[70px]"
          >
            <Image src={icon} alt={alt} />
          </Link>
        ))}
      </div>
      <div>
        <h1 className="text-dark-blue text-2xl italic">Bereitgestellt von</h1>
      </div>

      <Link
        href="https://phoenix-budoshop.de/"
        className="mb-8 w-[315px] h-[74px]"
      >
        <Image
          className="object-contain"
          src={phoenixBudoshopLogo}
          alt={"Phoenix Budoshop Logo"}
        />
      </Link>

      <Link href="/" className="w-[236px] h-[70px]">
        <Image
          className="object-contain"
          src={blackLogo}
          alt={"Fight24 Logo"}
        />
      </Link>
      <div className="flex xs:flex-col lg:flex-row items-center">
        {pagesList.map(({ url, title }) => (
          <Link key={title} href={url} className="mx-4 text-base-black">
            {title}
          </Link>
        ))}
      </div>
      <p className="mt-4 text-base-black">
        2023 &copy; Alle Rechte vorbehalten.
      </p>
    </footer>
  );
};

export default Footer;
