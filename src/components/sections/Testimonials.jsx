import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Jignesh Aggarwaal",
      company: "Shop Sasta Mart",
      feedback: "Website was developed very well, according to the given design. Really liked the final published website.",
      rating: 5
    },
    {
      name: "John Allywn Louis",
      company: "GSEL Enterprises",
      feedback: "Impressed by the qulity of work delivered, from social media marketing to shopify setup and creatives every thing is handled professionally. ",
      rating: 5
    },
    {
      name: "Asha",
      company: "Global India - BuyJmn",
      feedback: "Thanks for improving the speed of website and boosting sales on woocommerce. Highly recommended!",
      rating: 5
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs text-orange-500 font-extrabold tracking-widest uppercase bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200 shadow-sm">
            CLIENT FEEDBACK
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            What Our Partners Say
          </h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel container */}
          <div className="overflow-hidden rounded-2xl shadow-sm border border-slate-200">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((test, idx) => (
                <div key={idx} className="w-full shrink-0 bg-slate-50 p-10 flex flex-col items-center text-center justify-center min-h-[300px]">
                  <div className="flex text-orange-500 mb-6">
                    {[...Array(test.rating)].map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}
                  </div>
                  <p className="text-slate-700 italic mb-8 text-lg md:text-xl max-w-2xl">"{test.feedback}"</p>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">{test.name}</p>
                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">{test.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev} 
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white text-slate-600 hover:text-orange-500 border border-slate-200 shadow-md h-11 w-11 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNext} 
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white text-slate-600 hover:text-orange-500 border border-slate-200 shadow-md h-11 w-11 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className="w-11 h-11 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <span
                aria-hidden="true"
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-orange-500' : 'bg-slate-300 hover:bg-orange-300'
                }`}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
