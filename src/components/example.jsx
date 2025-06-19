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


















const handleReaction = () => {
  if (userLiked) {
    setLikes(likes - 1)
    setUserLiked(false)
    return;
  }

  setLikes(likes + 1)
  setUserLiked(true)

  setDislikes(dislikes - 1)
  setUserDisliked(false)

  // if (userDisliked) {
  //   setDislikes(dislikes - 1)
  //   setUserDisliked(false)
  // }

  return;

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

