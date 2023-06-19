import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/icons8-bullseye-48.png";
import meh from "../assets/icons8-meh-48.png";
import thumbsUp from "../assets/icons8-82-70.png";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) {
    return null;
  }

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "thumbsUp", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
