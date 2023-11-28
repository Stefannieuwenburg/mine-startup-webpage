const Test = () =>{
    return (
      <>
        {/* flexbox try out */}
        <section
          id="test"
          className="container mx-auto px-2 min-h-screen bg-blue-100"
        >
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl font-bold text-white">Test</h1>
            <p className="text-lg text-white">test 2</p>
          </div>
          {/* Grid test */}
          <div className="grid  sm:grid-cols-2  md:grid-cols-3 gap-2 px-12 place-items-center ">
            <div className="bg-red-500 p-4">Hallo 1</div>
            <div className="bg-green-500 p-4">hallo 2</div>
            <div className="bg-blue-500 p-4">hallo 3</div>
          </div>
        </section>
      </>
    );
}
export default Test;