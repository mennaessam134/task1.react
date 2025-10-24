
import avatar from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <section className="bg-[#1ABC9C] min-h-screen flex flex-col justify-center items-center text-white pt-20">
     <img src={avatar} alt="Avatar" className="mx-auto w-52" />

      <h1 className="text-3xl font-bold">START FRAMEWORK</h1>
      <div className="flex items-center my-4">
        <div className="w-20 h-1 bg-white mx-2"></div>
        <i className="fa-solid fa-star"></i>
        <div className="w-20 h-1 bg-white mx-2"></div>
      </div>
      <p className="text-sm">
        Graphic Artist - Web Designer - Illustrator
      </p>
    </section>
  );
}
