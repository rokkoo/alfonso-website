import React from 'react';
import { Text } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

const RemarkText: React.FC<Props> = ({ children }) => {
  return (
    <Text
      as="span"
      color="white"
      _light={{ color: 'black' }}
      fontWeight="semibold"
    >
      {children}
    </Text>
  );
};
export default RemarkText;
