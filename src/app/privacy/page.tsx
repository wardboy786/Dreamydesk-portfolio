import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
       <div className="relative z-10 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="text-slate-600 hover:text-indigo-600 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold text-slate-800">Privacy Policy</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6 md:p-10">
        <div className="prose prose-slate max-w-none lg:prose-lg">
          <h2>1. Introduction</h2>
          <p>
            Your privacy is important to us. This Privacy Policy explains how
            we collect, use, and share information about you when you use our
            website and services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect information you provide directly to us, such as your
            name and email address. We may also collect information
            automatically as you navigate our services, such as your IP address
            and browsing history.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services, to communicate with you, and to protect MedCoderX and
            our users.
          </p>
          
          <h2>4. How We Share Your Information</h2>
          <p>
            We do not share your personal information with companies,
            organizations, or individuals outside of MedCoderX except in the
            following cases: with your consent, for legal reasons, or with domain
            administrators.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We work hard to protect our users from unauthorized access to or
            unauthorized alteration, disclosure, or destruction of information
            we hold.
          </p>

          <h2>6. Changes to This Policy</h2>
          <p>
            We may change this Privacy Policy from time to time. We will post
            any privacy policy changes on this page and, if the changes are
            significant, we will provide a more prominent notice.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please
            contact us at{' '}
            <a href="mailto:info@dreamydesk.co.in">info@dreamydesk.co.in</a>.
          </p>
        </div>
      </div>
      <footer className="bg-white border-t border-slate-200 mt-12 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-sm text-slate-400">
          © {new Date().getFullYear()} MedCoderX. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
