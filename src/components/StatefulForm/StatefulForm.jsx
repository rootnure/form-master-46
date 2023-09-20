import { useState } from "react";


const StatefulForm = () => {

    const [name, setName] = useState('__default__');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    
    
    const handleSubmit = e => {
        e.preventDefault();
        if(!password || password.length < 8){
            setError('Password cannot be less than 8 char long');
        }
        else {
            setError('');
            console.log({name, email, password});
        }
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} value={name} placeholder="name" type="text" name="name"/>
                <br />
                <input onChange={handleEmailChange} placeholder="email" type="email" name="email"/>
                <br />
                <input onChange={handlePasswordChange} placeholder="password" type="password" name="password"/>
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;