import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Instagram, Facebook, Home, BookOpen, Info, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Sanctuary', path: '/', icon: Home },
  { name: 'Wisdom', path: '/wisdom', icon: BookOpen },
  { name: 'About', path: '/about', icon: Info },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-stone-100 uppercase font-headline">
          KwaMqemane Institute
        </Link>
        
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-label text-[14px] uppercase tracking-widest transition-all duration-300",
                location.pathname === link.path
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-stone-400 hover:text-stone-100"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-md font-label font-bold tracking-tight hover:scale-95 duration-200 transition-all">
            Book a Visit
          </button>
        </div>
      </div>
    </nav>
  );
}

export function MobileBottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-surface-container/80 backdrop-blur-xl border-t border-outline-variant/10 px-4 py-3">
      <div className="flex justify-around items-center">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className="flex flex-col items-center gap-1 group"
            >
              <div className={cn(
                "p-2 rounded-full transition-all duration-300",
                isActive ? "bg-primary/20 text-primary" : "text-stone-500 group-hover:text-stone-300"
              )}>
                <Icon size={20} />
              </div>
              <span className={cn(
                "font-label text-[10px] uppercase tracking-widest font-bold transition-all duration-300",
                isActive ? "text-primary" : "text-stone-500"
              )}>
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-stone-950 w-full pt-20 pb-24 md:pb-10 px-8 border-t border-stone-800/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-tertiary font-black tracking-widest font-headline text-2xl uppercase">
            KwaMqemane
          </div>
          <p className="text-stone-500 font-body max-w-xs leading-relaxed">
            A Durban-based home for natural healing, blending our heritage with simple, luxurious care.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-500 hover:text-tertiary hover:border-tertiary transition-all duration-300 cursor-pointer">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-500 hover:text-tertiary hover:border-tertiary transition-all duration-300 cursor-pointer">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h5 className="text-on-background font-headline text-lg font-bold">Quick Links</h5>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-stone-500 hover:text-tertiary transition-colors font-label text-sm uppercase tracking-widest">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="text-on-background font-headline text-lg font-bold">Contact</h5>
          <div className="text-stone-500 space-y-4 font-body text-sm">
            <p>64 Wellness Drive, Berea,<br />Durban, South Africa</p>
            <p>hello@kwamqemane.co.za</p>
            <p>+27 (0) 31 555 9000</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-800/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-stone-500 text-[10px] uppercase tracking-widest">
          © 2024 KwaMqemane Institute of Wellness. South Africa.
        </p>
        <div className="h-px flex-grow mx-8 bg-stone-900 hidden md:block"></div>
        <div className="text-tertiary font-bold text-[10px] uppercase tracking-[0.4em]">
          Rooted in Nature
        </div>
      </div>
    </footer>
  );
}
