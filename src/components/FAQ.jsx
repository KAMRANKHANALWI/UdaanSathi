import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(0);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "What is influencer marketing?",
      answer:
        "Influencer marketing is when brands collaborate with influencers, who have a large following on social media, to promote their products or services. This helps businesses reach a wider audience and build trust with their target customers.",
    },
    {
      question: "Why is influencer marketing important?",
      answer:
        "India has a huge population and a vibrant online community, making it a perfect place for influencer marketing. Brands can reach specific target audiences by partnering with influencers in India to promote their products.",
    },
    {
      question: "How do influencer marketing agencies in India work?",
      answer:
        "Influencer marketing agencies in India act as intermediaries between brands and influencers. They help identify suitable influencers, negotiate contracts, plan campaigns, and measure results. These agencies have extensive networks and understand the local market dynamics.",
    },
    {
      question: "What is the role of an influencer marketing platform?",
      answer:
        "An influencer marketing platform provides tools to discover influencers, manage campaigns, track performance, and analyze results. These platforms help businesses streamline their influencer marketing efforts and make data-driven decisions.",
    },
    {
      question: "How can I find influencers for my brand?",
      answer:
        "You can find influencers for your brand through research on social media platforms, using influencer marketing platforms, working with specialized agencies, or attending industry events. Look for influencers whose audience aligns with your target market and whose content style matches your brand values.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-2">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Here are some common questions about influencer marketing.
      </p>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleQuestion(index)}
              className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
            >
              <h3 className="text-xl font-medium">{item.question}</h3>
              <span className="ml-6 flex-shrink-0">
                {openQuestion === index ? (
                  <Minus className="h-6 w-6 text-gray-500" />
                ) : (
                  <Plus className="h-6 w-6 text-gray-500" />
                )}
              </span>
            </button>

            {openQuestion === index && (
              <div className="mt-2 text-gray-700">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
