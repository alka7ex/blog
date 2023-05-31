export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl" href='/'>Haikal</a>
        </div>
        <div className="navbar-end">
          <a className="btn mr-4" href='/resume'>Resume</a>
        </div>
      </div>
    </nav>
  )
}
