import Cousin from "../Cousin/Cousin";
import PropTypes from 'prop-types';

const Uncle = ({asset}) => {
    return (
        <div className="child">
            <h2>Uncle</h2>
            <div className="flex-spbt-gap-10">
                <Cousin asset={asset} name={'Rubaiya'}></Cousin>
                <Cousin name={'Rubina'}></Cousin>
            </div>
        </div>
    );
};

Uncle.propTypes = {
    asset: PropTypes.string
}

export default Uncle;