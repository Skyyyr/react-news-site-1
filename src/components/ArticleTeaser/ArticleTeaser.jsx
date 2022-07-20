function ArticleTeaser(props) {

    return (
        <div>
            <a onClick={() => props.handleTitleClick(props.id)}>
                {props.title}
            </a>
            <p>
                {props.created_date}
            </p>
        </div>
    )
}

export default ArticleTeaser;
