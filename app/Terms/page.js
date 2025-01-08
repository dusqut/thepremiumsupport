import React from 'react'

function page() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-black mb-4">
        Terms <span className="text-purple-500">of Service</span>
      </h1>
      <p className="text-500 text-sm mb-8">
        Last Updated on March 17, 2024
      </p>
      <ol className="text-700 space-y-4 list-decimal pl-4">
        <li>
          We refund the total only if the service is undelivered.
        </li>
        <li>
          Premium Subscribers should not violate any of the terms and conditions
          of the platform. It's your responsibility.
        </li>
        <li>Change in mind is not applicable.</li>
        <li>
          Change in Premium plans will result in losing the current subscription
          plan and will result in financial loss.
        </li>
        <li>
          General things on each platform should have awareness (Hibernating,
          Privacy, or Verification issues may cause you to lose the Premium
          plan).
        </li>
        <li>
          We noticed some unethical extensions, and using multiple accounts in
          the same browser will also result in the current Premium Subscription,
          and we do not refund.
        </li>
        <li>
          Identity failure may result in losing a premium subscription, and the
          user should inform us first. Users are encouraged to verify their
          identity in the platform before getting the plan.
        </li>
        <li>
          For Coursera Plus existing clients, we'll reconnect within hours if
          there's any issue with the ongoing plan; expect a violation or
          restriction.
        </li>
        <li>
          We do not refund after the subscription verification on LinkedIn
          Premium. The subscription can be verified after the activation via
          restriction:{" "}
          <a
            href="https://www.linkedin.com/premium/my-premium/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://www.linkedin.com/premium/my-premium/
          </a>
        </li>
        <li>
          We do not offer refunds for site breakdowns, internet blockages, VPN
          issues, and relocating.
        </li>
      </ol>
      <h2 className="text-lg font-bold text-black mt-8">Contact Us</h2>
      <p className="text-700">
        If you have any questions or concerns about this Privacy Policy, please
        contact us at{" "}
        <a
          href="mailto:premiumsupportes@outlook.com"
          className="text-orange-500 hover:underline"
        >
          premiumsupportes@outlook.com
        </a>{" "}
        or reach out to us via WhatsApp at{" "}
        <a href="https://wa.me/15145348192" className="text-blue-500 hover:underline">
          (+1) 514 5348192
        </a>
        .
      </p>
      <p className="text-700 mt-4">
        By using our website and services, you signify your acceptance of these
        Terms of Service. If you disagree with these Terms of Service, please do
        not use our website or services.
      </p>
    </div>
  )
}

export default page