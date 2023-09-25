import { useContext } from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";
import { MoneyContext } from "../Grandpa/Grandpa";
import PropTypes from 'prop-types';


const Dad = ({asset}) => {
    const [money] = useContext(MoneyContext); // 3. useContext() to receive value from context using ContextAPI
    return (
        <div className="child">
            <h2>Dad</h2>
            <div className="grand-child flex-spbt-gap-10">
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </div>
            <p>Money {money}</p>
        </div>
    );
};

Dad.propTypes = {
    asset: PropTypes.string
}

export default Dad;