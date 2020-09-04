import React, {useEffect, useState} from "react";
import './Post.css';
import Avatar from "@material-ui/core/Avatar";
import {db} from "../firebase/firebase";
import firebase from "firebase";


function Post({postId, user, username, caption, imageUrl}) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');


  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
          .collection("posts")
          .doc(postId)
          .collection("comments")
          .orderBy('timestamp', 'desc')
          .onSnapshot((snapshot) => {
            setComments(snapshot.docs.map((doc) => doc.data()));
          });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);


  const postComment = (event) => {
    event.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setComment('');
  }

  return (
      <div className="post">
        <div className="post__header">
          <Avatar className="post__avatar"
                  alt='Oleh'
                  src="https://instagram.fiev4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/65524650_628984520927225_4947007365200216064_n.jpg?_nc_ht=instagram.fiev4-1.fna.fbcdn.net&_nc_ohc=CzwRpc-Lma8AX-2WUaG&oh=28ed9eb901b55cf83fd8390a43469c8b&oe=5F7A8E87"
          />
          <h3>{username}</h3>
        </div>
        <img className="post__image" src={imageUrl}/>

        <h4 className="post__text"><strong>{username}</strong> {caption}</h4>

        <div className="post__comments">
          {comments.map((comment) => (
              <p>
                <strong>{comment.username}</strong> {comment.text}
              </p>
          ))}

        </div>
        {user && (
            <form className="post__commentBox">
              <input
                  className="post__input"
                  type="text"
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
              />
              <button
                  className="post__button"
                  disabled={!comment}
                  type="submit"
                  onClick={postComment}
              >
                Post
              </button>
            </form>
        )}
      </div>
  )
}

export default Post;