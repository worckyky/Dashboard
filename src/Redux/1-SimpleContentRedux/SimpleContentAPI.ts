import firebase from "../../firebase";
import { ParagraphElemType } from "./SimpleContentReducer";

const ref = firebase.firestore().collection("Paragraph");


const SimpleContentAPI = {
  fetchSimpleContent: async (): Promise<Array<ParagraphElemType>> => {
    let response = await ref.get();
    return response.docs.map((doc) => doc.data()) as Array<ParagraphElemType>;
  },
  createParagraph: async (id: string, Text: string) => {
    return ref.doc(id).set({ id, Text });
  },
  deleteParagraph: async (id: string) => {
    return ref.doc(id).delete();
  },
  updateParagraph: async (id: string, Text: string) => {
    return ref.doc(id).update({ id, Text });
  },
};

export default SimpleContentAPI;
