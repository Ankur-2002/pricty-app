'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ArrowRight,
  Zap,
  Palette,
  TrendingUp,
  Star,
  Menu,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../images/logo.svg';
import Block from '../images/Intregration.png';
import Integration from '../images/Block.png';
import TickSvg from '@/components/ui/TickSvg';
import AnimatedCarousel from '@/components/ui/animated-carousel';
import Caro1 from '../images/Caro1.png';
import Caro2 from '../images/Caro2.png';
import Caro3 from '../images/Caro3.png';
import Caro4 from '../images/Caro4.png';
import Caro5 from '../images/Caro5.png';
import Caro6 from '../images/Caro6.png';
import Caro7 from '../images/Caro7.png';
import Caro8 from '../images/Caro8.png';
import Caro9 from '../images/Caro9.png';
import Caro10 from '../images/Caro10.png';
import Caro11 from '../images/Caro11.png';
import Caro12 from '../images/Caro12.png';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 relative">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src={Logo}
                  alt="Pricty Logo"
                  width={140}
                  height={32}
                  priority
                  className="
        h-8 w-auto 
        object-contain 
        transition-opacity duration-300 
        hover:opacity-90
      "
                />
                <span>
                  <span className="text-xl font-semibold text-black tracking-tight">
                    Pric
                  </span>
                  <span className="text-xl text-black tracking-tight">ty</span>
                </span>
              </Link>
            </div>

            <div className="flex items-center">
              {/* Desktop links */}
              <div className="hidden md:flex items-center space-x-4">
                <Link href="#home">
                  <Button variant="ghost">Home</Button>
                </Link>
                <Link href="#pricing">
                  <Button variant="ghost">Pricing</Button>
                </Link>
                <Link href="/faqs">
                  <Button variant="ghost">FAQs</Button>
                </Link>
                <Link href="#contact">
                  <Button variant="ghost">Contact Us</Button>
                </Link>
                <Link href="/privacy">
                  <Button variant="ghost">Privacy Policy</Button>
                </Link>
                <Button
                  className="bg-gradient-to-r   from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90"
                  onClick={() => window.open('https://apps.shopify.com/pricty')}
                >
                  Install On Shopify
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              {/* Mobile hamburger */}
              <div className="md:hidden ml-2">
                <button
                  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                  onClick={() => setMenuOpen(prev => !prev)}
                  className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6579cf]"
                >
                  {menuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile dropdown - shown only on small screens when open */}
            <div
              className={`md:hidden ${
                menuOpen ? 'block' : 'hidden'
              } bg-white border-t border-slate-200
              absolute top-full left-0 w-full shadow-md
              `}
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                <Link href="/privacy" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Privacy Policy
                  </Button>
                </Link>
                <Link href="#home" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Home
                  </Button>
                </Link>
                <Link href="#pricing" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Pricing
                  </Button>
                </Link>
                <Link href="/faqs" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    FAQs
                  </Button>
                </Link>
                <Link href="#contact" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Contact Us
                  </Button>
                </Link>
                <div className="pt-2">
                  <Button
                    className="w-full bg-gradient-to-r from-[#6579cf] via-[#bc6e86] to-[#f08643] text-white px-6 py-2 rounded-full"
                    onClick={() => {
                      setMenuOpen(false);
                      window.open('https://apps.shopify.com/pricty');
                    }}
                  >
                    Install On Shopify
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="pt-20 pb-0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              className={`text-center transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="inline-flex items-center space-x-2 bg-[#6579cf] px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Boost Your Sales Today!
                </span>
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r   from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90 bg-clip-text text-transparent leading-tight"
              >
                Eye-Catching Price Tags
                <br />
                That Convert
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Add stunning, customizable price blocks to your Shopify theme.
                Attract attention, increase engagement, and boost your sales
                with beautiful pricing displays.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <Button
                  size="lg"
                  // className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-6 text-lg"
                  className="bg-gradient-to-r   from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90
  text-white 
  px-8 
  py-6 
  text-lg
"
                  onClick={() => {
                    window.open('https://apps.shopify.com/pricty');
                  }}
                >
                  Install on Shopify
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Animated image-only infinite carousel */}
        <section className="py-0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className=" overflow-hidden">
              <AnimatedCarousel />
            </div>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                Why Pricty Works
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Smart price presentation backed by consumer psychology.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#6579cf]">
                <div
                  className="w-12 h-12 bg-gradient-to-r   from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90  rounded-xl flex items-center justify-center mb-6"
                >
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Reduces decision friction
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Clear, structured price presentation helps customers
                  understand value instantly, removing confusion that delays
                  purchases.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#6579cf]">
                <div
                  className="w-12 h-12 bg-gradient-to-r   from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90  rounded-xl flex items-center justify-center mb-6"
                >
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Builds trust through clarity
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Clean and consistent pricing visuals create transparency,
                  making shoppers feel more confident and secure.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#6579cf] ">
                <div
                  className="w-12 h-12 bg-gradient-to-r from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90 rounded-xl flex items-center justify-center mb-6"
                >
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Applies buying psychology
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Pricty uses proven visual cues and layout principles to guide
                  attention, highlight value, and encourage faster decisions.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-slate-900">
                  Highlight Discounts and Savings
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Make every offer instantly clear and compelling.
                </p>
                <ul className="space-y-4">
                  {[
                    'Show savings instantly',
                    'Emphasise value, not just price',
                    'Encourage faster decisions',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center">
                        <div
                          className="w-2 h-2 bg-gradient-to-r from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90 rounded-full"
                        />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={Block}
                    alt="Price Block Examples"
                    className="w-full h-90"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-br from-teal-300/30 to-emerald-300/30 rounded-full blur-3xl -z-10" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={Integration}
                    alt="Easy Integration"
                    className="w-full h-90"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-64 h-64 bg-gradient-to-br from-emerald-300/30 to-teal-300/30 rounded-full blur-3xl -z-10" />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold mb-6 text-slate-900">
                  Customise Every Detail
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Your brand, your pricing style.
                </p>
                <ul className="space-y-4">
                  {[
                    'Match your brand perfectly',
                    'Control labels and layouts',
                    'Create a consistent experience',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                        <div
                          className="w-2 h-2 bg-gradient-to-r from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90 rounded-full"
                        />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Write Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="pricing">
          <div className="max-w-7xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-2 bg-gradient-to-r   from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90 bg-clip-text text-transparent"
            >
              Pricing Plan
            </h2>
            <p className="text-sm text-slate-600 mb-8">
              Choose the Plan That Fits Your Needs
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-sm text-slate-700">Monthly</span>
              <div
                className="relative"
                onClick={() => setIsYearly(prev => !prev)}
              >
                <div
                  className={`w-14 h-8 bg-slate-200 rounded-full flex items-center p-1 cursor-pointer ${
                    isYearly ? 'justify-end' : 'justify-start'
                  }
                  ${
                    isYearly
                      ? 'bg-gradient-to-r from-[#6579cf] via-[#bc6e86] to-[#f08643] text-white'
                      : 'bg-slate-200'
                  }
                  `}
                >
                  <div className="w-6 h-6 bg-white rounded-full shadow-md transform translate-x-0" />
                </div>
                <span className="sr-only">Toggle billing</span>
              </div>
              <span className="text-sm text-slate-700">
                Yearly <span className="text-emerald-500">(Save 17%)</span>
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Basic Plan */}
              <div className="rounded-2xl border border-slate-200 p-8 text-left shadow-sm flex flex-col">
                <div
                  className="text-4xl font-bold bg-gradient-to-r   from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90 bg-clip-text text-transparent mb-2"
                >
                  $0
                  <span className="text-base font-medium text-slate-500">
                    /month
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-4">Free Plan</h3>
                <ul className="space-y-3 mb-6 text-slate-700 flex-1">
                  {['Basic price designs/blocks', 'Standard customisation'].map(
                    (f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <TickSvg key={'tick_' + i} />
                        <span className="leading-tight">{f}</span>
                      </li>
                    ),
                  )}
                </ul>
                <div className="">
                  <Button
                    className="bg-gradient-to-r from-[#6579cf] via-[#bc6e86] to-[#f08643] text-white px-6 py-2 rounded-full"
                    onClick={() =>
                      window.open('https://apps.shopify.com/pricty')
                    }
                  >
                    Install
                  </Button>
                </div>
              </div>

              {/* Unlimited Plan - Most Popular */}
              <div className="relative rounded-2xl p-8 text-left shadow-lg bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-100 flex flex-col">
                {/* <div className="absolute -top-3 right-6 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </div> */}
                <div
                  className="text-4xl font-bold bg-gradient-to-r   from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90 bg-clip-text text-transparent mb-2"
                >
                  {isYearly ? '$50' : '$5'}
                  <span className="text-base font-medium text-slate-500">
                    /month
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-4">Pro Plan</h3>
                <ul className="space-y-3 mb-6 text-slate-700 flex-1">
                  {[
                    'All premium price designs/blocks',
                    'Advanced customisation options',
                    'Priority support',
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 items-center">
                      <TickSvg key={'tick_' + i} />
                      <span className="leading-tight">
                        {f.includes('coming soon') ? (
                          <>
                            <span>{f.replace('(coming soon)', '')}</span>{' '}
                            <span className="text-sm text-amber-500">
                              (coming soon)
                            </span>
                          </>
                        ) : (
                          f
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="">
                  <Button
                    className="bg-gradient-to-r from-[#6579cf] via-[#bc6e86] to-[#f08643] text-white px-6 py-2 rounded-full"
                    onClick={() =>
                      window.open('https://apps.shopify.com/pricty')
                    }
                  >
                    Install
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
          <div
            className="
             bg-gradient-to-r from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90
            max-w-7xl
             mx-auto flex
  md:flex-row
  flex-col
  items-center
  justify-between
  gap-4
  px-6
  py-12
  rounded-3xl
  shadow-2xl
  "
          >
            <div className="w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Convert Price Attention Into Sales
              </h2>
              <p className="text-xl text-emerald-50 mb-8">
                Clear prices. Confident customers. Better conversions.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90 text-white hover:bg-emerald-50 px-8 py-6 text-lg font-semibold"
              onClick={() => window.open('https://apps.shopify.com/pricty')}
            >
              Install On Shopify
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        <section
          className="py-6 px-4 sm:px-6 lg:px-8 bg-slate-50 
             bg-gradient-to-r from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90"
          id="copyright"
        >
          <div className="max-w-7xl mx-auto text-center text-sm text-white">
            &copy; {new Date().getFullYear()} Pricty. All rights reserved. Made
            with ❤️ for merchants worldwide.
          </div>
        </section>
      </main>
    </div>
  );
}
