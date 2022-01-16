import type { GetStaticProps, NextPage } from 'next';
import { Heading, Text } from '@chakra-ui/react';

import BaseLayout from '../src/components/layout/BaseLayout';
import BlogSection from '../src/sections/BlogSection';
import { getPostsFromMdx } from '../src/lib/getPotsFromMdx';
import RemarkText from '../src/components/ui/Text/RemarkText';
import { Post } from '../src/components/layout/PostLayout';

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
        fontSize={['4xl', '5xl']}
      >
        Posts
      </Heading>
      <Text fontSize="large">
        La idea de esta sección es documentar, compartir lo que voy aprendiendo
        y creando.
      </Text>
      <Text mt="4" fontSize="large">
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
