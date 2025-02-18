import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Constructions",
    feedback:
      "O ad vero porttitor odit dis gravatam. Autem ante at arcu constituemus mus mutilatio in dispositae cum saeviat ea odit eum mi e urna vestimenta quia. Sem interim in clari nunc te eros quam nec S cladis occumbere nisl serpens vel hac pellentesque iactura.",
  },
  {
    name: "Jane Smith",
    position: "Founder, BuildCorp",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla dui vel erat interdum, a luctus felis volutpat. Cras at quam et lacus vestibulum bibendum.",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextTestimonial = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="w-full py-16 bg-[#2A322B] text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-500">What Our Clients Say</h2>
        <p className="mt-4 text-gray-300">{testimonials[index].feedback}</p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-green-400">{testimonials[index].name}</h3>
          <p className="text-gray-400">{testimonials[index].position}</p>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-center space-x-6">
          <button
            onClick={prevTestimonial}
            className="text-gray-400 hover:text-white transition"
          >
            <FaChevronLeft /> Prev
          </button>

          <div className="relative w-16 h-16">
            <FaUserCircle className="w-full h-full text-gray-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-green-500 rounded-full"></div>
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="text-gray-400 hover:text-white transition"
          >
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
