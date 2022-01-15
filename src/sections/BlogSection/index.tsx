import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Post } from '../../components/layout/PostLayout';

interface Props {
  postMetadata: Post[];
}

const BlogSection: React.FC<Props> = ({ postMetadata }) => {
  const getDate = (date: string) => {
    return format(new Date(date), 'MMMM yyyy', {
      locale: es,
    });
  };

  return (
    <Box>
      {postMetadata.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post.slug} passHref>
          <Flex
            borderRadius="4"
            borderColor="gray.700"
            borderWidth="1px"
            py="4"
            px="6"
            my="6"
            boxShadow="0px 8px 20px rgb(0 0 0 / 19%)"
            _hover={{ backgroundColor: 'gray.700', color: 'gray.50' }}
            _light={{ borderColor: 'gray.300' }}
            justifyContent="space-between"
            fontWeight="bold"
            cursor="pointer"
          >
            <Text>{post.title}</Text>
            <Text>{getDate(post.date)}</Text>
          </Flex>
        </Link>
      ))}
    </Box>
  );
};

export default BlogSection;
