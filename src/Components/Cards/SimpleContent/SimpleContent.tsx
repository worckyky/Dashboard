import React, { ChangeEvent, useCallback, useEffect } from "react";
import s from "./SimpleContent.module.css";
import card from "../cards.module.css";
import EditableText from "../../Utils/EditableText/EditableText";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../Redux/store";
import { actions, ParagraphElemType, thunks } from "../../../Redux/1-SimpleContentRedux/SimpleContentReducer";
import { v1 } from "uuid";

const SimpleContent = () => {
  const Title = useSelector<AppStateType, string>(state => state.SimpleContent.Title);
  const Paragraph = useSelector<AppStateType, Array<ParagraphElemType>>(state => state.SimpleContent.Paragraph);
  const newParagraph = useSelector<AppStateType, string>(state => state.SimpleContent.newParagraph);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.fetchSimpleContentTC());
  }, []);
  const changeTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.newParagraphText(e.currentTarget.value));
  };
  const addParagHandler = () => {
    dispatch(thunks.createParagraphTC(v1(), newParagraph));
  };

  return (
    <div className={card.cards__container}>
      <h2>{Title}</h2>
      {Paragraph.map((t) => {
        const deleteText = () => {
          dispatch(thunks.deleteParagraphTC(t.id));
        };
        const changeText = (text: string) => {
          dispatch(thunks.updateParagraphTC(t.id, text));
        };
        return <EditableText id={t.id} text={t.Text} key={t.id} deleteText={deleteText} changeText={changeText}/>;
      })}
      <span>
            <input type='text' value={newParagraph} onChange={changeTextHandler} placeholder={"Write some text"}/>
            <button onClick={addParagHandler}>Add Paragraph</button>
         </span>
    </div>
  );
};

export default SimpleContent;
