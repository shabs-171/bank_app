import { getMe } from "@/app/servers/user";
import UnauthorizedPage from "@/components/UnauthorizedPage";
import UserManagementClient from "./UserManagementClient";

export default async function UserManagementPage() {
    const profileFetch = await getMe();
    const role = profileFetch.data?.userInfo?.role;

    if (role !== "admin") {
        return <UnauthorizedPage />;
    }

    return <UserManagementClient />;
}
