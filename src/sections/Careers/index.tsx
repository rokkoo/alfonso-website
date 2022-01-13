import { Box, Heading } from '@chakra-ui/react';
import Career from './components/Career';

const Careers = () => {
  return (
    <Box>
      <Heading
        mt="12"
        mb="4"
        as="h4"
        fontSize="2xl"
        color="gray.50"
        _light={{ color: 'black' }}
      >
        Carrera
      </Heading>
      <Career
        role="React native developer"
        company="Rebellion Pay"
        website_url="https://www.rebellionpay.com"
        from="Enero 2020"
        to="Actualidad"
        place="remote"
      />
      <Career
        role="Frontend developer"
        company="Ceit"
        website_url="https://www.ceit.es"
        from="Febrero 2018"
        to="Enero 2020"
        place="San Sebastián"
      />
    </Box>
  );
};

export default Careers;
