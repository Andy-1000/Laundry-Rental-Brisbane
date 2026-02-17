import { Link } from "wouter";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X } from "lucide-react";

export default function PricingPage() {
  return (
    <div>
      <SEO
        title="Pricing | Laundry Rental Brisbane - From $10/week"
        description="Compare our affordable washing machine and dryer rental plans in Brisbane. Bundle from $20/week, washer $15/week, dryer $10/week. No upfront costs."
        canonical="https://laundryrentalbrisbane.com/pricing"
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-pricing-headline">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto">
              No hidden fees. No upfront costs. Just affordable weekly payments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="relative hover-elevate" data-testid="card-plan-washer">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">Washing Machine</CardTitle>
                <p className="text-muted-foreground text-sm mt-1">Single appliance rental</p>
              </CardHeader>
              <CardContent className="text-center pt-4 pb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-foreground">$15</span>
                  <span className="text-muted-foreground">/week</span>
                </div>
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> Quality washing machine</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> Free delivery &amp; installation</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> Repairs &amp; replacement</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> No upfront cost</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> Flexible terms</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><X className="w-4 h-4 mt-0.5 shrink-0" /> Dryer not included</li>
                </ul>
              </CardContent>
              <CardFooter className="flex-wrap gap-2">
                <Link href="/contact?product=washing_machine" className="w-full">
                  <Button variant="outline" className="w-full" data-testid="button-plan-washer">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="relative border-primary hover-elevate" data-testid="card-plan-bundle">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-2 pt-8">
                <CardTitle className="text-xl">Washer &amp; Dryer Bundle</CardTitle>
                <p className="text-muted-foreground text-sm mt-1">Complete laundry solution</p>
              </CardHeader>
              <CardContent className="text-center pt-4 pb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-primary">$20</span>
                  <span className="text-muted-foreground">/week</span>
                </div>
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-primary shrink-0" /> Washing machine included</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-primary shrink-0" /> Dryer included</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-primary shrink-0" /> Save $5/week vs separate</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-primary shrink-0" /> Free delivery &amp; installation</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-primary shrink-0" /> Repairs &amp; replacement</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-primary shrink-0" /> No upfront cost</li>
                </ul>
              </CardContent>
              <CardFooter className="flex-wrap gap-2">
                <Link href="/contact?product=bundle" className="w-full">
                  <Button className="w-full" data-testid="button-plan-bundle">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="relative hover-elevate" data-testid="card-plan-dryer">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">Dryer</CardTitle>
                <p className="text-muted-foreground text-sm mt-1">Single appliance rental</p>
              </CardHeader>
              <CardContent className="text-center pt-4 pb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-foreground">$10</span>
                  <span className="text-muted-foreground">/week</span>
                </div>
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> Quality dryer</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> Free delivery &amp; installation</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> Repairs &amp; replacement</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> No upfront cost</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" /> Flexible terms</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><X className="w-4 h-4 mt-0.5 shrink-0" /> Washer not included</li>
                </ul>
              </CardContent>
              <CardFooter className="flex-wrap gap-2">
                <Link href="/contact?product=dryer" className="w-full">
                  <Button variant="outline" className="w-full" data-testid="button-plan-dryer">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <Card data-testid="card-cost-comparison">
              <CardHeader>
                <CardTitle className="text-xl text-center">Renting vs Buying Outright</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" data-testid="table-comparison">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 pr-4 font-semibold text-foreground">Factor</th>
                        <th className="text-center py-3 px-4 font-semibold text-primary">Rental</th>
                        <th className="text-center py-3 pl-4 font-semibold text-muted-foreground">Buying</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-3 pr-4 text-foreground">Upfront Cost</td>
                        <td className="py-3 px-4 text-center font-medium text-primary">$0</td>
                        <td className="py-3 pl-4 text-center text-muted-foreground">$800 - $2,000+</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-foreground">Repairs</td>
                        <td className="py-3 px-4 text-center font-medium text-primary">Included</td>
                        <td className="py-3 pl-4 text-center text-muted-foreground">Your expense</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-foreground">Delivery</td>
                        <td className="py-3 px-4 text-center font-medium text-primary">Free</td>
                        <td className="py-3 pl-4 text-center text-muted-foreground">$50 - $150</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-foreground">Flexibility</td>
                        <td className="py-3 px-4 text-center font-medium text-primary">Cancel anytime</td>
                        <td className="py-3 pl-4 text-center text-muted-foreground">Stuck with it</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-foreground">Replacement</td>
                        <td className="py-3 px-4 text-center font-medium text-primary">Free swap</td>
                        <td className="py-3 pl-4 text-center text-muted-foreground">Buy again</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="text-base px-8 font-semibold" data-testid="button-pricing-cta">Start Your Rental Today</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
