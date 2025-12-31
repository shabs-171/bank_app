import { FiShield, FiUser, FiUserCheck } from "react-icons/fi";

export const loginAsOptions = [
    {
        label: "User 1",
        email: "user1@gmail.com",
        password: "12345678",
        icon: FiUser,
        colorClass: "border-blue-100 bg-blue-50/50 hover:bg-blue-50 text-blue-700",
        iconClass: "text-blue-500"
    },
    {
        label: "User 2",
        email: "user2@gmail.com",
        password: "12345678",
        icon: FiUser,
        colorClass: "border-blue-100 bg-blue-50/50 hover:bg-blue-50 text-blue-700",
        iconClass: "text-blue-500"
    },
    {
        label: "Agent",
        email: "agent1@gmail.com",
        password: "12345678",
        icon: FiUserCheck,
        colorClass: "border-purple-100 bg-purple-50/50 hover:bg-purple-50 text-purple-700",
        iconClass: "text-purple-500"
    },
    {
        label: "Admin",
        email: "super.admin@gmail.com",
        password: "12345678",
        icon: FiShield,
        colorClass: "border-indigo-100 bg-indigo-50/50 hover:bg-indigo-50 text-indigo-700",
        iconClass: "text-indigo-500"
    }
];
