import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import CartPage from './Pages/CartPage';
import CatalogPage from './Pages/CatalogPage';
import ProfilePage from './Pages/ProfilePage';
import IndexPage from './Pages/IndexPage';
import Header from './Components/Header/Header';
import AppContainer from './Components/AppContainer/AppContainer';
import ProtectedRoute from './Components/PrivateRoute/PrivateRoute';
import { getUser } from './store/actions/authActions';

import Wishlist from './Components/Wishlist/Wishlist';

import {
	setHeaderMobile,
	setMobile,
	setTablet,
} from './store/actions/UIActions';

const App = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const background = location.state && location.state.background;

	const handleWindowResize = () => {
		if (window.innerWidth <= 992) {
			dispatch(setHeaderMobile(true));
		} else {
			dispatch(setHeaderMobile(false));
		}

		if (window.innerWidth <= 768) {
			dispatch(setTablet(true));
		} else {
			dispatch(setTablet(false));
		}

		if (window.innerWidth <= 576) {
			dispatch(setMobile(true));
		} else {
			dispatch(setMobile(false));
		}
	};

	useEffect(() => {
		handleWindowResize();

		dispatch(getUser());

		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return (
		<AppContainer>
			<Header />
			<Switch location={background || location}>
				<Route exact path="/">
					<IndexPage />
				</Route>
				<Route path="/cart">
					<CartPage />
				</Route>
				<Route path="/catalog">
					<CatalogPage />
				</Route>
				<ProtectedRoute path="/profile">
					<ProfilePage />
				</ProtectedRoute>

				<Route path="/wishlist">
					<Wishlist />
				</Route>
			</Switch>
		</AppContainer>
	);
};

export default App;
