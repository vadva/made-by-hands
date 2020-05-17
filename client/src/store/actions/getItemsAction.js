import axios from 'axios';
import { checkProductsForCartAndFavorites } from '../../utils/API';

const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';

const itemsSuccess = data => ({
	type: GET_ITEMS_SUCCESS,
	payload: data,
});

const itemsError = error => ({
	type: GET_ITEMS_ERROR,
	payload: error,
});

// export const getItemsAction = () => dispatch => {
// 	axios
// 		.get('/products')
// 		.then(res => {
// 			dispatch(itemsSuccess(res.data));
// 		})
// 		.catch(err => dispatch(itemsError(err)));
// };

export const getItemsForCarousel = () => dispatch => {
	axios.get('/products').then(allProducts => {
		checkProductsForCartAndFavorites(allProducts.data)
			.then(products => {
				products
					.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
					.reverse();
				const selected = products.slice(0, 6);
				dispatch(itemsSuccess(selected));
			})

			.catch(err => dispatch(itemsError(err)));
	});
};
