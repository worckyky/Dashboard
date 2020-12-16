import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk'
import { SimpleContentReducer } from "./1-SimpleContentRedux/SimpleContentReducer";
import { ImageContentReducer } from "./2-ImageContentRedux/ImageContentReducer";
import { GraphContentReducer } from "./3-GraphContentRedux/GraphContentReducer";
import { VideoContentReducer } from "./3-VideoContentRedux/VideoContentReducer";

const reducers = combineReducers({
  SimpleContent: SimpleContentReducer,
  ImageContent: ImageContentReducer,
  VideoContent: VideoContentReducer,
  GraphContent: GraphContentReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export type AppStateType = ReturnType<typeof reducers>