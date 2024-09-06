const Contact = () => {
  return (
    <div className="w-full flex">
      <div className="mx-auto p-4 m-6">
        <h1 className="font-bold text-3xl">Contact Us</h1>
        <form className="flex gap-2 mt-4">
          <input
            type="text"
            className="border border-gray-400 rounded-sm p-2"
            placeholder="Name"
          />
          <input
            type="text"
            className="border border-gray-400 rounded-sm p-2"
            placeholder="Message"
          />
          <button className="border-2 border-gray-400 bg-gray-100 rounded-lg p-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
