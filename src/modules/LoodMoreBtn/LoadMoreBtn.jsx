import PropTypes from 'prop-types';
import styled from './LoadMoreBtn.module.scss';

const LoadMoreBtn = ({onClick}) => {
    return (
        <button onClick={onClick}
            type="button"
            className={styled.loadMoreBtn} > 
            Load more
        </button>
    );
};

LoadMoreBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;