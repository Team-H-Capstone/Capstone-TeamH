import { doc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase/firebase-config";

const Comment = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [user] = useAuthState(auth);
  const commentCollection = doc(db, "posts", id);

  useEffect(() => {
    onSnapshot(commentCollection, (snapshot) => {
      setComments(snapshot.data().comments);
    });
  }, []);

  const addComment = (e) => {
    if (e.key === "Enter") {
      updateDoc(commentCollection, {
        comments: arrayUnion({
          comment: comment,
          name: user.displayName
        }),
      }).then(() => {
        setComment("");
      });
    }
  };

  return (
    <div>
      <h1 className="flex flex-col font-bold text-4xl">Comments</h1>
      {comments.length === 0 ? (
        <h1>No Comments</h1>
      ) : (
        <div className="pt-2 bg-white rounded-lg w-full sm:w-[900px] bg-white shadow-2xl m-2 p-2">
          {comments.map((comment) => (
            <div key={comment} className="text-black rounded-lg p-1 py-1">
              <span className="text-[12px]">{comment.name}:</span>
              <h1 className="font-bold"> {comment.comment}</h1>
            </div>
          ))}
        </div>
      )}

      {user ? (
        <div className="p-2">
          <input
            className="text-black rounded-lg p-1 border-4"
            value={comment}
            placeholder="Add a Comment"
            onChange={(event) => {
              setComment(event.target.value);
            }}
            onKeyUp={(e) => {
              addComment(e);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Comment;
