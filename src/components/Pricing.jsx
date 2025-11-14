import Section from "./Section";
import { PRODUCT, formatPrice } from "../constants";

export default function Pricing() {
  return (
    <Section id="pricing" className="bg-white">
      <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl border shadow-sm bg-gradient-to-b from-neutral-50 to-white">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">{PRODUCT.name}</h2>
        <p className="mt-2 text-neutral-600">Free Shipping in India • 7-day return policy</p>
        <div className="mt-6 text-4xl font-semibold">{formatPrice(PRODUCT.price, PRODUCT.currency)}</div>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-left">
          {PRODUCT.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="h-2.5 w-2.5 mt-2 rounded-full bg-blue-500"/>
              <span className="text-neutral-700">{b}</span>
            </li>
          ))}
        </ul>
        <button onClick={() => startCheckout(PRODUCT.id)} className="mt-8 inline-flex items-center justify-center px-8 py-4 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition w-full sm:w-auto">Buy Now</button>
        <div className="mt-4 text-xs text-neutral-500">Secure payments • COD available in select cities</div>
      </div>
      <div className="fixed bottom-4 inset-x-4 sm:hidden">
        <button onClick={() => startCheckout(PRODUCT.id)} className="w-full px-6 py-4 rounded-full bg-neutral-900 text-white shadow-lg">Buy Now — {formatPrice(PRODUCT.price)}</button>
      </div>
    </Section>
  )
}

function startCheckout(productId){
  console.log("startCheckout called for", productId)
}
