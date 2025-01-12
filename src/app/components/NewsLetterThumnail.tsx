export default function NewsLetterThumbnail({ link, month }: { link: string; month: string }) {
  return (
    <div className="relative w-96 h-64 bg-red-800 rounded-md overflow-hidden">
      {/* PDF First Page Preview */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 w-full h-full"
      >
        <embed
          src={`${link}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
          type="application/pdf"
          className="w-full h-full rounded-md pointer-events-none"
        />
      </a>

    
    </div>
  );
}
