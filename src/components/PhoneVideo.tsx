"use client";

import { useRef, useState } from "react";

type PhoneVideoProps = {
  src: string;
  poster: string;
  title: string;
};

export function PhoneVideo({ src, poster, title }: PhoneVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }

  return (
    <div className="phone-video">
      <div className="phone-video__glow" aria-hidden="true" />
      <div className={`phone-video__frame${playing ? " is-playing" : ""}`}>
        <video
          ref={ref}
          src={src}
          poster={poster}
          playsInline
          preload="metadata"
          controls={playing}
          title={title}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          Tu navegador no reproduce este video.
        </video>
        {!playing ? (
          <button
            type="button"
            className="phone-video__play"
            onClick={toggle}
            aria-label={`Reproducir: ${title}`}
          >
            <span />
          </button>
        ) : null}
      </div>
    </div>
  );
}
