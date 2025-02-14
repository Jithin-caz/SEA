import { Member, members } from "@/data/member";

interface MemberDetailsProps {
  memberId: string;
}

const MemberDetails: React.FC<MemberDetailsProps> = ({ memberId }) => {
  const member: Member | undefined = members.find(m => m.id === memberId);
  if (!member) return <p className="text-red-500">Member not found</p>;
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h2 className="text-2xl font-bold">Welcome, {member.name}!</h2>
      <p className="text-gray-600">Member ID: {member.id}</p>
      <p className="text-gray-600">Phone: {member.phone}</p>
      <p className="text-gray-600">Address: {member.address}</p>
      <p className="text-gray-600">Position: {member.position}</p>
      <p className="text-gray-600">Area: {member.area}</p>
      <p className="text-gray-600">Nomination: {member.nomination}</p>
    </div>
  );
};

export default MemberDetails;