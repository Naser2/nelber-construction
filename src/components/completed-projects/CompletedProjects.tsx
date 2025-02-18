export default function CompletedProjects() {
    const projects = [
      {
        title: "The Fallingwater House",
        category: "Building & Interior",
        image: "/2beceb80432631df2823c79188b3ced9.jpeg",
      },
      {
        title: "The Fallingwater House",
        category: "Building & Interior",
        image: "/7ae62523656dc67cfafeb27d10619571.jpeg",
      },
      {
        title: "The Fallingwater House",
        category: "Building & Interior",
        image: "/c7a59c4e9412cf769cebfb29d05561ee.jpeg",
      },
      {
        title: "The Fallingwater House",
        category: "Building & Interior",
        image: "/fa2f993f6cecba2e310c574dce4a2db5.jpeg",
      },
    ];
  
    return (
      <section className="w-full py-16 bg-theme--main-surface">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700">Completed Projects</h2>
          <p className="text-gray-600 mt-2">
            Our commitment to excellence is reflected in every completed project, 
            showcasing superior craftsmanship, quality materials, and reliable execution.
          </p>
  
          {/* Scrollable Project Cards */}
          <div className="mt-10 flex space-x-6 overflow-x-auto scrollbar-hide px-4">
            {projects.map((project, index) => (
              <div key={index} className="relative w-80 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Explore Button */}
          <div className="mt-10">
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-green-800 transition">
              Explore All Projects <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
  