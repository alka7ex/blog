import Link from "next/link"
import { Button } from "@/components/ui/button"


export const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="navbar h-20">
        <div className="navbar-start ml-6">
          <Link href='/' className="btn btn-ghost normal-case text-xl">Haikal</Link>
        </div>
        <div className="navbar-end mr-6">
          <Button className="" variant="link">
            <Link href='/resume' className="text-lg">Resume</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
