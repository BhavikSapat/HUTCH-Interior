"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Home,
  Users,
  Briefcase,
  Sofa,
  Palette,
  PenTool,
  Hammer,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <>
      <Navbar />

      <div className="pt-16">
        <section id="hero" className="relative min-h-screen overflow-hidden">
          <Image
            src="/hero.webp"
            alt="Hero Background"
            fill
            priority
            className="object-cover -z-10"
          />
          {/* <div className="absolute inset-0 bg-black/50 -z-10" /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 md:via-transparent to-transparent -z-10" />

          <Hero />
        </section>

        <section
          id="about"
          className="relative min-h-auto overflow-hidden bg-[#F7F4F0]/100"
        >
          <About />
        </section>

        <section
          id="services"
          className="relative min-h-auto overflow-hidden bg-white"
        >
          <Services />
        </section>

        <section id="process" className="relative min-h-auto overflow-hidden ">
          <Image
            src="/about.webp"
            alt="Hero Background"
            fill
            priority
            className="object-cover -z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent md:via-black/50  to-transparent -z-10" />
          <Process />
        </section>

        <section
          id="projects"
          className="relative min-h-auto overflow-hidden bg-white"
        >
          <FeaturedProjects />
        </section>

        <section id="faqs" className="relative min-h-auto overflow-hidden">
          <Image
            src="/faqs.webp"
            alt="Hero Background"
            fill
            priority
            className="fixed object-cover -z-10"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent md:via-black/50  to-transparent -z-10" /> */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] -z-10" />

          <FAQ />
        </section>

        <section
          id="contact"
          className="relative min-h-auto overflow-hidden bg-white"
        >
          <Contact />
        </section>

        <section className="relative min-h-auto overflow-hidden">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Page;

