import Article from "./Article";

function ArticleList(props) {
    const post = props.posts.map((post) => (
        <Article key={post.id} { ...post } /> 
    ))

    return (
        <main>
            {post}
        </main>
    )

}

export default ArticleList;