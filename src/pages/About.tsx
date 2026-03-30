import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function About() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <section className="editorial-grid mb-32">
        <div className="col-span-12 md:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-label text-tertiary tracking-[0.4em] uppercase mb-6 text-sm">Founded in Durban, 1984</p>
            <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter leading-none mb-12">
              Rooted in the <br />
              <span className="text-primary italic">Ancient</span> Soils of <br />
              South Africa.
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
              We believe true wellness is a journey back to yourself. For forty years, we've helped people find balance by combining the power of African nature with modern care.
            </p>
          </motion.div>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5 mt-[-4rem] md:mt-[-8rem]">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="aspect-[16/9] w-full overflow-hidden rounded-xl shadow-2xl relative"
          >
            <img 
              className="w-full h-full object-cover grayscale-[0.3] brightness-75" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBef6BLZ21hr5jaq53S-QuIiz3ActcYv35mRW-qKQ2_FT2_K7jr0xJxYU5Vg5rYoE3k4TzmSoDZ-5yOp0zvhbYbUJwDdTAWm_gMfElPvOJ-9s2JkhlryWkrBXopU9X5c-HbJmo0Uoc2ezAGpdJNVJwNdl2bqlXpuXw7Kg5gxZmkl9Q5Nl1mdkdyVMSBO-0EEqjrpCEeXATgRpEPDf4ZuvuyrOM5JfRJK4gUTmv64qmANMCKIr5hSEk6De5A5Mt71VyNbyfIELyCmwpX"
              alt="Durban coastline"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-surface-container-low -mx-6 md:-mx-12 px-6 md:px-12 py-32 mb-32">
        <div className="editorial-grid">
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
            <h2 className="font-headline text-4xl font-bold mb-8 text-secondary">Our Story</h2>
            <div className="space-y-8 font-body text-on-surface-variant text-lg">
              <p>
                It started with Dr. Nhlanhla Mqemane and a simple goal: to keep our local healing traditions alive. He saw the wisdom in the plants of the Eastern Cape and KwaZulu-Natal and wanted to share that peace with the world.
              </p>
              <p>
                What began as a small sanctuary has grown into a world-class home for healing. Today, we still follow those same traditions, treating every visitor with the respect and care they deserve.
              </p>
              <div className="pt-8 border-l-2 border-primary-container pl-6 italic">
                "Healing isn't something we do to you—it's helping you find your way back to the earth's natural rhythm."
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="aspect-[3/4] rounded-xl overflow-hidden mt-12"
              >
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7nRRn8pOb-wt3Lkx1Ch3we3q7waCBpemmEQf26x9E5qXtZpUdwE3I2N-yLcGiMixBFTRHRijfDUZht3A7N_bfBo9sY8NBAz_YKgHiHLPrSb9puvn0Qv4wiLjXFvnCse2L6bo2ke5Eop7ScCp37KZ-5c3de7-yhA0tQq2MkLDh-oshIaMFYSGvyNZHUet1w7xLS-Zs_YFu9tXyfCrhau8qRRK1iGzMfb2w4-NTXIkgxVPVj9P4XRV0h_01sq_EGbmffLijv55ZPqyE"
                  alt="Medicinal herbs"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="aspect-[3/4] rounded-xl overflow-hidden"
              >
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK_5oUThRqqaD0pN7ITqmSe8vSv87CiJ8iIbrvmPR7U98sZ-s45cLthHel9y9SpWTWnW8XMsxU8MjTPdFxzkKw3nsqZRBBX0dI0SoqLY1Hknuo2pl903SaKuJbuAcTlZp2s5YyelteoAOQx-qnpmNOmXFoDKq8pPYgtR9MiRB357jr-Wcv_l-fkVY-Hg4nTOe9Tjtv5AOkuibjcpv0UyQ73ci-sCIocah12SrYxcK6uRFXDPq1ViMk4tMHprBCkzq2st3-z0WkWrJS"
                  alt="Mortar and pestle"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="mb-32">
        <h3 className="font-headline text-3xl font-bold mb-16 text-center">How We Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: 'nature',
              title: 'Good for the Earth',
              desc: 'We work closely with local farmers to grow our plants the right way. If it’s not good for the land, we don’t use it.',
              color: 'primary'
            },
            {
              icon: 'history_edu',
              title: 'Old Wisdom',
              desc: 'Our methods come from stories and lessons passed down for generations. They work because they understand the human spirit.',
              color: 'tertiary',
              border: true
            },
            {
              icon: 'biotech',
              title: 'Proven Results',
              desc: 'We test everything in our Durban lab. We combine traditional knowledge with modern science to make sure you get the best care possible.',
              color: 'secondary'
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={cn(
                "bg-surface-container p-10 rounded-xl hover:bg-surface-container-high transition-colors group",
                card.border && "border-t-4 border-tertiary"
              )}
            >
              <div className={cn("text-4xl mb-6 block", `text-${card.color}`)}>
                {card.icon === 'nature' ? '🌳' : card.icon === 'history_edu' ? '📜' : '🔬'}
              </div>
              <h4 className="font-headline text-2xl font-bold mb-4">{card.title}</h4>
              <p className="font-body text-on-surface-variant">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Zen Progress Meter */}
      <section className="flex flex-col items-center justify-center py-20 bg-surface-container-lowest rounded-3xl mb-32 text-center px-6">
        <div className="relative w-48 h-48 flex items-center justify-center mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-secondary/20"></div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-secondary border-t-transparent"
            style={{ boxShadow: '0 0 20px rgba(130, 219, 126, 0.2)' }}
          ></motion.div>
          <div className="text-secondary font-headline text-3xl font-black">40Yrs</div>
        </div>
        <h3 className="font-headline text-3xl font-bold mb-4">A Lifetime of Care</h3>
        <p className="font-body text-on-surface-variant max-w-lg">For four decades, we’ve stayed true to our roots, helping people live healthier, happier lives through the power of nature.</p>
      </section>
    </main>
  );
}
