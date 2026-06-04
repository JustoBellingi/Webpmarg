"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_URL } from "@/config/site";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && !tooltipDismissed) {
      const timer = setTimeout(() => setShowTooltip(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, tooltipDismissed]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && !tooltipDismissed && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="glass-strong rounded-xl px-4 py-3 shadow-xl border border-white/10 max-w-[220px]"
              >
                <button
                  onClick={() => {
                    setShowTooltip(false);
                    setTooltipDismissed(true);
                  }}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  aria-label="Cerrar mensaje"
                >
                  <X className="w-3 h-3" />
                </button>
                <p className="text-sm text-white font-medium mb-0.5">
                  ¿Necesitás una web?
                </p>
                <p className="text-xs text-slate-400">
                  Escribinos y te respondemos al instante
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar a WEBPMARG por WhatsApp"
            className="relative group w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              boxShadow: "0 4px 20px rgba(37, 211, 102, 0.35)",
            }}
            onMouseEnter={() => !tooltipDismissed && setShowTooltip(true)}
          >
            {/* Pulse ring */}
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-30"
              style={{ background: "rgba(37, 211, 102, 0.4)" }}
              aria-hidden="true"
            />
            <MessageCircle className="w-7 h-7 text-white relative z-10" aria-hidden="true" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
