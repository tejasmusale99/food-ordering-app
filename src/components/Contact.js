const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg">
        
        <h1 className="text-3xl font-bold text-center mb-8">
          Contact Us
        </h1>

        <form className="space-y-6">

          <div className="flex flex-col">
            <label className="mb-2 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium">Contact Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium">
              Your Message (Optional)
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition cursor-pointer"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;