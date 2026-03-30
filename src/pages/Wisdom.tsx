import { motion } from 'motion/react';

export function Wisdom() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* Editorial Header */}
      <header className="mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-headline text-7xl md:text-9xl font-extrabold tracking-tighter text-on-surface mb-4 leading-[0.85]"
        >
          Wisdom & <br /><span className="text-primary italic font-light">Natural Flow</span>
        </motion.h1>
        <p className="max-w-xl text-on-surface-variant font-body text-lg leading-relaxed">
          A digital archive of ancient healing traditions and modern wellness practices, curated for a life of balance and beauty.
        </p>
      </header>

      {/* Featured Article */}
      <section className="editorial-grid mb-32">
        <div className="col-span-12 lg:col-span-8 relative group">
          <div className="aspect-[16/9] overflow-hidden rounded-xl">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKCqhXxZiVxxZbpiZ9WLn5k1p61JojFE3dq9tHWBREvh3nYyrmJXSB_6Wirt4vOFSK_jWgx5U9Y7Xr45PkSQh05t4ajtCBYAbi0optnSigg9NQcXyJuc6hjCl8wEpO496aNYf8pSYqPwxXbJdPimAJojSQWLdiXJhnzmASCj_4vAn-FnXK43a0JOb06DepBzcl3o55WAwBq9VjF_0Ii-iI6HrhZ0BKDMA8xXgwKn--r42HIHGkTQTsCCL5-qqeEAVghSPr6emNiBYh"
              alt="Editorial portrait"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute -bottom-8 -right-4 md:right-12 bg-surface-container-high p-8 max-w-md shadow-2xl rounded-lg"
          >
            <span className="text-tertiary font-label text-xs uppercase tracking-[0.2em] mb-4 block">Featured Story • 8 Min Read</span>
            <h2 className="font-headline text-3xl font-bold leading-tight mb-4">The Breath of Life: Finding Your Natural Inner Calm</h2>
            <p className="text-on-surface-variant font-body text-sm mb-6 line-clamp-2">Learn simple, ancient breathing techniques to reconnect with yourself and find peace in a busy world.</p>
            <a className="text-primary font-label text-sm uppercase font-bold tracking-widest flex items-center group/link" href="#">
              Explore Wisdom 
              <span className="ml-2 transition-transform group-hover/link:translate-x-2">→</span>
            </a>
          </motion.div>
        </div>
        <div className="hidden lg:flex col-span-4 flex-col justify-center space-y-12 pl-12">
          <div className="border-l-2 border-outline-variant pl-8 py-4">
            <h4 className="font-headline text-xl font-bold mb-2">Morning Moments</h4>
            <p className="text-on-surface-variant text-sm">Start your day with simple rituals that invite energy and clarity.</p>
          </div>
          <div className="border-l-2 border-outline-variant pl-8 py-4">
            <h4 className="font-headline text-xl font-bold mb-2">Rooted in Earth</h4>
            <p className="text-on-surface-variant text-sm">How connecting with nature's minerals can bring deep peace to your body.</p>
          </div>
        </div>
      </section>

      {/* Wisdom Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="bg-surface-container-low rounded-xl p-6 flex flex-col h-full group"
        >
          <div className="aspect-square rounded-lg overflow-hidden mb-6">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB7gGVL4uT8ZOepxN4DUkeSA82AI_WnRRUBjEQz1fE8tKcLJnqJ_zyN68ta2S30OPYFje2hB8IPzCp1zbvH6jilViM5EEv2YBmjOllAvwtR-6GDu1-jJpJqiFYMGrdwghPlmOfWkRrWWg8Vm1q9fKs9QAnApejE6n1hwP_TWGYylSVQoghdI8XZ_6IOlJ0pZNVlogkH6ZeHSFkyH_ojnC_7tRp3yOlg8Ufm9dMFseVDly4AhDsmOy3CATW5mCgXf-GP0gjnTAmxXR2"
              alt="Meditation"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-secondary font-label text-[10px] uppercase tracking-widest mb-2">Self Care</span>
          <h3 className="font-headline text-2xl font-bold mb-4">Moonlight Rest: Healing Through Gentle Fasting</h3>
          <div className="mt-auto pt-6 border-t border-outline-variant/20 flex justify-between items-center">
            <span className="text-on-surface-variant text-xs">By Dr. Amara Mqemane</span>
            <span className="text-on-surface-variant text-sm">🔖</span>
          </div>
        </motion.div>

        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="md:col-span-2 relative bg-surface-container rounded-xl overflow-hidden group"
        >
          <img 
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-G6gVigRpmO-g2YvGCzuO_sVhgHuVa4Od2W-U4m7Mal9WET3zYQPKMnKDW74TRMsOeeJ-S6AtNtoOvzIP6VuksMx2zmM48-dYx_qKD8NRbVCFN3lD7UM-rnPvIDmik0qvXBbqWIo995GGJnyVnN40J20fXoUvn9sUE9F4dz7VsaYAeDjBz1uo8feQczTHVNKYyeU1Od-Bzp7ZJ1-VmxTU8MlQ3HSwwlKZPeQ-6pIi4vpZ19QrLgBUdOciEYn57HqhoNLbSifrr762"
            alt="Natural Remedies"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 p-10 h-full flex flex-col justify-end bg-gradient-to-t from-surface-container via-transparent">
            <span className="text-tertiary font-label text-[10px] uppercase tracking-widest mb-2">Nature's Medicine</span>
            <h3 className="font-headline text-4xl font-bold max-w-lg mb-6 leading-tight">Secret Botanicals: The Healing Power of Local Wild Herbs</h3>
            <p className="text-on-surface-variant font-body max-w-md mb-8">Discover how traditional South African herbs like Buchu can soothe your body and refresh your spirit.</p>
            <button className="w-fit border border-outline-variant px-8 py-3 rounded-md hover:bg-on-surface hover:text-surface transition-colors font-label text-xs uppercase tracking-widest">
              Read More
            </button>
          </div>
        </motion.div>
      </section>

      {/* Newsletter */}
      <section className="bg-surface-container-low rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Join the Inner Circle</h2>
          <p className="text-on-surface-variant font-body mb-10 leading-relaxed">Receive weekly wisdom and exclusive invitations to our private gatherings and seasonal workshops.</p>
          <form className="flex flex-col md:flex-row gap-4">
            <input className="flex-grow bg-surface-container-highest border-none rounded-md px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary font-body" placeholder="Your essence (email)" type="email" />
            <button className="bg-tertiary text-on-tertiary px-10 py-4 rounded-md font-label font-black uppercase tracking-widest text-xs hover:bg-tertiary-fixed-dim transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
