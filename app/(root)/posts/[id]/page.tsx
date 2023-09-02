"use client";
import { fetchPost } from "@/app/api";
import {
  Flex,
  Text,
  Box,
  Button,
  CircularProgress,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import Link from "next/link";
import { useQuery } from "react-query";

const page = ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;
  const { isLoading, error, data }: { isLoading: any; error: any; data: any } =
    useQuery("Post", () => fetchPost(Number(params.id)));

  return (
    <>
      {isLoading ? (
        <Flex
          height="100vh"
          width="100vw"
          justifyContent={"center"}
          alignItems="center"
          bgColor="white"
        >
          <CircularProgress isIndeterminate color="blue" />
        </Flex>
      ) : (
        <Box
          minHeight="100vh"
          width="100vw"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            opacity={0.9}
            bgColor="white"
            borderRadius={10}
            direction="column"
            p={10}
            width={{ base: "90%", md: "70%" }}
            gap={5}
          >
            <Text
              fontWeight={700}
              wordBreak="break-word"
              mt={5}
              textAlign="center"
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              {data?.post?.title}
            </Text>
            <Text
              wordBreak="break-word"
              textAlign="center"
              fontSize={{ base: "xl", md: "2xl" }}
            >
              {data?.post?.body}
            </Text>
            <Text fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
              {data?.comments?.length} Comments:
            </Text>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              {data?.comments?.map((comment: any) => (
                <Box key={comment.id}>
                  <Text fontWeight={700}>{comment.name}:</Text>
                  <Text wordBreak="break-word">{comment.body}</Text>
                </Box>
              ))}
            </VStack>

            <Flex justifyContent="center" mt="auto" mb={5}>
              <Link href="/">
                <Button colorScheme="blue">Return to home</Button>
              </Link>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default page;
