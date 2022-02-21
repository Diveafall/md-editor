import { makeStyles } from "@material-ui/core";
import React from "react";
import { FunctionComponent } from "react";

type MarkdownEditorAreaProps = {
  children: string;
  onSave?: (text: string) => void;
};

const MarkdownEditorArea: FunctionComponent<MarkdownEditorAreaProps> = ({
  children,
  onSave,
}) => {
  const classes = useStyles();
  const ref = React.useRef<HTMLTextAreaElement | null>(null);

  const handleInputChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const element = event.currentTarget;
    element.style.height = "";
    element.style.height = element.scrollHeight + 3 + "px";
  };

  //   React.useEffect(() => {
  //     if (ref.current) {
  //         ref.current.style = ref.current.scrollHeight + 3 + "px"
  //     };
  //   }, [ref.current]);

  return (
    <textarea
      ref={ref}
      onInput={handleInputChange}
      className={classes.root}
      defaultValue={children}
    />
  );
};

export default MarkdownEditorArea;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    resize: "none",
  },
}));
