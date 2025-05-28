import { ContentfulLivePreview } from "@contentful/live-preview";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { Document } from "@contentful/rich-text-types";

export interface CharacterProps {
  id: string;
  name: string;
  slug: string;
  image: string;
  shortDescription: Document;
}

const Character = (props: CharacterProps) => {
  const { id, name, image, shortDescription } = props;

  return (
    <div className="h-[90%] grid grid-cols-4 gap-20 pt-3 pb-20 px-20">
      <div className="col-start-2 flex flex-col items-center justify-center gap-20">
        <span
          {...ContentfulLivePreview.getProps({ entryId: id, fieldId: "name", locale: "en-US" })}
          className="text-8xl font-extrabold"
        >
          {name}
        </span>
        <div
          {...ContentfulLivePreview.getProps({
            entryId: id,
            fieldId: "shortDescription",
            locale: "en-US"
          })}
        >
          {documentToReactComponents(shortDescription)}
        </div>
      </div>
      <img className="col-start-3 w-full h-full object-cover rounded-lg" src={image} alt={name} />
    </div>
  );
};

export default Character;
