"use client";
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { PostValidation } from "@/lib/validations/post";
import { createPost } from "@/app/api";

const CreatePost = () => {
  const toast = useToast();
  const handleSubmit = async (
    values: { author: string; title: string; content: string },
    resetForm: Function
  ) => {
    const createdPost: any = await createPost(values);
    if (createdPost?.title) {
      toast({
        title: "Success",
        description: "Post successfully created.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      resetForm();
    } else {
      toast({
        title: "Failed",
        description: "Failed to create post.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Box
      bg="white"
      p={6}
      rounded="md"
      w={"100%"}
      mx="auto"
      maxWidth={1000}
      height={"fit-content"}
    >
      <Formik
        initialValues={{
          author: "",
          title: "",
          content: "",
        }}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        validationSchema={PostValidation}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl isInvalid={!!errors.author && touched.author}>
                <FormLabel htmlFor="author">Author</FormLabel>
                <Field
                  as={Input}
                  id="author"
                  name="author"
                  type="text"
                  variant="filled"
                />
                <FormErrorMessage>{errors.author}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.title && touched.title}>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Field
                  as={Input}
                  id="title"
                  name="title"
                  type="text"
                  variant="filled"
                />
                <FormErrorMessage>{errors.title}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.content && touched.content}>
                <FormLabel htmlFor="content">Content</FormLabel>
                <Field
                  as={Textarea}
                  id="content"
                  name="content"
                  type="text"
                  variant="filled"
                  size="lg"
                  resize="vertical"
                />
                <FormErrorMessage>{errors.content}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full">
                Post
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CreatePost;
