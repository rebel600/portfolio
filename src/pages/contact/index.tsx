import ContactInfo from './contact-info';
import ContactForm from './contact-form'
const Contact = () => {


    return (
        <section id="contact" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <ContactInfo />
                    {/* Contact Form */}
                    <ContactForm />
                </div>
            </div>
        </section>

    )
}

export default Contact