import type { GetStaticProps, NextPage } from 'next';

import { promises as fs } from 'fs';
import path from 'path';

import { Heading, Text } from '@chakra-ui/react';
import BaseLayout from '../src/components/layout/BaseLayout';
import RemarkText from '../src/components/ui/Text/RemarkText';
import Link from 'next/link';
import Careers from '../src/sections/Careers';

interface Post {
  title: string;
  slug: string;
  date: string;
}

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
        bgGradient="linear(to-r, #80ffea, #8aff80)"
        _light={{
          bgGradient: 'linear(to-r, #ff80bf, #9580ff)',
        }}
        bgClip="text"
        mb={4}
        fontSize="4xl"
      >
        Aprendiendo, creando y compartiendo
      </Heading>
      <Text>
        Hola! mi nombre es <RemarkText>Alfonso,</RemarkText> tengo 26 años y soy
        desarrollador de software.
      </Text>
      <br />
      <Text>
        Llevo programando de manera profesional desde el año{' '}
        <RemarkText>2018</RemarkText>.
      </Text>
      {/* <br />
      <Text>
        Mi carrera comenzo como frontend developer en el centro tecnológico
        Ceit, donde relamente aprendi y experimente lo que es el mundo del
        desarrollo de software.
      </Text> */}
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
      <Careers />
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postDirectory = path.join(process.cwd(), 'pages/posts');
  const postFilenames = await fs.readdir(postDirectory);

  const postModules = await Promise.all(
    postFilenames.map(async (p) => import(`./posts/${p}`))
  );

  const postMetadata = postModules.map((m) => m.metadata);

  return {
    props: {
      postMetadata,
    },
  };
};

export default Home;
