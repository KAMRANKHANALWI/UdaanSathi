import React from "react";
import { Phone, Mail, MapPin, Calendar, ArrowLeft, User } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const BookFreeCall = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/contact@udaansathi.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("✅ Message sent successfully!");
        form.reset();
      } else {
        toast.error("❌ Something went wrong. Please try again!");
      }
    } catch (err) {
      toast.error("⚠️ Network error. Please try again later.");
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-purple-50 min-h-screen pt-24 pb-16 overflow-hidden">
      <Toaster position="top-right" />

      {/* Background elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-400 opacity-10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-300 opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-300 opacity-10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <a
          href="/"
          className="inline-flex items-center text-purple-700 font-medium mb-8 hover:text-purple-800 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Book a Free Call
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Schedule a consultation with our team to discuss how Udaan Sathi
              can help grow your brand through creator collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-purple-50 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">+91 8810627815</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-purple-50 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">contact@udaansathi.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-purple-50 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Visit Us</h3>
                  <p className="text-gray-600">
                    OKhla Phase - II, New Delhi - 110020
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Schedule Your Call
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden inputs for FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input
                type="hidden"
                name="_subject"
                value="New Call Booking via Udaan Sathi"
              />

              <div className="space-y-2">
                <label
                  htmlFor="representation"
                  className="block text-gray-800 font-medium text-sm"
                >
                  Are you representing <span className="text-red-500">*</span>
                </label>
                <select
                  id="representation"
                  name="representation"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <option value="" disabled selected>
                    Please select one
                  </option>
                  <option value="brand">Brand</option>
                  <option value="influencer">Influencer</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"
              >
                Schedule Call
                <Calendar className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(147, 51, 234, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(147, 51, 234, 0.1) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
};

export default BookFreeCall;
