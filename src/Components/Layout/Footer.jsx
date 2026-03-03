import React from 'react'
import { Linkedin, Twitter, Instagram } from 'lucide-react'
import RevealAnimation from '../animation/RevealAnimation'
import { Link } from 'react-router-dom'

const footerLinks = {
  company: [
    { label: 'About Nexmoves', href: '#' },
    { label: 'Leadership', href: '#' },
    { label: 'Our Team', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  services: [
    { label: 'AI & GenAI Solutions', href: '#' },
    { label: 'Web App Development', href: '#' },
    { label: 'Mobile App Development', href: '#' },
    { label: 'Cloud & DevOps', href: '#' },
    { label: 'Data & Analytics', href: '#' },
    { label: 'UI/UX Design', href: '#' },
  ],
  solutions: [
    { label: 'Enterprise Automation', href: '#' },
    { label: 'Customer Platforms', href: '#' },
    { label: 'Internal Tools', href: '#' },
    { label: 'Integration & APIs', href: '#' },
    { label: 'Legacy Modernization', href: '#' },
  ],
  resources: [
    { label: 'Case Studies', href: '#' },
    { label: 'Industries', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ],
}

function Footer() {
  return (
    <footer className="bg-black overflow-hidden text-gray-100 relative">
      {/* Animated Gradient Background */}
      <div className="absolute bottom-1/3 w-full left-1/2 -translate-x-1/2 h-1/3 pointer-events-none">
        <div className="absolute inset-0 h-[50rem] bg-gradient-to-b from-blue-600/50 via-purple-600/50 to-transparent bottom-0 blur-3xl">
          <div className="absolute left-0 top-0 w-1/3 h-[50rem] bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-20 animate-[footerLeft_6s_ease-in-out_infinite_alternate]"></div>
          <div className="absolute right-0 top-0 w-1/2 h-[50rem] bg-gradient-to-l from-purple-300 to-blue-300 rounded-full blur-3xl opacity-20 animate-[footerRight_7s_ease-in-out_infinite_alternate]"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-4 py-24 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-14 mb-20 pb-20 border-b border-gray-400/30">
          {/* Brand Section */}
          <RevealAnimation delay={0.1}>
            <div>
              <div className="flex items-center gap-3 mb-7">
                <img src="../../../logo.jpeg" alt="Nexmove Solutions" className="h-10 rounded-full overflow-hidden w-auto" />
                <h3 className="text-lg font-bold text-white">Nexmove Solutions</h3>
              </div>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Nexmoves delivers AI-first digital products, scalable engineering, and modernization services for ambitious businesses worldwide.
              </p>
              <div className="flex items-center gap-4">
                <Link to="#" className="w-7 h-7 rounded-full bg-transparent hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 border border-transparent hover:border-blue-600">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link to="#" className="w-7 h-7 rounded-full bg-transparent hover:bg-gray-950 flex items-center justify-center transition-colors duration-300 border border-transparent hover:border-gray-950">
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link to="#" className="w-7 h-7 rounded-full bg-transparent hover:bg-gradient-to-bl hover:from-[#BF2E96] hover:via-[#DC3073] hover:to-[#FAA351] flex items-center justify-center transition-colors duration-300 border border-transparent hover:border-transparent">
                  <Instagram className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </RevealAnimation>

          {/* Company */}
          <RevealAnimation delay={0.15}>
            <div>
              <h5 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h5>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Services */}
          <RevealAnimation delay={0.2}>
            <div>
              <h5 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Services</h5>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Resources */}
          <RevealAnimation delay={0.25}>
            <div>
              <h5 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Resources</h5>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Solutions */}
          <RevealAnimation delay={0.3}>
            <div>
              <h5 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Solutions</h5>
              <ul className="space-y-4">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-7 md:gap-8">
          <p className="text-gray-400 text-sm">
            Copyright © 2026 <span className="text-white font-semibold">Nexmoves</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-gray-400">|</span>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer