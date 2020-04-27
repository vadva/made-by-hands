import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import querystring from 'query-string';
import {
	getFilteredProducts,
	getColorsAction,
} from '../../../store/actions/catalogActions';
import { getInitialFields } from '../../../utils/getFilterFields';
import Button from '../../UI/Button/Button';
import Checkbox from '../../UI/Checkbox/Checkbox';
import PriceRange from '../PriceRange/PriceRange';
import { FiltersContainer, FilterName, Title, FilterGroup } from './styles';

const FilterBar = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();

	const [fields, setFields] = useState({});
	const categories = useSelector(state => state.catalog.categories);
	const color = useSelector(state => state.catalog.colors);
	const minPrice = useSelector(state => state.catalog.minPrice);
	const maxPrice = useSelector(state => state.catalog.maxPrice);
	const currentParams = querystring.parse(location.search.slice(1));

	useEffect(() => {
		dispatch(getColorsAction());
	}, []);

	useEffect(() => {
		dispatch(getFilteredProducts(currentParams));
	}, [location]);

	useEffect(() => {
		const initialFields = getInitialFields(currentParams, {
			categories,
			color,
		});
		setFields(initialFields);
	}, [categories, color]);

	return (
		<FiltersContainer>
			<Title>Filters</Title>

			<Formik
				enableReinitialize
				initialValues={{
					...fields,
				}}
				onSubmit={values => {
					const params = Object.entries(values).reduce((obj, [key, value]) => {
						obj[key] = Object.entries(value).reduce((arr, [name, checked]) => {
							// eslint-disable-next-line no-unused-expressions
							checked && arr.push(name);
							return arr;
						}, []);

						return obj;
					}, {});
					params.minPrice = minPrice;
					params.maxPrice = maxPrice;
					const str = querystring.stringify(params, { arrayFormat: 'comma' });
					history.push({
						search: `?${str}`,
					});
				}}
			>
				{({ values, handleSubmit, setFieldValue }) => {
					return (
						<>
							<form onSubmit={handleSubmit}>
								<>
									<FilterGroup>
										<FilterName>Categories</FilterName>
										{Object.entries(values.categories || {}).map(
											([key, val], index) => {
												return (
													<Checkbox
														id={categories[index]._id}
														checked={val}
														name={`categories.${key}`}
														label={categories[index].name}
														onChange={() =>
															setFieldValue(`categories.${key}`, !val)
														}
													/>
												);
											}
										)}
									</FilterGroup>
									<FilterGroup>
										<FilterName>Colors</FilterName>

										{Object.entries(values.color || {}).map(
											([key, val], index) => {
												return (
													<Checkbox
														id={color[index]._id}
														checked={val}
														name={`color.${key}`}
														label={color[index].name}
														onChange={() => setFieldValue(`color.${key}`, !val)}
													/>
												);
											}
										)}
									</FilterGroup>
									<FilterGroup>
										<FilterName>Price</FilterName>
										<PriceRange />
									</FilterGroup>
								</>
								<Button type="Submit" text="Show" onClick={() => {}} />
							</form>
						</>
					);
				}}
			</Formik>
		</FiltersContainer>
	);
};

export default FilterBar;