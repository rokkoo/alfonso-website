import { useCallback } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Nav from '../ui/Nav';
import Footer from '../../sections/Footer';

interface Props {
  children: React.ReactNode;
  showNav: boolean;
  title: string;
  name: string;
  content: string;
}

export default function BaseLayout({
  children,
  showNav,
  title,
  name,
  content,
}: Props) {
  const renderHead = useCallback(() => {
    return (
      <Head>
        <title>{title}</title>
        <meta name={name} content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    );
  }, [title, name, content]);

  return (
    <Box justifyContent="center" display="flex" mx={['8', '10%']}>
      <Box minH="full" w={['100%', '700px']}>
        {renderHead()}
        {showNav && <Nav />}
        <Box as="main" mt={['10%', '12']} h="full">
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
