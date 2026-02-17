import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useSearch } from "wouter";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import SEO from "@/components/seo";

export default function ContactPage() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const searchString = useSearch();

  const getProductFromSearch = (): InsertContact["product"] | undefined => {
    const params = new URLSearchParams(searchString);
    const product = params.get("product");
    if (product === "washing_machine" || product === "dryer" || product === "bundle") {
      return product;
    }
    return undefined;
  };

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      postcode: "",
      deliveryAddress: "",
      product: getProductFromSearch() || undefined,
      message: "",
    },
  });

  useEffect(() => {
    const product = getProductFromSearch();
    if (product) {
      form.setValue("product", product);
    }
  }, [searchString]);

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: (error: Error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again or email us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
  };

  if (submitted) {
    return (
      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4" data-testid="text-success-headline">Thank You!</h1>
            <p className="text-muted-foreground text-lg mb-8" data-testid="text-success-message">
              We've received your enquiry and will be in touch shortly to arrange your rental. Check your email for a confirmation.
            </p>
            <Button onClick={() => { setSubmitted(false); form.reset(); }} variant="outline" data-testid="button-submit-another">
              Submit Another Enquiry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SEO
            title="Contact Us | Laundry Rental Brisbane - Start Your Rental"
            description="Get in touch to start your washing machine or dryer rental in Brisbane. Fill out our quick form and we'll arrange delivery within days."
            canonical="https://laundryrentalbrisbane.com/contact"
          />
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-contact-headline">
              Get Started Today
            </h1>
            <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto">
              Fill in your details and we'll get back to you to arrange your rental.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Rental Enquiry</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" data-testid="form-contact">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="you@example.com" {...field} data-testid="input-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="04XX XXX XXX" {...field} value={field.value || ""} data-testid="input-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="postcode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Postcode *</FormLabel>
                              <FormControl>
                                <Input placeholder="4000" {...field} data-testid="input-postcode" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="product"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Product *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-product">
                                    <SelectValue placeholder="Select a product" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="bundle">Washing Machine &amp; Dryer Bundle ($20/wk)</SelectItem>
                                  <SelectItem value="washing_machine">Washing Machine ($15/wk)</SelectItem>
                                  <SelectItem value="dryer">Dryer ($10/wk)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="deliveryAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Delivery Address</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Example St, Suburb QLD" {...field} value={field.value || ""} data-testid="input-address" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Any additional details or questions..." className="resize-none" rows={4} {...field} value={field.value || ""} data-testid="textarea-message" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full" disabled={mutation.isPending} data-testid="button-submit-form">
                        {mutation.isPending && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
                        {mutation.isPending ? "Submitting..." : "Submit Enquiry"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a href="mailto:support@laundryrentalbrisbane.com" className="text-sm text-foreground hover:text-primary transition-colors" data-testid="link-email">
                          support@laundryrentalbrisbane.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Service Area</p>
                        <p className="text-sm text-foreground">Brisbane Metropolitan Area, QLD</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">What happens next?</h3>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">1</span>
                      <span className="text-muted-foreground">We review your enquiry and get in touch within 1 business day.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">2</span>
                      <span className="text-muted-foreground">We confirm your plan and arrange a delivery date.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">3</span>
                      <span className="text-muted-foreground">We deliver, install, and set up your weekly payment.</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
