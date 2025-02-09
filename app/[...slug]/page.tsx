import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { getCFClient } from "@/lib/contentfulClient";

import CustomContentfulLivePreviewProdiver from '@/components/functionnal/CustomContentfulLivePreviewProdiver';
import CharacterRenderer from '@/components/functionnal/CharacterRenderer'

export interface CharacterPageProps {
  params: Promise<{
    slug: string | string[];
  }>;
}

const CharacterPage = async (props: CharacterPageProps) => {
  const { params } = props;
  const { slug } = await params;

  const { isEnabled } = await draftMode();
  const cfClient = getCFClient(isEnabled);

  const entries = await cfClient.getEntries({
    content_type: "characters",
    "fields.slug[all]": slug
  });
  const entry = entries.items[0];

  if (!entry) {
    notFound();
  }

  return (
    <CustomContentfulLivePreviewProdiver
      isEnabled={isEnabled}
    >
      <CharacterRenderer entry={entry} />
    </CustomContentfulLivePreviewProdiver>
  );
};

export default CharacterPage;
