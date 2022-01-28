import { useState } from 'react'

function CommentsPage() {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState([])

  const fetchComments = async () => {
    const response = await fetch('/api/comments')
    const data = await response.json()

    setComments(data)
  }

  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
  }

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    console.log(data)
    fetchComments()
  }

  return (
    <>
      <input
        type='text'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type='button' onClick={submitComment}>
        Submit comment
      </button>
      <hr />
      <button type='button' onClick={fetchComments}>
        Load comments
      </button>
      <hr />
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h2>
              {comment.id} : {comment.text}
            </h2>
            <button type='button' onClick={() => deleteComment(comment.id)}>
              Delete
            </button>
          </div>
        )
      })}
    </>
  )
}

export default CommentsPage
