import { doc, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({
      type: "USE",
      payload: u
    });
  };

  return (
    <div className="chats">
      <div className="userChat" onClick={()=> handleSelect()}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHdiymEKdaBxhm4xw9p9Sl5JygCTHEC8oEDw&usqp=CAU"
          alt="pp"
        />
        <div className="userChatInfo">
          <span>Rosh</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
