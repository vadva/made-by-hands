import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { InputContainer, Input, Label, ErrorMessage } from './styles';

const InputField = ({
	label,
	placeholder,
	onChange,
	required,
	name,
	type,
	value,
	target,
	touched,
	error,
	onBlur,
}) => {
	return (
		<InputContainer target={target}>
			{label && (
				<Label htmlFor={name}>
					{label} {required && '*'}
				</Label>
			)}
			<Input
				id={name}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				isInvalid={error && touched}
			/>
			{touched && error && (
				<ErrorMessage length={error.length}>{error}</ErrorMessage>
			)}
		</InputContainer>
	);
};

InputField.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	target: PropTypes.oneOf(['form', 'search']).isRequired,
	touched: PropTypes.bool,
	error: PropTypes.string,
	onBlur: PropTypes.func.isRequired,
};

InputField.defaultProps = {
	label: '',
	placeholder: '',
	required: false,
	touched: false,
	error: '',
};

export default memo(InputField);
