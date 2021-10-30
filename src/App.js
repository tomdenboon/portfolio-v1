import PersonCard from './components/PersonCard';
import Navbar from './components/Navbar';
import BottomArrow from './components/BottomArrow';

function App() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-screen justify-center items-center flex flex-col bg-gray-900">
        <div className="w-full h-screen justify-center items-center flex">
          <Navbar />
          <PersonCard />
        </div>
        <BottomArrow />
      </div>
      <div className="w-full h-screen bg-gray-900">
      </div>
    </div>
  );
}

export default App;
