import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import countryData from "./countryData";

const CountryPage = ({ country, onOpenForm }) => {
  const data = countryData[country];

  useEffect(() => {
    if (!data) return;

    document.title = data.metaTitle;

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }

    description.setAttribute("content", data.metaDescription);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      `${window.location.origin}/${data.slug}`
    );
  }, [data]);

  if (!data) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Page Not Found
          </h1>

          <Link
            to="/"
            className="inline-block mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white text-slate-800">

      
     {/* Hero */}
        <section
        className="relative overflow-hidden bg-slate-950 text-white min-h-[620px] lg:min-h-[680px] flex items-center"
        style={{
            backgroundImage: `
            linear-gradient(
                90deg,
                rgba(3, 10, 30, 0.97) 0%,
                rgba(3, 10, 30, 0.90) 42%,
                rgba(3, 10, 30, 0.45) 70%,
                rgba(3, 10, 30, 0.20) 100%
            ),
            url('/image/country-hero-ecommerce.webp')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        <div className="relative max-w-7xl mx-auto w-full px-6 py-24 lg:py-28">

            <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-blue-200 text-sm font-medium mb-6">
                Ecommerce & Digital Growth Services in {data.country}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                {data.heading}
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-slate-200 max-w-3xl">
                {data.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

                <button
                onClick={onOpenForm}
                className="px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                Get Free Ecommerce Growth Audit
                </button>

                <Link
                to="/services"
                className="px-7 py-3.5 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 font-semibold transition-all duration-300"
                >
                Explore All Services
                </Link>

            </div>

            </div>

        </div>
        </section>
      {/* Services */}
      {/* Services */}
<section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-28">

  {/* Background decorative elements */}
  <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
  <div className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-orange-400/10 blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

      <div className="max-w-3xl">

        <div className="inline-flex items-center gap-2 mb-5">
          <span className="w-8 h-[2px] bg-orange-500" />
          <p className="text-orange-500 font-bold uppercase tracking-[0.18em] text-sm">
            Our Services
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#07152f] leading-[1.08]">
          Digital Growth Services
          <span className="block text-blue-600">
            Built for {data.country}
          </span>
        </h2>

        <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
          From ecommerce marketplace management to digital marketing,
          social media and website development, we help businesses
          build, grow and scale their digital presence.
        </p>

      </div>

      {/* Small right-side statement */}
      <div className="hidden lg:block max-w-xs">

        <div className="border-l-2 border-orange-400 pl-5">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            One Growth Partner
          </p>

          <p className="mt-2 text-lg font-semibold text-[#07152f] leading-snug">
            Strategy, execution and optimisation under one roof.
          </p>
        </div>

      </div>

    </div>


    {/* Service Cards */}
    <div className="grid lg:grid-cols-2 gap-7">

      {data.services.map((service, index) => {

        const serviceNumber = String(index + 1).padStart(2, "0");

        return (
          <article
            key={service.title}
            className="
              group relative overflow-hidden
              rounded-[28px]
              border border-slate-200/80
              bg-white
              p-8 md:p-10
              shadow-[0_10px_40px_rgba(7,21,47,0.06)]
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_25px_70px_rgba(7,21,47,0.13)]
            "
          >

            {/* Large background number */}
            <span
              className="
                absolute -right-3 -top-10
                text-[150px] md:text-[180px]
                font-black
                leading-none
                text-slate-100
                select-none
                transition-all duration-500
                group-hover:text-blue-50
                group-hover:scale-105
              "
            >
              {serviceNumber}
            </span>


            {/* Orange top accent */}
            <div
              className="
                absolute top-0 left-0
                h-1 w-0
                bg-gradient-to-r from-orange-500 to-blue-600
                transition-all duration-500
                group-hover:w-full
              "
            />


            <div className="relative z-10">

              {/* Number + icon */}
              <div className="flex items-center justify-between mb-8">

                <div
                  className="
                    flex items-center justify-center
                    w-14 h-14
                    rounded-2xl
                    bg-gradient-to-br from-blue-600 to-blue-700
                    text-white
                    shadow-lg shadow-blue-600/20
                    transition-transform duration-500
                    group-hover:rotate-3
                    group-hover:scale-110
                  "
                >
                  {index === 0 && (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M3 3v18h18M7 16l3-4 3 2 5-7"
                      />
                    </svg>
                  )}

                  {index === 1 && (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13"
                      />
                    </svg>
                  )}

                  {index === 2 && (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M18 8a6 6 0 01-12 0c0-3.5 6-6 6-6s6 2.5 6 6z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M5 20c2-3 12-3 14 0"
                      />
                    </svg>
                  )}

                  {index >= 3 && (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M4 5h16v14H4zM8 9h8M8 13h5"
                      />
                    </svg>
                  )}
                </div>

                <span className="text-xs font-bold tracking-[0.2em] text-slate-400">
                  {serviceNumber}
                </span>

              </div>


              {/* Title */}
              <h3
                className="
                  text-2xl md:text-3xl
                  font-bold
                  text-[#07152f]
                  tracking-tight
                  transition-colors duration-300
                  group-hover:text-blue-600
                "
              >
                {service.title}
              </h3>


              {/* Description */}
              <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
                {service.description}
              </p>


              {/* Service Links */}
              <div className="mt-7 flex flex-wrap gap-2.5">

                {service.links.map((link) => (
                  <Link
                    key={link.url}
                    to={link.url}
                    className="
                      group/link
                      inline-flex items-center gap-2
                      px-4 py-2.5
                      rounded-full
                      border border-slate-200
                      bg-slate-50
                      text-sm font-semibold
                      text-slate-700
                      transition-all duration-300
                      hover:bg-blue-600
                      hover:border-blue-600
                      hover:text-white
                      hover:-translate-y-0.5
                    "
                  >
                    {link.label}

                    <svg
                      className="
                        w-3.5 h-3.5
                        transition-transform duration-300
                        group-hover/link:translate-x-0.5
                      "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                ))}

              </div>


              {/* Bottom line */}
              <div className="mt-9 pt-6 border-t border-slate-100 flex items-center justify-between">

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Sellaro Digitec
                </span>

                <span
                  className="
                    text-sm font-bold
                    text-blue-600
                    opacity-0 translate-x-3
                    transition-all duration-300
                    group-hover:opacity-100
                    group-hover:translate-x-0
                  "
                >
                  Explore Service →
                </span>

              </div>

            </div>

          </article>
        );
      })}

    </div>


    {/* Bottom trust strip */}
    <div
      className="
        mt-10
        rounded-2xl
        border border-slate-200
        bg-[#07152f]
        px-7 py-6
        flex flex-col md:flex-row
        md:items-center md:justify-between
        gap-5
        shadow-xl
      "
    >

      <div>
        <p className="text-white font-semibold">
          Everything your business needs to grow online.
        </p>

        <p className="text-slate-400 text-sm mt-1">
          Marketplace management • Marketing • Social Media • Websites
        </p>
      </div>

      <button
        onClick={onOpenForm}
        className="
          shrink-0
          px-6 py-3
          rounded-xl
          bg-gradient-to-r from-orange-500 to-orange-400
          text-white
          font-bold
          shadow-lg shadow-orange-500/20
          hover:-translate-y-0.5
          hover:shadow-xl
          transition-all duration-300
        "
      >
        Get Free Growth Audit →
      </button>

    </div>

  </div>
</section>

      {/* Why Sellaro */}
      {/* Why Sellaro */}
<section className="relative overflow-hidden bg-[#07152f] text-white">

  {/* Decorative glow */}
  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
  <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-orange-500/10 blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-28">

    {/* Header */}
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-end">

      <div>

        <div className="flex items-center gap-3 mb-6">
          <span className="w-9 h-[2px] bg-orange-500" />

          <span className="text-orange-400 text-sm font-bold uppercase tracking-[0.2em]">
            Why Sellaro
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
          Why Businesses in{" "}
          <span className="text-blue-400">
            {data.country}
          </span>{" "}
          Choose Sellaro
        </h2>

      </div>

      <div>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
          We combine ecommerce marketplace expertise, digital marketing,
          social media management and website development to create a
          complete digital growth strategy for modern businesses.
        </p>
      </div>

    </div>


    {/* Advantage Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">

      {[
        {
          number: "01",
          title: "Marketplace Expertise",
          text: "Manage and grow your presence across major ecommerce marketplaces."
        },
        {
          number: "02",
          title: "Performance-Focused Marketing",
          text: "Data-driven campaigns designed to increase visibility, traffic and conversions."
        },
        {
          number: "03",
          title: "Conversion-Focused Websites",
          text: "Modern websites built to turn visitors into customers and enquiries."
        },
        {
          number: "04",
          title: "End-to-End Digital Support",
          text: "One partner covering ecommerce, marketing, social media and web development."
        }
      ].map((item) => (

        <div
          key={item.number}
          className="
            group relative
            min-h-[260px]
            rounded-[24px]
            border border-white/10
            bg-white/[0.055]
            backdrop-blur-sm
            p-7
            overflow-hidden
            transition-all duration-500
            hover:-translate-y-2
            hover:bg-white/[0.09]
            hover:border-blue-400/30
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          "
        >

          {/* Number */}
          <div className="
            absolute
            -right-2
            -top-8
            text-[120px]
            font-black
            leading-none
            text-white/[0.035]
            transition-all duration-500
            group-hover:text-blue-400/[0.08]
          ">
            {item.number}
          </div>


          {/* Icon */}
          <div className="
            relative
            flex items-center justify-center
            w-12 h-12
            rounded-xl
            bg-blue-500/10
            border border-blue-400/20
            text-blue-400
            mb-8
            transition-all duration-500
            group-hover:bg-blue-500
            group-hover:text-white
            group-hover:scale-110
          ">

            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M5 13l4 4L19 7"
              />
            </svg>

          </div>


          {/* Content */}
          <div className="relative">

            <h3 className="
              text-xl
              font-bold
              text-white
              leading-snug
              group-hover:text-blue-300
              transition-colors duration-300
            ">
              {item.title}
            </h3>

            <p className="
              mt-4
              text-sm
              leading-relaxed
              text-slate-400
              group-hover:text-slate-300
              transition-colors duration-300
            ">
              {item.text}
            </p>

          </div>


          {/* Bottom accent */}
          <div className="
            absolute bottom-0 left-0
            h-[3px]
            w-0
            bg-gradient-to-r from-orange-500 to-blue-500
            transition-all duration-500
            group-hover:w-full
          " />

        </div>

      ))}

    </div>


    {/* Bottom credibility strip */}
    <div className="
      mt-10
      rounded-2xl
      border border-white/10
      bg-white/[0.035]
      px-6 py-6 md:px-8
      flex flex-col md:flex-row
      md:items-center
      md:justify-between
      gap-6
    ">

      <div className="flex items-center gap-4">

        <div className="
          flex items-center justify-center
          w-11 h-11
          rounded-full
          bg-orange-500/10
          border border-orange-400/20
          text-orange-400
        ">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M12 3l2.8 5.7L21 9.6l-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3z"
            />
          </svg>
        </div>

        <div>
          <p className="font-semibold text-white">
            Built for measurable digital growth
          </p>

          <p className="text-sm text-slate-400 mt-1">
            Strategy • Execution • Optimisation
          </p>
        </div>

      </div>


      <button
        onClick={onOpenForm}
        className="
          inline-flex items-center justify-center
          px-6 py-3
          rounded-xl
          bg-white
          text-[#07152f]
          font-bold
          hover:bg-blue-50
          hover:-translate-y-0.5
          transition-all duration-300
        "
      >
        Talk to Our Experts
        <span className="ml-2">→</span>
      </button>

    </div>

  </div>
</section>

      {/* CTA */}
     {/* CTA */}
<section className="relative overflow-hidden bg-white py-20 lg:py-24">

  <div className="relative max-w-7xl mx-auto px-6">

    <div
      className="
        relative overflow-hidden
        rounded-[32px]
        bg-[#07152f]
        px-7 py-16
        md:px-14 md:py-20
        lg:px-20 lg:py-24
        text-center
        shadow-[0_25px_80px_rgba(7,21,47,0.18)]
      "
    >

      {/* Background glow */}
      <div className="
        absolute
        -top-40
        -right-40
        w-[500px]
        h-[500px]
        rounded-full
        bg-blue-600/30
        blur-[110px]
      " />

      <div className="
        absolute
        -bottom-40
        -left-40
        w-[450px]
        h-[450px]
        rounded-full
        bg-orange-500/20
        blur-[110px]
      " />


      {/* Decorative grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.035]
          pointer-events-none
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "42px 42px"
        }}
      />


      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-7">

          <span className="w-8 h-[2px] bg-orange-500" />

          <span className="
            text-orange-400
            text-sm
            font-bold
            uppercase
            tracking-[0.2em]
          ">
            Start Growing
          </span>

          <span className="w-8 h-[2px] bg-orange-500" />

        </div>


        {/* Heading */}
        <h2
          className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            leading-[1.08]
            tracking-tight
            text-white
          "
        >
          Ready to Grow Your
          <span className="block text-blue-400">
            Business in {data.country}?
          </span>
        </h2>


        {/* Description */}
        <p
          className="
            mt-6
            text-lg
            md:text-xl
            leading-relaxed
            text-slate-300
            max-w-2xl
            mx-auto
          "
        >
          Talk to our ecommerce and digital growth experts about your
          business goals and discover where your next growth opportunity lies.
        </p>


        {/* CTA Buttons */}
        <div className="
          mt-9
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-4
        ">

          <button
            onClick={onOpenForm}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              w-full
              sm:w-auto
              px-8
              py-4
              rounded-xl
              bg-blue-600
              hover:bg-blue-500
              text-white
              font-bold
              shadow-[0_10px_30px_rgba(37,99,235,0.35)]
              hover:shadow-[0_15px_40px_rgba(37,99,235,0.45)]
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            Get Your Free Growth Audit

            <svg
              className="
                w-5 h-5
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>

          </button>


          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              justify-center
              w-full
              sm:w-auto
              px-8
              py-4
              rounded-xl
              border
              border-white/20
              bg-white/[0.04]
              text-white
              font-semibold
              hover:bg-white/[0.1]
              hover:border-white/30
              transition-all
              duration-300
            "
          >
            Talk to Our Team
          </Link>

        </div>


        {/* Trust indicators */}
        <div className="
          mt-10
          pt-7
          border-t
          border-white/10
          flex
          flex-wrap
          items-center
          justify-center
          gap-x-8
          gap-y-3
          text-sm
          text-slate-400
        ">

          <span className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            Ecommerce Expertise
          </span>

          <span className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            Performance Focused
          </span>

          <span className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            End-to-End Support
          </span>

        </div>

      </div>

    </div>

  </div>

</section>

    </div>
  );
};

export default CountryPage;