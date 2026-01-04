import { CreditCard, Monitor, DollarSign, Building2, Smartphone, Handshake } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        { icon: CreditCard, title: "Merchant Accounts & Processing", text: "Accept all major credit and debit cards with competitive rates and reliable processing. We specialize in merchant credit card processing.", button: "Get Government Processing Quote" },
        { icon: Monitor, title: "POS Systems & Terminals", text: "Complete hardware solutions including Clover POS systems, Aloha POS for restaurants, and EMV credit card terminals.", button: "Explore Technology Options - Get Quote" },
        { icon: DollarSign, title: "Eliminate Processing Fees", text: "Save thousands monthly with our cash pricing and dual pricing compliance programs. Just like gas stations.", button: "Eliminate Processing Fees" },
        { icon: Building2, title: "Government & Utility Processing", text: "Specialized government and utility processing with Level III reporting and compliance. Perfect for municipalities.", button: "Get Government Processing Quote" },
        { icon: Smartphone, title: "Modern Payment Technology", text: "Accept payments anywhere with mobile processing, online gateways, contactless solutions, and ATM revenue programs.", button: "Explore Technology Options - Get Quote" },
        { icon: Handshake, title: "Business Funding Solutions", text: "Fast working capital through merchant cash advance programs based on your processing history.", button: "Get Funding Options" }
    ];

    return (
        <section id="solutions" className="w-full bg-linear-to-br bg-white px-4 sm:px-6 lg:px-8 lg:py-2 sm:py-12" aria-labelledby="services-heading">
            <h2 id="services-heading" className="sr-only">Our Services</h2>
            <div className="container mx-auto mt-0 lg:-mt-32">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8 auto-rows-fr">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <article key={idx} className="relative flex flex-col h-full rounded-3xl p-4 bg-white/20 border border-white/40 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 -rotate-[5deg] bg-[radial-gradient(circle_at_center,rgba(255,255,25,0.9)_0%,rgba(255,255,255,0.1)_20%,rgba(206,216,227,0.80)_55%,rgba(206,216,227,0.35)_100%)] blur-3xl opacity-70"></div>
                                <div className="relative z-10 flex flex-col h-full items-start">
                                    <div className="w-16 h-16 mb-6">
                                        <Icon className="w-full h-full text-yellow-600 stroke-[1.5]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.text}</p>
                                    <button className="mt-auto px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-full transition border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm">
                                        {service.button}
                                    </button>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
