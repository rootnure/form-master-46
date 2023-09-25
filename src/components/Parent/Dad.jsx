import { useContext } from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";
import { MoneyContext } from "../Grandpa/Grandpa";


const Dad = ({asset}) => {
    const [money] = useContext(MoneyContext);
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

export default Dad;