import Hero from './Hero';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import { useGlobalContext } from './Context'
const App = () => {
  const { isSidebarOpen } = useGlobalContext()
  console.log(isSidebarOpen);
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};
export default App;
