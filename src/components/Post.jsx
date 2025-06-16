import { useState } from 'react'
import './Post.css'
import { ThumbsUp } from 'lucide-react';
import { ThumbsDown } from 'lucide-react';
import { Reply } from 'lucide-react';
import profileSvg from '../assets/default-profile-picture.svg'

export default function Post() {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  const [userLiked, setUserLiked] = useState(false)
  const [userDisliked, setUserDisliked] = useState(false)

  const handleLike = () => {
    if (userLiked) {
      setLikes(likes - 1)
      setUserLiked(false)
    } else {
      setLikes(likes + 1)
      setUserLiked(true)
      if (userDisliked) {
        setDislikes(dislikes - 1)
        setUserDisliked(false)
      }
    }
  }

  const handleDislike = () => {
    if (userDisliked) {
      setDislikes(dislikes - 1)
      setUserDisliked(false)
    } else {
      setDislikes(dislikes + 1)
      setUserDisliked(true)
      if (userLiked) {
        setLikes(likes - 1)
        setUserLiked(false)
      }
    }
  }

  return (
    <div className="post">
      <div className="post-header">
        <img src={profileSvg} alt="Profile" className="post-avatar" />
        <div>
          <div className="post-author">John Doe</div>
          <div className="post-time">Posted 2 hours ago</div>
        </div>
      </div>
      <div className="post-body">
        This is a sample post on the About page. Feel free to like, dislike, or reply!
      </div>
      <div className="post-actions">
        <button
          className={userLiked ? 'active' : ''}
          onClick={handleLike}
        >
          <ThumbsUp color="#e3008c" /> {likes}
        </button>
        <button
          className={userDisliked ? 'active' : ''}
          onClick={handleDislike}
        >
          <ThumbsDown color="#e3008c" /> {dislikes}
        </button>
        <button>
          <Reply color="#e3008c" />
        </button>
      </div>
    </div>
  )
}
