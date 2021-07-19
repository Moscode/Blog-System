import {useState, useEffect} from "react"
import BlogList from "./BlogList"

const Homepage =()=>{
    
    const [posts, setPosts] = useState(
        [
            {Title:"Understanding How to Respond to Event", Author:"Moscode", Body:"Lorum ipsum...", id: "1"},
            {Title:"Understanding How to Respond to Event", Author:"Dammy", Body:"Lorum ipsum...", id: "2"},
            {Title:"Understanding How to Respond to Event", Author:"Moscode", Body:"Lorum ipsum...", id: "3"},
            {Title:"Understanding How to Respond to Event", Author:"Sky", Body:"Lorum ipsum...", id: "4"},
            {Title:"Understanding How to Respond to Event", Author:"Moscode", Body:"Lorum ipsum...", id: "5"},
            {Title:"Understanding How to Respond to Event", Author:"Sky", Body:"Lorum ipsum...", id: "6"}
        ]
        )
    const [name, setName] = useState("Moses");


    const handleDelete =(id)=>{
        const newPost = posts.filter(post=> post.id !== id);
        setPosts(newPost);
    } 

    useEffect(()=>console.log("use Effect run"), [name])

    return(
        <div className="home">
            <BlogList posts={posts} head="All Posts" handleDelete = {handleDelete}/>
            <p>{name}</p>
            <button onClick={()=>setName("Dammy")}>Change name</button>

           {/*<BlogList posts = {posts.filter(post=>post.Author === "Sky")} head="Sky's Posts"/>*/}
        </div>
    );
}

export default Homepage;