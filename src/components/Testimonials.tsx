'use client';

export default function Testimonials() {
  return (
    <section className="py-28 bg-black text-white">
      <div className="text-center">
        <p className="text-blue-400 uppercase tracking-wide">Flexible Pricing</p>
        <h2 className="text-3xl font-semibold mt-2">
          Choose the <span className="text-blue-300">right fit</span> for <br /> your business
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Synthi AI Labs */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-semibold">Synthi AI Labs</h3>
          <p className="text-gray-400 mt-2">Research & Development</p>
          <p className="text-gray-300 mt-4">
            We design advanced algorithms in AI, NLP, and computer vision, applied to the challenges of Africa and the world.
          </p>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>✓ Collaborative research projects with renowned universities and institutes.</li>
            <li>✓ Academic publications and access to datasets and resources.</li>
            <li>✓ Development of AI models for health, environment, and finance.</li>
          </ul>
          <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg">Get Started</button>
        </div>

        {/* Synthi AI Solutions */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-semibold">Synthi AI Solutions</h3>
          <p className="text-gray-400 mt-2">AI for Businesses & Institutions</p>
          <p className="text-gray-300 mt-4">
            We develop tailored AI solutions, adapted to the challenges of industries and governments.
          </p>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>✓ Health: AI for medical diagnosis, teleconsultation and smart hospital management.</li>
            <li>✓ Agriculture: Yield prediction, smart irrigation and agricultural disease detection.</li>
            <li>✓ Finance: Financial inclusion, fraud detection and bank-risk management.</li>
            <li>✓ Climate & Environment: Climate modeling and natural resource management.</li>
            <li>✓ Industry and Logistics: Process automation and supply chain management.</li>
          </ul>
          <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg">Get Started</button>
        </div>

        {/* Synthi AI Academy */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-semibold">Synthi AI Academy</h3>
          <p className="text-gray-400 mt-2">Training & Education</p>
          <p className="text-gray-300 mt-4">
            We train the next generation of AI experts through programs tailored to market needs.
          </p>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>✓ Training in AI, robotics and computer vision, from beginner to advanced level.</li>
            <li>✓ Mentoring and certifications to support professionals and students.</li>
            <li>✓ Educational resources: Courses, tutorials and practical workshops.</li>
          </ul>
          <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg">Get Started</button>
        </div>
      </div>
    </section>
  );
}
