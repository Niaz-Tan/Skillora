import { formatPrice } from '@/lib/formatPrice'
import React from 'react'

const Pricing = ({price}) => {
  return (
    <div className="mt-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-xl text-zinc-500">Course Price :</p>

                  <p className="text-3xl font-semibold text-white">
                    {formatPrice(price)}
                  </p>
                </div>

                <div className="w-fit rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                  Enrollment Open
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <button className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-600 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:scale-[1.02] hover:opacity-95">
                  Enroll Now
                </button>

                <button className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 text-sm font-semibold text-gray-200 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white">
                  Add to cart
                </button>
              </div>
            </div>
  )
}

export default Pricing