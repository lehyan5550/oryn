"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "oryn_newsletter_popup_shown";
const DELAY_MS = 12000;

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      setOpen(true);
      window.sessionStorage.setItem(SESSION_KEY, "1");
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex animate-overlayIn items-end justify-center bg-black/50 p-4 sm:items-center"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Inscription newsletter"
    >
      <div
        className="relative w-full max-w-md animate-modalIn bg-oryn-black p-8 text-center text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Fermer"
          className="absolute right-4 top-4 text-2xl leading-none"
        >
          &times;
        </button>

        {submitted ? (
          <>
            <h2 className="text-2xl font-extrabold uppercase tracking-tightest">
              Bienvenue dans le Cercle
            </h2>
            <p className="mt-3 text-sm text-neutral-400">
              Votre code de réduction vous a été envoyé par email.
            </p>
          </>
        ) : (
          <>
            <p className="text-xs font-bold uppercase tracking-widest2 text-oryn-red">
              Offre de Bienvenue
            </p>
            <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tightest">
              -10% Sur Votre Première Commande
            </h2>
            <p className="mt-3 text-sm text-neutral-400">
              Inscrivez-vous à la newsletter ORYN pour recevoir votre code et
              l&apos;accès prioritaire aux nouveautés.
            </p>
            <form
              className="mt-6 flex"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <label htmlFor="popup-email" className="sr-only">
                Adresse email
              </label>
              <input
                id="popup-email"
                type="email"
                required
                placeholder="Votre email"
                className="w-full border border-neutral-700 bg-transparent px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap bg-oryn-red px-5 text-xs font-bold uppercase tracking-widest2 text-white transition-colors hover:bg-red-700"
              >
                Recevoir
              </button>
            </form>
            <button
              onClick={() => setOpen(false)}
              className="mt-4 text-xs text-neutral-500 underline hover:text-neutral-300"
            >
              Non merci
            </button>
          </>
        )}
      </div>
    </div>
  );
}
