import { GET_TOURNAMENTS } from "./actionsTypes";
import ApiService from "../api/api";

export const getTournaments = () => async (dispatch) => {
    try {
        const response = await ApiService.getTournaments();
        dispatch({ type: GET_TOURNAMENTS, payload: response });
    } catch (error) {
        console.log("Error fetching tournaments", error);
    }
}