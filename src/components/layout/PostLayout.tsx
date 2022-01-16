import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import Image from 'next/image';
import Code from '../ui/Code/index';
import RemarkText from '../ui/Text/RemarkText';
import BaseLayout from './BaseLayout';
import { GoQuote } from 'react-icons/go';

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const H1 = ({ children }: any) => {
  return (
    <Heading
      as="h2"
      bgGradient="linear(to-r, #ffff80, #ff80bf)"
      _light={{
        bgGradient: 'linear(to-r, #ff80bf, #9580ff)',
      }}
      bgClip="text"
      mb={4}
      fontSize={['4xl', '5xl']}
    >
      {' '}
      {children}
    </Heading>
  );
};
const H2 = ({ children }: any) => {
  return (
    <Heading
      as="h2"
      pt="6"
      mb={4}
      fontSize={['xl']}
      _dark={{ color: 'gray.100' }}
      fontFamily="Bellota"
    >
      {children}
    </Heading>
  );
};

const P = ({ children }: any) => {
  return <Text pb="4">{children}</Text>;
};

const Blockquote = ({ children }: any) => {
  return (
    <Flex as="blockquote" bg="gray.900" pt="4" px="4" mt="4" mb="8">
      <Box mr="2">
        <GoQuote />
      </Box>
      {children}
    </Flex>
  );
};

const components: MDXProviderComponentsProp = {
  img: ResponsiveImage,
  code: Code,
  h1: H1,
  h2: H2,
  strong: RemarkText,
  p: P,
  blockquote: Blockquote,
};

export interface Post {
  title: string;
  slug: string;
  date: string;
  name: string;
  content: string;
}

interface Props {
  children: React.ReactNode;
  data: Post;
}

export default function Post({ children, data }: Props) {
  return (
    <MDXProvider components={components}>
      <BaseLayout
        showNav={true}
        title={`Alfonso Lasa - ${data.title}`}
        name={data.name}
        content={data.content}
      >
        {children}
      </BaseLayout>
    </MDXProvider>
  );
}
