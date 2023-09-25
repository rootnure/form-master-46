import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


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

export default Special;