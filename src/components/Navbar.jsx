import img from "/src/assets/notebook.png"

export default function Navbar() {
  return (
    <div className="flex justify-center items-center">
    <img src={img} alt="todo" className="max-w-32 max-h-full" />
  </div>
  )
}
