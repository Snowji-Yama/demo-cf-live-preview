import { Entry } from 'contentful';

import { CharacterProps } from '@/components/ui/Character';
import { CharacterCardProps } from '@/components/ui/CharacterCard'

export const mapCharacter = (entry: Entry): CharacterProps => {
  return {
    id: entry.sys.id,
    name: entry.fields.name,
    slug: entry.fields.slug,
    // @ts-expect-error ignore undefined error, cf types not exported atm
    image: entry.fields.image.fields.file.url,
    shortDescription: entry.fields.shortDescription,
  } as CharacterProps;
}

export const mapCharacters = (entries: Entry[]): CharacterCardProps[] => {
  const charactersOrder = ["j", "v", "e", "c"];

  return entries
    .map((entry) => {
      return {
        id: entry.sys.id,
        name: entry.fields.name,
        // @ts-expect-error ignore undefined error, cf types not exported atm
        image: entry.fields.image.fields.file.url,
        slug: entry.fields.slug
      } as CharacterCardProps;
    })
    .sort((a, b) => {
      const indexA = charactersOrder.indexOf(a.name[0].toLowerCase());
      const indexB = charactersOrder.indexOf(b.name[0].toLowerCase());

      return (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB);
    }) as CharacterCardProps[];
}