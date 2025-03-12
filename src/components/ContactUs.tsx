import React from 'react'

export default function ContactUs() {
  return (
    
    <section className="container mx-auto py-7 px-4 mt-10 mb-5">
        <div className="bg-blue-600 rounded-xl p-10 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Empower your future with Synthi AI</h2>
              <p className="text-blue-100 mb-6">
                Ready to harness the power of AI for your business or institution? Contact us today 
                to explore how Synthi AI can tailor cutting-edge solutions to your specific needs. 
                Let&apos;s innovate together and create a sustainable, tech-driven future.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        
      </section>

  )
}
