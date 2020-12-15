import { Dispatch, Reducer } from "redux";
import { InferActionsType } from "../actions";
import { v1 } from "uuid";
import { AppThunk } from "../thunks";
import SimpleContentAPI from "./SimpleContentAPI";
import firebase from "firebase";

export type InitialStateType = typeof initialState

type ActionTypes = InferActionsType<typeof actions>

export type ParagraphType = Array<{
  id: string
  Text: string
}>

enum CONTENT {
  FETCH_SIMPLE_CONTENT_DATA = "FETCH_SIMPLE_CONTENT_DATA",
  ADD_NEW_TEXT = "ADD_NEW_TEXT",
  CHANGE_TEXT_BLOCK = "CHANGE_TEXT_BLOCK",
  CHANGE_TITLE = "CHANGE_TITLE",
  DELETE_TEXT = "DELETE_TEXT",
  NEW_PARAGRAPH_TEXT = "NEW_PARAGRAPH_TEXT",
}

const initialState = {
  Title: "Some great title",
  Paragraph: [
    {
      id: v1(),
      Text: "Hello"
    },
    {
      id: v1(),
      Text: "Hello"
    },
    {
      id: v1(),
      Text: "Hello"
    }
  ],
  newParagraph: ""
};
const func = (state: InitialStateType) => {
  localStorage.setItem("SimpleContent", JSON.stringify(state));
  return state;
};

export const SimpleContentReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case CONTENT.FETCH_SIMPLE_CONTENT_DATA:
      return func({ ...state, ...action.data });
    case CONTENT.ADD_NEW_TEXT:
      return func({
        ...state,
        Paragraph: [
          ...state.Paragraph,
          {
            id: v1(),
            Text: action.text
          }
        ]
      });
    case CONTENT.NEW_PARAGRAPH_TEXT:
      return func({
        ...state,
        newParagraph: action.text
      });
    case CONTENT.DELETE_TEXT:
      return func({
        ...state,
        Paragraph: state.Paragraph.filter((elem) => elem.id !== action.id)
      });
    case CONTENT.CHANGE_TITLE:
      return func({ ...state, Title: action.title });
    case CONTENT.CHANGE_TEXT_BLOCK:
      return func({
        ...state,
        Paragraph: state.Paragraph.map((t) => {
          if (t.id === action.id) {
            return { ...t, Text: action.text };
          } else {
            return t;
          }
        })
      });
    default:
      return state;
  }
};

export const actions = {
  addNewText: (text: string) => ({ type: CONTENT.ADD_NEW_TEXT, text } as const),
  newParagraphText: (text: string) => ({ type: CONTENT.NEW_PARAGRAPH_TEXT, text } as const),
  deleteText: (id: string) => ({ type: CONTENT.DELETE_TEXT, id } as const),
  fetchSimpleContentData: (data: firebase.firestore.DocumentData) => ({
    type: CONTENT.FETCH_SIMPLE_CONTENT_DATA,
    data
  } as const),
  changeTextBlock: (text: string, id: string) => ({ type: CONTENT.CHANGE_TEXT_BLOCK, text, id } as const),
  changeTitle: (title: string) => ({ type: CONTENT.CHANGE_TITLE, title } as const)
};

// export const thunks = {
//   fetchSimpleContentTC: (): AppThunk => async (dispatch) => {
//     let response = await SimpleContentAPI.fetchSimpleContent();
//     dispatch(actions.fetchSimpleContentData(response));
//   },
//   createParagraphTC: (id: string, Text: string): AppThunk => async (dispatch) => {
//     await SimpleContentAPI.createParagraph(id, Text);
//     dispatch(thunks.fetchSimpleContentTC());
//   }
//
// };
