import { Member, members } from "@/data/member";
import { useState } from "react";

interface EditMemberDetailsProps {
  memberId: string;
  onUpdate: (updatedData: Member) => void;
}

const EditMemberDetails: React.FC<EditMemberDetailsProps> = ({ memberId, onUpdate }) => {
  const member = members.find(m => m.id === memberId);
  const [formData, setFormData] = useState<Member>(member || {} as Member);

  if (!member) return <p className="text-red-500">Member not found</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-gray-100 p-6 rounded-lg shadow-md">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border border-gray-300 rounded mb-2" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full p-2 border border-gray-300 rounded mb-2" />
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full p-2 border border-gray-300 rounded mb-2" />
      <input name="position" value={formData.position} onChange={handleChange} placeholder="Position" className="w-full p-2 border border-gray-300 rounded mb-2" />
      <input name="photo" value={formData.photo} onChange={handleChange} placeholder="Photo URL" className="w-full p-2 border border-gray-300 rounded mb-2" />
      <input name="area" value={formData.area} onChange={handleChange} placeholder="Area" className="w-full p-2 border border-gray-300 rounded mb-2" />
      <input name="nomination" value={formData.nomination} onChange={handleChange} placeholder="Nomination" className="w-full p-2 border border-gray-300 rounded mb-2" />
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Update</button>
    </form>
  );
};

export default EditMemberDetails;