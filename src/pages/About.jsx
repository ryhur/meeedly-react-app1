import Post from '../components/Post'

function About() {

  const posts = [{
    "id": 1,
    "title": "His mother had always taught him",
    "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    "tags": [
      "history",
      "american",
      "crime"
    ],
    "reactions": [
      {
        "user_id": 1,
        "reaction": true
      },
      {
        "user_id": 12,
        "reaction": true
      },
      {
        "user_id": 13,
        "reaction": false
      }
    ],
    "views": 305,
    "userId": 121,
    "userName": "Bryan"
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
    "reactions": [
      {
        "user_id": 1,
        "reaction": true
      },
      {
        "user_id": 12,
        "reaction": true
      },
      {
        "user_id": 13,
        "reaction": false
      }
    ],
    "views": 400,
    "userId": 122,
    "userName": "Rylan"
  },
  {
    "id": 3,
    "title": "His father had always taught him",
    "body": "His father had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    "tags": [
      "history",
      "american",
      "crime"
    ],
    "reactions": [
      {
        "user_id": 12,
        "reaction": true
      },
      {
        "user_id": 13,
        "reaction": false
      }
    ],
    "views": 400,
    "userId": 122,
    "userName": "Rylan"
  }]



  return (
    <>
      {
        posts.map(({ id, title, userName, body, reactions }) => {
          return (
            <Post key={id} title={title} userName={userName} body={body} reactionsObject={reactions} />
          )
        })
      }
    </>
  )
}

export default About