import Section from "./Section";
import { PRODUCT, formatPrice } from "../constants";

export default function Variants() {
  const v = PRODUCT.variants[0]
  return (
    <Section id="variants" className="bg-neutral-50">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Choose Your Variant</h2>
        <p className="mt-2 text-neutral-600">More options coming soon.</p>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="md:col-start-2 p-6 rounded-3xl border bg-white shadow-sm">
          <img src={v.images[0]} alt={v.name} className="rounded-2xl w-full h-64 object-cover" />
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="text-lg font-medium text-neutral-900">{v.name}</div>
              <div className="text-sm text-neutral-600">Color: {v.colorOptions[0].name}</div>
            </div>
            <div className="text-lg font-semibold">{formatPrice(v.price)}</div>
          </div>
          <a href="#pricing" className="mt-4 block w-full text-center px-6 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition">Buy Now</a>
        </div>
      </div>
    </Section>
  )
}
