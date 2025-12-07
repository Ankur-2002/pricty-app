'use client';

import { Button } from '@/components/ui/button';
import { Zap, ArrowLeft, Shield, Mail } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Pricty
              </span>
            </Link>
            <Link href="/">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-slate-900">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600">
              Pricty: Custom Price Blocks
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Effective Date: 07 December 2025
            </p>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <p className="text-slate-700 leading-relaxed mb-0">
                Pricty: Custom Price Blocks ("the App") is provided by Pricty ("we", "us" or "our").
                This Privacy Policy explains how we collect, use, and protect information when merchants
                install and use the App in their Shopify store. We respect your privacy and are committed
                to safeguarding your information.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Information We Collect
              </h2>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  1. Merchant Information
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  When you install the App, Shopify automatically provides us with the limited
                  information needed for the App to function, including:
                </p>
                <ul className="space-y-2 text-slate-700 ml-6">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Store name and store URL
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Contact email
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Shopify plan type
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Theme details to enable proper display of pricing blocks
                  </li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4 mb-0">
                  We do not collect payment information, financial data, or any sensitive merchant information.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  2. Customer Information
                </h3>
                <p className="text-slate-700 leading-relaxed mb-0">
                  Pricty: Custom Price Blocks does not collect, store, or process any customer personal data.
                  The App only displays pricing elements and does not track or identify customers in any way.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  3. Usage Data
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We may collect non-personal, anonymised usage data such as:
                </p>
                <ul className="space-y-2 text-slate-700 ml-6">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Which pricing templates are selected
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Interaction logs for performance improvement
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Basic technical diagnostics to troubleshoot issues
                  </li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4 mb-0">
                  This data never includes customer information.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                How We Use Your Information
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <p className="text-slate-700 leading-relaxed mb-4">
                  We use merchant data strictly for the following purposes:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    </div>
                    <span>To operate and display price blocks in your store</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    </div>
                    <span>To ensure compatibility with your Shopify theme</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    </div>
                    <span>To provide customer support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    </div>
                    <span>To improve app performance, templates, and features</span>
                  </li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4 mb-0 font-medium">
                  We do not sell or share your data for marketing.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Sharing Your Information
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <p className="text-slate-700 leading-relaxed mb-4">
                  We may share minimal information only with:
                </p>
                <ul className="space-y-2 text-slate-700 ml-6 mb-4">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Service providers that assist in app hosting and maintenance
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Shopify, as required to comply with platform standards
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Legal authorities, only when legally required
                  </li>
                </ul>
                <p className="text-slate-700 leading-relaxed mb-0 font-medium">
                  We do not sell, rent, or trade any data with external parties.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Data Retention
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-teal-600 rounded-full" />
                    </div>
                    <span>We keep your merchant information only while your store uses the App.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-teal-600 rounded-full" />
                    </div>
                    <span>When you uninstall the App, all merchant-related data is deleted from our systems within 30 days.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-teal-600 rounded-full" />
                    </div>
                    <span>No customer data is ever collected or retained.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Data Security
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <p className="text-slate-700 leading-relaxed mb-0">
                  We use industry-standard measures to protect all information we hold and regularly
                  review our systems to prevent unauthorised access or misuse.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Your Rights
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <p className="text-slate-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    </div>
                    <span>Access your stored information</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    </div>
                    <span>Request the deletion of your data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    </div>
                    <span>Request corrections or updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    </div>
                    <span>Contact us with any privacy concerns</span>
                  </li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4 mb-0">
                  You may also contact Shopify directly regarding your personal data rights.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Third Party Services
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <p className="text-slate-700 leading-relaxed mb-0">
                  Pricty: Custom Price Blocks relies on Shopify's APIs and ecosystem. Data handled
                  inside your Shopify store remains subject to Shopify's Privacy Policy.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Changes to This Policy
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <p className="text-slate-700 leading-relaxed mb-0">
                  We may update this Privacy Policy from time to time. Changes will be posted here
                  with an updated "Last updated" date.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Contact Us
              </h2>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-sm border border-emerald-200 p-8">
                <p className="text-slate-700 leading-relaxed mb-6">
                  For questions, requests, or concerns about this Privacy Policy, please contact:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <Mail className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-0">Email</p>
                      <a
                        href="mailto:support@pricty.com"
                        className="text-lg font-medium text-emerald-700 hover:text-emerald-800 no-underline"
                      >
                        support@pricty.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <Zap className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-0">Website</p>
                      <a
                        href="https://www.pricty.com"
                        className="text-lg font-medium text-emerald-700 hover:text-emerald-800 no-underline"
                      >
                        www.pricty.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="text-center mt-12">
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Pricty</span>
            </div>
            <p className="text-sm mb-4">
              Beautiful price blocks for your Shopify store.
            </p>
            <p className="text-sm">
              &copy; 2025 Pricty. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
