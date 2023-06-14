import React from "react";
import { useContext, useState, useEffect } from "react";
import SocialContext from "../../SocialContext";

const User = () => {
    const { theme, setTheme, user, setUser } = useContext(SocialContext);
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

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

        field: {
            fontSize: "200%",
            color: "rgb(150,145,145)",
            borderColor: "rgb(150,145,145)",
            borderWidth: "thick",
            textAlign: "center",
            borderStyle: "solid",
            borderRadius: "12px",
        },

        signOutButton: {
            fontSize: "230%",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#11bf1d",
            borderRadius: "12px",
            paddingTop: "2%",
            paddingBottom: "2%",
            paddingRight: "4%",
            paddingLeft: "4%",
            width: "100%",
            marginTop: "6%",

            marginLeft: "7%",
        },

        buttonPad: {
            paddingTop: "8.5%",
        },

        lightButton: {
            fontSize: "130%",
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "12px",
            paddingTop: "2%",
            paddingBottom: "2%",
            paddingRight: "4%",
            paddingLeft: "4%",
            marginLeft: "-60%",
            width: "400%",
        },

        buttonPad: {
            paddingTop: "8.5%",
        },

        darkButton: {
            fontSize: "130%",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "12px",
            paddingTop: "2%",
            paddingBottom: "2%",
            paddingRight: "4%",
            paddingLeft: "",
            marginLeft: "-60%",
            marginTop: "4%",
            width: "400%",
        },

        buttonPad: {
            paddingTop: "8.5%",
        },

        buttonPad: {
            paddingTop: "8.5%",
        },

        userProfile: {
            display: "flex",
            flexDirection: "column",
            marginTop: "20%",
            marginLeft: "19%",
        },

        viewMode: {
            display: "flex",
            // flexDirection:"row",
            justifyContent: "center",

            flexDirection: "column",
            width: "28%",
            alignContent: "center",
            marginLeft: "10%",
        },

        pTag: {
            fontWeight: "bold",
            marginTop: "12%",
        },

        emailRow: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
        },

        emailAdd: {
            marginTop: "-7%",
            fontSize: "150%",
        },
    };

    return (
        <div style={styles.userProfile}>
            <h1>Profile</h1>
            <img src="https://unsplash.it/150/150" alt="" className="profileImg" />
            <br />
            <span style={styles.emailAdd} className="profileName">
                {" "}
                {user.firstName} {user.lastName}
            </span>

            <div>
                <h2 style={styles.pTag}>Email:</h2>
                <p style={styles.emailAdd}>{user.email}</p>
            </div>
            <div>
                <h2 style={styles.pTag}>View Mode:</h2>
            </div>
            <div style={styles.viewMode}>
                    <button onClick={toggleTheme} style={styles.lightButton}>
                    Light
                </button>
                <button onClick={toggleTheme} style={styles.darkButton}>
                    Dark
                </button>
            </div>

            <button style={styles.signOutButton} onClick={() => setUser({})}>Sign Out</button>
        </div>
    );
};

export default User;
