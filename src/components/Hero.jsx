import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PRODUCT } from "../constants";
import { formatPrice } from "../constants";

export default function Hero({ onExplore }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <div ref={ref} className="relative min-h-[90vh] md:min-h-screen isolate overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950"/>
      <div className="absolute -inset-x-16 -top-32 h-[480px] blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)]"/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
        >
          {PRODUCT.tagline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mt-4 text-lg md:text-xl text-neutral-300"
        >
          {PRODUCT.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{ y }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <div className="relative w-[280px] h-[320px] md:w-[420px] md:h-[480px]">
            <div className="absolute -inset-8 rounded-[28px] bg-gradient-to-t from-blue-500/20 via-cyan-400/10 to-transparent blur-2xl"/>
            <img
              src={PRODUCT.variants[0].images[0]}
              alt={PRODUCT.name}
              className="relative z-10 w-full h-full object-cover rounded-[24px] shadow-2xl ring-1 ring-white/10 animate-[float_6s_ease-in-out_infinite]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#pricing" className="px-6 py-3 rounded-full bg-white text-neutral-900 font-medium hover:bg-neutral-100 transition">Buy Now — {formatPrice(PRODUCT.price, PRODUCT.currency)}</a>
            <button onClick={onExplore} className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">Explore Features</button>
          </div>

          <div className="mt-6 text-neutral-400 text-sm flex items-center gap-2">
            <span className="inline-block h-1 w-1 rounded-full bg-neutral-400 animate-pulse"/>
            Smooth scroll to explore
          </div>
        </motion.div>
      </div>
    </div>
  )
}
