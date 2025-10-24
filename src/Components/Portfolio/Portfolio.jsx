import { useState } from "react";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
const images = [port1, port2, port3, port1, port2, port3];


  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="min-h-screen bg-white text-[#2C3E50] pt-28 pb-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold uppercase">PORTFOLIO</h2>
        <div className="flex justify-center items-center mt-4">
          <div className="w-16 h-1 bg-[#2C3E50] mx-2"></div>
          <i className="fa-solid fa-star text-[#2C3E50]"></i>
          <div className="w-16 h-1 bg-[#2C3E50] mx-2"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`portfolio-${index}`}
              className="rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#1ABC9C]/80 opacity-0 group-hover:opacity-100 flex justify-center items-center rounded-lg transition-opacity duration-300">
              <i className="fa-solid fa-plus text-white text-4xl"></i>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="enlarged"
              className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
