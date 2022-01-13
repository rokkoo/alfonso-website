import { Flex, Link } from '@chakra-ui/react';
import { BsTwitter, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <Flex as="footer" w="full" justifyContent="center" mt="12" mb="8">
      <Link
        href="https://stackoverflow.com/"
        target="_blank"
        mr="4"
        rel="noreferrer"
      >
        <BsTwitter fill="#1DA1F2" size="20" />
      </Link>
      <Link href="https://stackoverflow.com/" target="_blank" rel="noreferrer">
        <BsGithub fill="white" size="20" />
      </Link>
    </Flex>
  );
};

export default Footer;
