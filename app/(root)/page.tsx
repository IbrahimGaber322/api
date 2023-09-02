"use client";
import Image from "next/image";
import CreatePost from "@/components/forms/CreatePost";
import { Button, Flex, CircularProgress, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchPosts } from "../api";
import PostCard from "@/components/cards/PostCard";
import Pagination from "@/components/Pagination";

export default function Home() {
  const [createPost, setCreatePost] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const { isLoading, error, data }: { isLoading: any; error: any; data: any } =
    useQuery("Posts", () => fetchPosts);
  const pagesNumber = Math.ceil(data?.length / 10);

  const posts = data?.slice((page - 1) * 10, page * 10);
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
          <Button colorScheme="blue" onClick={() => setCreatePost(!createPost)}>
            Create a Post
          </Button>
        </Flex>

        {createPost && <CreatePost />}
        {isLoading ? (
          <Flex justifyContent={"center"}>
            <CircularProgress isIndeterminate color="blue" />
          </Flex>
        ) : (
          <SimpleGrid minChildWidth="300px" spacing="40px" p={4}>
            {posts?.map((post: any) => (
              <PostCard title={post.title} body={post.body} id={post.id} />
            ))}
          </SimpleGrid>
        )}
        <Flex mt="auto" justifyContent="center">
          <Pagination page={page} setPage={setPage} pagesNumber={pagesNumber} />
        </Flex>
      </Flex>
    </main>
  );
}
