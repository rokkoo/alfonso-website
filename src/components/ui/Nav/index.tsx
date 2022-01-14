import { useCallback } from 'react';
import {
  Box,
  BoxProps,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BsFillSunFill } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { motion } from 'framer-motion';

export const MotionBox = motion<BoxProps>(Box);

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const renderThemeIcon = useCallback(() => {
    if (colorMode === 'light') {
      return <MdDarkMode fill="gray.400" />;
    }

    return <BsFillSunFill />;
  }, [colorMode]);

  return (
    <Box
      as="nav"
      mt="6"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        p="4"
        boxShadow="0px 8px 20px rgb(0 0 0 / 19%)"
        background="gray.900"
        _light={{
          background: 'gray.50',
        }}
        borderRadius="8"
        w="sm"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading
          as="h1"
          color="gray.100"
          fontSize="3xl"
          fontFamily="Bellota"
          _light={{
            color: 'gray.700',
          }}
        >
          <Link href="/">Alfonso</Link>
        </Heading>
        <Grid
          flex={1}
          templateColumns="repeat(2, 60px)"
          fontWeight="semibold"
          justifyContent="flex-end"
          alignItems="center"
          _light={{
            color: 'gray.700',
          }}
        >
          <Text fontSize="lg" _hover={{ color: 'gray.50' }}>
            <Link href="/blog">Blog</Link>
          </Text>
          <MotionBox whileTap={{ scale: 0.9 }}>
            <Button onClick={toggleColorMode}>{renderThemeIcon()}</Button>
          </MotionBox>
        </Grid>
      </Flex>
    </Box>
  );
};

export default Nav;
