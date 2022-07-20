function Article(props) {

  return (
    <div>
      <h1>
        {props.title}
      </h1>
      <p>
        {props.created_date}
      </p>
      <h2>
        {props.byline !== undefined ? props.byline : ""}
      </h2>
      <img src={props.image} />
      <p>
        {props.abstract}
      </p>
    </div>
  )
}

export default Article;
