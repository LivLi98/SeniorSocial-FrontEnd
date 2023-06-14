import React, { useContext } from "react";
import SocialContext from '../../SocialContext'
import {Link} from 'react-router-dom'
const LogSign = ({handleLogClick, setEmailValue , setPasswordValue}) => {
    const {user, setUser} = useContext(SocialContext)
    const styles = {
        header: {
            paddingTop: "10%",
            fontSize: "400%",
            color: "rgb(150,145,145)",
        },

        button: {
            width: "70%",
            height: "30%",
        },

        inputfields: {
            paddingTop: "8.5%",
            color: "rgb(150,145,145)",
        },

        field: {
            fontSize: "200%",
            color: "rgb(150,145,145)",
            borderColor: "rgb(150,145,145)",
            borderWidth: "thick",
            textAlign: "center",
            borderStyle: "solid",
            borderRadius: "12px",
        },

        SubmitButton: {
            fontSize: "300%",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#11bf1d",
            borderRadius: "12px",
            paddingTop: "2%",
            paddingBottom: "2%",
            paddingRight: "4%",
            paddingLeft: "4%",
        },

        buttonPad: {
            paddingTop: "8.5%",
        },
    };
    const handleEmailChange = (e) => {
        setEmailValue(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value)
    }
    return (
        <div className="LogInBody">
            <h1 style={styles.header}>Log In</h1>
            <div className="InputFields">
                <label className="InputField" style={styles.inputfields}>
                    <input type="text" placeholder="Email" style={styles.field} onChange={handleEmailChange}/>
                </label>
                <div className="InputField" style={styles.inputfields}>
                    <input type="text" placeholder="Password" style={styles.field} onChange={handlePasswordChange}/>
                </div>
            </div>
            <div style={styles.buttonPad}>
                <Link to ='/signup'>

                <button className="EnterButton" style={styles.SubmitButton} >
                    Create New Account
                </button>
                </Link>
                <Link to='/posts'>
                    
                <button className="EnterButton" style={styles.SubmitButton} onClick = {handleLogClick}>
                    Submit
                </button>
                </Link>
            </div>
        </div>
    );
};

export default LogSign;
