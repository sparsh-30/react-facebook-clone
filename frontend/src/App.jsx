import Navbar from "./components/Navbar"
import LeftSidebar from "./components/LeftSidebar"
import PostHolder from "./components/PostHolder"

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-[65px] flex justify-center">
        <LeftSidebar />
        <PostHolder />
        <div className="w-2/4"></div>
      </div>
    </>
  )
}

export default App
