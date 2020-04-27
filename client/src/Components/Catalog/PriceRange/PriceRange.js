import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	setMinPrice,
	setMaxPrice,
} from '../../../store/actions/catalogActions';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const PriceRange = () => {
	const dispatch = useDispatch();
	const [range, setValue] = useState({ value: { min: 400, max: 1000 } });

	useEffect(() => {
		dispatch(setMinPrice(range.value.min));
		dispatch(setMaxPrice(range.value.max));
	}, [range]);
	return (
		<>
			<span>price</span>
			<InputRange
				formatLabel={value => `${value}₴`}
				maxValue={2000}
				minValue={0}
				value={range.value}
				onChange={value => setValue({ value })}
			/>
		</>
	);
};

export default PriceRange;
