import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary">Contact Us</h1>
        <p className="mt-3 text-lg text-muted-foreground">We'd love to hear from you. Get in touch with us.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-muted-foreground">
                Have a question about our products, or want to inquire about an order? Fill out the form and our team will get back to you within 24 hours.
            </p>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span className="text-muted-foreground">123 Tech Street, Silicon Valley, CA 94000</span>
                </div>
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <span className="text-muted-foreground">support@mobishop.com</span>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <span className="text-muted-foreground">(123) 456-7890</span>
                </div>
            </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
