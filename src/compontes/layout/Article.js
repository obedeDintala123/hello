const Article = (props) => {
    return (
        <article className="bg-white w-1/2 h-screen m-auto p-6">
          {props.children}
        </article>
    )
}

export default Article;