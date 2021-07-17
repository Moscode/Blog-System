import {useState} from "react"

const Homepage =()=>{
    
    const [posts, setPost] = useState(
        [
            {Title:"Understanding How to Respond to Event", Author:"Moscode", Body:"Lorum ipsum...", id: "1"},
            {Title:"Understanding How to Respond to Event", Author:"Moscode", Body:"Lorum ipsum...", id: "1"},
            {Title:"Understanding How to Respond to Event", Author:"Moscode", Body:"Lorum ipsum...", id: "1"},
            {Title:"Understanding How to Respond to Event", Author:"Moscode", Body:"Lorum ipsum...", id: "1"},
            {Title:"Understanding How to Respond to Event", Author:"Moscode", Body:"Lorum ipsum...", id: "1"},
            {Title:"Understanding How to Respond to Event", Author:"Moscode", Body:"Lorum ipsum...", id: "1"}
        ]
        )

    return(
        <div className="home">
            {posts.map((post)=>{
                return(
                <div className="post-preview" id ={post.id}>
                    <h3>{post.Title}</h3>
                    <p>{post.Author}</p>
                </div>
                )
              })}
        </div>
    );
}

export default Homepage;