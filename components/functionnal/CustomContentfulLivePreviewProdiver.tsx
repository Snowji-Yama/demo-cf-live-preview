"use client";

import { ReactNode } from "react";

import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";

export interface ContentfulLivePreviewProviderProps {
  children: ReactNode;
  isEnabled: boolean;
}

const CustomContentfulLivePreviewProdiver = (props: ContentfulLivePreviewProviderProps) => {
  const { children, isEnabled } = props;

  return (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableInspectorMode={isEnabled}
      enableLiveUpdates={isEnabled}
    >
      {children}
    </ContentfulLivePreviewProvider>
  );
};

export default CustomContentfulLivePreviewProdiver;
