import React from 'react';

const LinkedIn = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-24 py-12">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-6 mt-20">
        Benefits of LinkedIn Premium and its Types
      </h1>
      <p className="text-center text-gray-500 mb-12">
        LinkedIn Premium offers several advantages to professionals and businesses. Explore the different plans to find the right fit for you.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Key Benefits of LinkedIn Premium</h2>
        <ul className="list-disc list-inside text-gray-500">
          <li>Access to InMail messages to contact people outside your network.</li>
          <li>Detailed insights on who viewed your profile.</li>
          <li>Advanced search filters to find potential connections.</li>
          <li>Learning resources from LinkedIn Learning courses.</li>
          <li>Job applicant insights to stand out from the competition.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Types of LinkedIn Premium Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-400 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Premium Career</h3>
            <p className="text-gray-800">Best for job seekers looking to get hired and advance their career.</p>
          </div>
          <div className="bg-green-400 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Premium Business</h3>
            <p className="text-gray-800">Ideal for businesses aiming to expand their network and reach.</p>
          </div>
          <div className="bg-green-400 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Sales Navigator Core</h3>
            <p className="text-gray-800">Designed for sales professionals to generate leads and build relationships.</p>
          </div>
          <div className="bg-green-400 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Recruiter Lite</h3>
            <p className="text-gray-800">For recruiters looking to find and connect with top talent.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Career vs Business Premium Subscription</h2>
        <p className="text-gray-500">
          The Career plan focuses on helping job seekers with advanced job search tools and interview preparation, while the Business plan provides more networking and insight tools to expand professional connections and generate leads.
        </p>
        <p className="text-gray-500">Business Premium contains all Career Premium Features Plus 10 additional InMails and Unlimited People Browsing Feature</p>
      </section>
    </div>
  );
};

export default LinkedIn;
