import React from "react";
import { Timeline } from "./ui/Timeline";
import { Users, MessageSquare, Map, BarChart3, Sparkles } from "lucide-react";

const timelineData = [
  {
    title: "Smart Matchmaking",
    content: (
      <div className="flex">
        <div className="mr-6">
          <div className="p-3 bg-purple-600 rounded-xl text-white">
            <Users size={24} />
          </div>
        </div>
        <div>
          <h1 className="lg:text-2xl text-xl font-semibold mb-2 text-slate-800">
            Find Your Perfect Creator Match
          </h1>
          <p className="text-slate-600">
            Think of us like a dating app—but for brands and influencers! We use
            smart tech to find the perfect creators who truly fit your brand
            vibe.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Real Stories, Not Ads",
    content: (
      <div className="flex">
        <div className="mr-6">
          <div className="p-3 bg-purple-500 rounded-xl text-white">
            <MessageSquare size={24} />
          </div>
        </div>
        <div>
          <h1 className="lg:text-2xl text-xl font-semibold mb-2 text-slate-800">
            Authentic Content That Resonates
          </h1>
          <p className="text-slate-600">
            People trust people. That's why we help you run campaigns that feel
            real—like friendly recommendations, not pushy ads.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Go Desi, Go Deep",
    content: (
      <div className="flex">
        <div className="mr-6">
          <div className="p-3 bg-purple-600 rounded-xl text-white">
            <Map size={24} />
          </div>
        </div>
        <div>
          <h1 className="lg:text-2xl text-xl font-semibold mb-2 text-slate-800">
            Local Connections, National Reach
          </h1>
          <p className="text-slate-600">
            From Delhi to Dhanbad, we connect you with creators who speak the
            language and know the local crowd—so your brand feels right at home
            everywhere.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Buzz That Matters",
    content: (
      <div className="flex">
        <div className="mr-6">
          <div className="p-3 bg-purple-500 rounded-xl text-white">
            <BarChart3 size={24} />
          </div>
        </div>
        <div>
          <h1 className="lg:text-2xl text-xl font-semibold mb-2 text-slate-800">
            Beyond Metrics to Meaningful Results
          </h1>
          <p className="text-slate-600">
            It's not about just likes. We spark real chats, shares, and
            shoutouts that get people talking (and buying).
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "All-in-One Magic",
    content: (
      <div className="flex">
        <div className="mr-6">
          <div className="p-3 bg-purple-600 rounded-xl text-white">
            <Sparkles size={24} />
          </div>
        </div>
        <div>
          <h1 className="lg:text-2xl text-xl font-semibold mb-2 text-slate-800">
            Seamless Campaign Management
          </h1>
          <p className="text-slate-600">
            No juggling 10 apps or chasing DMs. We manage your whole
            campaign—from finding creators to showing you what's working—all in
            one smooth ride.
          </p>
        </div>
      </div>
    ),
  },
];

const UdaanSathiAdvantage = () => {
  return (
    <section id="advantage" className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 leading-tight">
          From Match to Impact:{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
            The UdaanSathi Advantage
          </span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We've reimagined how brands and creators collaborate to create
          authentic connections that drive real business results.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default UdaanSathiAdvantage;
