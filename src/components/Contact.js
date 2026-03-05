const Contact = () => {
  return (
    <form className="flex-col justify-center align-middle">
      <div>
        <label>Your Name</label>
        <input type="text" className="border-2" />
      </div>
      <div>
        <label>Your Email</label>
        <input type="email" className="border-2" />
      </div>

      <div>
        <label>Contact Number</label>
        <input type="tel" className="border-2" />
      </div>
      <div>
        <label>Your Message (Optional)</label>
        <textarea className="border-r-gray-200"></textarea>
      </div>
    </form>
  );
};

export default Contact;
