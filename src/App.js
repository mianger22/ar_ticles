import './App.css';

function App() {
  return (
    <>
      <header></header>
      <main className="grid-container grid grid-cols-9 gap-2 h-screen">
        <div className="item1 col-span-2 border-2 border-gray-600 border-solid"></div>
        <div className="item2 col-span-5 border-2 border-gray-600 border-solid flex justify-center">
          <h1 className="text-3xl font-bold underline">
            Итак, начнём
          </h1></div>
        <div className="item2 col-span-2 border-2 border-gray-600 border-solid"></div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
