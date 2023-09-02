import {
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + " ...";
  }
};

const PostCard = ({
  title,
  body,
  id,
}: {
  title: string;
  body: string;
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

          <Text py="2">{truncateText(body, 100)}</Text>
        </CardBody>

        <CardFooter>
          <Link href={`/posts/${id}`}>
            <Button variant="solid" colorScheme="blue">
              View Post
            </Button>
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default PostCard;
