import { borderRadius } from "@mui/system";
import React, { useContext } from "react";
import SocialContext from "../SocialContext";

const UserPosts = ({ firstName, text }) => {
    const { movetoLiked } = useContext(SocialContext)
    const handleClick = (e) => {
        movetoLiked(e)
    }
    const styles = {
        user: {
            marginLeft: "15%",
            fontFamily: " Arial, Helvetica, sans-serif",
        },

        posted: {
            fontWeight: "bold",
            fontSize: "119%",
            marginLeft: "5%",
            paddingTop: "2%",
            marginTop: ".5cm",
        },
        userContainer: {
            display: "flex",
            justifyContent: "center",
            marginRight: "1.5cm",
        },

        container: {
            display: "flex",
            flexDirection: "column",
            marginRight: "2cm",
        },

        buttons: {
            display: "flex",
            flexDirection: "row",
        },

        likes: {
            borderRadius: "12px",
            fontSize: "30px",
            fontWeight: "bold",
        },

        comment: {
            borderRadius: "12px",
            marginLeft: "4%",
            fontSize: "30px",
            fontWeight: "bold",
        },

        posted: {
            marginLeft: "2.7%",
        },

        post: {
            marginLeft: "7%",
        },

        box: {
            fontSize: "135%",
            fontWeight: "bold",
        },
    };

    return (
        <div className="userPost" style={styles.post}>
            <div className="user-container" style={styles.container}>
                <div className="imgpic">
                    <img
                        className="pFpic"
                        src="https://realblackgrandmothers.com/wp-content/uploads/2017/09/Ms.-Dora-Bio-300x300.jpg"
                        alt="pfp"
                    />
                </div>
                <div style={styles.userContainer}>
                    <h2 style={styles.user}>{firstName}</h2>
                    <h2 style={styles.posted}>posted:</h2>
                </div>
                <div className="postuser">
                    <p style={styles.box}>
                        {text}
                    </p>
                </div>
                <div className="btns">
                    <button style={styles.likes} onClick={handleClick}>Like</button>
                    <button style={styles.comment}>Comment</button>
                </div>
            </div>
            <div className="user-post">
                <p></p>
            </div>
        </div>
    );
};

export default UserPosts;
