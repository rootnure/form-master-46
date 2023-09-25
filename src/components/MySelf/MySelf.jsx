import Special from "../Special/Special";
import PropTypes from 'prop-types';


const MySelf = ({asset}) => {
    return (
        <div className='grand-child'>
            <div>
                <h2>MySelf</h2>
                <Special asset={asset}></Special>
            </div>
        </div>
    );
};

MySelf.propTypes = {
    asset: PropTypes.string
}

export default MySelf;