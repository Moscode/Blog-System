const BlogList =({posts, head, handleDelete})=>{

    return(
        <div className="blog-list">
        <h2>{head}</h2>
        {posts.map((post)=>{
            return(
            <div className="post-preview" key={post.id}>
                <h3>{post.Title}</h3>
                <p>{post.Author}</p>
                <button onClick={()=>handleDelete(post.id)}>Delete Post</button>
            </div>
            )
        })}
        </div>
    )
}

export default BlogList;

