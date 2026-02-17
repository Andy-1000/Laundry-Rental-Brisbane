import { Link } from "wouter";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, Truck, Sparkles, Phone, CheckCircle } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div>
      <SEO
        title="How It Works | Laundry Rental Brisbane"
        description="Renting a washing machine or dryer in Brisbane is easy. Choose your plan, we deliver and install, and you enjoy hassle-free laundry."
        canonical="https://laundryrentalbrisbane.com/how-it-works"
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-hiw-headline">
              How It Works
            </h1>
            <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto">
              Getting a washing machine or dryer delivered to your Brisbane home is easy. Here's how.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6 items-start" data-testid="step-1">
              <div className="shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Choose Your Plan</h2>
                <p className="text-muted-foreground">
                  Browse our simple pricing options and pick what works for you. Whether you need just a washing machine, just a dryer, or the popular bundle, we have an affordable weekly plan.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Card className="inline-flex items-center gap-2 px-4 py-2">
                    <ClipboardList className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Washer &amp; Dryer Bundle - $20/wk</span>
                  </Card>
                  <Card className="inline-flex items-center gap-2 px-4 py-2">
                    <span className="text-sm font-medium">Washer - $15/wk</span>
                  </Card>
                  <Card className="inline-flex items-center gap-2 px-4 py-2">
                    <span className="text-sm font-medium">Dryer - $10/wk</span>
                  </Card>
                </div>
              </div>
            </div>

            <div className="ml-7 h-8 border-l-2 border-dashed border-muted-foreground/30" />

            <div className="flex gap-6 items-start" data-testid="step-2">
              <div className="shrink-0 w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Submit Your Details</h2>
                <p className="text-muted-foreground">
                  Fill in your details through our quick contact form. Let us know your delivery address and which appliance you'd like. We'll get back to you promptly to confirm everything.
                </p>
              </div>
            </div>

            <div className="ml-7 h-8 border-l-2 border-dashed border-muted-foreground/30" />

            <div className="flex gap-6 items-start" data-testid="step-3">
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#e6f662] text-gray-900 flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">We Deliver &amp; Install</h2>
                <p className="text-muted-foreground">
                  Our team will deliver and connect your appliance to your existing plumbing and power points. It's all included in your rental, no extra charges.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="w-4 h-4 text-accent" />
                  <span>Typically delivered within 2-5 business days</span>
                </div>
              </div>
            </div>

            <div className="ml-7 h-8 border-l-2 border-dashed border-muted-foreground/30" />

            <div className="flex gap-6 items-start" data-testid="step-4">
              <div className="shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Enjoy Hassle-Free Laundry</h2>
                <p className="text-muted-foreground">
                  That's it! Start using your appliance right away. If anything ever goes wrong, contact us and we'll repair or replace it at no extra cost.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" /> Repairs included at no extra charge
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" /> Replacement if we can't fix it
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" /> Cancel with 7 days' notice
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to get started?</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-base px-8 font-semibold" data-testid="button-hiw-start-rental">Start Rental</Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="text-base px-8 font-semibold" data-testid="button-hiw-view-pricing">View Pricing</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