// Navbar Section
const Navbar = () => {
  const tabs = [
    { title: "Home", link: "#hero" },
    { title: "About us", link: "#about" },
    { title: "Project", link: "#projects" },
    { title: "FAQs", link: "#faqs" },
    { title: "Contact Us", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-3">
        <Link
          href="/"
          className="flex items-center text-2xl sm:text-3xl font-bold font-serif tracking-wider text-[#1A1A1A]"
        >
          <span className="tracking-[0.3em]">HUTCH</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {tabs.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="text-sm font-medium text-[#1A1A1A] hover:text-[#C4A882] transition-colors uppercase tracking-wide"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#1A1A1A] hover:bg-[#F7F4F0]"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-white border-none text-[#1A1A1A] px-6"
            >
              <div className="mt-10 flex flex-col gap-6">
                {tabs.map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    className="text-lg font-medium hover:text-[#C4A882] transition-colors uppercase tracking-wide"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="flex min-h-screen items-center px-4 sm:px-8 lg:px-16">
      <div className="max-w-3xl text-white">
        <p className="text-sm sm:text-base uppercase tracking-[0.2em] bg-gradient-to-r from-white to-[#C4A882] bg-clip-text text-transparent font-light">
          {/* <p className="text-sm sm:text-base uppercase tracking-[0.2em] text-[#C4A882] font-light"> */}
          Featured Projects
        </p>

        <h1 className="mt-6 mb-8 font-light leading-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
          Creating Interiors
          <br />
          <span className="font-serif italic">That Inspire Living</span>
        </h1>

        <Link href="#projects">
          <Button className="bg-[#C4A882] hover:bg-[#B09578] text-white px-8 py-6 text-sm uppercase tracking-wider rounded-none transition-all hover:scale-105">
            View Portfolio
          </Button>
        </Link>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
      <div className="group relative overflow-hidden p-8 hover:-translate-y-1 transition-all duration-300">
        <div className=" max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C4A882] font-medium mb-4">
            Who we are
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A1A] leading-tight">
            We are a <span className="font-serif">interior design studio</span>{" "}
            <br className="hidden sm:block" />
            functional and timeless spaces designed to look beautiful
            <br className="hidden sm:block" /> and feel inspiring for modern
            living and work.
          </h2>
        </div>
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      desc: "Full-service interior design for luxury homes, apartments, and villa layouts to your lifestyle.",
      img: "/s1.webp",
    },
    {
      icon: Briefcase,
      title: "Commercial Spaces",
      desc: "Creating impactful environments for retail, hospitality, and public spaces that reflect brand identity.",
      img: "/s2.webp",
    },
    {
      icon: Sofa,
      title: "Office Design",
      desc: "Product and inspiring workspace solutions that enhance employee well-being and efficiency.",
      img: "/s3.webp",
    },
    {
      icon: Palette,
      title: "Custom Furniture",
      desc: "Bespoke furniture design and sourcing to ensure unique pieces that perfectly fit your space.",
      img: "/s4.webp",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C4A882] font-medium">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-[#1A1A1A] mt-2">
            What We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden p-8 hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover scale-110  group-hover:scale-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-transparent" />
                <div className="relative">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#C4A882]/70  transition-all duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white z-40 pt-5">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/80 leading-relaxed my-auto pb-3">
                    {service.desc}
                  </p>

                  {/* <Link
                    href="#"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-[#C4A882] hover:text-[#B09578] transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Process Section
const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Users,
      title: "Discovery",
      desc: "We begin with a consultation to understand your needs, style, and budget.",
    },
    {
      number: "02",
      icon: PenTool,
      title: "Concept",
      desc: "Developing initial mood boards, layouts, and design direction for your project.",
    },
    {
      number: "03",
      icon: Palette,
      title: "Design",
      desc: "We bring to life a custom design that reflects your vision.",
    },
    {
      number: "04",
      icon: Hammer,
      title: "Execution",
      desc: "Managing construction, finishing, and installation to ensure a seamless project.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C4A882] font-medium">
            Our Working Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white mt-2">
            How We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative p-8 bg-white border border-[#EDE8E1] hover:border-[#C4A882] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-light text-[#C4A882]">
                    {step.number}
                  </span>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C4A882]/10">
                    <Icon className="h-6 w-6 text-[#C4A882]" />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-medium text-[#1A1A1A]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-[#666] leading-relaxed">
                  {step.desc}
                </p>

                {/* <Link
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-[#C4A882] hover:text-[#B09578] transition-colors"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is this a service suitable for all skill types?",
      a: "Yes, our products are carefully formulated to suit all skill types, including DIY, construction, and interior design.",
    },
    {
      q: "How long does it take to see visible results?",
      a: "Our products are designed to deliver results in a timely manner. The timeline depends on the scope of your project and specific requirements.",
    },
    {
      q: "Can I use these products every day?",
      a: "Yes, our products are designed to be used every day. They are built with durability and longevity in mind.",
    },
    {
      q: "Do you offer consultation for small projects?",
      a: "Absolutely! We offer consultation for projects of all sizes. Whether it's a single room or an entire building, we're here to help.",
    },
    {
      q: "What is your design process?",
      a: "Our design process includes discovery, concept development, detailed design, and execution. We work closely with you at every stage.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C4A882] font-medium">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-[#1A1A1A] mt-2">
            Frequently Asked Questions?
          </h2>
          <p className="mt-4 text-[#666]">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#EDE8E1] hover:border-[#C4A882] transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-[#1A1A1A] pr-8">
                  {faq.q}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#C4A882]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#C4A882]" />
                  )}
                </div>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "pb-6 max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-sm text-[#666] leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const FeaturedProjects = () => {
  const projects = [
    {
      img: "/",
      title: "Residential Design",
      desc: "Full-service interior design for luxury homes, apartments, and villa layouts to your lifestyle.",
    },
    {
      img: "/",
      title: "Commercial Spaces",
      desc: "Creating impactful environments for retail, hospitality, and public spaces that reflect brand identity.",
    },
    {
      img: "/",
      title: "Office Design",
      desc: "Product and inspiring workspace solutions that enhance employee well-being and efficiency.",
    },
    {
      img: "/",
      title: "Custom Furniture",
      desc: "Bespoke furniture design and sourcing to ensure unique pieces that perfectly fit your space.",
    },
    {
      img: "/",
      title: "Luxury Villa",
      desc: "Elegant and sophisticated interior design for luxury villas with stunning finishes.",
    },
    {
      img: "/",
      title: "Restaurant Design",
      desc: "Creating immersive dining experiences through thoughtful interior design.",
    },
    {
      img: "/",
      title: "Office Renovation",
      desc: "Modern and productive workspace solutions that boost employee morale and efficiency.",
    },
    {
      img: "",
      title: "Boutique Hotel",
      desc: "Designing unique and memorable spaces for boutique hotels and luxury accommodations.",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full px-4 sm:px-8 lg:px-16 py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-12">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#C4A882] font-medium ">
              Featured Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-[#1A1A1A] mt-1">
              Our Work
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden bg-white border border-[#EDE8E1] hover:border-[#C4A882] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 w-full overflow-hidden bg-[#F7F4F0]">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-medium text-[#1A1A1A]">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-[#666] leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
import { useForm, SubmitHandler } from "react-hook-form";
interface IFormInput {
  fullName: string;
  email: string;
  query: string;
}
const Contact = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const phoneNumber = "9028965101";

    const textMessage = `🏡 *New Design Inquiry*

Full Name: ${data.fullName}
Email: ${data.email}
Query:${data.query}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      textMessage,
    )}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-8 lg:px-16 py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#C4A882] font-medium">
              Contact Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-[#1A1A1A] mt-2">
              Let's Create Something
              <br />
              <span className="font-serif">Beautiful Together</span>
            </h2>

            <p className="mt-6 text-[#666] leading-relaxed">
              Have a project in mind? We'd love to hear about it. Reach out to
              us and let's bring your vision to life.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C4A882]/10">
                  <Phone className="h-5 w-5 text-[#C4A882]" />
                </div>
                <div>
                  <p className="text-sm text-[#666]">Phone</p>
                  <Link
                    href="tel:+911234567890"
                    className="text-[#1A1A1A] hover:text-[#C4A882] transition-colors"
                  >
                    +91 12345 67890
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C4A882]/10">
                  <Mail className="h-5 w-5 text-[#C4A882]" />
                </div>
                <div>
                  <p className="text-sm text-[#666]">Email</p>
                  <Link
                    href="mailto:hello@hutch.com"
                    className="text-[#1A1A1A] hover:text-[#C4A882] transition-colors"
                  >
                    hello@hutch.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C4A882]/10">
                  <MapPin className="h-5 w-5 text-[#C4A882]" />
                </div>
                <div>
                  <p className="text-sm text-[#666]">Location</p>
                  <p className="text-[#1A1A1A]">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F4F0] p-8 lg:p-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
                    Your Name
                  </label>
                  <input
                    {...register("fullName")}
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-[#EDE8E1] focus:border-[#C4A882] outline-none transition-colors"
                    placeholder="Bhavik Sapat"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
                    Your Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-[#EDE8E1] focus:border-[#C4A882] outline-none transition-colors"
                    placeholder="bhavik@gamil.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
                    Message
                  </label>
                  <textarea
                    {...register("query")}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-[#EDE8E1] focus:border-[#C4A882] outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#1A1A1A] hover:bg-[#333] text-white px-8 py-6 text-sm uppercase tracking-wider rounded-none transition-all"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 64;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-14">
        <div className="flex flex-col gap-12 text-center md:text-left md:flex-row md:items-start md:justify-between">
          <div className="md:max-w-md">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start text-2xl sm:text-3xl font-serif tracking-wider text-[#C4A882]"
            >
              HUTCH
            </Link>

            <p className="mt-4 leading-7 text-sm text-white/60">
              Creating functional and timeless spaces designed to look beautiful
              and feel inspiring for modern living and work.
            </p>

            <div className="mt-6 flex justify-center gap-4 md:justify-start">
              <Link
                href="#"
                className="rounded-lg border border-white/10 p-2 transition-all duration-300 hover:bg-[#C4A882] hover:border-[#C4A882] hover:scale-110"
              >
                <FaInstagram className="text-lg" />
              </Link>
              <Link
                href="#"
                className="rounded-lg border border-white/10 p-2 transition-all duration-300 hover:bg-[#C4A882] hover:border-[#C4A882] hover:scale-110"
              >
                <FaFacebookF className="text-lg" />
              </Link>
              <Link
                href="#"
                className="rounded-lg border border-white/10 p-2 transition-all duration-300 hover:bg-[#C4A882] hover:border-[#C4A882] hover:scale-110"
              >
                <FaLinkedinIn className="text-lg" />
              </Link>
              <Link
                href="#"
                className="rounded-lg border border-white/10 p-2 transition-all duration-300 hover:bg-[#C4A882] hover:border-[#C4A882] hover:scale-110"
              >
                <FaWhatsapp className="text-lg" />
              </Link>
            </div>
          </div>

          <div className="flex gap-10 md:gap-46 md:justify-between  justify-center text-left ">
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-[#C4A882]">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#hero"
                    onClick={(e) => handleScroll(e, "#hero")}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    onClick={(e) => handleScroll(e, "#about")}
                    className="hover:text-white transition-colors"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    onClick={(e) => handleScroll(e, "#projects")}
                    className="hover:text-white transition-colors"
                  >
                    Project
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faqs"
                    onClick={(e) => handleScroll(e, "#faqs")}
                    className="hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    onClick={(e) => handleScroll(e, "#contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-[#C4A882]">
                Contact
              </h3>
              <div className="space-y-3 text-sm">
                <Link
                  href="tel:+911234567890"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-[#C4A882]" />
                  +91 12345 67890
                </Link>
                <Link
                  href="mailto:hello@hutch.com"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-[#C4A882]" />
                  hello@hutch.com
                </Link>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#C4A882]" />
                  Mumbai, Maharashtra
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />
        <div className="text-center text-xs text-white/40">
          © 2026 HUTCH. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
