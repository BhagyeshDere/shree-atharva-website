export default function Projects() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-900">
            Our Projects
          </h2>

          <p className="mt-4 text-gray-600">
            Some of our completed fire safety projects.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/project1.jpg"
              alt="project"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Fire Hydrant System
              </h3>

              <p className="mt-3 text-gray-600">
                Commercial fire protection installation project.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/project2.jpg"
              alt="project"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Sprinkler System
              </h3>

              <p className="mt-3 text-gray-600">
                Industrial sprinkler safety installation.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/project3.jpg"
              alt="project"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Fire Alarm System
              </h3>

              <p className="mt-3 text-gray-600">
                Advanced alarm and monitoring system setup.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}