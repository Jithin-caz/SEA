"use client";
import { useSearchParams } from "next/navigation";
import ChangePasswordModal from "@/app/components/ChangePasswordModal";
import EditMemberDetails from "@/app/components/editMemberDetails";
import MemberDetails from "@/app/components/memberDetails";
import { Member, members } from "@/data/member";
import { useState, useEffect, Suspense } from "react";

const ProfilePage: React.FC = () => {
  function Profile() {
    const searchParams = useSearchParams();
    const memberId = searchParams.get("memberId");

    // Find member by ID or default to the first member
    const initialMember = members.find((m) => m.id === memberId) || members[0];

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
    const [memberData, setMemberData] = useState<Member>(initialMember);

    useEffect(() => {
      if (memberId) {
        const foundMember = members.find((m) => m.id === memberId);
        if (foundMember) {
          setMemberData(foundMember);
        }
      }
    }, [memberId]);

    const handleUpdate = (updatedData: Member) => {
      setMemberData(updatedData);
      setIsEditOpen(false);
    };

    return (
      <div className="pt-36 p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
          <MemberDetails memberId={memberData.id} />
          <div className="flex flex-col gap-4 mt-4">
            <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700" onClick={() => setIsModalOpen(true)}>
              Change Password
            </button>
            <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700" onClick={() => setIsEditOpen(!isEditOpen)}>
              Edit Details
            </button>
          </div>
          {isEditOpen && <EditMemberDetails memberId={memberData.id} onUpdate={handleUpdate} />}
          <ChangePasswordModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    );
  }

  return( 
    <Suspense fallback={<p>Loading...</p>}>
      <Profile />
    </Suspense>
  );
};

export default ProfilePage;
