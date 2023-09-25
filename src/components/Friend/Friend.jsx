import { useContext } from "react";
import { AssetContext, MoneyContext } from "../Grandpa/Grandpa";

const Friend = () => {

    const gift = useContext(AssetContext);
    const [money] = useContext(MoneyContext); // 3. useContext() to receive value from context using ContextAPI

    return (
        <div className="friend">
            <h2>Friend</h2>
            <p>Will Get {gift.asset}</p>
            <p>Money {money}</p>
        </div>
    );
};

export default Friend;