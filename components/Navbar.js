import Link from "next/link"


export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link href='/' className="btn btn-ghost normal-case text-xl">Haikal</Link>
        </div>
        <div className="navbar-end">
          <Link href='/resume' className="btn mr-4">Resume</Link>
        </div>
      </div>
    </nav>
  )
}
