export default function Contact() {
  return (
    <section className="min-h-screen bg-white text-[#2C3E50] pt-28 pb-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold uppercase">CONTACT SECTION</h2>
        <div className="flex justify-center items-center mt-4">
          <div className="w-16 h-1 bg-[#2C3E50] mx-2"></div>
          <i className="fa-solid fa-star text-[#2C3E50]"></i>
          <div className="w-16 h-1 bg-[#2C3E50] mx-2"></div>
        </div>
      </div>

      <form className="max-w-lg mx-auto space-y-6 px-4">
        <div className="relative">
          <input
            type="text"
            id="name"
            className="peer w-full border-b-2 border-gray-300 focus:border-[#1ABC9C] outline-none py-2 text-gray-700"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute left-0 top-2.5 text-gray-400 text-sm peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1ABC9C] transition-all"
          >
            userName
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            className="peer w-full border-b-2 border-gray-300 focus:border-[#1ABC9C] outline-none py-2 text-gray-700"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-2.5 text-gray-400 text-sm peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1ABC9C] transition-all"
          >
            userEmail
          </label>
        </div>

        <div className="relative">
          <input
            type="number"
            id="phone"
            className="peer w-full border-b-2 border-gray-300 focus:border-[#1ABC9C] outline-none py-2 text-gray-700"
            placeholder=" "
          />
          <label
            htmlFor="phone"
            className="absolute left-0 top-2.5 text-gray-400 text-sm peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1ABC9C] transition-all"
          >
            userAge
          </label>
        </div>
           <div className="relative">
          <input
            type="password"
            id="pass"
            className="peer w-full border-b-2 border-gray-300 focus:border-[#1ABC9C] outline-none py-2 text-gray-700"
            placeholder=" "
          />
          <label
            htmlFor="phone"
            className="absolute left-0 top-2.5 text-gray-400 text-sm peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1ABC9C] transition-all"
          >
            userPassword
          </label>
        </div>

        <button
          type="submit"
          className="bg-[#1ABC9C] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#159a80] transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
