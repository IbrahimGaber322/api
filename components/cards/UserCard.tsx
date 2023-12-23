import {
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
const truncateText = (text: string, maxLength: number) => {
  if (text?.length <= maxLength) {
    return text;
  } else {
    return text?.slice(0, maxLength) + " ...";
  }
};

const UserCard = ({
  title,
  image,
  id,
}: {
  title: string;
  image: string;
  id: number;
}) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="elevated"
      opacity={0.9}
    >
      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>
          <img src={image} width={"100%"} height={200} alt={image} />
          {/* <Text py="2">{truncateText(body, 100)}</Text> */}
        </CardBody>

       
      </Stack>
    </Card>
  );
};

export default UserCard;
