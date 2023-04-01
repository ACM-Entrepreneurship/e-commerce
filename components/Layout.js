import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="content">
      <link rel = "icon" href= "/minerwarehouse_logo.png"/>
      <Navbar />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;