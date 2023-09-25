import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";
import PropTypes from 'prop-types';

const Special = ({asset}) => {

    const gift = useContext(AssetContext);

    return (
        <div className="special">
            <h2>Special</h2>
            <p>Has {asset}</p>
            <p>Will Get {gift.asset}</p>
        </div>
    );
};

Special.propTypes = {
    asset: PropTypes.string
}

export default Special;