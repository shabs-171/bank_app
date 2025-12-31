import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import Link from 'next/link'



export default function Menu({ title, data }: { title: string, data: any }) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="font-bold " >{title}</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {data.map((item: any) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <Link href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
