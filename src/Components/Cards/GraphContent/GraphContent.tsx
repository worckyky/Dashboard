import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import card from "../cards.module.css";
import VideoFrame from "../../Utils/VideoFrame/VideoFrame";
import { useDispatch, useSelector } from "react-redux";
import { actions, InitialStateType } from "../../../Redux/3-VideoContentRedux/VideoContentReducer";
import { AppStateType } from "../../../Redux/store";

const VideoContent = () => {
  const [data, setData] = useState("");
  const [btn, setBtn] = useState(true);
  const { Title, VideoID } = useSelector<AppStateType, InitialStateType>((state) => state.VideoContent);
  const dispatch = useDispatch();


  useEffect(() => {
    let data = localStorage.getItem("VideoContent");
    if (data !== null) {
      dispatch(actions.fetchVideoContentData(JSON.parse(data)));
    }
  }, []);

  const searchDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let targetSymbol = e.currentTarget.value;
    if (targetSymbol.length === 43) {
      setBtn(false);
    } else {
      setBtn(true);
    }

    setData(targetSymbol);
  };

  const searchHandler = () => {
    dispatch(actions.setVideo(data, data.split("=").reverse()[0]));
  };

  return (
    <div className={card.cards__container}>
      <h2>{Title}</h2>
      <div style={{ display: "flex" }}>
        <input type='text' value={data} onChange={searchDataHandler} placeholder={"enter valid link name"}/>
        <button onClick={searchHandler} disabled={btn}>Search</button>
      </div>
      <VideoFrame linkID={VideoID}/>
    </div>
  );
};

export default VideoContent;
