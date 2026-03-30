import { motion } from 'motion/react';

export function Contact() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="editorial-grid">
        <div className="col-span-12 md:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-label text-xs uppercase tracking-[0.4em] mb-6 block">Connect With Us</span>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none mb-12">
              Begin Your <br /><span className="text-secondary italic">Healing</span> Journey.
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-md leading-relaxed mb-12">
              Whether you have a question about our therapies or just want to say hello, we're here to listen and help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <span className="text-tertiary text-2xl">📍</span>
                <div>
                  <h4 className="font-headline font-bold text-lg">Our Sanctuary</h4>
                  <p className="text-on-surface-variant">64 Wellness Drive, Berea, Durban, 4001</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-tertiary text-2xl">✉️</span>
                <div>
                  <h4 className="font-headline font-bold text-lg">Email Us</h4>
                  <p className="text-on-surface-variant">hello@kwamqemane.co.za</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-tertiary text-2xl">📞</span>
                <div>
                  <h4 className="font-headline font-bold text-lg">Call Us</h4>
                  <p className="text-on-surface-variant">+27 (0) 31 555 9000</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-6 mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-surface-container p-10 rounded-2xl border border-outline-variant/10 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-stone-500">Full Name</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-stone-500">Email Address</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-stone-500">Subject</label>
                <select className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary">
                  <option>General Inquiry</option>
                  <option>Booking a Session</option>
                  <option>Wisdom Journal Feedback</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-stone-500">Message</label>
                <textarea className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary h-32"></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary py-4 rounded-md font-label font-black uppercase tracking-[0.2em] text-xs hover:bg-primary-container transition-all">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
