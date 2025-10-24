export default function About() {
  return (
    <section className="bg-[#1ABC9C] text-white min-h-screen flex flex-col justify-center items-center text-center px-4">
      {/* العنوان */}
      <h2 className="text-4xl font-bold uppercase mb-4">ABOUT COMPONENT</h2>

      {/* النجمة */}
      <div className="flex justify-center items-center mb-8">
        <div className="w-16 h-1 bg-white mx-2"></div>
        <i className="fa-solid fa-star text-white"></i>
        <div className="w-16 h-1 bg-white mx-2"></div>
      </div>

      {/* النص */}
      <div className="max-w-3xl grid sm:grid-cols-2 gap-8 text-left">
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p>
          You can create your own custom avatar for the masthead, change the
          icon in the dividers, and add your email address to the contact form
          to make it fully functional!
        </p>
      </div>
    </section>
  );
}
