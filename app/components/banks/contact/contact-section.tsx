import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '~/components/ui/button';

const commissionCategories = [
  'Kulukism / Holocaust Series Acquisition',
  'Fine Art Painting / Canvas',
  'Monumental Public Mural',
  'Bronze or Metal Sculpture',
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="mx-auto max-w-4xl px-6">
      <div className="mb-16 text-center">
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-ochre-gold">[ STUDIO ENQUIRIES ]</span>
        <h2 className="mb-4 font-serif text-4xl font-bold text-sandstone sm:text-6xl">Initiate Studio Contact</h2>
        <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
          Fine art commissions, Kulukism acquisitions, monumental murals, and exhibition invites.
        </p>
      </div>

      <form
        className="space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
          event.currentTarget.reset();
        }}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field label="Your Name">
            <input
              type="text"
              required
              placeholder="Full Name"
              className="studio-input"
            />
          </Field>
          <Field label="Email Address">
            <input
              type="email"
              required
              placeholder="email@domain.com"
              className="studio-input"
            />
          </Field>
        </div>

        <Field label="Commission Category">
          <select className="studio-input">
            {commissionCategories.map((category) => (
              <option key={category} className="bg-studio-card">
                {category}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Project Brief / Message">
          <textarea
            rows={5}
            required
            placeholder="Provide project scope or artwork acquisition inquiry..."
            className="studio-input resize-y"
          />
        </Field>

        <Button
          type="submit"
          className="h-auto w-full rounded-none bg-ochre-gold py-5 font-mono text-xs font-bold uppercase tracking-widest text-black hover:bg-white">
          Submit Enquiry
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>

        {submitted && (
          <div className="pt-4 text-center font-mono text-xs tracking-wider text-ochre-gold">
            Transmission received. Studio management will respond shortly.
          </div>
        )}
      </form>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-slate-400">{label}</span>
      {children}
    </label>
  );
}
