const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About This Project
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          This Swiggy-inspired food ordering application is built using modern
          React practices with a strong focus on scalability, performance, and
          maintainable architecture. The project demonstrates real-world
          frontend engineering concepts such as centralized state management,
          code splitting, and responsive UI design.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              Dynamic Restaurant Listing
            </h3>
            <p className="text-gray-600">
              Fetches and renders restaurant data dynamically using API
              integration with proper state management.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              Cart Management with Redux Toolkit
            </h3>
            <p className="text-gray-600">
              Centralized cart state with add, remove,clear cart
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              Efficient State Management
            </h3>
            <p className="text-gray-600">
              Managed global cart state using Redux Toolkit with clean reducer
              logic and derived cart calculations for total price and quantity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              Code Splitting & Lazy Loading
            </h3>
            <p className="text-gray-600">
              Improved performance by implementing React.lazy and Suspense for
              on-demand component loading.
            </p>
          </div>
        </div>
      </div>
      {/* Tech Stack Section */}
      <div className="max-w-5xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tech Stack Used
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">React</h3>
            <p className="text-gray-600">
              Component-based UI development with hooks and modern React
              patterns.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Redux Toolkit</h3>
            <p className="text-gray-600">
              Centralized state management for cart and application-level data.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">React Router</h3>
            <p className="text-gray-600">
              Client-side routing for seamless navigation between pages.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-gray-600">
              Utility-first CSS framework for responsive and consistent UI
              design.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">JavaScript (ES6+)</h3>
            <p className="text-gray-600">
              Modern JavaScript features for clean and readable code.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">API Integration</h3>
            <p className="text-gray-600">
              Dynamic data rendering using external APIs with async handling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
