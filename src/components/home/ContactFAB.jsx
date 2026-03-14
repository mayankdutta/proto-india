import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export default function ContactFAB() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-accent-500 text-white shadow-xl shadow-accent-500/30 
                   flex items-center justify-center hover:bg-accent-600 hover:scale-105 transition-all duration-200"
        aria-label="Contact us"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md animate-slide-up overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-surface-100 bg-surface-50/50">
              <div>
                <h3 className="font-heading font-bold text-surface-900">
                  Talk with Our Team
                </h3>
                <p className="text-xs text-surface-800/50 mt-0.5">
                  A manufacturing expert will reach out directly.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-surface-100 transition-colors"
              >
                <X className="w-5 h-5 text-surface-800/50" />
              </button>
            </div>

            {/* Form */}
            <form
              className="p-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Demo: Form submitted! In production this would hit your backend.");
                setOpen(false);
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-surface-800/60 mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2.5 rounded-lg border border-surface-200 text-sm focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all"
                    placeholder="Rahul"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-surface-800/60 mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2.5 rounded-lg border border-surface-200 text-sm focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all"
                    placeholder="Sharma"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-surface-800/60 mb-1.5">
                  Company Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2.5 rounded-lg border border-surface-200 text-sm focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all"
                  placeholder="rahul@company.in"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-surface-800/60 mb-1.5">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2.5 rounded-lg border border-surface-200 text-sm focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-surface-800/60 mb-1.5">
                  Project Description
                </label>
                <textarea
                  rows="3"
                  className="w-full px-3 py-2.5 rounded-lg border border-surface-200 text-sm focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all resize-none"
                  placeholder="Describe your project needs..."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-surface-800/60 mb-2">
                  Manufacturing Service(s)
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Injection Moulding", "CNC Machining", "3D Printing", "Decide Later"].map(
                    (svc) => (
                      <label
                        key={svc}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-surface-200 text-xs font-medium text-surface-800/70 cursor-pointer hover:border-primary-300 hover:bg-primary-50/50 transition-all has-[:checked]:bg-primary-50 has-[:checked]:border-primary-400 has-[:checked]:text-primary-600"
                      >
                        <input type="checkbox" className="sr-only" />
                        {svc}
                      </label>
                    )
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-accent py-3 text-sm"
              >
                Submit Details
              </button>

              <p className="text-[10px] text-surface-800/40 text-center">
                By submitting, you agree to our{" "}
                <a href="/privacy" className="underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
