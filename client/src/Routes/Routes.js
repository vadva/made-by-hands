import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import CartPage from '../Pages/CartPage';
import CatalogPage from '../Pages/CatalogPage';
import CheckoutPage from '../Pages/CheckoutPage';
import ProfilePage from '../Pages/ProfilePage';
import IndexPage from '../Pages/IndexPage';
import ProductPage from '../Pages/ProductPage';
import SearchPage from '../Pages/SearchPage';
import SalesPage from '../Pages/SalesPage';
import NoMatchPage from '../Pages/NoMatchPage';
import ProtectedRoute from '../HOC/ProtectedRoute/ProtectedRoute';
import AuthModal from '../Components/AuthModal/AuthModal';

const Routes = () => {
	const location = useLocation();
	const background = location.state && location.state.background;
	return (
		<>
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
				<Route path="/search">
					<SearchPage />
				</Route>
				<Route path="/sales">
					<SalesPage />
				</Route>
				<Route path="/checkout">
					<CheckoutPage />
				</Route>
				<ProtectedRoute path="/profile">
					<ProfilePage />
				</ProtectedRoute>
				<Route
					path="/products/:itemNo"
					render={({ match }) => {
						return (
							match && <ProductPage productNoParam={match.params.itemNo} />
						);
					}}
				/>
				<Route path="*">
					<NoMatchPage />
				</Route>
			</Switch>

			{background && (
				<Route path="/login">
					<AuthModal />
				</Route>
			)}
		</>
	);
};

export default Routes;
