"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import MapComponent from "@/components/Map/MapComponent";

// Form validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error(
          result.error || "Failed to send message. Please try again.",
        );
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };


  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Decorative Background Blobs */}
      <div className="absolute -left-20 top-40 h-80 w-80 rounded-full bg-orange-500/5 blur-[120px]" />
      <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left - Contact Form Card */}
        <motion.div
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-[3rem] bg-white border border-gray-100 p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] md:p-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-3xl font-extrabold tracking-tight text-[#061C3D] md:text-5xl"
          >
            Get <span className="text-orange-500">In Touch</span>
          </motion.h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  label: "Name",
                  placeholder: "Full Name",
                  type: "text",
                  name: "name" as const,
                },
                {
                  label: "Email",
                  placeholder: "Email Address",
                  type: "email",
                  name: "email" as const,
                },
              ].map((field, index) => (
                <motion.div
                  key={field.label}
                  custom={index}
                  variants={inputVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-gray-500">
                    {field.label}
                  </label>
                  <input
                    {...register(field.name)}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full rounded-2xl border border-gray-100 bg-gray-50/50 p-4 text-gray-900 transition-all duration-300 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10"
                  />
                  {errors[field.name] && (
                    <p className="mt-2 text-xs font-medium text-red-500">
                      {errors[field.name]?.message}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              custom={2}
              variants={inputVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-gray-500">Subject</label>
              <input
                {...register("subject")}
                type="text"
                placeholder="How can we help?"
                className="w-full rounded-2xl border border-gray-100 bg-gray-50/50 p-4 text-gray-900 transition-all duration-300 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10"
              />
              {errors.subject && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {errors.subject?.message}
                </p>
              )}
            </motion.div>

            <motion.div
              custom={3}
              variants={inputVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-gray-500">Message</label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Tell us about your project or inquiry..."
                className="w-full rounded-2xl border border-gray-100 bg-gray-50/50 p-4 text-gray-900 transition-all duration-300 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10"
              />
              {errors.message && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {errors.message?.message}
                </p>
              )}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center rounded-2xl bg-[#061C3D] px-8 py-5 text-lg font-bold text-white shadow-xl transition-all hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Right Area - Info & Map */}
        <div className="flex flex-col gap-10">
          <motion.div
            variants={infoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-extrabold text-[#061C3D]">
                Prefer a Direct Approach?
              </h3>
              <p className="text-lg leading-relaxed text-gray-500">
                Reach out to us through any of these channels. We&apos;re always happy to help.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-orange-100 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                  </svg>
                </div>
                <p className="font-bold text-[#061C3D]">Give us a call</p>
                <p className="mt-1 text-gray-600">+251 1108080</p>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-orange-100 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-500">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                    <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.11,4 20,4M20,18H4V8L12,13L20,8V18M20,6L12,11L4,6V6H20V6Z" />
                  </svg>
                </div>
                <p className="font-bold text-[#061C3D]">Send an email</p>
                <p className="mt-1 text-gray-600 text-sm md:text-base">contact@icapitalafrica.org</p>
              </div>
            </div>
          </motion.div>

          {/* Map Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative h-[400px] w-full overflow-hidden rounded-[3rem] border-8 border-white bg-white shadow-2xl lg:h-[450px]"
          >
            <MapComponent className="h-full w-full grayscale transition-all duration-700 group-hover:grayscale-0" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] bg-white/90 p-6 backdrop-blur-md shadow-xl border border-white/20 sm:right-auto sm:max-w-xs">
              <p className="font-extrabold text-[#061C3D]">Visit Our Office</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-600 font-medium">
                The i-Capital Africa Institute<br />Addis Ababa, Ethiopia
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="mt-4 flex items-center gap-2 font-bold text-orange-500"
                onClick={() => window.open("https://maps.app.goo.gl/zCmZ9LmY2EMySmS29", "_blank")}
              >
                Get directions
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
