import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import s from "./ImageContent.module.css";
import card from "../cards.module.css";
import EditableTitle from "../../Utils/EditableTitle/EditableTitle";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../Redux/store";
import { InitialStateType, actions } from "../../../Redux/2-ImageContentRedux/ImageContentReducer";
import { ReactComponent as Photo } from "./Images/Photo.svg";

const ImageContent = () => {
  const { image, imageName, Title } = useSelector<AppStateType, InitialStateType>((state) => state.ImageContent);
  const [file, setFile] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    let data = localStorage.getItem("ImageContent");
    if (data !== null) {
      dispatch(actions.fetchImageContentData(JSON.parse(data)));
    }
  }, []);

  const fileHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    const newFile = e.target.files && e.target.files[0];
    if (newFile) {
      setFile(URL.createObjectURL(newFile));
      reader.onloadend = () => {
        dispatch(actions.setImage(reader.result, newFile.name));
      };
      reader.readAsDataURL(newFile);
    }
  };
  const renderFiles = (file: string) => {
    return (
      imageName.length !== 0 ? <div className={s.imageContainer} style={{ backgroundImage: `url(${file || image})` }}>

      </div> : <div className={s.imageContainer}><Photo className={s.imageDefault}/></div>
      );
  };

  return (
    <div className={card.cards__container}>
      <h2>{Title}</h2>
      <div>
        <p>{imageName ? imageName : "Some image Data"}</p>
        <div>
          <input
            onChange={fileHandleChange}
            style={{ display: "none" }}
            type={"file"}
            id={"file"}
            accept='.jpg, .jpeg, .png'
          />
        </div>
        <label htmlFor={"file"}>{renderFiles(file)}</label>
      </div>
    </div>
  );
};

export default ImageContent;
