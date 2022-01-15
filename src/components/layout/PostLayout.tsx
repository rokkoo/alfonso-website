import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import Image from 'next/image';
import Code from '../ui/Code/index';
import BaseLayout from './BaseLayout';

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components: MDXProviderComponentsProp = {
  img: ResponsiveImage,
  code: Code,
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
