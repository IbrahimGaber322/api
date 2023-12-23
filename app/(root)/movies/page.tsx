"use client";
import Image from "next/image";
import {
  Button,
  Flex,
  CircularProgress,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchMovies, fetchUsers } from "../../api";
import PostCard from "@/components/cards/PostCard";
import Pagination from "@/components/Pagination";
import User from "@/types/usertype";
import UserCard from "@/components/cards/UserCard";
import styles from "../../../components/css_modules/root.module.css";
import Movie from "@/types/movieType";
import MovieCard from "@/components/cards/MovieCard";

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const { isLoading, error, data }: { isLoading: any; error: any; data: any } =
    useQuery("Movies", async () => fetchMovies);
  console.log(data);
  const allMovies: Movie[] = data?.results;
  const pagesNumber = Math.ceil(allMovies?.length / 10);
  const movies = allMovies?.slice((page - 1) * 10, page * 10);
  console.log(movies);
  return (
    <main>
      <Flex
        direction="column"
        minHeight="100vh"
        gap={4}
        width={{ base: "90%", md: "70%" }}
        mx="auto"
      >
        <Flex mt={5} justifyContent="center">
          <Text color="white" fontSize="30px" fontWeight="700">
            Users
          </Text>
        </Flex>

        {isLoading ? (
          <Flex justifyContent={"center"}>
            <CircularProgress isIndeterminate color="blue" />
          </Flex>
        ) : (
          <SimpleGrid minChildWidth="300px" spacing="40px" p={4}>
            {movies?.map((movie: Movie) => (
              <MovieCard
                title={movie.original_title}
                poster_path={movie.poster_path}
                id={movie.id}
                adult={movie.adult}
                backdrop_path={movie.backdrop_path}
                genre_ids={movie.genre_ids}
                original_language={movie.original_language}
                original_title={movie.original_title}
                overview={movie.overview}
                popularity={movie.popularity}
                release_date={movie.release_date}
                video={movie.video}
                vote_average={movie.vote_average}
                vote_count={movie.vote_count}
              />
            ))}
          </SimpleGrid>
        )}
        <Flex mt="auto" justifyContent="center">
          <Pagination page={page} setPage={setPage} pagesNumber={pagesNumber} />
        </Flex>
        <a style={{ marginBottom: 4 }} className={`${styles.button}`} href="/">
          Go back to homepage.
        </a>
      </Flex>
    </main>
  );
}
