import Section from "./Section";
import { motion } from "framer-motion";
import { PRODUCT } from "../constants";

const features = [
  {
    title: "Material & Build",
    desc: PRODUCT.highlights.material,
    img: "https://images.unsplash.com/photo-1520975922284-5cc75760b5f1?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Weatherproof",
    desc: PRODUCT.highlights.waterproof,
    img: "https://images.unsplash.com/photo-1520975821476-5c232f87a98b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Smart Compartments",
    desc: "3D-like split organization with quick-access pockets",
    img: "https://images.unsplash.com/photo-1512426747669-5dd7f1c02a20?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Laptop Safety Sleeve",
    desc: PRODUCT.highlights.laptop,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Ergonomic Comfort",
    desc: "Cushioned straps, breathable back panel for long days",
    img: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1200&auto=format&fit=crop"
  }
]

export default function Features() {
  return (
    <Section id="features" className="bg-white">
      <div className="space-y-16">
        {features.map((f, i) => (
          <div key={i} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <motion.img
              src={f.img}
              alt={f.title}
              className="rounded-3xl shadow-xl w-full"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900">{f.title}</h3>
              <p className="mt-3 text-neutral-600">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
