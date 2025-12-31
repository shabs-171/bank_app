
import { getMe } from "@/app/servers/user";
import { Separator } from "@/components/ui/separator";
import {
    Sidebar,
    SidebarContent
} from "@/components/ui/sidebar";
import Menu from "./Menu";
import { adminMenu, agentMenu, userMenu } from "./MenuList";
import SidebarFooterComponent from "./SidebarFooterComponent";
import SidebarLogo from "./SidebarLogo";



export default async function AppSidebar() {
    const userRes = await getMe();
    console.log(userRes.data.userInfo, "userRes");
    const user = userRes?.data.userInfo;
    const role = user?.role;

    return (
        <Sidebar>
            <SidebarLogo />
            <Separator />
            <SidebarContent>
                {role === "admin" && (
                    <Menu title="Admin Console" data={adminMenu} />
                )}

                {role === "agent" && (
                    <Menu title="Agent Services" data={agentMenu} />
                )}

                {(role === "user" || !role) && (
                    <Menu title="User Banking" data={userMenu} />
                )}

            </SidebarContent>
            <Separator />
            <SidebarFooterComponent user={user} />
        </Sidebar>
    )
}