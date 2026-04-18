import { developerServices } from '@/utils/mock';
const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-900 dark:bg-slate-950 text-white border-y border-transparent dark:border-slate-900 transition-colors duration-300 min-h-[90vh]">
              <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Services</h2>
                        <div className="w-20 h-1.5 bg-blue-500 rounded-full mb-6"></div>
                        <p className="text-slate-400 text-lg">
                            Providing end-to-end development solutions with a focus on quality, scalability, and modern best practices. From initial wireframes to final deployment, I act as a technical partner to ensure your vision is realized through clean code and an exceptional user experience. By leveraging modular architecture, type-safe development, and automated testing, I build robust systems that minimize technical debt and maximize uptime."
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {developerServices.map((service, index) => (
                        <div key={index} className="bg-slate-800/50 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 hover:bg-slate-800 dark:hover:bg-slate-800 p-8 rounded-3xl transition-colors duration-300 group">
                            <service.icon className={`w-10 h-10 ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Services