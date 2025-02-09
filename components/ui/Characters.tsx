import CharacterCard, { CharacterCardProps } from "@/components/ui/CharacterCard";

export interface CharactersProps {
  characters: CharacterCardProps[];
}

const Characters = (props: CharactersProps) => {
  const { characters } = props;

  const charactersRender = characters.map((character) => {
    return (
      <CharacterCard
        key={character.id}
        id={character.id}
        name={character.name}
        image={character.image}
        slug={character.slug}
      />
    );
  });

  return (
    <div className="h-[90%] grid grid-cols-4 gap-20 pt-3 pb-20 px-20">
      {charactersRender}
    </div>
  );
};

export default Characters;
