const [likes, setLikes] = useState(0)
const [dislikes, setDislikes] = useState(0)

const [userLiked, setUserLiked] = useState(false)
const [userDisliked, setUserDisliked] = useState(false)


const posts = [{
  "id": 1,
  "title": "His mother had always taught him",
  "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  "tags": [
    "history",
    "american",
    "crime"
  ],
  "reactions": {
    "likes": 192,
    "dislikes": 25
  },
  "views": 305,
  "userId": 121
},
{
  "id": 2,
  "title": "His father had always taught him",
  "body": "His father had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  "tags": [
    "history",
    "american",
    "crime"
  ],
  "reactions": {
    "likes": 200,
    "dislikes": 35
  },
  "views": 400,
  "userId": 122
}]

// previous revised code - per chatgpt
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


const handleReaction = () => {
  if (userLiked) {
    setLikes(likes - 1)
    setUserLiked(false)
    return; // 2) if user liked, we can return early
  }

  // 3) code below MUST execute since at this point we know with 100% certainty that the user has not clicked like
  setLikes(likes + 1)
  setUserLiked(true)

  // 3.1) thats why we can remove the if-statement checking for the userDisliked condition
  setDislikes(dislikes - 1)
  setUserDisliked(false)

  // if (userDisliked) {
  //   setDislikes(dislikes - 1)
  //   setUserDisliked(false)
  // }

  return; // 4) ensure we return in any case

  //

  // if (userLiked) {
  //   setLikes(likes - 1)
  //   setUserLiked(false)
  // } else {
  //   setLikes(likes + 1)
  //   setUserLiked(true)
  //   if (userDisliked) {
  //     setDislikes(dislikes - 1)
  //     setUserDisliked(false)
  //   }
  // }
}

// 1) remove handleDislike(). we only need handleReaction() because it is near-zero probability that the user will be able to select like and dislike at the same time

// const handleDislike = () => {
//   if (userDisliked) {
//     setDislikes(dislikes - 1)
//     setUserDisliked(false)
//   } else {
//     setDislikes(dislikes + 1)
//     setUserDisliked(true)
//     if (userLiked) {
//       setLikes(likes - 1)
//       setUserLiked(false)
//     }
//   }
// }