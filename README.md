# API Website

This is an api website built using Next.js and Chakra UI. It allows users to create and read blog posts. In this README file, you will find instructions on how to set up and run the project, as well as information about the design decisions, libraries, and tools used.

## Table of Contents

- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Design Decisions](#design-decisions)
- [Libraries and Tools](#libraries-and-tools)

## Dependencies

The project uses the following dependencies:

- "@chakra-ui/icons": "^2.1.0"
- "@chakra-ui/next-js": "^2.1.5"
- "@chakra-ui/react": "^2.8.0"
- "@emotion/react": "^11.11.1"
- "@emotion/styled": "^11.11.0"
- "@fontsource/open-sans": "^5.0.11"
- "@fontsource/raleway": "^5.0.8"
- "@types/node": "20.5.7"
- "@types/react": "18.2.21"
- "@types/react-dom": "18.2.7"
- "formik": "^2.4.3"
- "framer-motion": "^10.16.2"
- "next": "13.4.19"
- "react": "18.2.0"
- "react-dom": "18.2.0"
- "react-query": "^3.39.3"
- "typescript": "5.2.2"
- "yup": "^1.2.0"

## Getting Started

To set up and run the project, follow these steps:

1. Clone the repository or download the source code.

2. Make sure you have Node.js installed on your machine. You can download it from the official website: [https://nodejs.org ↗](https://nodejs.org)

3. Open a terminal and navigate to the project directory.

4. Install the project dependencies by running the following command:

   ````
   npm install
   ```

   ````

5. Once the dependencies are installed, start the development server with the following command:

   ```
   npm run dev
   ```

6. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to see the blog website in action.

## Design Decisions

- **Next.js**: Next.js is a React framework that provides server-side rendering, static site generation, and other powerful features out of the box. It was chosen for this project to optimize performance and improve SEO.

- **Chakra UI**: Chakra UI is a popular component library for React applications. It offers a set of customizable and accessible UI components that help speed up development and maintain a consistent design system.

- **Formik and Yup**: Formik and Yup are used for form handling and validation. Formik simplifies the process of building forms in React, while Yup provides a flexible and powerful way to define validation schemas.

- **React Query**: React Query is a library for managing remote data fetching and caching. It simplifies making asynchronous API calls and provides hooks for handling loading, error, and data states.

- **Framer Motion**: Framer Motion is a library for creating smooth animations and transitions in React applications. It adds a layer of interactivity and enhances the user experience.

## Libraries and Tools

- **TypeScript**: TypeScript is a typed superset of JavaScript that adds static types to the language. It improves code quality, catches potential errors at compile-time, and enhances developer productivity.

- **@chakra-ui/icons**: Chakra UI's icon library provides a wide range of SVG icons that can be easily integrated into the application.

- **@chakra-ui/next-js**: This package provides Next.js-specific utilities and configurations for Chakra UI, allowing seamless integration between the two libraries.

- **@emotion/react** and **@emotion/styled**: These packages enable styling components using CSS-in-JS in combination with Chakra UI. Emotion provides a flexible and efficient way to write styles directly within the components.

- **@fontsource/open-sans** and **@fontsource/raleway**: These packages provide easy integration of the Open Sans and Raleway fonts into the application. They ensure a consistent typography style across different platforms.

These are the main libraries and tools used in the project. Feel free to explore the source code to learn more about how they are utilized to build the blog website.
