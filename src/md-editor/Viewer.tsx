import ReactMarkdown from "react-markdown";
import remarkGFM from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import useSyntaxHighlighterTheme from "./useSyntaxHighlighterTheme";
import { Divider, makeStyles, Typography, Link, Box } from "@material-ui/core";
import { FunctionComponent } from "react";

type MarkdownViewerProps = {
  children: string;
};

const MarkdownViewer: FunctionComponent<MarkdownViewerProps> = ({
  children,
}) => {
  const classes = useStyles();
  const mdTheme = useSyntaxHighlighterTheme();

  return (
    <ReactMarkdown
      className={classes.root}
      children={children}
      remarkPlugins={[remarkGFM]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={mdTheme}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={classes.code} {...props}>
              {children}
            </code>
          );
        },
        h1({ node, className, children, ...props }) {
          return <Typography variant="h1" children={children} />;
        },
        h2({ node, className, children, ...props }) {
          return <Typography variant="h2" children={children} />;
        },
        h3({ node, className, children, ...props }) {
          return <Typography variant="h3" children={children} />;
        },
        h4({ node, className, children, ...props }) {
          return <Typography variant="h4" children={children} />;
        },
        h5({ node, className, children, ...props }) {
          return <Typography variant="h5" children={children} />;
        },
        h6({ node, className, children, ...props }) {
          return <Typography variant="h6" children={children} />;
        },
        p({ node, className, children, ...props }) {
          return <Typography paragraph children={children} />;
        },
        a({ node, className, children, ...props }) {
          return <Link children={children} className={classes.link} />;
        },
        li({ node, className, children, ...props }) {
          return <Box component="li" mt={1} {...props} />;
        },
        hr({ node, className, children, ...props }) {
          return <Divider className={classes.divider} />;
        },
        img({ node, className, children, ...props }) {
          return <img alt="" {...props} className={classes.img} />;
        },
        blockquote({ node, className, children, ...props }) {
          return (
            <blockquote className={classes.blockquote} children={children} />
          );
        },
      }}
    />
  );
};

export default MarkdownViewer;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 3),
    maxWidth: "100%",
    boxSizing: "content-box",
  },
  divider: {
    marginBottom: theme.spacing(2),
  },
  img: {
    maxWidth: "100%",
  },
  blockquote: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2, 3),
    margin: 0,
    borderLeftWidth: "4px",
    borderLeftStyle: "solid",
    borderLeftColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[700]
        : theme.palette.grey[300],
    marginBottom: theme.spacing(2),
  },
  code: {
    backgroundColor: theme.palette.background.default,
    padding: "3px 7px",
    borderRadius: "5px",
  },
  link: {
    cursor: "pointer"
  }
}));

/**

What do we want the editor to support right now?

1) Headings
2) Paragraphs
3) Links
4) Python code snippets
5) License and citation

*/
