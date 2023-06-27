"use client";
import React, { FC, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface Props {
  data: any;
}
const options = {
  renderText: (text: string) => {
    // @ts-ignore
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

const NewsPageContent: FC<Props> = ({ data }) => {
  return (
    <div className="mt-4">
      <div>
        {documentToReactComponents(data?.fields?.articleContent, options)}
      </div>
    </div>
  );
};

export default NewsPageContent;
