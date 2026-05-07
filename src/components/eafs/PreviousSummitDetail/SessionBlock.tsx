import { BlocksRenderer } from "@/lib/blocks-renderer";
import { extractYouTubeId } from "@/utils/youtube";

interface SessionBlockProps {
  session: any;
}

const SessionBlock = ({ session }: SessionBlockProps) => {
  const presentations = session.presentations?.videoItem || [];
  const panelDiscussions = session.panelDiscussions?.videoItem || [];
  const sessionDescription = session.sessionDescription || "";
  return (
    <section className="px-4 py-12 md:px-8">
      <h2 className="mb-4 text-center text-3xl font-bold">
        {session.sessionTitle}
      </h2>
      <div className="mb-8 text-center">
        {Array.isArray(sessionDescription) ? (
          <BlocksRenderer content={sessionDescription} />
        ) : (
          <p>{sessionDescription}</p>
        )}
      </div>
      {/* Presentations */}
      <h3 className="mb-2 text-2xl font-semibold ">Presentations</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {presentations.map((video: any, i: number) => (
          <div key={i} className="flex flex-col items-center">
            <div className="mb-2 aspect-video w-full bg-gray-200">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${extractYouTubeId(video.youtubeURL)}`}
                title={video.caption || `Presentation Video ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div>{video.caption}</div>
          </div>
        ))}
      </div>
      {/* Panel Discussions */}
      <h3 className="mb-2 text-2xl font-semibold mt-12">Panel Discussions</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {panelDiscussions.map((video: any, i: number) => (
          <div key={i} className="flex flex-col items-center">
            <div className="mb-2 aspect-video w-full bg-gray-200">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${extractYouTubeId(video.youtubeURL)}`}
                title={video.caption || `Panel Discussion Video ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div>{video.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SessionBlock;
