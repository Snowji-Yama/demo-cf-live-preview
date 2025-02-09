import Link from "next/link";

export interface CharacterCardProps {
  id: string;
  name: string;
  image: string;
  slug: string;
}

const CharacterCard = (props: CharacterCardProps) => {
  const { name, image, slug } = props;

  return (
    <Link href={`/${slug}`}>
      <img
        className="w-full h-full object-cover rounded-lg opacity-30 transition-opacity duration-500 hover:opacity-100"
        src={image}
        alt={name}
      />
    </Link>
  );
};

export default CharacterCard;
