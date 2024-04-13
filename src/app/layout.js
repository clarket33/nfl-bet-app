import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import NavBarContext, { NavBarProvider } from "./components/NavBarContext";

export const metadata = {
  title: 'Shop the Line',
  description: 'Explore a comprehensive view of upcoming professional sports games, while accessing real-time betting odds from top bookmakers.',
}

export default function RootLayout({ children }) {
  return (<html lang="en">
      <body>
          <NavBarProvider>
            <NavBar></NavBar>
            <div id="root">{children}</div>
            <Footer></Footer>
          </NavBarProvider>
      </body>
  </html>)
}