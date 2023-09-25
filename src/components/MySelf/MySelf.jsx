import Special from "../Special/Special";


const MySelf = ({asset}) => {
    return (
        <div className='grand-child'>
            <div>
                <h2>MySelf</h2>
                <Special asset={asset}></Special>
            </div>
        </div>
    );
};

export default MySelf;