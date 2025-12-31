"use client";

import { localLogout } from '@/app/servers/auth';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { SidebarFooter } from '@/components/ui/sidebar';
import { Avatar } from '@radix-ui/react-avatar';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function SidebarFooterComponent({ user }: { user: any }) {
    const router = useRouter();

    if (!user) return null;

    const handleLogout = async () => {
        try {
            await localLogout();
            toast.success("Logged out successfully");
            router.push("/");
        } catch (error) {
            toast.error("Failed to logout");
        }
    };

    return (
        <SidebarFooter>
            <div className="flex items-center gap-3 p-3 bg-gray-50 border-b">
                {/* Profile Image */}
                <Avatar className='w-12 h-12 rounded-full border-2 border-white shadow-sm'>
                    <AvatarImage src={user.avatar || user.file} alt={user.name} />
                    <AvatarFallback className="bg-blue-600 text-white font-bold flex items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 h-full w-full">
                        {user.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>

                {/* User Info */}
                <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold text-gray-900 truncate">
                        {user.name}
                    </span>

                    {/* Role with subtle highlight */}
                    <span className={`inline-block text-[10px] px-2 py-0.5 rounded font-bold w-fit uppercase tracking-tighter mt-0.5 ${user.role === 'admin' ? 'bg-indigo-100 text-indigo-700' :
                        user.role === 'agent' ? 'bg-purple-100 text-purple-700' :
                            'bg-blue-100 text-blue-700'
                        }`}>
                        {user.role}
                    </span>

                    <span className="text-[10px] text-gray-500 truncate mt-0.5">
                        {user.email}
                    </span>
                </div>
            </div>
            <div className="p-3">
                <Button
                    variant="destructive"
                    className="w-full font-bold h-9 rounded-lg shadow-sm"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </div>
        </SidebarFooter>
    )
}
