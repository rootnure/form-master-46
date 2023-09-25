import PropTypes from 'prop-types';
import Friend from '../Friend/Friend';
import { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Cousin = ({name, asset}) => {
    const [money] = useContext(MoneyContext);
    return (
        <div className='cousin'>
            <h2>Cousin</h2>
            <p>{name}</p>
            {asset && <p>Has {asset}</p>}
            {name==='Rafsan' && <Friend></Friend>}
            {name==='Rubina' && <p>Money {money}</p>}
        </div>
    );
};

Cousin.propTypes = {
    name: PropTypes.string.isRequired
}

export default Cousin;