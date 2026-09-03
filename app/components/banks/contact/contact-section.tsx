import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Textarea } from '~/components/ui/textarea';

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
            <Input
              type="text"
              required
              placeholder="Full Name"
              className="h-12 rounded-none border-ochre-gold/30 bg-studio-card px-4 font-mono text-xs text-sandstone focus-visible:border-ochre-gold"
            />
          </Field>
          <Field label="Email Address">
            <Input
              type="email"
              required
              placeholder="email@domain.com"
              className="h-12 rounded-none border-ochre-gold/30 bg-studio-card px-4 font-mono text-xs text-sandstone focus-visible:border-ochre-gold"
            />
          </Field>
        </div>

        <Field label="Commission Category">
          <Select defaultValue={commissionCategories[0]} name="category">
            <SelectTrigger className="h-12 w-full rounded-none border-ochre-gold/30 bg-studio-card px-4 font-mono text-xs text-sandstone focus:border-ochre-gold">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="border-ochre-gold/30 bg-studio-card text-sandstone">
              {commissionCategories.map((category) => (
                <SelectItem key={category} value={category} className="font-mono text-xs">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field label="Project Brief / Message">
          <Textarea
            rows={5}
            required
            placeholder="Provide project scope or artwork acquisition inquiry..."
            className="min-h-32 rounded-none border-ochre-gold/30 bg-studio-card p-4 font-mono text-xs text-sandstone focus-visible:border-ochre-gold"
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
