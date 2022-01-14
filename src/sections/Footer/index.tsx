import { Flex, Link, useColorMode } from '@chakra-ui/react';
import { BsTwitter, BsGithub } from 'react-icons/bs';

const Footer = () => {
  const { colorMode } = useColorMode();

  const isLight = colorMode === 'light';

  return (
    <Flex as="footer" w="full" justifyContent="center" mt="12" mb="8">
      <Link
        href="https://twitter.com/alfonso_dev"
        target="_blank"
        mr="4"
        rel="noreferrer"
      >
        <BsTwitter fill="#1DA1F2" size="20" />
      </Link>
      <Link href="https://github.com/rokkoo" target="_blank" rel="noreferrer">
        <BsGithub fill={isLight ? '#000' : 'white'} size="20" />
      </Link>
    </Flex>
  );
};

export default Footer;
