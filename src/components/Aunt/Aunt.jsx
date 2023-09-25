import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunt = () => {

    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div className="child">
            <h2>Aunt</h2>
            <div className="flex-spbt-gap-10">
                <Cousin name={'Rafsan'}></Cousin>
                <Cousin name={'Sohana'}></Cousin>
            </div>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000tk.</button>
        </div>
    );
};

export default Aunt;