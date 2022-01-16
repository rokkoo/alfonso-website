import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import BaseLayout from '../src/components/layout/BaseLayout';
import RemarkText from '../src/components/ui/Text/RemarkText';
import Careers from '../src/sections/Careers';

import homeLogo from '../src/assets/home.svg';
import { Post } from '../src/components/layout/PostLayout';
import { getPostsFromMdx } from '../src/lib/getPotsFromMdx';
import BlogSection from '../src/sections/BlogSection';

interface Props {
  postMetadata: Post[];
}

const Home: NextPage<Props> = ({ postMetadata }) => {
  return (
    <BaseLayout
      showNav={true}
      title="Alfonso Lasa"
      name="Alfonso Lasa website"
      content="Website de Alfonso Lasa, donde se comparte información relacionada con el mundo del desarrollo de software"
    >
      <Heading
        bgGradient="linear(to-r, #ff80bf, #9580ff)"
        _light={{
          bgGradient: 'linear(to-r, #ff80bf, #9580ff)',
        }}
        bgClip="text"
        mb={4}
        fontSize={['4xl', '5xl']}
      >
        Aprendiendo, creando y compartiendo
      </Heading>
      <Flex flexDirection={['column', 'row']}>
        <Box mr="6">
          <Text>
            Hola! mi nombre es <RemarkText>Alfonso,</RemarkText> tengo 26 años y
            soy desarrollador de software.
          </Text>
          <br />
          <Text>
            Llevo programando de manera profesional desde el año{' '}
            <RemarkText>2018</RemarkText>.
          </Text>
          <br />
          <Text>
            Actualmente trabajo como desarrollador en{' '}
            <RemarkText>React Native</RemarkText> en{' '}
            <RemarkText>
              <Link href="https://www.rebellionpay.com" passHref>
                Rebellion pay.
              </Link>
            </RemarkText>
          </Text>
          <br />
          <Text>
            Amante del <RemarkText>darkmode,</RemarkText> el código y la
            tecnología. Cuando no estoy trabajando o programando, me gusta ver
            pelicula/series hacer crossfit y{' '}
            <RemarkText>comer mucho.</RemarkText>
          </Text>
        </Box>
        <Box justifyContent="center" mt={['4', '0']}>
          <Image alt="Website logo" src={homeLogo} width={540} />
        </Box>
      </Flex>

      <Careers />

      <Heading
        mt="14"
        as="h4"
        fontSize="2xl"
        color="gray.50"
        _light={{ color: 'black' }}
      >
        Posts
      </Heading>
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

export default Home;
