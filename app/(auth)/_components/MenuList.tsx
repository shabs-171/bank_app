import { BsCashCoin, BsPhoneFlip } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaMoneyBillTrendUp, FaUsersBetweenLines } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiUsersFour } from "react-icons/pi";


export const userMenu = [
    {
        title: "Profile",
        url: "/dashboard/profile",
        icon: CgProfile,
    },
    {
        title: "Overview",
        url: "/dashboard/overview",
        icon: LuLayoutDashboard,
    },
    {
        title: "Send Money",
        url: "/dashboard/send-money",
        icon: FaMoneyBillTrendUp,
    },
    {
        title: "Cash Out",
        url: "/dashboard/cash-out",
        icon: BsCashCoin,
    },
    {
        title: "Top Up",
        url: "/dashboard/top-up",
        icon: BsPhoneFlip,
    },]


export const agentMenu = [
    {
        title: "Profile",
        url: "/dashboard/profile",
        icon: CgProfile,
    },
    {
        title: "Overview",
        url: "/dashboard/overview",
        icon: LuLayoutDashboard,
    },
    {
        title: "Cash In",
        url: "/dashboard/cash-in",
        icon: FaMoneyBillTrendUp,
    },

    {
        title: "Top Up",
        url: "/dashboard/top-up",
        icon: BsPhoneFlip,
    },]


export const adminMenu = [
    {
        title: "Profile",
        url: "/dashboard/profile",
        icon: CgProfile,
    },
    {
        title: "Overview",
        url: "/dashboard/overview",
        icon: LuLayoutDashboard,
    },
    {
        title: "User Management",
        url: "/dashboard/user-management",
        icon: PiUsersFour,
    },

    {
        title: "Agent Management",
        url: "/dashboard/agent-management",
        icon: FaUsersBetweenLines,
    },]
