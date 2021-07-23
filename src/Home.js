import {useState, useEffect} from "react"
import BlogList from "./BlogList"

const Homepage =()=>{
    
    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(()=>{
       setTimeout(()=>{
        fetch("http://localhost:8000/posts")
       .then(
           (res)=>{
               return(res.json())
           }
       ).then(
           (data)=>{
               setPosts(data)
               setIsLoading(false);
           }
       ).catch(err=>{
           console.log(err.message)
       })
    },2000)},[])

    return(
        <div className="home">
            {isLoading && <div>Loading...</div>}
           {posts && <BlogList posts={posts} head="All Posts"/>}
           {/*<BlogList posts = {posts.filter(post=>post.Author === "Sky")} head="Sky's Posts"/>*/}
        </div>
    );
}
export default Homepage;