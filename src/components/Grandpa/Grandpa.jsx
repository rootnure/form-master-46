import { createContext, useState } from 'react';
import Aunt from '../Aunt/Aunt';
import Dad from '../Parent/Dad';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const AssetContext = createContext('Gold Chain');
export const MoneyContext = createContext(1000); // 1. create a context

const Grandpa = () => {
    const asset = 'Diamond Ring';
    const [money, setMoney] = useState(1000);
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}> {/* 2. set provider */}
                <AssetContext.Provider value={{ asset: 'Gold Chain' }}>
                    <div className="flex-spbt-gap-10">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunt></Aunt>
                    </div>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. Create a context and export it
 * 2. Add provider for the context with a value
 * 3. useContext() hook to use the context
 */