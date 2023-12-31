export default function YoutubeEmbed({ embedId }: { embedId: string }) {
    return (
      <div className="video-responsive pt-5">
        <iframe
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/${embedId}?autoplay=1&controls=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    );
  }
  