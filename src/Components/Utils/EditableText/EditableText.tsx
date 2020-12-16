import React, { ChangeEvent, useState } from "react";
import s from "./EditableText.module.css";
import TextareaAutosize from "react-textarea-autosize";

type EditableTextType = {
  id: string
  text: string
  deleteText: () => void
  changeText: (text: string) => void
}

const EditableText: React.FC<EditableTextType> = ({ id, text, deleteText, changeText }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(text)
  const ValidateData = () => {
    value.length === 0 ? changeText("Set Text") : changeText(value);
    setEdit(!edit);
  };
  const changeDataHandler = () => {
    ValidateData();
  };
  const changeValueData = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };
  const keyPressValueData = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      ValidateData();
    }
  };

  return (
    <div key={id} className={s.EditableText__container}>
      {edit ? (
        <TextareaAutosize
          value={value}
          autoFocus
          onChange={changeValueData}
          onBlur={changeDataHandler}
          onKeyPress={keyPressValueData}
          className={s.EditableText__textArea}
          wrap={"soft"}
        />
      ) : (
        <>
          <p onDoubleClick={changeDataHandler} className={s.EditableText}>
            {text}
          </p>
          <button
            className={s.EditableText__deleteBtn}
            onClick={() => {
              deleteText();
            }}>
            X
          </button>
        </>
      )}
    </div>
  );
};

export default EditableText;
