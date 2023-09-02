import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";

const Pagination = ({
  page,
  setPage,
  pagesNumber,
}: {
  page: number;
  setPage: Function;
  pagesNumber: number;
}) => {
  const canPreviousPage: boolean = page - 1 !== 0;
  const canNextPage: boolean = page !== pagesNumber;
  return (
    <Flex justifyContent="space-between" m={4} alignItems="center">
      <Flex>
        <Tooltip label="First Page">
          <IconButton
            aria-label="first page"
            onClick={() => setPage(1)}
            isDisabled={!canPreviousPage}
            icon={<ArrowLeftIcon h={3} w={3} />}
            mr={4}
          />
        </Tooltip>
        <Tooltip label="Previous Page">
          <IconButton
            aria-label="previous page"
            onClick={() => setPage(page - 1)}
            isDisabled={!canPreviousPage}
            icon={<ChevronLeftIcon h={6} w={6} />}
          />
        </Tooltip>
      </Flex>

      <Flex alignItems="center">
        <Text color="white" textAlign="center" flexShrink="0" mx={4}>
          Page{" "}
          <Text color="white" fontWeight="bold" as="span">
            {page}
          </Text>{" "}
          of{" "}
          <Text color="white" fontWeight="bold" as="span">
            {pagesNumber}
          </Text>
        </Text>
      </Flex>

      <Flex>
        <Tooltip label="Next Page">
          <IconButton
            aria-label="next page"
            onClick={() => setPage(page + 1)}
            isDisabled={!canNextPage}
            icon={<ChevronRightIcon h={6} w={6} />}
          />
        </Tooltip>
        <Tooltip label="Last Page">
          <IconButton
            aria-label="last page"
            onClick={() => setPage(pagesNumber)}
            isDisabled={!canNextPage}
            icon={<ArrowRightIcon h={3} w={3} />}
            ml={4}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Pagination;
