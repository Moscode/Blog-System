const BlogList =({posts, head})=>{

    return(
        <div className="blog-list">
        <h2>{head}</h2>
        {posts.map((post)=>{
            return(
            <div className="post-preview" key={post.id}>
                <h3>{post.Title}</h3>
                <p>{post.Author}</p>
            </div>
            )
        })}
        </div>
    )
}

export default BlogList;

