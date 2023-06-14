import { NineMp } from "@mui/icons-material";
import { border, display, padding } from "@mui/system";
import { useContext, useState } from "react";
import SocialContext from "../SocialContext";

const CreatePost = () => {
    const {user, setUser, posts, setPosts } = useContext(SocialContext);
    const styles = {
        postBox: {
            background: "#e4e7eb",
            borderRadius: "15px",
            maxWidth: "475px",
            width: "60%",
            padding: "25px 25px 15px 25px",
            outlineStyle: "solid",
            borderStyle: "solid",
            color: "rgb(150,145,145)",
            marginLeft: "2.4cm",
            marginTop: "20%",
        },

        postInput: {
            paddingTop: ".5%",
            borderBottom: "1px solid #e4e7eb",
        },

        textArea: {
            minHeight: "230%",
        },

        placeholder: {
            marginTop: "1%",
            fontSize: "22px",
            color: "black",
            pointerEvents: "none",
            fontWeight: "bold",
        },
        inputEdit: {
            background: "",
            borderStyle: "solid",
            height: "50%",
            padding: "12% 13% 12% 13%",
            color: "black",
            fontSize: "120%",
            fontWeight: "bold",
            marginLeft: "-12px",
            borderRadius: "5px",
        },

        button: {
            fontSize: "150%",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#11bf1d",
            borderStyle: "solid",
            borderRadius: "15px",
            padding: "2% 3% 2% 3%",
        },

        addImageButton: {
            fontSize: "150%",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "red",
            borderStyle: "solid",
            borderRadius: "15px",
            padding: "2% 3% 2% 3%",
            marginRight: "7%",
        },

        buttonContainer: {
            display: "flex",
            marginLeft: "5px",
        },

        text: {
            fontSize: "135%",
            fontWeight: "bold",
        },
        button2: {
            fontSize: "150%",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "red",
            borderStyle: "solid",
            borderRadius: "15px",
            padding: "2% 3% 2% 3%",
        },
    };
    const [newPostText, setNewPostText] = useState("");
    const handleChange = (e) => {
        setNewPostText(e.target.value);
    };
    const handlePostClick = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: "user01",
                text: newPostText,
                userId: 3,
            }),
        });
        const response = await fetch("http://localhost:3000/posts");
        const fetchPosts = await response.json();
        setPosts([...fetchPosts]);
    };
    return (
        <div>
            <div className="postBox" style={styles.postBox}>
                <div className="postInput" style={styles.postInput}>
                    <form>
                        <div className="text-area" style={styles.textArea}>
                            <span className="placeholder" style={styles.placeholder}>
                                Make a Post
                            </span>
                            <textarea
                                onChange={handleChange}
                                style={styles.inputEdit}
                                placeholder="Type Here"></textarea>
                        </div>
                        <div className="b-half">
                            <div className="content">
                                <button style={styles.button}>ADD IMAGE</button>
                                <button style={styles.button2} onClick={handlePostClick}>
                                    POST
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
