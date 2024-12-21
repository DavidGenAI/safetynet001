import React, { useState, useEffect } from "react";
import Video from "./Video";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch videos from Firestore using modular API
    const unsubscribe = onSnapshot(collection(db, "videos"), (snapshot) => {
      setVideos(snapshot.docs.map((doc) => doc.data()));
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }, index) => (
            <Video
              key={index}
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
