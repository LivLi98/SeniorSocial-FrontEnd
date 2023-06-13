import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import UserPosts from "../FeedComponent/UserPost";
import Sidebar from "./Sidebar/Sidebar";
import User from "./UserProfile/User";
import FeedComponent from "../FeedComponent/FeedComponent";
import SocialContext from "../SocialContext";

import MyPosts from "./MyPosts/MyPosts";
import LikedPosts from "./MyPosts/LikedPosts";

const Main = () => {
    const { user, setUser, posts, setPosts, likedPosts, setLikedPosts, myPosts, setMyPosts, } =
        useContext(SocialContext);
    useEffect(() => {
        setPosts([]);
        fetch("http://localhost:3000/posts")
            .then((res) => res.json())
            .then((fetchPosts) => setPosts([...posts, ...fetchPosts]));
        console.log([...posts]);
    }, []);
    useEffect(() => {
        setMyPosts([]);
        fetch("http://localhost:3000/posts/1")
            .then((res) => res.json())
            .then((fetchPosts) => setMyPosts([...myPosts, ...fetchPosts]));
        console.log([...myPosts]);
    }, []);
    return (
        <div>
            <Sidebar></Sidebar>
            <Routes>
                <Route path="/posts" element={<FeedComponent />} />
                <Route path="/likes" element={<LikedPosts />} />
                <Route path="/myposts" element={<MyPosts />} />
                <Route path="/profile" element={<User />} />
            </Routes>

        </div>
    );
};

export default Main;
