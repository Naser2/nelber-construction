export default function AboutSection() {
    return (
      <section className="w-full bg-seconday-background text-white ">
        <div className="mx-auto flex flex-col md:flex-row">
          {/* Left: Images Section */}
          <div className="w-full h-full md:w-1/2">
            <img
              src="/image_4.JPG"
              alt="Truck"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
  
          {/* Right: Text Section */}
          <div className="md:w-1/2 overflow-hidden px-6 md:px-24 my-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-green-400 lg:mt-4">About Us</h2>
            <p className="mt-4 text-gray-300">
              Nelber farm Ltd begun in the year 1996 by one Albert Mung'anya Leina
              and his wife Nelly Saama Mung'anya in a small village in Loitoktok
              Kajiado South.It has been able to gradually grow from just
              supplying building materials, to now construction of roads both new
              and old to construction of residential homes to class rooms as well.
            </p>
  
            <h3 className="mt-6 mt-12 text-xl text-green-400 font-semibold">Our Mission</h3>
  
            {/* Mission Boxes */}
            <div className="mt-4 space-y-4">
              <div className="rounded-lg text-gray-300">

              Nelber farm Ltd is set up to deliver the best results within the given time to the satisfaction of its customers.
              </div>
              {/* <div className="bg-gray-800 text-white p-4 rounded-lg">
                Ultrices volutpat malesuada id commodo. Cursus tempor at dictumst
                senectus vel. Aliquet nullam at massa sed vulputate.
              </div>
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                Ultrices volutpat malesuada id commodo. Cursus tempor at dictumst
                senectus vel. Aliquet nullam at massa sed vulputate.
              </div>
             */}
            </div>
          </div>
        </div>
      </section>
    );
  }
  

