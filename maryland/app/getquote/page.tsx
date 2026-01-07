export default function QuotePage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-neutral-50 text-neutral-900">

            {/* ambient background glow */}
            <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full 
          bg-cyan-400/20 blur-[120px]" />
            <div className="pointer-events-none absolute top-40 right-0 h-[420px] w-[420px] 
          bg-indigo-400/20 blur-[120px]" />

            {/* mesh background */}
            <div className="absolute inset-0 -z-10 bg-[url(/mesh-gradient.webp)] bg-cover opacity-20" />

            {/* HEADER */}
            <section className="mx-auto max-w-3xl px-6 pt-16 pb-24 text-center relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
                    Transparent pricing
                    <span className="block text-cyan-600">within 24 hours</span>
                </h1>
                <p className="mt-4 text-neutral-600">
                    Upload your latest statement and receive a clear, tailored quote
                    no hidden fees, no surprises.
                </p>
            </section>

            {/* MAIN CARD */}
            {/* MAIN CARD */}
            <section className="mx-auto mt-14 max-w-7xl px-6 pb-24 relative">

                {/* card glow */}
                <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
                    <div
                        className="h-full w-4/5 rounded-3xl bg-linear-to-r
    from-cyan-400/25 via-sky-400/20 to-indigo-400/25 blur-[100px]"
                    />
                </div>

                <div
                    className="grid overflow-hidden rounded-3xl
  bg-white/85 backdrop-blur-2xl
  shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]
  ring-1 ring-neutral-200
  md:grid-cols-2"
                >

                    {/* LEFT – IMAGE */}
                    <div className="relative hidden md:block">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1658506660851-63aa98e86cf8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Business growth"
                            className="h-full w-full object-cover"
                        />

                        {/* image overlay */}
                        <div className="absolute inset-0 bg-blue-500/30 blur-4xl"
                        />

                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <h3 className="text-3xl font-bold">
                                Simple. Honest. Transparent.
                            </h3>
                            <p className="mt-2 text-sm text-white/80">
                                Pricing designed for modern businesses.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT – FORM */}
                    <div className="p-8 md:p-12">
                        <h3 className="text-3xl font-bold mb-5">How should we contact you?</h3>
                        <form className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            <input
                                placeholder="Business Name"
                                className="col-span-2 rounded-xl border border-neutral-300 p-3 h-16
        focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            <input
                                placeholder="Contact Name"
                                className="rounded-xl border border-neutral-300 p-3 h-16
        focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="rounded-xl border border-neutral-300 p-3 h-16
        focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="col-span-2 rounded-xl border border-neutral-300 p-3 h-16
        focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            <input
                                type="number"
                                min={0}
                                placeholder="Years in Business"
                                className="col-span-2 rounded-xl border border-neutral-300 p-3 h-16
        focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            {/* upload */}
                            <div
                                className="col-span-2 grid h-32 place-items-center rounded-2xl
        border-2 border-dashed border-neutral-300
        bg-neutral-50 text-sm text-neutral-500"
                            >
                                Drag or click to upload statement
                            </div>

                            <textarea
                                rows={3}
                                placeholder="Additional notes (optional)"
                                className="col-span-2 rounded-xl border border-neutral-300 p-3
        focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            <button
                                type="submit"
                                className="w-full block items-center justify-center rounded-full bg-linear-to-r from-[#206DD1] to-[#1a5bb3] px-10 py-4 text-base font-bold text-white shadow-[0_10px_25px_rgba(32,109,209,0.4)] transition-transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(32,109,209,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white"
                            >
                                Get my quote
                            </button>

                        </form>
                    </div>

                </div>
            </section>

        </main>
    );
}
