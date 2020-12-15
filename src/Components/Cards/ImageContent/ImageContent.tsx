import React, { ChangeEvent, useEffect } from "react";
import s from "./SimpleContent.module.css";
import card from "../cards.module.css";
import EditableTitle from "../../Utils/EditableTitle/EditableTitle";
import EditableText from "../../Utils/EditableText/EditableText";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../Redux/store";
import { InitialStateType, actions } from "../../../Redux/1-SimpleContentRedux/SimpleContentReducer";

const SimpleContent = () => {
  const { Paragraph, newParagraph, Title } = useSelector<AppStateType, InitialStateType>(
    (state) => state.SimpleContent
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let data = localStorage.getItem("SimpleContent");
    if (data !== null) {
      dispatch(actions.fetchSimpleContentData(JSON.parse(data)));
    }
  }, []);

  const changeTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.newParagraphText(e.currentTarget.value));
  };

  const changeTitleHandler = (title: string) => {
    dispatch(actions.changeTitle(title));
  };
  const addParagHandler = () => {
   dispatch(actions.addNewText(newParagraph))
  };

  return (
    <div className={card.cards__container}>
      <EditableTitle title={Title} changeTitle={changeTitleHandler}/>
      {Paragraph.map((t) => {
        const deleteText = () => {
          dispatch(actions.deleteText(t.id));
        };
        const changeText = (text: string) => {
          dispatch(actions.changeTextBlock(text, t.id));
        };
        return <EditableText id={t.id} text={t.Text} key={t.id} deleteText={deleteText} changeText={changeText}/>;
      })}
      <span>
            <input type='text' value={newParagraph} onChange={changeTextHandler}/>
            <button onClick={addParagHandler}>Add Paragraph</button>
         </span>
    </div>
  );
};

export default SimpleContent;
