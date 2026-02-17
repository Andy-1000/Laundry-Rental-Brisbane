import { Link } from "wouter";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Truck, Wrench, CalendarCheck, CheckCircle, Star, Home as HomeIcon, Shield, Users } from "lucide-react";

const faqItems = [
  {
    question: "How quickly can I get a machine delivered?",
    answer: "We aim to deliver within 2-5 business days across the Brisbane area. In many cases, we can arrange same-week delivery depending on availability."
  },
  {
    question: "What happens if my machine breaks down?",
    answer: "Repairs and replacements are included in your rental. Simply contact us and we'll arrange a technician visit or swap the machine at no extra cost to you."
  },
  {
    question: "Do I need to pay a bond or upfront cost?",
    answer: "No. There is no bond, no deposit, and no upfront cost. You simply pay your weekly rental fee and we take care of the rest."
  },
  {
    question: "Can I cancel anytime?",
    answer: "We offer flexible rental terms. Simply provide 7 days' notice and we'll arrange to collect the machine at a time that suits you."
  },
];

export default function HomePage() {
  return (
    <div>
      <SEO
        title="Laundry Rental Brisbane | Washing Machine & Dryer Rental from $10/week"
        description="Rent washing machines and dryers in Brisbane from just $10 per week. Fast delivery, no upfront cost, repairs included. Servicing renters, students & Defence Housing."
        canonical="https://laundryrentalbrisbane.com/"
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28 lg:py-36">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #ef24a0 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0abcdf 0%, transparent 50%), radial-gradient(circle at 50% 80%, #e6f662 0%, transparent 50%)"
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight" data-testid="text-hero-headline">
              Washing Machine &amp; Dryer Rental in Brisbane
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto" data-testid="text-hero-subheading">
              From just $10 per week. Fast delivery. No upfront cost.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-base px-8 font-semibold" data-testid="button-hero-start-rental">
                  Start Rental
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="text-base px-8 font-semibold backdrop-blur-sm bg-white/10 text-white border-white/30" data-testid="button-hero-view-pricing">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" id="pricing-preview">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Simple, Affordable Pricing</h2>
            <p className="mt-3 text-muted-foreground text-lg">Choose the plan that works for you. No hidden fees.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="relative hover-elevate" data-testid="card-pricing-washer">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">Washing Machine</CardTitle>
                <p className="text-muted-foreground text-sm mt-1">Perfect for small spaces</p>
              </CardHeader>
              <CardContent className="text-center pt-4 pb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-foreground">$15</span>
                  <span className="text-muted-foreground">/week</span>
                </div>
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> Free delivery &amp; installation</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> Repairs &amp; replacement included</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> No upfront cost</li>
                </ul>
              </CardContent>
              <CardFooter className="flex-wrap gap-2">
                <Link href="/contact?product=washing_machine" className="w-full">
                  <Button variant="outline" className="w-full" data-testid="button-pricing-washer">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="relative border-primary hover-elevate" data-testid="card-pricing-bundle">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-2 pt-8">
                <CardTitle className="text-xl">Washer &amp; Dryer Bundle</CardTitle>
                <p className="text-muted-foreground text-sm mt-1">Best value for your home</p>
              </CardHeader>
              <CardContent className="text-center pt-4 pb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-primary">$20</span>
                  <span className="text-muted-foreground">/week</span>
                </div>
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-primary shrink-0" /> Both machines included</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-primary shrink-0" /> Save $5/week vs separate rentals</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-primary shrink-0" /> Free delivery &amp; installation</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-primary shrink-0" /> Repairs &amp; replacement included</li>
                </ul>
              </CardContent>
              <CardFooter className="flex-wrap gap-2">
                <Link href="/contact?product=bundle" className="w-full">
                  <Button className="w-full" data-testid="button-pricing-bundle">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="relative hover-elevate" data-testid="card-pricing-dryer">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">Dryer</CardTitle>
                <p className="text-muted-foreground text-sm mt-1">Great add-on option</p>
              </CardHeader>
              <CardContent className="text-center pt-4 pb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-foreground">$10</span>
                  <span className="text-muted-foreground">/week</span>
                </div>
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> Free delivery &amp; installation</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> Repairs &amp; replacement included</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> No upfront cost</li>
                </ul>
              </CardContent>
              <CardFooter className="flex-wrap gap-2">
                <Link href="/contact?product=dryer" className="w-full">
                  <Button variant="outline" className="w-full" data-testid="button-pricing-dryer">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center" data-testid="value-prop-delivery">
              <div className="w-14 h-14 mx-auto rounded-md bg-accent/10 flex items-center justify-center mb-4">
                <Truck className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fast Brisbane Delivery</h3>
              <p className="text-muted-foreground text-sm">We deliver and install directly to your door across the Brisbane metro area, typically within days.</p>
            </div>
            <div className="text-center" data-testid="value-prop-repairs">
              <div className="w-14 h-14 mx-auto rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Wrench className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Repairs &amp; Replacement Included</h3>
              <p className="text-muted-foreground text-sm">If anything goes wrong, we fix or replace it at no extra charge. Hassle-free laundry, always.</p>
            </div>
            <div className="text-center" data-testid="value-prop-flexible">
              <div className="w-14 h-14 mx-auto rounded-md bg-[#e6f662]/20 flex items-center justify-center mb-4">
                <CalendarCheck className="w-7 h-7 text-[#b8c240]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Flexible Rental Options</h3>
              <p className="text-muted-foreground text-sm">No long-term lock-ins. Simple weekly payments with just 7 days' notice to cancel.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
            <p className="mt-3 text-muted-foreground text-lg">Three simple steps to hassle-free laundry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="step-choose">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Choose Your Plan</h3>
              <p className="text-muted-foreground text-sm">Pick the appliance and plan that fits your needs and budget.</p>
            </div>
            <div className="text-center" data-testid="step-deliver">
              <div className="w-12 h-12 mx-auto rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">We Deliver &amp; Install</h3>
              <p className="text-muted-foreground text-sm">Our team delivers and connects your machine, ready to use.</p>
            </div>
            <div className="text-center" data-testid="step-enjoy">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#e6f662] text-gray-900 flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Enjoy Hassle-Free Laundry</h3>
              <p className="text-muted-foreground text-sm">Sit back and enjoy clean clothes. We handle repairs if anything goes wrong.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trusted by Brisbane Locals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center" data-testid="trust-local">
              <div className="w-14 h-14 mx-auto rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <HomeIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Local Brisbane Business</h3>
              <p className="text-muted-foreground text-sm">We're based right here in Brisbane and understand the needs of local renters and homeowners.</p>
            </div>
            <div className="text-center" data-testid="trust-servicing">
              <div className="w-14 h-14 mx-auto rounded-md bg-accent/10 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Servicing Units, Homes &amp; Defence Housing</h3>
              <p className="text-muted-foreground text-sm">From apartments and townhouses to Defence Housing Australia properties, we've got you covered.</p>
            </div>
            <div className="text-center" data-testid="trust-reliable">
              <div className="w-14 h-14 mx-auto rounded-md bg-[#e6f662]/20 flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-[#b8c240]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Reliable &amp; Straightforward</h3>
              <p className="text-muted-foreground text-sm">No gimmicks, no hidden fees. Just honest, dependable appliance rental you can count on.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium" data-testid={`faq-trigger-${index}`}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground" data-testid={`faq-content-${index}`}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
            <Link href="/faq">
              <Button variant="outline" data-testid="button-view-all-faqs">View All FAQs</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, #ef24a0 0%, transparent 50%), radial-gradient(circle at 70% 30%, #0abcdf 0%, transparent 50%)"
        }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white" data-testid="text-closing-cta">Get Your Machine Delivered This Week</h2>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">No upfront cost. No hassle. Just clean clothes, every week.</p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="text-base px-8 font-semibold" data-testid="button-closing-start-rental">Start Rental</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
