export default function YT_Video_Card({ link, classname }: { link: string; classname?: string }) {
    return (
        <div className={`group w-full h-80 max-w-md rounded overflow-hidden shadow-lg bg-white ${classname}`}>
            {/* YouTube Video */}
            <div className=" h-full">
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${extractVideoID(link)}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

// Helper function to extract the YouTube video ID from a URL
function extractVideoID(link: string): string {
    const regex = /(?:\?v=|\/embed\/|\/v\/|youtu\.be\/|\/watch\?v=)([^&\n?#]+)/;
    const match = link.match(regex);
    return match ? match[1] : link; // If no match, return the link as a fallback
}
