import type { GetStaticProps, NextPage } from 'next';
import { Heading, Text } from '@chakra-ui/react';

import BaseLayout from '../src/components/layout/BaseLayout';
import BlogSection from '../src/sections/BlogSection';
import { getPostsFromMdx } from '../src/lib/getPotsFromMdx';
import RemarkText from '../src/components/ui/Text/RemarkText';

interface Post {
  title: string;
  slug: string;
  date: string;
}

interface Props {
  postMetadata: Post[];
}

const Blog: NextPage<Props> = ({ postMetadata }) => {
  return (
    <BaseLayout
      showNav={true}
      title="Alfonso Lasa"
      name="Alfonso Lasa website"
      content="Website de Alfonso Lasa, donde se comparte información relacionada con el mundo del desarrollo de software"
    >
      <Heading
        bgGradient="linear(135deg, #ffff80, #ff80bf)"
        _light={{
          bgGradient: 'linear(135deg, #ff80bf, #9580ff)',
        }}
        bgClip="text"
        fontSize="4xl"
      >
        Lista
      </Heading>
      <Text mt="4">
        Aquí veras una lista de mis posts. Podrás leer sobre{' '}
        <RemarkText> React, React Native, Javascript y más!</RemarkText>
      </Text>
      <BlogSection postMetadata={postMetadata} />
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postMetadata = await getPostsFromMdx();

  return {
    props: {
      postMetadata,
    },
  };
};

export default Blog;
