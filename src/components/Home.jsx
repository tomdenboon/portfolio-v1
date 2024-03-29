import PersonCard from './personCard/PersonCard';

function Home() {
  return (
    <div className="flex h-full pb-16 flex-col items-center overflow-y-auto overflow-x-hidden mt-16">
      <div className="flex">
        <div className="flex flex-col items-center text-4xl font-semibold py-16 ">
          About
          <div className="w-1/2 h-1 mt-4 bg-secondary"></div>
        </div>
      </div>
      <PersonCard />
    </div>
  );
}

export default Home;
