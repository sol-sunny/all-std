import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideo from "../components/RelatedVideo";

export default function VideoDetail() {
  const {
    state: { video: video },
  } = useLocation(); //비디오카드페이지 - 네비게이트에서 받아온 state를 불러온다.
  console.log(video);

  return (
    <section>
      <article>
        <iframe
          id="player"
          type="text/html"
          width="640"
          height="390"
          src={`http://www.youtube.com/embed/${video.id}`} //youtube자체에서 제공하는 프레임을 쓴것
          frameborder="0"
        />
        <div>
          <h2>{video.snippet.title}</h2>
          <ChannelInfo
            id={video.snippet.channelId}
            name={video.snippet.channelTitle}
          />
          <pre>{video.snippet.description}</pre>
        </div>
      </article>
      <article>
        <RelatedVideo id={video.id} />
      </article>
    </section>
  );
}
