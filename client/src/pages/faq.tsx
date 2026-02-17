import { Link } from "wouter";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Getting Started",
    items: [
      {
        question: "How do I start renting?",
        answer: "Simply fill out our contact form with your details and preferred appliance. We'll get in touch to confirm your order and arrange delivery."
      },
      {
        question: "What areas do you service?",
        answer: "We currently service the Brisbane metropolitan area, including surrounding suburbs. If you're unsure whether we cover your area, get in touch and we'll let you know."
      },
      {
        question: "How quickly can I get a machine delivered?",
        answer: "We aim to deliver within 2-5 business days across the Brisbane area. In many cases, we can arrange same-week delivery depending on availability."
      },
      {
        question: "Do I need to pay a bond or upfront cost?",
        answer: "No. There is no bond, no deposit, and no upfront cost. You simply pay your weekly rental fee and we take care of the rest."
      },
    ],
  },
  {
    title: "Pricing & Payment",
    items: [
      {
        question: "How much does it cost?",
        answer: "Our plans start from just $10/week for a dryer, $15/week for a washing machine, or $20/week for the washer & dryer bundle. There are no hidden fees."
      },
      {
        question: "How do payments work?",
        answer: "Payments are charged weekly via Stripe. You'll set up a simple subscription and your card will be charged automatically each week."
      },
      {
        question: "Can I change my plan?",
        answer: "Yes. If you'd like to upgrade from a single appliance to the bundle, or switch appliances, just contact us and we'll arrange it."
      },
    ],
  },
  {
    title: "Delivery & Installation",
    items: [
      {
        question: "Is delivery free?",
        answer: "Yes, delivery and installation are completely free across the Brisbane area. Our team will deliver and connect your appliance to your existing plumbing and power points."
      },
      {
        question: "Do I need special plumbing or connections?",
        answer: "You'll need standard plumbing connections (hot and cold taps) and a power outlet near the installation area. Our team will connect the machine to your existing fittings."
      },
      {
        question: "What if my plumbing isn't compatible?",
        answer: "If we're unable to install due to plumbing or electrical issues, we'll let you know and advise on what's needed. We are not responsible for pre-existing plumbing defects."
      },
    ],
  },
  {
    title: "Repairs & Maintenance",
    items: [
      {
        question: "What happens if my machine breaks down?",
        answer: "Repairs and replacements are included in your rental. Simply contact us and we'll arrange a technician visit or swap the machine at no extra cost to you."
      },
      {
        question: "Are all repairs covered?",
        answer: "Repairs from normal wear and tear are fully covered. Damage caused by misuse, negligence, or unauthorised repairs may incur charges. See our Terms & Conditions for details."
      },
      {
        question: "How long does a repair take?",
        answer: "We aim to resolve issues as quickly as possible. If a repair can't be completed promptly, we'll arrange a replacement machine."
      },
    ],
  },
  {
    title: "Cancellation & Returns",
    items: [
      {
        question: "Can I cancel anytime?",
        answer: "We offer flexible rental terms. Simply provide 7 days' notice and we'll arrange to collect the machine at a time that suits you."
      },
      {
        question: "Is there a minimum rental period?",
        answer: "Please refer to our Terms & Conditions for specific details about minimum terms. We aim to keep our rental options as flexible as possible."
      },
      {
        question: "What happens when I cancel?",
        answer: "We'll arrange a convenient time to collect the appliance from your home. Your weekly payments will stop once the machine is collected."
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div>
      <SEO
        title="FAQ | Laundry Rental Brisbane - Common Questions"
        description="Find answers to common questions about washing machine and dryer rental in Brisbane. Delivery, pricing, repairs, cancellation and more."
        canonical="https://laundryrentalbrisbane.com/faq"
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-faq-headline">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto">
              Everything you need to know about renting a washing machine or dryer in Brisbane.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-10">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} data-testid={`faq-category-${catIndex}`}>
                <h2 className="text-xl font-semibold text-foreground mb-4">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`${catIndex}-${itemIndex}`}>
                      <AccordionTrigger className="text-left text-base font-medium" data-testid={`faq-trigger-${catIndex}-${itemIndex}`}>
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Link href="/contact">
              <Button size="lg" className="text-base px-8 font-semibold" data-testid="button-faq-contact">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
