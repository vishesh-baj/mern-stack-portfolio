const HomePage = () => {
  return (
    <div className="p-6 w-[96%] mx-auto bg-base-300 rounded-xl">
      <h1 className="text-2xl">Home</h1>

      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="col-span-4 md:col-span-1 p-4 bg-primary rounded-xl text-black font-semibold">
          Todos
        </div>
        <div className="col-span-4 md:col-span-1 p-4 bg-secondary rounded-xl text-black font-semibold">
          Notes
        </div>
        <div className="col-span-4 md:col-span-1 p-4 bg-accent rounded-xl text-black font-semibold">
          Pomodoro
        </div>
        <div className="col-span-4 md:col-span-1 p-4 bg-warning rounded-xl text-black font-semibold">
          Color Palette
        </div>
      </div>
    </div>
  );
};

export default HomePage;
