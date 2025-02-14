import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Document } from '@contentful/rich-text-types';

export interface CharacterProps {
  id: string;
  name: string;
  slug: string;
  image: string;
  shortDescription: Document;
}

const Character = (props: CharacterProps) => {
  const { name, image, shortDescription } = props;

  return (
    <div className="h-[90%] grid grid-cols-4 gap-20 pt-3 pb-20 px-20">
      <div className="col-start-2 flex flex-col items-center justify-center gap-20">
        <span className="text-8xl font-extrabold">{name}</span>
        <div>{documentToReactComponents(shortDescription)}</div>
      </div>
      <img className="col-start-3 w-full h-full object-cover rounded-lg" src={image} alt={name} />
    </div>
  );
};

export default Character;