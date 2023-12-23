"use client";
import Image from "next/image";
import { Button, Flex, CircularProgress, SimpleGrid ,Text } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchUsers } from "../../api";
import PostCard from "@/components/cards/PostCard";
import Pagination from "@/components/Pagination";
import User from "@/types/usertype";
import UserCard from "@/components/cards/UserCard";
import styles from "../../../components/css_modules/root.module.css"

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const { isLoading, error, data }: { isLoading: any; error: any; data: any } =
    useQuery("Users", () => fetchUsers);
  const allUsers:User[] = data?.users;
  const pagesNumber = Math.ceil(allUsers?.length / 10);
  console.log(allUsers);
  const users = allUsers?.slice((page - 1) * 10, page * 10);
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
          <Text color="white" fontSize="30px" fontWeight="700" >Users</Text>
        </Flex>

     
        {isLoading ? (
          <Flex justifyContent={"center"}>
            <CircularProgress isIndeterminate color="blue" />
          </Flex>
        ) : (
          <SimpleGrid minChildWidth="300px" spacing="40px" p={4}>
            {users?.map((user: User) => (
              <UserCard title={`${user.firstName} ${user.lastName}`} image={user.image} id={user?.id} />
            ))}
          </SimpleGrid>
        )}
        <Flex mt="auto" justifyContent="center">
          <Pagination page={page} setPage={setPage} pagesNumber={pagesNumber} />
        </Flex>
        <a style={{marginBottom:4}} className={`${styles.button}`} href="/">Go back to homepage.</a>
      </Flex>
    </main>
  );
}
