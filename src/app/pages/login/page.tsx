"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MemberPortal() {
  const [memberNumber, setMemberNumber] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Member Number:", memberNumber);
    console.log("Password:", password);

    // Navigate to profile page with memberNumber as a query parameter
    router.push(`/pages/profile?memberId=${encodeURIComponent(memberNumber)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Member Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Member Number</label>
            <input
              type="text"
              placeholder="Enter Member Number"
              value={memberNumber}
              onChange={(e) => setMemberNumber(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
