import React from "react";
import { Link } from "react-router-dom";
const SignIn = ({handleSignClick, setEmailValue,setFirstNameValue,setLastNameValue,setPasswordValue}) => {
    const styles = {
        header: {
            paddingTop: "10%",
            fontSize: "300%",
            color: "rgb(150,145,145)",
        },

        button: {
            width: "50%",
            height: "30%",
        },

        inputfields: {
            paddingTop: "8.5%",
            color: "rgb(150,145,145)",
        },

        field: {
            fontSize: "180%",
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
    const handleFirstNameChange = (e) => {
        setFirstNameValue(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastNameValue(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmailValue(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value)
    }
    return (
        <div className="SignUpBody">
            <h1 style={styles.header}>Sign Up</h1>
            <div className="InputFields">
                <label className="InputField" style={styles.inputfields}>
                    <input type="text" placeholder="First Name" style={styles.field} onChange={ handleFirstNameChange} />
                </label>
                <div className="InputField" style={styles.inputfields} onChange={ handleLastNameChange }>
                    <input type="text" placeholder="Last Name" style={styles.field} />
                </div>
                <div className="InputField" style={styles.inputfields} onChange={handleEmailChange }>
                    <input type="text" placeholder="Email" style={styles.field} />
                </div>
                <div className="InputField" style={styles.inputfields} onChange={handlePasswordChange}>
                    <input type="text" placeholder="Password" style={styles.field} />
                </div>
            </div>
            <div style={styles.buttonPad}>
                <Link to="/login">
                    <button className="EnterButton" style={styles.SubmitButton}>
                        Already Have Account
                    </button>
                </Link>
                <Link to='/posts'>
                    
                <button className="SubmitButton" style={styles.SubmitButton} onClick={handleSignClick}>
                    Submit
                </button>
                </Link>
            </div>
        </div>
    );
};

export default SignIn;
