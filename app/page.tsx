import { draftMode } from "next/headers";

import { getCFClient } from "@/lib/contentfulClient";
import { mapCharacters } from '@/lib/mapper';

import Characters from "@/components/Characters";

const HomePage = async () => {
  const { isEnabled } = await draftMode();
  const cfClient = getCFClient(isEnabled);

  const entries = await cfClient.getEntries({
    content_type: "characters"
  });
  const characters = mapCharacters(entries.items);

  return <Characters characters={characters} />;
};

export default HomePage;
