interface PeopleCardProps {
  name: string;
  position: string;
  division: string;
  contact: number;
  image: string;
}

export default function PeopleCard({ name, position, division, contact, image }: PeopleCardProps) {
  return (
    <div className="border rounded-lg shadow-lg p-2">
      <div className=" overflow-hidden w-full h-full">
          <img src={image} alt={name} className="w-full h-72 object-contain" />
          <div className="p-4 text-center">
            <h5 className="text-xl font-bold">{name}</h5>
            <h6 className="text-base text-gray-500">{position}</h6>
            <p className="text-sm text-gray-700">{division}</p>
            <p className="text-sm text-gray-700">Contact: {contact}</p>
          </div>
      </div>
    </div>
  );
}
