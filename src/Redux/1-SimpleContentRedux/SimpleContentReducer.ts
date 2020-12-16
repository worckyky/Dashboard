import { InferActionsType } from "../actions";
import { AppThunk } from "../thunks";
import SimpleContentAPI from "./SimpleContentAPI";

export type InitialStateType = {
  Title: string,
  Paragraph: Array<ParagraphElemType>,
  newParagraph: string
}

type ActionTypes = InferActionsType<typeof actions>

export type ParagraphElemType = {
  id: string
  Text: string
}


enum CONTENT {
  FETCH_SIMPLE_CONTENT_DATA = "FETCH_SIMPLE_CONTENT_DATA",
  NEW_PARAGRAPH_TEXT = "NEW_PARAGRAPH_TEXT",
}

const initialState = {
  Title: "Simple title",
  Paragraph: [],
  newParagraph: ""
};


export const SimpleContentReducer = (state:InitialStateType  = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case CONTENT.FETCH_SIMPLE_CONTENT_DATA:
      return { ...state, Paragraph: [...action.data] };
    case CONTENT.NEW_PARAGRAPH_TEXT:
      return {
        ...state,
        newParagraph: action.text
      };
    default:
      return state;
  }
};

export const actions = {
  newParagraphText: (text: string) => ({ type: CONTENT.NEW_PARAGRAPH_TEXT, text } as const),
  fetchSimpleContentData: (data: Array<ParagraphElemType>) => ({
    type: CONTENT.FETCH_SIMPLE_CONTENT_DATA,
    data
  } as const),
};


export const thunks = {
  fetchSimpleContentTC: (): AppThunk => async (dispatch) => {
    let response = await SimpleContentAPI.fetchSimpleContent();
    dispatch(actions.fetchSimpleContentData(response));
  },
  createParagraphTC: (id: string, Text: string): AppThunk => async (dispatch) => {
    await SimpleContentAPI.createParagraph(id, Text);
    dispatch(thunks.fetchSimpleContentTC());
  },
  deleteParagraphTC: (id: string): AppThunk => async (dispatch) => {
    await SimpleContentAPI.deleteParagraph(id);
    dispatch(thunks.fetchSimpleContentTC());
  },
  updateParagraphTC: (id: string, Text: string): AppThunk => async (dispatch) => {
    await SimpleContentAPI.updateParagraph(id, Text);
    dispatch(thunks.fetchSimpleContentTC());
  },
};
