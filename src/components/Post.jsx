import { useState } from 'react'
import './Post.css'
import profileSvg from '../assets/default-male-profile.svg'
import likeSvg from '../assets/like-icon.svg'
import dislikeSvg from '../assets/dislike-icon.svg'
import replySvg from '../assets/reply-icon.svg'

export default function Post({ title, userName, body, reactionsObject }) {
  const user_id = 1

  const [reactions, setReactions] = useState(reactionsObject || [])
  const likes = reactions?.filter(reaction => reaction?.reaction === true)

  const dislikes = reactions?.filter(reaction => reaction?.reaction === false)

  const toggleReaction = (reaction) => {
    const userExists = reactions?.some(item => item.user_id === user_id)

    if (!userExists) {
      setReactions(...reactions, { user_id: 1, reaction: reaction })
      return;
    }

    const userSavedReaction = reactions?.filter(item => item.user_id === user_id)

    const updated = reactions?.map(item => {
      if (item?.user_id === user_id) {
        return { ...item, reaction: reaction }; // update reaction
      }

      return item;
    })

    setReactions(updated)
  }

  // const [userReaction, setUserReaction] = useState({ user_id: 36, reaction: null })

  // // Initial counts
  // const initialLikes = 0
  // const initialDislikes = 0

  // // Calculate counts based on userReaction
  // const likes = userReaction.reaction === 'like' ? initialLikes + 1 : initialLikes
  // const dislikes = userReaction.reaction === 'dislike' ? initialDislikes + 1 : initialDislikes

  // const toggleReaction = (reaction) => {
  //   setUserReaction((prev) => ({
  //     user_id: prev.user_id,
  //     reaction: prev.reaction === reaction ? null : reaction,
  //   }))
  // }

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
              onClick={() => toggleReaction(true)}
            >
              <img src={likeSvg} alt="Profile" className="like-button" />
              {likes.length}
            </button>
            <button
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
