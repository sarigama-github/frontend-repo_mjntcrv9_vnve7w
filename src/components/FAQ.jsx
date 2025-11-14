import Section from "./Section";
import { PRODUCT } from "../constants";

export default function FAQ(){
  return (
    <Section id="faq" className="bg-neutral-50">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Frequently Asked Questions</h2>
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {PRODUCT.faqs.map((f, i) => (
          <div key={i} className="p-6 rounded-2xl border bg-white shadow-sm">
            <div className="font-medium text-neutral-900">{f.q}</div>
            <div className="mt-2 text-neutral-700 text-sm">{f.a}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
