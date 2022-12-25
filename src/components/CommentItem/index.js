import './index.css'

const CommentItem = props => {
  const {commentDetails, newComment} = props
  const {id, name, comment, date, isLiked} = commentDetails

  const likeUrl = isLiked
    ? "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
    : "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"

  const onClickLikeIcon = () => {
    newComment(id)
  }

  const onClickDeleteButton = () => {
    newComment(id)
  }

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
        <p>{date}</p>
      </div>
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{comment}</p>
        <button
          type="button"
          className="like-icon-container"
          onClick={onClickLikeIcon}
        >
          <img src={likeUrl} className="like-icon" alt="Like" />
        </button>
        <button
          type="button"
          className="delete-icon-container"
          onClick={onClickDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete-icon"
            alt="Delete"                
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
