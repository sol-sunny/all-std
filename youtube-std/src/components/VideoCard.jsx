import React from "react";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
import { useNavigate } from "react-router-dom";

register("ko", koLocale);
export default function VideoCard({ video }) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, {state:{video:video}});  //네비게이터로 화면 옮길때 자료도 같이 넘길수있다.
      }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div>
        <p>{video.snippet.title}</p>
        <p>{video.snippet.channelTitle}</p>
        <p>{format(video.snippet.publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
