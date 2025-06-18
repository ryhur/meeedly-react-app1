import { useState } from 'react'
import './Post.css'
import profileSvg from '../assets/default-male-profile.svg'
import likeSvg from '../assets/like-icon.svg'
import dislikeSvg from '../assets/dislike-icon.svg'
import replySvg from '../assets/reply-icon.svg'

export default function Post() {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  const [userLiked, setUserLiked] = useState(false)
  const [userDisliked, setUserDisliked] = useState(false)

  const handleLike = () => {
    setLikes((prevLikes) => {
      if (userLiked) {
        return prevLikes - 1;
      } else {
        return prevLikes + 1;
      }
    });

    setUserLiked((prevUserLiked) => !prevUserLiked);

    if (userDisliked) {
      setDislikes((prevDislikes) => prevDislikes - 1);
      setUserDisliked(false);
    }
  };

  const handleDislike = () => {
    setDislikes((prevDislikes) => {
      if (userDisliked) {
        return prevDislikes - 1;
      } else {
        return prevDislikes + 1;
      }
    });

    setUserDisliked((prevUserDisliked) => !prevUserDisliked);

    if (userLiked) {
      setLikes((prevLikes) => prevLikes - 1);
      setUserLiked(false);
    }
  };

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
            <button className={userLiked ? 'active' : ''} onClick={handleLike}>
              <img src={likeSvg} alt="Profile" className="like-button" />
              {likes}
            </button>
            <button className={userDisliked ? 'active' : ''} onClick={handleDislike}>
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
