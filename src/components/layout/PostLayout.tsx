import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import { useEffect } from 'react';
import Image from 'next/image';

import highlightjs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/vs2015.css';

highlightjs.registerLanguage('typescript', typescript);

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components: MDXProviderComponentsProp = {
  img: ResponsiveImage,
};

interface Props {
  children: React.ReactNode;
}

export default function Post({ children }: Props) {
  useEffect(() => {
    highlightjs.highlightAll();
  }, []);

  return <MDXProvider components={components}>{children}</MDXProvider>;
}
