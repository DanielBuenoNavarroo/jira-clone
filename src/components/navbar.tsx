import UserButton from "@/features/auth/components/user-button"
import MobileSidebar from "./mobile-sidebar"

const Navbar = () => {
  return (
    <nav className="w-full pt-4 px-6 flex items-center justify-between">
        <div className="flex-col hidden lg:flex">
            <h1 className="text-2xl font-semibold">Home</h1>
            <p className="text-muted-foreground">Monitor all of oyur projects and</p>
        </div>
        <MobileSidebar />
        <UserButton />
    </nav>
  )
}

export default Navbar