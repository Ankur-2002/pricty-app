'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Zap, Palette, TrendingUp, Star } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 bg-gradient-to-r   from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90 rounded-lg flex items-center justify-center"
              >
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-2xl font-bold bg-gradient-to-r   from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90 bg-clip-text text-transparent"
              >
                Pricty
              </span>
            </div>
            <div className="flex items-center space-x-4">
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
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
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
                  Transform Your Shopify Store
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
                >
                  Install on Shopify
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg"
                >
                  View Demo
                </Button>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Pricty Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl" />
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                Why Choose Pricty?
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Powerful features designed to make your prices stand out
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
                  Fully Customizable
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Choose from dozens of pre-made templates or create your own
                  unique price block designs that match your brand perfectly.
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
                  Lightning Fast
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Optimized for performance, our price blocks load instantly
                  without slowing down your store or affecting your SEO.
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
                  Boost Conversions
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Eye-catching price displays grab attention and create urgency,
                  leading to higher click-through rates and more sales.
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
                  Beautiful Price Blocks
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Transform ordinary prices into attention-grabbing visual
                  elements. Our custom blocks feature animations, badges, and
                  styling options that make your products impossible to ignore.
                </p>
                <ul className="space-y-4">
                  {[
                    'Animated price reveals',
                    'Sale badge overlays',
                    'Countdown timers',
                    'Strike-through comparisons',
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
                  <img
                    src="https://images.pexels.com/photos/6214479/pexels-photo-6214479.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Price Block Examples"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-br from-teal-300/30 to-emerald-300/30 rounded-full blur-3xl -z-10" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Easy Integration"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-64 h-64 bg-gradient-to-br from-emerald-300/30 to-teal-300/30 rounded-full blur-3xl -z-10" />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold mb-6 text-slate-900">
                  Seamless Integration
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Install in seconds and start customizing immediately. Pricty
                  works with any Shopify theme and requires no coding knowledge.
                  Just pick your style and go live.
                </p>
                <ul className="space-y-4">
                  {[
                    'One-click installation',
                    'Works with all themes',
                    'Mobile responsive',
                    'No coding required',
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

        <section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Prices?
            </h2>
            <p className="text-xl text-emerald-50 mb-8">
              Join hundreds of merchants already using Pricty to boost their
              conversions
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#6579cf] 
  via-[#bc6e86] 
  to-[#f08643] 
  hover:from-[#6579cf]/90 
  hover:via-[#bc6e86]/90 
  hover:to-[#f08643]/90 text-white hover:bg-emerald-50 px-8 py-6 text-lg font-semibold"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      {/* <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Pricty</span>
              </div>
              <p className="text-sm">
                Beautiful price blocks for your Shopify store.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Demo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@pricty.com"
                    className="hover:text-white transition-colors"
                  >
                    support@pricty.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/privacy.html"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Pricty. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
