import { getMe } from "@/app/servers/user";
import UnauthorizedPage from "@/components/UnauthorizedPage";
import AgentManagementClient from "./AgentManagementClient";

export default async function AgentManagementPage() {
    const profileFetch = await getMe();
    const role = profileFetch.data?.userInfo?.role;

    if (role !== "admin") {
        return <UnauthorizedPage />;
    }

    return <AgentManagementClient />;
}
