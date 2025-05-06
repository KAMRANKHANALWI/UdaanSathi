import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    representation: "",
    name: "",
    email: "",
    contactNumber: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("representation", formData.representation);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("contactNumber", formData.contactNumber);
    data.append("_captcha", "false");
    data.append("_template", "box");
    data.append("_subject", "New Contact Form Submission - Udaan Sathi");

    try {
      const res = await fetch("https://formsubmit.co/contact@udaansathi.com", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        toast.success("✅ Message sent successfully!");
        setFormSubmitted(true);
        setFormData({
          representation: "",
          name: "",
          email: "",
          contactNumber: "",
        });
      } else {
        toast.error("❌ Something went wrong!");
      }
    } catch (err) {
      toast.error("⚠️ Network error. Please try again!");
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 px-6">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-12">
        {/* Left - Contact Form */}
        <div className="w-full md:w-1/2">
          <div className="bg-white/60 backdrop-blur-xl border border-purple-200 rounded-3xl shadow-xl p-8 md:p-10 transition-all duration-300">
            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center space-y-6"
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-purple-800">
                    Thank you!
                  </h2>
                  <p className="text-gray-600">
                    We’ve received your message. We’ll get in touch soon.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full hover:opacity-90 transition"
                  >
                    Submit Another Response
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">
                      Are you representing?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="representation"
                      value={formData.representation}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-purple-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="" disabled>
                        Please select one
                      </option>
                      <option value="brand">Brand</option>
                      <option value="influencer">Influencer</option>
                    </select>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full rounded-lg border border-purple-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full rounded-lg border border-purple-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="Contact Number"
                      className="w-full rounded-lg border border-purple-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:opacity-90 transition shadow-md"
                    >
                      Submit
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 text-center mt-8 md:text-left space-y-8 px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800">
            Connect with Real Creators
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At{" "}
            <span className="font-semibold text-purple-600">Udaan Sathi</span>,
            we help brands rise through meaningful creator collaborations. We
            believe authenticity is the new influence.
          </p>
        </div>
      </div>
    </div>
  );
}
