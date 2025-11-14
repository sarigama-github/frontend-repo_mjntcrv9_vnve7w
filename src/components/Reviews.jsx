import Section from "./Section";
import StarRating from "./StarRating";
import { PRODUCT } from "../constants";

export default function Reviews() {
  return (
    <Section id="reviews" className="bg-white">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Loved by Travelers & Professionals</h2>
        <p className="mt-2 text-neutral-600">Trusted by {PRODUCT.reviews.count}+ customers</p>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {PRODUCT.reviews.items.map((r, i) => (
          <div key={i} className="p-6 rounded-3xl border bg-white shadow-sm">
            <StarRating rating={r.rating} />
            <p className="mt-3 text-neutral-700">“{r.quote}”</p>
            <div className="mt-2 text-sm text-neutral-500">— {r.name}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
