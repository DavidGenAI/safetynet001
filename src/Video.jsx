import React from "react";
import "./Video.css";

function Video({ url, channel, description, song, likes, messages, shares }) {
  return (
    <div className="video">
      <video className="video__player" src={url} autoPlay muted loop />
      <div className="video__overlay">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <p>🎵 {song}</p>
      </div>
      <div className="video__controls">
        <button>❤️ {likes}</button>
        <button>💬 {messages}</button>
        <button>🔄 {shares}</button>
      </div>
    </div>
  );
}

export default Video;
