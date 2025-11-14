import Section from "./Section";
import { motion } from "framer-motion";
import { PRODUCT } from "../constants";

const points = PRODUCT.benefits

export default function Solution() {
  return (
    <Section id="solution" className="bg-neutral-50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 blur-2xl rounded-3xl"/>
          <img src={PRODUCT.variants[0].images[0]} alt={PRODUCT.name} className="relative rounded-3xl shadow-2xl w-full" />
        </motion.div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">A Bag Engineered, Not Just Designed.</h2>
          <ul className="mt-6 space-y-3">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="h-2.5 w-2.5 mt-2 rounded-full bg-blue-500"/>
                <span className="text-neutral-700">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
