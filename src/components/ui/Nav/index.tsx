import { useCallback } from 'react';
import {
  Box,
  BoxProps,
  Button,
  Flex,
  Grid,
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
        borderRadius="8"
        w="sm"
        color="gray.50"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          color="gray.100"
          bgGradient="linear(to-r, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
        >
          <Link href="/">Alfonso</Link>
        </Text>
        <Grid
          flex={1}
          templateColumns="repeat(2, 60px)"
          fontWeight="semibold"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Text fontSize="lg">
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
