"use client";

import { Entry } from "contentful";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";

import { mapCharacter } from "@/lib/mapper";

import Character from "@/components/ui/Character";

export interface CharacterRendererProps {
  entry: Entry;
}

const CharacterRenderer = (props: CharacterRendererProps) => {
  const { entry } = props;

  const updatedEntry = useContentfulLiveUpdates(entry);
  const character = mapCharacter(updatedEntry);

  return (
    <Character
      id={character.id}
      name={character.name}
      slug={character.slug}
      image={character.image}
      shortDescription={character.shortDescription}
    />
  );
};

export default CharacterRenderer;
