import { useState } from 'react'
import './Post.css'
import profileSvg from '../assets/default-male-profile.svg'
import likeSvg from '../assets/like-icon.svg'
import dislikeSvg from '../assets/dislike-icon.svg'
import replySvg from '../assets/reply-icon.svg'

export default function Post() {
  const [userReaction, setUserReaction] = useState({ user_id: 36, reaction: null })

  // Initial counts
  const initialLikes = 0
  const initialDislikes = 0

  // Calculate counts based on userReaction
  const likes = userReaction.reaction === 'like' ? initialLikes + 1 : initialLikes
  const dislikes = userReaction.reaction === 'dislike' ? initialDislikes + 1 : initialDislikes

  const toggleReaction = (reaction) => {
    setUserReaction((prev) => ({
      user_id: prev.user_id,
      reaction: prev.reaction === reaction ? null : reaction,
    }))
  }

  return (
    <div className="post">
      <div className="post-picture">
        <img src={profileSvg} alt="Profile" className="post-avatar" />
      </div>
      <div className="post-content">
        <div className="post-header">
          <div>
            <div className="post-author">John Doe</div>
            <div className="post-time">2 hours ago</div>
          </div>
        </div>
        <div className="post-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis ex purus, et eleifend leo feugiat in. Nam volutpat malesuada diam. Mauris a varius ex, a efficitur odio. Cras dapibus, lorem ac cursus iaculis, nunc mi consequat nibh, vitae varius magna nisl sit amet neque. Etiam ornare leo vel scelerisque mollis.
        </div>
        <div className="post-actions">
          <div className="post-actions-left">
            <button className={userReaction.reaction === 'like' ? 'active' : ''}
              onClick={() => toggleReaction('like')}
              aria-pressed={userReaction.reaction === 'like'}
            >
              <img src={likeSvg} alt="Profile" className="like-button" />
              {likes}
            </button>
            <button className={userReaction.reaction === 'dislike' ? 'active' : ''}
              onClick={() => toggleReaction('dislike')}
              aria-pressed={userReaction.reaction === 'dislike'}
            >
              <img src={dislikeSvg} alt="Profile" className="dislike-button" />
              {dislikes}
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
