import Image from "next/image"
import Link from "next/link"
import { DottedSeparator } from "./dotted-separator"
import Navigation from "./navigation"

export const Sidebar = () => {
    return <aside className="h-full bg-neutral-100 p-4 w-full">
        <Link href="/" className="flex items-center gap-2">
            <Image src="/jeeraLogo.svg" alt="logo" width={28} height={28} />
            <div className="font-bold text-xl text-blue-700">Jeera</div>
        </Link>
        <DottedSeparator className="my-4" />
        <Navigation />
    </aside>
}