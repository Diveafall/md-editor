import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { FunctionComponent } from "react";
import MarkdownEditorArea from "./Editor";
import MarkdownViewer from "./Viewer";

const formId = "awesome-form";

type MarkdownEditorProps = {
  children: string;
};

const MarkdownEditor: FunctionComponent<MarkdownEditorProps> = ({
  children,
}) => {
  const classes = useStyles();
  const [readOnly, setReadOnly] = React.useState(false);

  const handleSave = (text: string) => {
    console.log(text);
  };

  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <Button variant="outlined" onClick={() => setReadOnly((old) => !old)}>
          Edit
        </Button>
        {readOnly && (
          <Button form={formId} type="submit">
            Save
          </Button>
        )}
      </div>
      <div>
        {readOnly ? (
          <MarkdownEditorArea
            formId={formId}
            children={children}
            onSave={handleSave}
          />
        ) : (
          <MarkdownViewer children={children} />
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;

const useStyles = makeStyles((theme) => ({
  root: {
    borderWidth: "1px",
    borderColor: theme.palette.divider,
    borderStyle: "solid",
    borderRadius: theme.shape.borderRadius,
  },
  toolbar: {
    padding: theme.spacing(1, 2),
    display: "flex",
    justifyContent: "space-between",
    borderBottomWidth: "1px",
    borderBottomColor: theme.palette.divider,
    borderBottomStyle: "solid",
  },
}));
