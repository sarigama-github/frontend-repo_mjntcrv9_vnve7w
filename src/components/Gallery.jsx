import Section from "./Section";
import { PRODUCT } from "../constants";

export default function Gallery() {
  return (
    <Section id="gallery" className="bg-neutral-50">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Built for Real Life</h2>
        <p className="mt-2 text-neutral-600">Office. Travel. Gym. Outdoors. Road trips.</p>
      </div>
      <div className="mt-10 columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {PRODUCT.gallery.map((g, i) => (
          <img key={i} src={g.src} alt={g.alt} className="w-full rounded-2xl shadow-md hover:shadow-lg transition" />
        ))}
      </div>
    </Section>
  )
}
