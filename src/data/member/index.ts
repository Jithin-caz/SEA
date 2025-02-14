export interface Member {
  id: string;
  name: string;
  phone: string;
  address: string;
  position: string;
  photo: string;
  area: string;
  nomination: string;
}

export const members: Member[] = [
  {
    id: "101",
    name: "John Doe",
    phone: "123-456-7890",
    address: "123 Main St",
    position: "Manager",
    photo: "/images/unknown.jpg",
    area: "Zone A",
    nomination: "Yes",
  },
  {
    id: "102",
    name: "Jane Smith",
    phone: "987-654-3210",
    address: "456 Elm St",
    position: "Supervisor",
    photo: "/images/unknown.jpg",
    area: "Zone B",
    nomination: "No",
  },
  {
    id: "103",
    name: "Alice Johnson",
    phone: "555-123-4567",
    address: "789 Pine St",
    position: "Coordinator",
    photo: "/images/unknown.jpg",
    area: "Zone C",
    nomination: "Yes",
  },
];
