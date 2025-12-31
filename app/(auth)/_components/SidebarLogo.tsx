
import { Button } from '@/components/ui/button'
import { SidebarHeader } from '@/components/ui/sidebar'
import Link from 'next/link'

export default function SidebarProfileComponent() {
    return (
        <SidebarHeader>
            <Button asChild variant="ghost" className="w-full justify-start px-4 py-2 hover:bg-amber-100 transition-colors" >
                <Link href="/" className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-amber-700">PayBD</h1>
                </Link>
            </Button>
        </SidebarHeader>
    )
}
