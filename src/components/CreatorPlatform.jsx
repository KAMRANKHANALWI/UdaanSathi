import React from "react";
import {
  ArrowUpRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

export default function CreatorPlatform() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto pt-16 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Powering Brands. <span className="text-yellow-400">✨</span>{" "}
          Empowering Creators. <span className="text-yellow-400">💪</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-4xl">
          GRIN is the software behind today's most iconic creator programs. Are
          you ready to take your partnerships to the next level?
        </p>
      </header>

      {/* Section 1 - Creator Discovery */}
      <section className="max-w-7xl mx-auto my-8 relative">
        <div className="bg-lime-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row relative overflow-hidden">
          <div className="md:w-1/2 md:pr-8 text-black z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Discover and recruit
              <br />
              brand champions.
            </h2>
            <p className="text-lg mb-6">
              Unlock the industry's most comprehensive influencer discovery
              solution. The Creator Discovery Suite has five powerful tools
              designed to help you uncover, then recruit the perfect partners
              for your brand.
            </p>
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0 relative z-10">
            <div className="bg-teal-600 rounded-xl p-4 shadow-lg max-w-md mx-auto">
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center mb-4">
                  <p className="font-medium mr-2">Creator Search</p>
                  <div className="flex-grow"></div>
                  <div className="bg-black rounded-full p-1">
                    <div className="bg-pink-500 rounded-full h-6 w-6 flex items-center justify-center">
                      <span className="text-white text-xs">TT</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center border rounded-lg p-2 mb-4">
                  <FunnelIcon className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm">Filter</span>
                  <span className="mx-4 text-blue-500 text-sm">#festivals</span>
                  <div className="flex-grow"></div>
                  <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
                </div>

                <div className="space-y-3">
                  {[
                    {
                      name: "Maribelle",
                      tags: "Travel • Fitness • Fashion • Beauty",
                      avatar: "M",
                    },
                    {
                      name: "Van Holmes",
                      tags: "Welcome to my world!",
                      avatar: "V",
                    },
                    {
                      name: "Timeless Trinity",
                      tags: "Model | Mentor | Mom | Grandma",
                      avatar: "T",
                    },
                    {
                      name: "Shae Hall",
                      tags: "Beauty | My life | Self Improvement",
                      avatar: "S",
                    },
                  ].map((creator, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="bg-red-400 h-10 w-10 rounded-full flex items-center justify-center text-white mr-3">
                        {creator.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{creator.name}</p>
                        <p className="text-xs text-gray-500">{creator.tags}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mb-2">
                <div className="bg-yellow-200 rounded-full p-1">
                  <div className="bg-pink-600 rounded-full h-8 w-8"></div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 relative">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 h-14 w-14 rounded-full mr-3 flex items-center justify-center overflow-hidden">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <p className="font-medium">Santiago X</p>
                    <p className="text-xs text-gray-500">
                      Musician on a mission.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-3 flex justify-between">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Followers</p>
                    <p className="font-bold">80.7K</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Engagement Rate</p>
                    <p className="font-bold">6.7%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Avg Likes</p>
                    <p className="font-bold">9K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4">
            <ArrowUpRightIcon className="h-6 w-6 text-black" />
          </div>
        </div>
      </section>

      {/* Section 2 - Program Management */}
      <section className="max-w-7xl mx-auto my-8 relative">
        <div className="bg-teal-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row relative overflow-hidden">
          <div className="md:w-1/2 md:pr-8 text-white z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Manage your entire
              <br />
              program at scale.
            </h2>
            <p className="text-lg mb-6">
              GRIN consolidates your entire workflow into one intuitive
              platform. Whether launching a product, creating an awareness
              campaign, or working with a celebrity, GRIN automates busywork and
              provides tools to integrate creator content into your overall
              marketing strategy.
            </p>
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0 relative z-10">
            <div className="bg-white rounded-xl p-4 shadow-lg max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <button className="bg-gray-100 text-black text-sm font-medium px-4 py-2 rounded-md">
                  Manage
                </button>
                <div className="flex-grow"></div>
                <button className="bg-white text-black border border-gray-200 shadow-sm text-sm font-medium px-4 py-2 rounded-md">
                  Create Activation
                </button>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2 bg-gray-50 rounded-xl p-4">
                  <h3 className="font-bold mb-4">Activations</h3>

                  <div className="mb-4">
                    <div className="flex items-start mb-2">
                      <div className="h-16 w-16 rounded-md overflow-hidden mr-3 flex-shrink-0 bg-gray-200">
                        <img
                          src="/api/placeholder/64/64"
                          alt="Around the World"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Around the World</p>
                        <p className="text-xs text-gray-500">Ongoing</p>
                        <p className="text-xs text-blue-500">In Progress</p>
                      </div>
                    </div>

                    <div className="flex items-start mb-2">
                      <div className="h-16 w-16 rounded-md overflow-hidden mr-3 flex-shrink-0 bg-gray-200">
                        <img
                          src="/api/placeholder/64/64"
                          alt="Tropical Sunshine"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Tropical Sunshine</p>
                        <p className="text-xs text-gray-500">Scheduled</p>
                        <p className="text-xs text-orange-500">Draft</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-teal-600 text-white text-sm py-2 rounded-md">
                    View Content
                  </button>
                </div>

                <div className="w-1/2 bg-white rounded-xl p-4 border border-gray-100">
                  <h3 className="font-bold mb-2">Create Activation</h3>

                  <div className="space-y-2">
                    {[
                      { name: "Custom Activation", icon: "+" },
                      { name: "Product Gifting", icon: "🎁" },
                      { name: "Product Promotion", icon: "📣" },
                      { name: "Recurring Partnership", icon: "🔄" },
                      { name: "Evergreen Campaign", icon: "🌲" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 bg-gray-50 rounded-lg"
                      >
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 text-xs">
                          {item.icon}
                        </div>
                        <span className="text-sm">{item.name}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-teal-600 text-white text-sm py-2 rounded-md mt-4">
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4">
            <ArrowUpRightIcon className="h-6 w-6 text-white" />
          </div>
        </div>
      </section>

      {/* Section 3 - Real-time Data & ROI */}
      <section className="max-w-7xl mx-auto my-8 relative">
        <div className="bg-indigo-500 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row relative overflow-hidden">
          <div className="md:w-1/2 md:pr-8 text-white z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Access real-time data
              <br />
              and ROI reporting.
            </h2>
            <p className="text-lg mb-6">
              Get comprehensive insights into your creator program performance.
              Track engagement metrics, conversion rates, and ROI to optimize
              your partnerships and demonstrate value to stakeholders.
            </p>
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0 relative z-10">
            <div className="bg-white rounded-xl p-4 shadow-lg max-w-md mx-auto">
              <h3 className="font-bold mb-4">Content Engagement</h3>

              <div className="grid grid-cols-4 gap-2 mb-4">
                <div className="text-center p-2">
                  <p className="font-bold text-lg">$1.6M</p>
                  <p className="text-xs text-gray-500">Revenue</p>
                </div>
                <div className="text-center p-2">
                  <p className="font-bold text-lg">19748%</p>
                  <p className="text-xs text-gray-500">Revenue ROI</p>
                </div>
                <div className="text-center p-2">
                  <p className="font-bold text-lg">179.8K</p>
                  <p className="text-xs text-gray-500">Conversions</p>
                </div>
                <div className="text-center p-2">
                  <p className="font-bold text-lg">$3.79K</p>
                  <p className="text-xs text-gray-500">Avg. Revenue per Post</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden bg-gray-50 h-40 flex items-center justify-center">
                <div className="w-full h-32 bg-gray-100">
                  {/* Placeholder for chart */}
                  <div className="h-full w-full flex items-center justify-center text-gray-400">
                    <span>Analytics Chart</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-gray-50 rounded-lg p-4 flex items-center">
                <div className="flex-grow">
                  <h4 className="font-medium text-sm">Campaign Performance</h4>
                  <p className="text-xs text-gray-500">
                    Last updated: Apr 10, 2025
                  </p>
                </div>
                <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="/api/placeholder/64/64"
                    alt="Creator"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4">
            <ArrowUpRightIcon className="h-6 w-6 text-white" />
          </div>
        </div>
      </section>
    </div>
  );
}
