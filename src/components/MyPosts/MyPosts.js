
import React from "react";
import UserPosts from "../../FeedComponent/UserPost";
import { useContext } from "react";
import SocialContext from "../../SocialContext";
const MyPosts = () => {
    const { user, setUser, posts, setPosts, savedPosts, setSavedPosts, myPosts, setMyPosts , darkMode} =
        useContext(SocialContext);
   const style = {
      marginTop:'30%'
   }

    return (
        <div style= {style}>
            {myPosts.map((posts) => (
                <UserPosts firstName={posts.firstName} text={posts.text} id={ posts.userId} />
            ))}

        </div>
    );
};

export default MyPosts;
