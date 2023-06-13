import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LogSign from "./LogSign";
import SignIn from "./SignIn";
import SocialContext from "../../SocialContext";
const AuthRouter = () => {
    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
 const {user, setUser} = useContext(SocialContext)
    const handleLogClick = () => {
        console.log('click');
        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailValue,
                password : passwordValue 
            })
        }).then(res=> res.json()).then(data => setUser(data))
    };
    const handleSignClick = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstNameValue,
                lastName: lastNameValue,
                email: emailValue,
                password : passwordValue 
            })
        }).then(res=> res.json()).then(data => setUser(data))
    };
    return (
        <div>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <LogSign
                            handleLogClick={handleLogClick}
                            setEmailValue={setEmailValue}
                            setPasswordValue={setPasswordValue}
                        />
                    }></Route>
                <Route
                    path="/signup"
                    element={
                        <SignIn
                            handleSignClick={handleSignClick}
                            setEmailValue={setEmailValue}
                            setPasswordValue={setPasswordValue}
                            setFirstNameValue={setFirstNameValue}
                            setLastNameValue={setLastNameValue}
                        />
                    }></Route>
            </Routes>
        </div>
    );
};

export default AuthRouter;
