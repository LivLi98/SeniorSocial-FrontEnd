
import React from "react";
import UserPosts from "../../FeedComponent/UserPost";
import { useContext } from "react";
import SocialContext from "../../SocialContext";
const MyPosts = () => {
    const { user, setUser, posts, setPosts, savedPosts, setSavedPosts, myPosts, setMyPosts , darkMode} =
        useContext(SocialContext);
   const style = {

      backgroundColor: darkMode?"black":"a2d8fe",

      textColor: darkMode?"white":"black"
        

   }

    return (
        <div>
            {myPosts.map((posts) => (
                <UserPosts firstName={posts.firstName} text={posts.text} />
            ))}

        </div>
    );
};

export default MyPosts;
