import React, { useState } from 'react';
import { PageId } from '../types';
import { EnquiryForm } from '../components/EnquiryForm';
import { ContactSection } from '../components/ContactSection';
import {
  Lock,
  Mail,
  UserCheck,
  AlertTriangle,
  RotateCcw,
  FileSpreadsheet,
  LogIn,
  KeyRound,
} from 'lucide-react';

interface LoginProps {
  onNavigate: (page: PageId) => void;
  preselectedProductId?: string;
  onClearPreselection?: () => void;
}

export const Login: React.FC<LoginProps> = ({
  onNavigate,
  preselectedProductId,
  onClearPreselection,
}) => {
  const [activeTab, setActiveTab] = useState<'enquiry' | 'login'>(
    preselectedProductId ? 'enquiry' : 'enquiry'
  );

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoggedInDemo, setIsLoggedInDemo] = useState(false);
  const [loginSuccessMsg, setLoginSuccessMsg] = useState<string | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { email?: string; password?: string } = {};

    if (!loginEmail.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(loginEmail.trim())) {
      errors.email = 'Please provide a valid email format.';
    }

    if (!loginPassword.trim()) {
      errors.password = 'Password is required.';
    } else if (loginPassword.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    setLoginErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsLoggedInDemo(true);
      setLoginSuccessMsg(`Demo session active for: ${loginEmail}`);
    }
  };

  const handleClearLoginForm = () => {
    setLoginEmail('');
    setLoginPassword('');
    setLoginErrors({});
    setIsLoggedInDemo(false);
    setLoginSuccessMsg(null);
  };

  return (
    <div className="min-h-screen bg-[#F2F4F6] text-[#263238]">
      
      {/* Header Banner */}
      <section className="bg-white border-b border-[#DCE4EA] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#315B7D] font-mono mb-2">
              <span>Customer Portal & Procurement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#263238] font-heading tracking-tight">
              Customer Enquiry & Client Login
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Submit commercial vehicle component requirements, request quotations, or access the demonstration client portal.
            </p>
          </div>

          {/* Segmented Mode Selector Tabs */}
          <div className="mt-8 inline-flex p-1 bg-[#F2F4F6] border border-[#DCE4EA] rounded-xl">
            <button
              onClick={() => setActiveTab('enquiry')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'enquiry'
                  ? 'bg-[#315B7D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#263238]'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Customer Enquiry (10-Field RFQ)</span>
            </button>

            <button
              onClick={() => setActiveTab('login')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'login'
                  ? 'bg-[#315B7D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#263238]'
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>Client Demo Login</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {activeTab === 'enquiry' ? (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#263238] font-heading">
                  10-Point Technical Enquiry Form
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Complete the fields below to prepare your formal automotive component quotation request.
                </p>
              </div>
            </div>

            <EnquiryForm
              preselectedProductId={preselectedProductId}
              onClearPreselection={onClearPreselection}
            />
          </div>
        ) : (
          /* LOGIN FORM (FRONTEND DEMONSTRATION ONLY) */
          <div className="max-w-xl mx-auto">
            <div className="bg-white border border-[#DCE4EA] rounded-xl shadow-xs overflow-hidden">
              
              {/* Header */}
              <div className="px-6 py-4 bg-[#F2F4F6] border-b border-[#DCE4EA] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#DCE4EA] flex items-center justify-center text-[#315B7D]">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#263238] font-heading">
                    Client Portal Demonstration Login
                  </h3>
                  <span className="text-xs text-slate-500">
                    MS Auto Part Industries B2B Access
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Mandatory Disclaimer */}
                <div className="p-4 bg-[#F2F4F6] border border-[#DCE4EA] rounded-lg text-xs text-slate-700 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#315B7D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#263238] mb-1 font-bold">
                      Frontend Demonstration Notice:
                    </strong>
                    This is a frontend demonstration login. No real account authentication is implemented. No server-side database is connected.
                  </div>
                </div>

                {/* Logged in state */}
                {isLoggedInDemo ? (
                  <div className="p-6 bg-[#F2F4F6] rounded-xl border border-[#DCE4EA] space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mx-auto">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#263238] font-heading">
                        Demonstration Session Active
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        {loginSuccessMsg}
                      </p>
                    </div>

                    <div className="p-3.5 bg-white rounded-lg text-xs text-slate-700 font-mono text-left space-y-1 border border-[#DCE4EA]">
                      <div>Role: <span className="text-[#315B7D] font-bold">Commercial Fleet Partner (Demo)</span></div>
                      <div>Access Level: <span className="text-[#263238]">Catalogue & RFQ Management</span></div>
                      <div>Status: <span className="text-emerald-700 font-semibold">Simulated Verified</span></div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => setActiveTab('enquiry')}
                        className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#315B7D] hover:bg-[#274964] rounded-lg transition-colors cursor-pointer shadow-xs"
                      >
                        Submit Technical Enquiry
                      </button>
                      
                      <button
                        onClick={handleClearLoginForm}
                        className="px-4 py-2 text-xs font-semibold text-[#263238] bg-white hover:bg-slate-50 border border-[#DCE4EA] rounded-lg transition-colors cursor-pointer"
                      >
                        Sign Out Demo Session
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Form */
                  <form onSubmit={handleLoginSubmit} className="space-y-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-[#263238] uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          value={loginEmail}
                          onChange={(e) => {
                            setLoginEmail(e.target.value);
                            if (loginErrors.email) setLoginErrors((p) => ({ ...p, email: undefined }));
                          }}
                          placeholder="client@transportfleet.com"
                          className={`w-full pl-10 pr-4 py-2.5 bg-white border rounded-lg text-sm text-[#263238] placeholder-slate-400 focus:outline-none transition-colors ${
                            loginErrors.email
                              ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                              : 'border-[#DCE4EA] focus:border-[#315B7D] focus:ring-1 focus:ring-[#315B7D]'
                          }`}
                        />
                      </div>
                      {loginErrors.email && (
                        <p className="text-[11px] text-red-600 mt-1">{loginErrors.email}</p>
                      )}
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-xs font-bold text-[#263238] uppercase tracking-wider mb-1.5">
                        Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="password"
                          value={loginPassword}
                          onChange={(e) => {
                            setLoginPassword(e.target.value);
                            if (loginErrors.password) setLoginErrors((p) => ({ ...p, password: undefined }));
                          }}
                          placeholder="••••••••••••"
                          className={`w-full pl-10 pr-4 py-2.5 bg-white border rounded-lg text-sm text-[#263238] placeholder-slate-400 focus:outline-none transition-colors ${
                            loginErrors.password
                              ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                              : 'border-[#DCE4EA] focus:border-[#315B7D] focus:ring-1 focus:ring-[#315B7D]'
                          }`}
                        />
                      </div>
                      {loginErrors.password && (
                        <p className="text-[11px] text-red-600 mt-1">{loginErrors.password}</p>
                      )}
                      <span className="text-[11px] text-slate-500 block mt-1">
                        Demo helper: You can enter any demo credentials (e.g. demo@fleet.com / password123).
                      </span>
                    </div>

                    {/* Buttons: Login and Clear Form */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <button
                        type="submit"
                        className="w-full sm:flex-1 flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#315B7D] hover:bg-[#274964] rounded-lg transition-colors cursor-pointer shadow-xs"
                      >
                        <LogIn className="w-4 h-4" />
                        <span>Login</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleClearLoginForm}
                        className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#263238] bg-[#F2F4F6] hover:bg-[#E5E9ED] border border-[#DCE4EA] rounded-lg transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                        <span>Clear Form</span>
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <ContactSection />

    </div>
  );
};
