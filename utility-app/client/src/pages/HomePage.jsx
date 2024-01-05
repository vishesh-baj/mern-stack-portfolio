const HomePage = () => {
  return (
    <div className="p-6 w-[96%] mx-auto bg-base-300 rounded-xl">
      <h1 className="text-2xl">Home</h1>

      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="col-span-4 md:col-span-1 p-4 bg-base-100 rounded-xl">
          Todos
        </div>
        <div className="col-span-4 md:col-span-1 p-4 bg-base-100 rounded-xl">
          Notes
        </div>
        <div className="col-span-4 md:col-span-1 p-4 bg-base-100 rounded-xl">
          Pomodoro
        </div>
        <div className="col-span-4 md:col-span-1 p-4 bg-base-100 rounded-xl">
          Color Palette
        </div>
      </div>
    </div>
  );
};

export default HomePage;
