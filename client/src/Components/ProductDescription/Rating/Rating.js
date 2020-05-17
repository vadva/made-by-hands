import React, { useState, useEffect } from 'react';
import RatingStars from '../../UI/RatingStars/RatingStars';
import SetModalRating from './SetModalRating';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getRatingAndCommentsInfo } from '../../../store/actions/commentAction';
import { Comments, RatingDiv } from './styles';

const Rating = ({ id }) => {
	const [isModalOpen, setToggleModal] = useState(false);
	const dispatch = useDispatch();
	const arrayOfComments = useSelector(state => state.comments.comments);

	const toggleModal = () => {
		setToggleModal(prevState => !prevState);
	};

	useEffect(() => {
		dispatch(getRatingAndCommentsInfo(id));
	}, [id, dispatch]);

	const rating =
		arrayOfComments &&
		arrayOfComments.reduce((prevValue, currentItem) => {
			return prevValue + currentItem.rating;
		}, 0) / arrayOfComments.length;

	return (
		<>
			<RatingDiv>
				<div>
					<RatingStars rating={rating} />
				</div>
				<Comments>
					Comments ( {arrayOfComments && arrayOfComments.length} )
				</Comments>
			</RatingDiv>
			<Button onClick={toggleModal} text="write feedback" />
			{isModalOpen && <SetModalRating id={id} toggleModal={toggleModal} />}
		</>
	);
};

Rating.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Rating;