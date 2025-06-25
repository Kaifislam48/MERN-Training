import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup(){
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function onPasswordChange(event) {
        setPassword(event.target.value);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        if(username.length < 5){
            alert("Username should be more than 5 characters");
            return;
        }
        if(password.length < 6){
            alert("Password should be more than 6 characters");
            return;
        }
        console.log(event)
        let user={username, email, password};
        localStorage.setItem('user', JSON.stringify(user));

        navigate("/login");
    }
    return (
        <div>
            <h1 className="text-light">Signup</h1>
            <form onSubmit={onFormSubmit}>
                <span>
                    <input type="text" placeholder="Username" onChange={function(event){
                        setUserName(event.target.value);
                    }} />
                    <br/>
                    <input type="email" placeholder="Email" onChange={(event) => {
                        setEmail(event.target.value);
                    }}/>
                    <br/>
                    <input type="password" placeholder="Password" onChange= {onPasswordChange}/>
                    <br/>
                    <input type="submit" value="Sign Up" />
                    <br/>
                </span>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    )
}