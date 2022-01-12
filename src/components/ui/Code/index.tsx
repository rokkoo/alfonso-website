import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
  className: string;
}

function Code({ children, className }: Props) {
  const language = className.replace(/language-/, '') as Language;
  const code = children?.toString().trim();

  if (!code) return null;

  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre className={styles.pre} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default Code;
