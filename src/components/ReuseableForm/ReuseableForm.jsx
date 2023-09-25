import PropTypes from 'prop-types';

const ReuseableForm = ({formTitle, handleSubmit, submitBtnText = 'Submit', children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value || null,
            email: e.target.email.value || null,
            password: e.target.password.value || null,
        }
        handleSubmit(data);
    }

    return (
        <div>
            <h2>{formTitle}</h2>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" placeholder="Name"/>
                <br />
                <input type="email" name="email" placeholder="Email"/>
                <br />
                <input type="password" name="password" placeholder="Password"/>
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

ReuseableForm.propTypes = {
    formTitle: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitBtnText: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default ReuseableForm;