import Movie from "@/types/movieType";
import {
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Box,
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

const baseLink = "https://www.themoviedb.org/t/p/original";

const MovieCard = ({
  title,
  poster_path,
  id,
  vote_average,
  popularity,
  overview,
  backdrop_path
}: Movie) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="elevated"
      opacity={0.9}
      position="relative"
      className="movie-parent"
    >
      <Stack>
        <CardBody>
          <Heading textAlign="center" size="md">
            {title}
          </Heading>
          <img
            src={baseLink + poster_path}
            width={"100%"}
            height={200}
            alt={`${title} Image`}
          />
          {/* <Text py="2">{truncateText(body, 100)}</Text> */}
        </CardBody>
      </Stack>
      <Box className="movie-desc">
        <Heading textAlign="center" size="md">
          {title}
        </Heading>
        <Text fontSize={20} color="black">Rating: <span style={{color:"green"}}>{vote_average}</span></Text>
        <Text fontSize={20} color="black">Popularity: <span style={{color:"blue"}}>{popularity}</span></Text>
        <Text fontSize={20} color="black">Overview: <span style={{color:"purple"}}>{overview}</span></Text>
        <img
            src={baseLink + backdrop_path}
            width={"100%"}
            height={200}
            alt={`${title} Image`}
          />
      </Box>
    </Card>
  );
};

export default MovieCard;
