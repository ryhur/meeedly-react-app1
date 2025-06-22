import { useState } from 'react'
import './Post.css'
import profileSvg from '../assets/default-male-profile.svg'
import likeSvg from '../assets/like-icon.svg'
import dislikeSvg from '../assets/dislike-icon.svg'
import replySvg from '../assets/reply-icon.svg'

export default function Post({ title, userName, body, reactionsArray }) {
  // hardcode the user_id to 1 ("our current user")
  const user_id = 1
  // initialize the reactions state with the incoming reactions or empty array
  const [reactions, setReactions] = useState(reactionsArray || [])
  // check the user's stored reaction (if it exists) to highlight their reaction upon loading the page
  const userStoredReaction = reactions?.find(reactionObject => reactionObject?.user_id === user_id)?.reaction
  // collect the reactions that are a "like"
  const likes = reactions?.filter(reactionObject => reactionObject?.reaction === true)
  // collect the reactions that are a "dislike"
  const dislikes = reactions?.filter(reactionObject => reactionObject?.reaction === false)

  const toggleReaction = (reaction) => {
    // check if the current user already made a reaction on this post
    const userReacted = reactions?.some(reactionObject => reactionObject.user_id === user_id)

    // if user didn't already make a reaction, add their id and reaction to reactions
    if (!userReacted) {
      // spread the reactions array and add a new object with the updated id and reaction
      setReactions([...reactions, { user_id: user_id, reaction: reaction }])
      return
    }

    // not needed: const userSavedReactions = reactions?.filter(reaction => reaction?.user_id === user_id)

    const updatedReactions = reactions?.map(reactionObject => {
      // if the user selects the same reaction -> untoggle, delete reaction (null)
      // if the user selects a different reaction -> update the reaction to the new one
      if (reactionObject?.user_id === user_id) {
        return { ...reactionObject, reaction: reactionObject?.reaction === reaction ? null : reaction }
      }

      return reactionObject
    })

    setReactions(updatedReactions)
  }

  return (
    <div className="post">
      <div className="post-picture">
        <img src={profileSvg} alt="Profile" className="post-avatar" />
      </div>
      <div className="post-content">
        <div className="post-header">
          <div>
            <div className="post-author">{title}</div>
            <div className="post-time">{userName}</div>
          </div>
        </div>
        <div className="post-body">
          {body}
        </div>
        <div className="post-actions">
          <div className="post-actions-left">
            <button
              className={userStoredReaction === true ? 'active' : ''}
              onClick={() => toggleReaction(true)}
            >
              <img src={likeSvg} alt="Profile" className="like-button" />
              {likes.length}
            </button>
            <button
              className={userStoredReaction === false ? 'active' : ''}
              onClick={() => toggleReaction(false)}
            >
              <img src={dislikeSvg} alt="Profile" className="dislike-button" />
              {dislikes.length}
            </button>
          </div>
          <button>
            <img src={replySvg} alt="Profile" className="reply-button" />
            Reply
          </button>
        </div>
      </div>
    </div>
  )
}
