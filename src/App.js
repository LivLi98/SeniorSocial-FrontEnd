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

function App() {
    const [user, setUser] = useState(true);
    const [darkMode, setDarkMode] = useState(false)
    const [posts, setPosts] = useState([]);
    const [likedPosts, setLikedPosts] = useState([]);
    const [myPosts, setMyPosts] = useState([]);

    


    const moveToLiked = (post) => {
        setLikedPosts([...likedPosts, post]);
    };

    return (
        <div className="App">
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
                    darkMode,
                    setDarkMode,
                    moveToLiked
                }}>
                {user ? <Main /> : <SignIn />}
            </SocialContext.Provider>
        </div>
    );
}

export default App;
