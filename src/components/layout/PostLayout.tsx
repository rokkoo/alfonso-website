import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import Image from 'next/image';
import { useEffect } from 'react';
import highlightjs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/vs2015.css';

highlightjs.registerLanguage('typescript', typescript);
highlightjs.registerLanguage('javascript', javascript);

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
