import React from "react";
import { useTheme } from "@material-ui/core";
import { materialLight as lightTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { dracula as darkTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { materialDark as darkTheme } from "react-syntax-highlighter/dist/esm/styles/prism";

const useSyntaxHighlighterTheme = () => {
  const theme = useTheme();

  // const styles = React.useMemo(() => {
  //   const baseTextStyles = {
  //     "color": "#393A34",
  //     "font-family": "\"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace",
  //     "direction": "ltr",
  //     "text-align": "left",
  //     "white-space": "pre",
  //     "word-spacing": "normal",
  //     "word-break": "normal",
  //     "font-size": ".9em",
  //     "line-height": "1.2em",

  //     "-moz-tab-size": "4",
  //     "-o-tab-size": "4",
  //     "tab-size": "4",

  //     "-webkit-hyphens": "none",
  //     "-moz-hyphens": "none",
  //     "-ms-hyphens": "none",
  //     "hyphens": "none",
  //   }
  // }, [])

  const styles = theme.palette.type === "light" ? lightTheme : darkTheme;

  delete styles['code[class*="language-"]']["background"];
  styles['pre[class*="language-"]']["background"] =
    theme.palette.background.default;
  styles['pre[class*="language-"]'][
    "border"
  ] = `1px solid ${theme.palette.divider}`;
  styles['pre[class*="language-"]']["borderRadius"] = theme.shape.borderRadius;

  return styles;
};

export default useSyntaxHighlighterTheme;
