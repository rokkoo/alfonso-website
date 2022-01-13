import { Box, Flex, Heading, Text, Link } from '@chakra-ui/react';

interface Props {
  company: string;
  role: string;
  website_url: string;
  from: string;
  to: string;
  place: string;
}
const Career: React.FC<Props> = ({
  role,
  company,
  website_url,
  from,
  to,
  place,
}) => {
  return (
    <Box mt="8">
      <Heading
        as="h4"
        fontSize="md"
        color="gray.50"
        _light={{ color: 'black' }}
        fontFamily="Raleway"
      >
        {role}
      </Heading>
      <Flex my="2">
        <Text
          mr="2"
          color="gray.50"
          borderBottomWidth="1px"
          borderBottomColor="gray.50"
          borderBottomStyle="solid"
          _light={{ color: 'black', borderBottomColor: 'black' }}
        >
          <Link
            href={website_url}
            target="_blank"
            rel="noreferrer"
            _hover={{ borderBottomWidth: 0 }}
          >
            {company}
          </Link>
        </Text>
        {'•'}
        <Text ml="2" textTransform="capitalize">
          {place}
        </Text>
      </Flex>
      <Flex>
        <Text mr="2">{from}</Text> -<Text ml="2">{to}</Text>
      </Flex>
    </Box>
  );
};

export default Career;
