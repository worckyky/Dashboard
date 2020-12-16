import React, { ChangeEvent, useEffect, useState } from "react";
import s from "./EditableTitle.module.css";


type EditableTitleType = {
  title: string,
  changeTitle: (title: string) => void
}

const EditableTitle: React.FC<EditableTitleType> = ({ title, changeTitle }) => {

  useEffect( ()=>{
    debugger
    setValue(title)
  },[title] )

  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(title);

  const ValidateData = () => {
    value.length === 0 ? changeTitle("Set Title") : changeTitle(value);
    setEdit(!edit);
  };
  const changeDataHandler = () => {
    setEdit(true);
  };

  const changeDataHandler2 = () => {
    setEdit(false);
    changeTitle(value)
  };

  const changeValueData = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const keyPressValueData = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      ValidateData();
    }
  };

  return (
    <span>
         {edit ? (
           <input
             type='text'
             value={value}
             autoFocus
             onChange={changeValueData}
             onBlur={changeDataHandler2}
             onKeyPress={keyPressValueData}
           />
         ) : (
           <h2 onDoubleClick={changeDataHandler} className={s.EditableTitle}>
             {value}
           </h2>
         )}
      </span>
  );
};

export default EditableTitle;
