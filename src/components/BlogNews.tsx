import React from 'react'

export default function BlogNews() {
  return (
<section className="py-16  text-white text-center">
  {/* Header */}
  <p className="text-blue-400 uppercase tracking-wide text-sm">Monitoring and Innovation</p>
  <h2 className="text-3xl font-semibold mt-2">
    Blog <span className="text-blue-300">& News</span>
  </h2>

  {/* Blog Cards */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Blog 1 */}
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
      <img src="https://www.automate.org/images/ogImages/RIA-blog-Industrial-Robotics-AI-Machine-Learning.jpeg" alt="AI Robotics" className="rounded-lg" />
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">AI</span>
        <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Robotics</span>
      </div>
      <h3 className="text-lg font-semibold mt-3">
        Unlocking the potential of AI: Robotics applied to African market.
      </h3>
      <p className="text-gray-400 text-sm mt-2">February 17, 2025 • 3 min read</p>
    </div>

    {/* Blog 2 */}
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSx7qMrFamAQ831LSQG7c1f9oZtplg_OTnI1hUGqQ7V4UuTe5jcUAhZ8wfVzS6ggr2DY&usqp=CAU" alt="AI Testimonies" className="rounded-lg" />
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">AI</span>
        <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Testimonies</span>
      </div>
      <h3 className="text-lg font-semibold mt-3">
        Case studies from companies that have adopted our solutions.
      </h3>
      <p className="text-gray-400 text-sm mt-2">February 15, 2025 • 4 min read</p>
    </div>

    {/* Blog 3 */}
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
      <img src="https://d2ds8yldqp7gxv.cloudfront.net/Blog+Explanatory+Images/Top+Technology+Trends+1.webp" alt="Tech Trends" className="rounded-lg" />
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Tech trends</span>
      </div>
      <h3 className="text-lg font-semibold mt-3">
        Interviews and analyses on AI and innovation trends.
      </h3>
      <p className="text-gray-400 text-sm mt-2">February 12, 2025 • 4 min read</p>
    </div>
  </div>

  {/* Read More Button */}
  <div className="mt-12">
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg">
      Read More →
    </button>
  </div>
</section>

  )
}
