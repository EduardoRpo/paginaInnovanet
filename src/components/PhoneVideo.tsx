type PhoneVideoProps = {
  src: string;
  poster: string;
  title: string;
};

export function PhoneVideo({ src, poster, title }: PhoneVideoProps) {
  return (
    <div className="phone-video">
      <div className="phone-video__glow" aria-hidden="true" />
      <div className="phone-video__frame">
        <video
          src={src}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          title={title}
        >
          Tu navegador no reproduce este video.
        </video>
      </div>
    </div>
  );
}
