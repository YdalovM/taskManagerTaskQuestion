import { NOTE_CARD_TYPE_LIST } from "@/widgets/noteCard/config/const";
import type { INoteCardFull } from "@/widgets/noteCard/model";

import image from "@/assets/kotiki-na-avu-240423-07.jpg";

export const NOTE_CARD_MOCK: INoteCardFull[] = [
  {
    id: 1,
    description: "Drinking water isn't just about quenching ",
    type: NOTE_CARD_TYPE_LIST.TEXT,
    idication: "1",
    gradientBorderType: "complex",
    isEdit: false,
  },
  {
    id: 2,
    description: "Drinking water isn't just about quenching aaa bbbb",
    type: NOTE_CARD_TYPE_LIST.FULL_IMAGE,
    image: <img src={image} alt="NoteCardLeftImage" />,
    idication: "10",
    positionImage: "BOTTOM",
    gradientBorderType: "complex",
    isEdit: false,
  },
  {
    id: 3,
    description: "quenching your thirst. It plays a cru",
    type: NOTE_CARD_TYPE_LIST.LEFT_IMAGE,
    image: <img src={image} alt="NoteCardLeftImage" />,
    idication: "10",
    gradientBorderType: "complex",
    isEdit: false,
  },
  {
    id: 4,
    description:
      "Drinking water isn't just about quenching your thirst. It plays a crucial role in about quenching bbbbbbbb ",
    type: NOTE_CARD_TYPE_LIST.TEXT,
    idication: "100",
    gradientBorderType: "complex",
    isEdit: false,
  },
  {
    id: 5,
    description:
      "Drinking water isn't just about quenching your thirst. It plays a cru bbb",
    type: NOTE_CARD_TYPE_LIST.LEFT_IMAGE,
    image: <img src={image} alt="NoteCardLeftImage" />,
    idication: "10",
    gradientBorderType: "complex",
    isEdit: false,
  },
  {
    id: 6,
    description: "Drinking water isn't just about quenching aaa bbbb",
    type: NOTE_CARD_TYPE_LIST.FULL_IMAGE,
    image: <img src={image} alt="NoteCardLeftImage" />,
    idication: "10",
    positionImage: "TOP",
    gradientBorderType: "complex",
    isEdit: false,
  },
  {
    id: 7,
    description:
      "Drinking water isn't just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your ",
    type: NOTE_CARD_TYPE_LIST.TEXT,
    idication: "+10",
    gradientBorderType: "complex",
    isEdit: false,
  },
  {
    id: 8,
    description:
      "Drinking water isn't just about quenching your thirst. It plays a crucial role in  in maintaining the a bbbbbbbbb",
    type: NOTE_CARD_TYPE_LIST.LEFT_IMAGE,
    image: <img src={image} alt="NoteCardLeftImage" />,
    idication: "10",
    gradientBorderType: "complex",
    isEdit: false,
  },
  {
    id: 9,
    description:
      "Drinking water isn't just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your body a bbbbbbbbb",
    type: NOTE_CARD_TYPE_LIST.LEFT_IMAGE,
    image: <img src={image} alt="NoteCardLeftImage" />,
    idication: "10",
    gradientBorderType: "complex",
    isEdit: false,
  },
];
