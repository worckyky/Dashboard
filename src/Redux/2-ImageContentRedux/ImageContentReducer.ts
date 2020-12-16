import { InferActionsType } from "../actions";

export type InitialStateType = {
  Title: string
  image: string | ArrayBuffer | null
  imageName: string
}

type ActionTypes = InferActionsType<typeof actions>

enum CONTENT {
  FETCH_IMAGE_CONTENT_DATA = "FETCH_IMAGE_CONTENT_DATA",
  CHANGE_TITLE = "CHANGE_TITLE",
  SET_IMAGE = "SET_IMAGE"
}

const initialState = {
  Title: "Image title",
  image: "",
  imageName: ''
};
const func = (state: InitialStateType) => {
  localStorage.setItem("ImageContent", JSON.stringify(state));
  return state;
};

export const ImageContentReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case CONTENT.FETCH_IMAGE_CONTENT_DATA:
      return func({ ...state, ...action.data });
    case CONTENT.SET_IMAGE:
      return func({...state, image: action.img, imageName: action.imageName})
    default:
      return state;
  }
};

export const actions = {
  fetchImageContentData: (data: InitialStateType) =>
    ({
      type: CONTENT.FETCH_IMAGE_CONTENT_DATA,
      data
    } as const),
  setImage: (img: string | ArrayBuffer | null , imageName: string) => ({ type: CONTENT.SET_IMAGE, img, imageName } as const)
};
