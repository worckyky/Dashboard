import React, { ChangeEvent, useEffect, useState } from "react";
import card from "../cards.module.css";
import s from './GraphContent.module.css'
import GraphContainer from "../../Utils/GraphContainer/GraphContainer";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../Redux/store";
import { actions, InitialStateType } from "../../../Redux/3-GraphContentRedux/GraphContentReducer";
import { v1 } from "uuid";

const GraphContent = () => {
  const GraphContent = useSelector<AppStateType, InitialStateType>(state => state.GraphContent).Graphs;
  const GraphElement = useSelector<AppStateType, InitialStateType>(state => state.GraphContent).DefaultData;
  const Title = useSelector<AppStateType, string>(state => state.GraphContent.Title);
  const dispatch = useDispatch();

  const selectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(actions.changeGraphElement(e.currentTarget.value));
  };

  useEffect(() => {
    let data = localStorage.getItem("GraphContent");
    if (data !== null) {
      dispatch(actions.fetchGraphContentData(JSON.parse(data)));
    }
  }, []);


  return (
    <div className={card.cards__container}>
      <h2>{Title}</h2>
      <div className={s.select__container}>
        <p>Chose Stack:</p>
        <select name="select" id={v1()} onChange={selectChangeHandler}>
          {GraphContent.map((elem) => {
            return <option value={elem[0][0]} key={elem[0][0]}>{elem[0][0]}</option>;
          })}
        </select>
      </div>

      <GraphContainer data={GraphElement}/>
    </div>
  );
};

export default GraphContent;
