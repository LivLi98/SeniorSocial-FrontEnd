import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import SignIn from "./components/LoginSignIn/SignIn";

import SideBar from "./components/Sidebar/Sidebar";
import UserPosts from "./FeedComponent/UserPost";
import CreatePost from "./FeedComponent/CreatePost";

import LogSign from "./components/LoginSignIn/LogSign";
import { useContext, useState } from "react";
import SocialContext from "./SocialContext";
import User from "./components/UserProfile/User";
import AuthRouter from "./components/LoginSignIn/AuthRouter";

function App() {
    const [user, setUser] = useState({});
    const [theme, setTheme] = useState('light')
    const [posts, setPosts] = useState([]);
    const [likedPosts, setLikedPosts] = useState([]);
    const [myPosts, setMyPosts] = useState([]);

    


    const moveToLiked = (post) => {
        setLikedPosts([...likedPosts, post]);
    };

    return (
        <div className={`App ${theme}`} >
            <SocialContext.Provider
                value={{
                    user,
                    setUser,
                    posts,
                    setPosts,
                    likedPosts,
                    setLikedPosts,
                    myPosts,
                    setMyPosts,
                    theme,
                    setTheme,
                    moveToLiked
                }}>
                {user.id ? <Main /> : <AuthRouter />}
            </SocialContext.Provider>
        </div>
    );
}

export default App;
