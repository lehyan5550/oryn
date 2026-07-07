"use client";

import { useState } from "react";

// Shared submit logic for the three newsletter forms on the site (footer,
// homepage section, popup) — all rendered on dark backgrounds, so the
// success/error text colors are fixed rather than passed as props.
export default function NewsletterForm({
  idPrefix = "newsletter",
  inputClassName = "",
  buttonClassName = "",
  buttonLabel = "S'inscrire",
  placeholder = "Entrez votre email",
  successMessage = "Merci ! Vérifiez votre boîte mail pour confirmer votre inscription.",
  onSuccess,
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Une erreur est survenue.");
        setStatus("error");
        return;
      }

      setStatus("success");
      onSuccess?.();
    } catch {
      setError("Erreur réseau. Réessayez.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return <p className="text-sm text-neutral-300">{successMessage}</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex">
        <label htmlFor={`${idPrefix}-email`} className="sr-only">
          Adresse email
        </label>
        <input
          id={`${idPrefix}-email`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={inputClassName}
        />
        <button type="submit" disabled={status === "loading"} className={buttonClassName}>
          {status === "loading" ? "..." : buttonLabel}
        </button>
      </form>
      {error && <p className="mt-2 text-xs text-oryn-redlight">{error}</p>}
    </div>
  );
}
