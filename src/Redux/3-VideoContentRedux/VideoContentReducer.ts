import { InferActionsType } from "../actions";

export type InitialStateType = {
  VideoID: string
  VideoLink: string
  Title: string
}

type ActionTypes = InferActionsType<typeof actions>

enum CONTENT {
  CHANGE_TITLE = "CHANGE_TITLE",
  SET_VIDEO = "SET_VIDEO",
  FETCH_VIDEO_DATA = "FETCH_VIDEO_DATA",
}

const initialState = {
  VideoID: "",
  VideoLink: "",
  Title: "Video title"
};
const func = (state: InitialStateType) => {
  localStorage.setItem("VideoContent", JSON.stringify(state));
  return state;
};

export const VideoContentReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case CONTENT.FETCH_VIDEO_DATA:
      return func({ ...state, ...action.data });
    case CONTENT.CHANGE_TITLE:
      return func({ ...state, Title: action.title });
    case CONTENT.SET_VIDEO:
      return func({ ...state, VideoLink: action.videoLink, VideoID: action.VideoID });
    default:
      return state;
  }
};

export const actions = {
  fetchVideoContentData: (data: InitialStateType) =>
    ({
      type: CONTENT.FETCH_VIDEO_DATA,
      data
    } as const),
  setVideo: (videoLink: string, VideoID: string) =>
    ({
      type: CONTENT.SET_VIDEO,
      videoLink,
      VideoID
    } as const),
  changeTitle: (title: string) => ({ type: CONTENT.CHANGE_TITLE, title } as const)
};
