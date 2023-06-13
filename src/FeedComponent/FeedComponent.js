
import UserPosts from "./UserPost";
import CreatePost from "./CreatePost";
import { useContext } from "react";
import SocialContext from "../SocialContext";
const FeedComponent = () => {
    const { user, setUser, posts, setPosts, savedPosts, setSavedPosts, myPosts, setMyPosts, moveToLiked } =
        useContext(SocialContext);
    const { darkMode } = useContext(SocialContext);
    const style = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: darkMode ? "black" : "a2d8fe",
        textColor: darkMode ? "white" : "black"
    }

    return (
        <div className="Feed" style={style}>
            <CreatePost />
            {
                posts.map(post => (<UserPosts firstName={post.firstName} text={post.text} />))
            }
        </div>
    )
}


export default FeedComponent