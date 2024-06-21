const Header = ()=>{
  return(
    <nav className="bg-red-500 flex justify-between px-3 md:px-6 py-2">
      <span className="font-bold text-xl italic">ABC RPO</span>
      <ul className="flex gap-2 md:gap-6">

        <li className="cursor-pointer hover:text-black font-semibold">Home</li>

        <li className="cursor-pointer hover:text-black font-semibold">About Us</li>
        <li className="cursor-pointer hover:text-black font-semibold">Jobs</li>
      </ul>
    </nav>
  )
}
export default Header;
