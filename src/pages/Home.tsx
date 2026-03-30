import { motion } from 'motion/react';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX1cQaFx_tximKA6DvB7be8w7BMCTWo9KxelJJof122beC4N9_syNBjS2vvwOJ9qHIVEDKTnbevsMAA5yyqEeGP4Y8oCg_yyD6WMmhjKzWe9ho8viRb7aStYbdzx4P-xSZMQx9LJMXB3nQegzsjFRaf6u0rmOPbLERp-8_lq8I4Be4iXzWNWK80MKDHGOKGi4mThUQkAfId8_c-gMAdYaRF29ZZxM57izgPUAsU9xc7xnYf-VY-OXL4dnGdihsM6iU5eSXXaBGbW5Z"
            alt="Misty South African mountains"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-start gap-8"
          >
            <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter max-w-4xl leading-[0.9] text-on-background">
              Gently healing <span className="text-primary italic">Mind</span>, Body & <span className="text-secondary italic">Spirit</span>.
            </h1>
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center w-full mt-12">
              <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
                Nestled in the heart of Durban, we share the healing power of the earth. We blend timeless plant wisdom with soothing care to create your own peaceful escape.
              </p>
              <div className="flex gap-4">
                <span className="bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="text-xs font-label uppercase tracking-widest font-bold">Durban, South Africa</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-20 right-8 flex flex-col items-end gap-2 text-primary">
          <span className="text-[10px] font-label uppercase tracking-[0.4em] rotate-90 origin-right translate-y-12">Scroll to discover</span>
          <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent mt-16"></div>
        </div>
      </header>

      {/* Bento Grid Services */}
      <section className="py-32 px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 bg-surface-container rounded-xl overflow-hidden relative group"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvDEGtFjxxWG16G1HxOOlBP2J2arRp7rePo0wo97HSV_KTnsvEDwJ-Jz-WGq0MWLEBLgTGWS9VXEzEHiRMPZNz6XMHn4uGhs_iZ2m-AxgzHictlZgMRH2fdHXb4tTptOQHC9EuMZmviK4lreuTQM6mh1tZEsMclrS-Hcha7hAibwzutGKkYga56L_PnAAF7VzgeFyChLR_-eQUaiKz_JSVDC4Jkm4qDB9wZByeKASQz286-4o4NcnKtw1TWJSQdD7BNM4NAUWVQX2B"
              alt="Luxury wellness spa"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
            <div className="absolute bottom-10 left-10 max-w-md">
              <span className="text-tertiary font-label text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Physical Sanctuary</span>
              <h3 className="font-headline text-4xl font-bold mb-4">Healing Moments</h3>
              <p className="text-on-surface-variant mb-6">Find deep rest with our signature local therapies, crafted to bring your body back to its natural, calm state.</p>
              <button className="flex items-center gap-2 group/btn">
                <span className="font-label text-sm uppercase tracking-widest font-bold">Discover Your Sanctuary</span>
                <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 bg-surface-container-high rounded-xl p-10 flex flex-col justify-between border border-outline-variant/10"
          >
            <div>
              <span className="text-secondary font-label text-xs uppercase tracking-[0.3em] font-bold mb-8 block">Daily Wisdom</span>
              <h3 className="font-headline text-3xl font-bold mb-6">Nature's Library</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Explore our collection of South African plants and their gentle healing secrets, gathered by our dedicated team.</p>
            </div>
            <div className="mt-12 flex flex-col gap-4">
              <div className="flex items-center gap-4 py-4 border-b border-outline-variant/20">
                <span className="text-primary">✦</span>
                <span className="font-label text-xs uppercase tracking-widest font-medium">Timeless Knowledge</span>
              </div>
              <div className="flex items-center gap-4 py-4 border-b border-outline-variant/20">
                <span className="text-primary">🍃</span>
                <span className="font-label text-xs uppercase tracking-widest font-medium">Caring for the Earth</span>
              </div>
              <div className="flex items-center gap-4 py-4">
                <span className="text-primary">👥</span>
                <span className="font-label text-xs uppercase tracking-widest font-medium">Community Love</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 bg-primary-container/20 rounded-xl p-10 flex flex-col items-center justify-center text-center gap-6 border border-primary/20"
          >
            <div className="w-24 h-24 rounded-full border-2 border-secondary flex items-center justify-center relative shadow-[0_0_30px_rgba(130,219,126,0.2)]">
              <span className="text-secondary text-4xl">🌿</span>
            </div>
            <h4 className="font-headline text-xl font-bold">Ready to Begin?</h4>
            <p className="text-sm text-on-surface-variant">Your journey to feeling better starts with a friendly conversation.</p>
            <button className="bg-primary text-on-primary px-8 py-3 rounded-md font-bold uppercase text-xs tracking-widest hover:bg-on-primary-container transition-colors">Start Your Journey</button>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-8 bg-surface-container-low rounded-xl overflow-hidden flex flex-col md:flex-row border border-outline-variant/10"
          >
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
              <h3 className="font-headline text-3xl font-bold mb-4">Quiet the Mind</h3>
              <p className="text-on-surface-variant mb-6 text-sm">Guided sessions inspired by the peace of the mountains, made for you to enjoy anywhere in the world.</p>
              <a className="text-secondary font-label text-xs font-bold uppercase tracking-widest underline underline-offset-8" href="#">Join Our Circle</a>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1TIL3jyenzDWA3y3OGLLo_frT5lWbjA6E3xW1V30ZEeRdsbqCsGWv_ofZsHGwBZ-UW3HqMGFEHqsd0gcsl4cHMnle4pW9pav8Iudp6bIPZRXxeNqqkYtd_iJeZm9XyNILQ39Oo_z5rzDncW5U0NllPD1OhYGqYOtcE0XmJC-HKaT7rwp_afjowK3xEXozSMNSi55Jv6AGwCZCtcVhLTXDMMhMIpe9m-1WL5pNMYGs4r_NmhOcTtVF8RPQ3IPjTuWphX_L2vRp8vKR"
                alt="Meditation space"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophical Section */}
      <section className="py-40 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
              className="md:w-1/2 relative"
            >
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <img 
                className="w-full aspect-[4/5] object-cover rounded-md shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-outline-variant/20" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0c-UN2T2RVhf--THKZI-U7lhe1U779Th_GCJ8wOM3Tp4zbJrLpi_z-1i8ZL9KxhjPnRKDSpJE0QXn72MiH9P-RUYJihUDjYwL4XGMV1z9dX9Ayg6628xABvurBxjGf_pVreH3SFyk1JF9d7wWacVaH8G-xHdGICG20F3IYDhwsZ-r_EMEaoSso5zXaGVJq0pnN3QLvbr_-0S_63zyYtCCrsbJEdCM911GEKV8G2F9Ifj2QivoudcUx29Y54N5D3ikVHtHO7uTVg"
                alt="Dew on leaves"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-12 -right-12 bg-surface-container p-12 rounded-md hidden lg:block border border-outline-variant/10">
                <p className="font-headline text-5xl font-black text-primary opacity-20 leading-none">THE<br/>ROOTS</p>
              </div>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 1 }}
              className="md:w-1/2 space-y-10"
            >
              <h2 className="font-headline text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                Nature is the <span className="italic text-tertiary">Purest</span> Form of Care.
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                At KwaMqemane, we believe that when the earth thrives, we thrive. Our approach is simple: we look to the rhythms of nature for the best ways to care for ourselves. By using local wisdom and thoughtful practices, we offer a way to health that is kind to you and kind to the world.
              </p>
              <div className="pt-8">
                <button className="text-on-background font-label uppercase tracking-[0.2em] font-bold border-b-2 border-primary pb-2 hover:text-primary transition-all">Our Way of Caring</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline text-5xl font-bold tracking-tight mb-4">The Wisdom Journal</h2>
              <p className="text-on-surface-variant">Simple notes on plant healing, finding peace, and creating your own space.</p>
            </div>
            <a className="hidden md:block font-label text-xs uppercase tracking-widest font-bold text-tertiary border border-tertiary/20 px-6 py-3 rounded-full hover:bg-tertiary/10 transition-colors" href="#">See All Stories</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                tag: 'Plants',
                title: 'The Healing Touch of Rooibos',
                desc: 'How this simple local tea is becoming a favorite secret for glowing, healthy skin in the world\'s finest spas...',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnHD5Irayi6gf2J6dKpLUZe4Ju77Zr9Hmbne-db-qJB2ZUoUt5B9xROKJtBGL9MybJ86rjE0nTMaZ-HKX_xuUicx6PDFkqZRpqSMA6mCZapLOPhhvzQn-B91PIrfVIPCGiykWnd9VsksCm-I_mCo-8mduOTpra1cjthkCJWJUFxeG8OD_O63rcjzC6UFZYYvVroTePARvgpff909LntX3aiAeW0RDXZa8DVTn7w-AzFwH0xCoPOYNqrxSh5KH-DtP8cN4nOSf_KuJE'
              },
              {
                tag: 'Mindfulness',
                title: 'Making Your Home a Peaceful Space',
                desc: 'Easy ways to change your room to help you feel more relaxed and at home every single day...',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvEMDZ5vZ3t0HznbQaGwshMja6aY86L517-8YvUXIMlexVRDDqaZhdo7ZFUqdZ5TlMOlFOFMLv3JEuZ8-l4ReRNvYLZkYutfWEZltLd04wHUk0n-YcLGoGVsJpUhYFpxzKGMeEO5Sqx-WO7jQj1w8ZhucujZK_9cMaSuB0uAIHTnA8dcRf5kMrnwsVNrVbHxd0IlQut9Helo8g-xFrJiuNftbkvdVViCx4v0Ft3V5uiY2esF3kTRHJgRPpEV_ODKvNIEbUl0xCopbm'
              },
              {
                tag: 'Spirit',
                title: 'Living with the Seasons',
                desc: 'Connecting your own well-being with the natural changes and beauty of our Southern Hemisphere seasons...',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3-fz27s8VHQ_8PiDj-OWrCfzDuV6DlBte3y0hTW9K5E8LxTwRZPv8_dJRj2NTZQdEbM4UkEem566XaWJPHaMXpPFpNBh_IAAbPhljU1R9ru1HdJfpc_GegbhX1DZ-_16hEjIgfrWFAy76nP-OkF-IKRWdlLqVpIA7ZDS_DQ1PY-C3r5B6Qh9RszmAkqCngkm5gjtGRHjUduPZrpk1Pnel6hUCX4hP8jPWZscTMXmQv4NamHpDriTy-YMJrC0JcMAnWHXWNw6K_Aud'
              }
            ].map((post, i) => (
              <motion.article 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-lg mb-6">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={post.img}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-primary font-label text-[10px] uppercase tracking-widest font-bold mb-3 block">{post.tag}</span>
                <h4 className="font-headline text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h4>
                <p className="text-on-surface-variant text-sm line-clamp-2">{post.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
