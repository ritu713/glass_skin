const Home = () => {
  return (
    <div className="mx-[10rem] my-[2rem]">
      <h3 className="text-3xl text-stone-700">You're at the right place!!</h3>
      <p className="text-xl text-stone-500">..if you want to get rid of those pesky pimples, or perhaps you want your skin to be in ONE color. 
      <br/>Or well, to be honest, if you have anything skin related that you want to fix (or maintain), this is the place to be. 
      </p>

      <h5 className="text-3xl text-stone-700 mt-[3rem]">Here's what we have to offer</h5>
      <div className="mt-10 ml-5 grid grid-cols-2">
        <div className="bg-violet-200 p-5 border rounded text-center">
          <h6 className="font-bold text-xl text-violet-700">Skin care recommendation</h6>
          <p>Depending on your skin type and skin concerns, our recommendation system will give you the top 5 products that have what it takes to love your skin!
            <br/> A simple click gives you the products that are the need of the hour. 
          </p>
        </div>

        <div className="bg-violet-200 p-5 border rounded text-center">
          <h6 className="font-bold text-xl text-violet-700">Skin care routine</h6>
          <p>Well, once you know the products best suited for you, it's time to devise some skin care routines!
            <br/> All you need to do is enter the type of product you want to use, and lo and behold- its saved for you to come back to refer any time you need.
            <br/><br/> <i>Psst...you can save more than one, for different occasions!</i>
          </p>
        </div>
      </div>


      <div>
      <h6 className="text-3xl text-stone-700 mt-[3rem]">Skin care Advice - General Product knowledge</h6>
      <p className="text-xl text-stone-500"> Coming soon...</p>
      </div>
    </div>
  )
}

export default Home
