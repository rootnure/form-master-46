import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";


const Brother = () => {
    const [money] = useContext(MoneyContext); // 3. useContext() to receive value from context using ContextAPI
    return (
        <div className="grand-child">
            <h2>Brother</h2>
            <p>Money {money}</p>
        </div>
    );
};

export default Brother;