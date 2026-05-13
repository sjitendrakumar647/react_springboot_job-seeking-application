import { Link } from "react-router-dom"

const NavLinks = () => {
    const links = [
    { name: "Find Job", path: "/job" },
    { name: "Find Talent", path: "/talent" },
    { name: "Upload Job", path: "/upload" },
    { name: "About Us", path: "/about" },
    ]
  return (
    <div className="h-full hidden md:flex items-center gap-8 font-medium">
        {links.map((link) => (
          <Link to={link.path} key={link.path} className="nav-link pb-1 transition-colors duration-200 hover:text-yellow-500">
            {link.name}
          </Link>
        ))}          
        </div>
  )
}

export default NavLinks
