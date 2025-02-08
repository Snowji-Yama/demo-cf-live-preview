import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

// import {
//   useContentfulLiveUpdates,
//   ContentfulLivePreviewProvider
// } from "@contentful/live-preview/react";

import { getCFClient } from "@/lib/contentfulClient";
import { mapCharacter } from "@/lib/mapper";

import Character from "@/components/Character";

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

  if (!entries.items[0]) {
    notFound();
  }

  // const updatedEntry = useContentfulLiveUpdates(entries.items[0]);

  const character = mapCharacter(entries.items[0]);

  return (
    // <ContentfulLivePreviewProvider
    //   locale="en-US"
    //   enableInspectorMode={isEnabled}
    //   enableLiveUpdates={isEnabled}
    // >
      <Character
        id={character.id}
        name={character.name}
        slug={character.slug}
        image={character.image}
        shortDescription={character.shortDescription}
      />
    // </ContentfulLivePreviewProvider>
  );
};

export default CharacterPage;
