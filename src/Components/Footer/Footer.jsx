export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white text-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-10">
        <div>
          <h3 className="text-lg font-bold mb-2">LOCATION</h3>
          <p>
            2215 John Daniel Drive
            <br />
            Clark, MO 65243
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">AROUND THE WEB</h3>
          <div className="flex justify-center space-x-3">
            <i className="fa-brands fa-facebook-f border border-gray-400 w-10 h-10 flex items-center justify-center rounded-full"></i>
            <i className="fa-brands fa-twitter border border-gray-400 w-10 h-10 flex items-center justify-center rounded-full"></i>
            <i className="fa-brands fa-linkedin-in border border-gray-400 w-10 h-10 flex items-center justify-center rounded-full"></i>
            <i className="fa-solid fa-globe border border-gray-400 w-10 h-10 flex items-center justify-center rounded-full"></i>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">ABOUT FREELANCER</h3>
          <p className="text-sm">
            Freelance is a free to use, licensed Bootstrap theme created by Route
          </p>
        </div>
      </div>

      <div className="bg-[#1A252F] py-5 mt-0">
        <p className="text-sm mb-0">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
