import axios from "axios";

export const listProducts = () => async (dispatch) => {
	try {
		dispatch({ type: "PRODUCT_LIST_REQUEST" });
		const { data } = await axios.get("http://127.0.0.1:8000/api/products");
		dispatch({
			type: "PRODUCT_LIST_SUCCESS",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "PRODUCT_LIST_FAIL",
			payload: error.message,
		});
	}
};
