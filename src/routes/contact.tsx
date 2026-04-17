import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Start Your Build — Contact Jaffa Group" },
      {
        name: "description",
        content:
          "Begin a confidential conversation with Jaffa Group about your custom luxury home in Park City and the surrounding mountain communities.",
      },
      { property: "og:title", content: "Start Your Build — Jaffa Group" },
      {
        property: "og:description",
        content: "Begin a confidential conversation about your home.",
      },
    ],
  }),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <SiteShell>
      <section className="pt-40 pb-16 lg:pt-48 bg-background">
        <div className="container-editorial">
          <p className="eyebrow animate-fade-up">Start Your Build</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-4xl animate-fade-up delay-100">
            Tell us about <span className="italic text-gold">your home.</span>
          </h1>
          <p className="mt-8 max-w-xl font-sans text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
            Share a few details about your project. A principal will be in
            touch within two business days to schedule an introductory
            conversation.
          </p>
        </div>
      </section>

      <section className="bg-background pb-24 lg:pb-36">
        <div className="container-editorial grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start space-y-10">
            <div>
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                Studio
              </p>
              <p className="mt-4 font-serif text-2xl leading-snug">
                1750 Park Avenue<br />
                Park City, Utah 84060
              </p>
            </div>
            <div>
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                Inquiries
              </p>
              <p className="mt-4 font-serif text-2xl leading-snug">
                hello@jaffagroup.com<br />
                +1 (435) 555&ndash;0142
              </p>
            </div>
            <div>
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                Service area
              </p>
              <p className="mt-4 font-serif text-lg leading-relaxed text-muted-foreground">
                Park City · Deer Valley · Promontory · Park Meadows · Tuhaye ·
                Victory Ranch · Old Town · Summit Park
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            {submitted ? (
              <div className="border border-gold p-10 lg:p-14 bg-bone">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink">
                  <Check className="h-6 w-6" />
                </div>
                <h2 className="mt-8 font-serif text-4xl md:text-5xl leading-tight">
                  Thank you.
                </h2>
                <p className="mt-6 font-sans text-base text-muted-foreground leading-relaxed max-w-lg">
                  Your inquiry has been received. A principal will reach out
                  personally within two business days to begin the conversation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 link-gold"
                >
                  Send another inquiry <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="Project location" name="location" placeholder="e.g. Deer Valley" />
                  <SelectField
                    label="Budget range"
                    name="budget"
                    options={[
                      "Under $3M",
                      "$3M – $6M",
                      "$6M – $10M",
                      "$10M – $20M",
                      "$20M +",
                    ]}
                  />
                  <SelectField
                    label="Timeline"
                    name="timeline"
                    options={[
                      "Exploring options",
                      "0–6 months",
                      "6–12 months",
                      "12+ months",
                    ]}
                  />
                </div>

                <div>
                  <label className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                    Tell us about the project
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-3 w-full bg-transparent border-b border-foreground/30 py-3 font-serif text-xl focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
                  <p className="font-sans text-xs text-muted-foreground max-w-sm">
                    By submitting, you agree to be contacted by Jaffa Group
                    regarding your inquiry. We respond within two business days.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 font-sans text-xs uppercase tracking-[0.22em] hover:bg-gold hover:text-ink transition-colors w-fit"
                  >
                    Send Inquiry
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full bg-transparent border-b border-foreground/30 py-3 font-serif text-xl focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50 placeholder:font-serif"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="mt-3 w-full bg-transparent border-b border-foreground/30 py-3 font-serif text-xl focus:outline-none focus:border-gold transition-colors appearance-none"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
