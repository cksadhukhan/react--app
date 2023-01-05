import axios from "axios";
import { BASE_URL } from "../utils/constant";

export const getUserService = async (id: number): Promise<any> => {
  try {
    const response = await axios.get(BASE_URL + "/" + id);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUsersService = async (): Promise<any> => {
  try {
    const response = await axios.get(BASE_URL);
    return response;
  } catch (error) {
    console.log(error);
  }
};
