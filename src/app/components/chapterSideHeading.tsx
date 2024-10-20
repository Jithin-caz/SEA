interface Subheading {
  text: string;
  link: string;
}

interface Text {
  heading: string;
  subheading: Subheading[];
}

export default function ChapterSideHeading({ text }: { text: Text }) {
  return (
    <>
      <h2 className="text-white text-lg font-bold uppercase mb-2">
        {text.heading}
      </h2>
      <ul className="text-white text-base font-normal px-8 mb-3">
        {text.subheading.map((item, index) => (
          <li key={index} className="list-disc">
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
