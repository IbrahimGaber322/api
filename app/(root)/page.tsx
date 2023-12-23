"use client";
import styles from "../../components/css_modules/root.module.css";
import {
  Button,
  Flex,
  CircularProgress,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  return (
    <main>
      <Flex
        direction="column"
        minHeight="100vh"
        gap={4}
        width={{ base: "90%", md: "70%" }}
        mx="auto"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="white" fontSize={30} fontFamily="cursive">
          Welcome to my blog, where different APIS meet.
        </Text>
        <Flex gap={2} alignItems="center" flexDirection="column">
          <a className={`${styles.button}`} href="/posts">
            Go to posts from json placeholder api.
          </a>
          <a className={`${styles.button}`} href="/users">
            Go to users from json dummyjson api.
          </a>
          <a className={`${styles.button}`} href="/movies">
            Go to movies from moviedb api.
          </a>
          <a
            className={`${styles.button}`}
            target="_blank"
            href="https://countries-ghr6.onrender.com/"
          >
            Go to countries api.
          </a>
        </Flex>
      </Flex>
    </main>
  );
}
