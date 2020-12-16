import { InferActionsType } from "../actions";


type ActionTypes = InferActionsType<typeof actions>

export type InitialStateType = typeof initialState

enum CONTENT {
  CHANGE_GRAPH_VALUE = "CHANGE_GRAPH_VALUE",
  FETCH_GRAPH_CONTENT = "FETCH_GRAPH_CONTENT"
}

const initialState = {
  Title: "Front End Frameworks",
  Graphs: [
    [
      ["React", "React"],
      ["2016", 60],
      ["2017", 50],
      ["2018", 40]
    ],
    [
      ["Vue", "Vue"],
      ["2016", 70],
      ["2017", 80],
      ["2018", 40]
    ],
    [
      ["Angular", "Angular"],
      ["2016", 40],
      ["2017", 60],
      ["2018", 80]
    ],
    [
      ["Ember", "Ember"],
      ["2016", 70],
      ["2017", 30],
      ["2018", 80]
    ]
  ],
  DefaultData: [
    ["React", "React"],
    ["2016", 60],
    ["2017", 50],
    ["2018", 40]
  ]
};
const func = (state: InitialStateType) => {
  localStorage.setItem("GraphContent", JSON.stringify(state));
  return state;
};

export const GraphContentReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case CONTENT.CHANGE_GRAPH_VALUE:
      return func({ ...state, DefaultData: state.Graphs.find(elem => {
          if (elem[0][0] === action.value) {
            return elem
          }
        }) || [] });
    case CONTENT.FETCH_GRAPH_CONTENT:
      return func({...state, ...action.data})
    default:
      return state;
  }
};

export const actions = {
  fetchGraphContentData: (data: InitialStateType) => ({ type: CONTENT.FETCH_GRAPH_CONTENT, data } as const),
  changeGraphElement: (value: string) => ({ type: CONTENT.CHANGE_GRAPH_VALUE, value } as const)
};
