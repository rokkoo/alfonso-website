import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import Image from 'next/image';
import Code from '../ui/Code/index';
import Nav from '../ui/Nav';

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components: MDXProviderComponentsProp = {
  img: ResponsiveImage,
  code: Code,
};

interface Props {
  children: React.ReactNode;
}

export default function Post({ children }: Props) {
  return (
    <MDXProvider components={components}>
      <Nav />
      {children}
    </MDXProvider>
  );
}
