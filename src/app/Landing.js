import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-primaryBg text-primaryText min-h-screen">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-screen bg-primaryBg">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Pulsar</h1>
        <p className="text-xl md:text-2xl text-secondaryText mb-8">
          Your Partner in Digital Innovation
        </p>
        <button className="bg-accent hover:bg-accentHover text-white font-semibold py-3 px-6 rounded">
          Get Started
        </button>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-secondaryBg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="flex flex-col md:flex-row md:-mx-3">
            {/* Service 1 */}
            <div className="md:w-1/3 px-3 mb-6">
              <div className="bg-cardBg rounded-lg p-8">
                <div className="text-accent w-12 h-12 mb-4">
                  {/* Icon */}
                </div>
                <h3 className="text-xl font-semibold mb-2">Website Development</h3>
                <p className="text-secondaryText">
                  We build responsive and modern websites that help your business stand out.
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="md:w-1/3 px-3 mb-6">
              <div className="bg-cardBg rounded-lg p-8">
                <div className="text-accent w-12 h-12 mb-4">
                  {/* Icon */}
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
                <p className="text-secondaryText">
                  Creating user-friendly mobile applications for both Android and iOS platforms.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="md:w-1/3 px-3 mb-6">
              <div className="bg-cardBg rounded-lg p-8">
                <div className="text-accent w-12 h-12 mb-4">
                  {/* Icon */}
                </div>
                <h3 className="text-xl font-semibold mb-2">Software Solutions</h3>
                <p className="text-secondaryText">
                  Custom software development tailored to your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primaryBg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-secondaryText mb-8">
            Contact us today to turn your ideas into reality.
          </p>
          <button className="bg-accent hover:bg-accentHover text-white font-semibold py-3 px-6 rounded">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-secondaryBg">
        <div className="container mx-auto px-6 text-center">
          <p className="text-footerText">&copy; 2023 Pulsar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
