import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentCount: 0,
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
}

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeComment = event => {
    this.setState({commentInput: event.target.value})
  }

  render() {
    const {nameInput, commentInput, commentCount} = this.state
    return (
      <div className="comment-main-container">
        <h1>Comments</h1>
        <p>Say something about 4.0 Technologies </p>
        <div className="align-container">
          <div className="comment-sec">
            <form onSubmit={this.newComment}>
              <input
                type="text"
                placeholder="Your Name"
                className="name-container"
                value={nameInput}
                onChange={this.onChangeName}
              />
              <textarea
                type="textbox"
                rows="8"
                cols="55"
                placeholder="Your Comment"
                className="comment-container"
                value={commentInput}
                onChange={this.onChangeComment}
              />
              <button type="submit" className="add-comment-button">
                Add Comment
              </button>
            </form>
          </div>
          <div className="comment-img-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
            <div className="comment-count-container">
              <h1 className="comment-count">{commentCount}</h1>
              <h1 className="comment-text">Comments</h1>
            </div>
          </div>
        </div>
        <ul className="contacts-table">
          <li className="table-header">
            <p className="table-header-cell name-column"></p>
            <hr className="separator" />
            <p className="table-header-cell"></p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Comments
