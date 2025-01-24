import React from 'react';
import Footer from '@/components/Footer';

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
        <h2 className="text-2xl font-bold mb-4">LinkedIn Premium Subscription Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg shadow-md text-left">
            <thead className="bg-gray-500">
              <tr>
                <th className="py-3 px-6 border">Premium subscription plan</th>
                <th className="py-3 px-6 border">Premium Career</th>
                <th className="py-3 px-6 border">Premium Business</th>
                <th className="py-3 px-6 border">Sales Navigator Core</th>
                <th className="py-3 px-6 border">Recruiter Lite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-6 border">Unlimited access to LinkedIn Learning</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">Private browsing</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">Applicant insights</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">Who viewed your profile availability</td>
                <td className="py-3 px-6 border">365</td>
                <td className="py-3 px-6 border">365</td>
                <td className="py-3 px-6 border">365</td>
                <td className="py-3 px-6 border">365</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">InMail credits</td>
                <td className="py-3 px-6 border">5</td>
                <td className="py-3 px-6 border">15</td>
                <td className="py-3 px-6 border">50</td>
                <td className="py-3 px-6 border">30</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">AI Tools</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">Top Choice Job</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border"></td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">Business insights</td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">Custom Button</td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">Premium Service Page</td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border"></td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">Advanced search</td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">Standalone sales interface</td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border"></td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">Custom lead, account lists, recommendations & saved leads</td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border"></td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">Real-time updates and alerts</td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border">✓</td>
                <td className="py-3 px-6 border"></td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">Recruiting-specific design</td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">Automatic candidate tracking</td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">Integrated hiring</td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border">Smart suggestions</td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border"></td>
                <td className="py-3 px-6 border">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
    </div>
    
  );
};

export default LinkedIn;
