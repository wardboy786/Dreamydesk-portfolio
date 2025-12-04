import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="relative z-10 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="text-slate-600 hover:text-indigo-600 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold text-slate-800">Terms of Use</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6 md:p-10">
        <div className="prose prose-slate max-w-none lg:prose-lg">
          <h2>1. Introduction</h2>
          <p>
            Welcome to MedCoderX. These Terms of Use govern your use of our
            website and services. By accessing or using our services, you agree
            to be bound by these terms.
          </p>

          <h2>2. Use of Our Services</h2>
          <p>
            You may use our services only as permitted by law. We may suspend or
            stop providing our services to you if you do not comply with our
            terms or policies.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content and software on this website are the property of
            MedCoderX or its suppliers and are protected by international
            copyright laws.
          </p>

          <h2>4. Disclaimer of Warranties</h2>
          <p>
            Our services are provided "as is." We do not make any specific
            promises about the services. For example, we don’t make any
            commitments about the content within the services, the specific
            functions of the services, or their reliability, availability, or
            ability to meet your needs.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            When permitted by law, MedCoderX will not be responsible for lost
            profits, revenues, or data, financial losses or indirect, special,
            consequential, exemplary, or punitive damages.
          </p>

          <h2>6. Changes to These Terms</h2>
          <p>
            We may modify these terms at any time. We’ll post any modifications
            to the terms on this page. Changes will not apply retroactively and
            will become effective no sooner than fourteen days after they are
            posted.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{' '}
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
