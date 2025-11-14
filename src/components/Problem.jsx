import Section from "./Section";
import { motion } from "framer-motion";

const pains = [
  { title: "Tears easily", desc: "Flimsy materials that fail in months." },
  { title: "Not for real life", desc: "Looks good, performs poorly for work + travel." },
  { title: "No weather protection", desc: "Rain ruins your gear and day." },
  { title: "Chaos inside", desc: "Zero organization and wasted space." },
]

export default function Problem() {
  return (
    <Section id="problem" className="bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">The Problem</h2>
          <p className="mt-4 text-neutral-600">Most bags cut corners on materials, ignore bad weather, and forget that your day isn’t a straight line from 9 to 5.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {pains.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-5 rounded-2xl border shadow-sm">
              <div className="text-lg font-medium text-neutral-900">{p.title}</div>
              <div className="text-neutral-600 text-sm mt-1">{p.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
