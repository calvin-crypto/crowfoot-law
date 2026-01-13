import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about-the-firm',
        destination: '/attorneys',
        permanent: true,
      },
      {
        source: '/contact-crowfoot-law-firm',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-crowfoot-law-firm',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services/litigation-services',
        destination: '/services/litigation',
        permanent: true,
      },
      {
        source: '/frequently-asked-questions',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/real-estate-litigation-faqs',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/residential-closing-faqs',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/commercial-lease-faqs',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/299-2', // Old Commercial Closing FAQs
        destination: '/faqs',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
