import { makeStyles } from "@material-ui/core";
import React from "react";
import { FunctionComponent } from "react";

const getCorrectHeightForTextArea = (el: HTMLTextAreaElement) => {
  return el.scrollHeight + 3 + "px";
};

type MarkdownEditorAreaProps = {
  formId: string;
  children: string;
  onSave?: (text: string) => void;
};

const MarkdownEditorArea: FunctionComponent<MarkdownEditorAreaProps> = (
  props
) => {
  const classes = useStyles();
  const ref = React.useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const element = event.currentTarget;
    element.style.height = "";
    element.style.height = getCorrectHeightForTextArea(element);
  };

  React.useEffect(() => {
    if (ref.current) {
      ref.current.style.height = getCorrectHeightForTextArea(ref.current);
    }
  }, []);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current) {
      props.onSave?.(ref.current.value);
    }
  };

  return (
    <form id={props.formId} onSubmit={handleFormSubmit}>
      <textarea
        ref={ref}
        onInput={handleInputChange}
        className={classes.root}
        defaultValue={props.children}
      />
    </form>
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
