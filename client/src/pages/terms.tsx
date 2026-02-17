import SEO from "@/components/seo";

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <SEO
        title="Terms & Conditions | Laundry Rental Brisbane"
        description="Read the terms and conditions for Laundry Rental Brisbane appliance rental service including delivery, payment, repairs and cancellation policies."
        canonical="https://laundryrentalbrisbane.com/terms"
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          <h1 data-testid="text-terms-headline">Terms &amp; Conditions</h1>
          <p><strong>Laundry Rental Brisbane</strong><br />Effective Date: 17 February 2026</p>
          <p>These Terms &amp; Conditions ("Agreement") govern the rental of appliances by Laundry Rental Brisbane ("we", "us", "our") to the customer ("you", "your").</p>
          <p>By placing an order, subscribing, or accepting delivery of equipment, you agree to be bound by this Agreement.</p>

          <h2>1. Equipment &amp; Ownership</h2>
          <p>1.1 We rent washing machines and dryers to customers in Brisbane, Queensland.</p>
          <p>1.2 All equipment remains our property at all times.</p>
          <p>1.3 You acquire a right to use the equipment only during the rental period.</p>

          <h2>2. Rental Fees &amp; Payment</h2>
          <p>2.1 Rental fees are charged weekly in advance via Stripe subscription.</p>
          <p>2.2 You authorise recurring debits from your nominated payment method.</p>
          <p>2.3 If payment fails, we may:</p>
          <ul>
            <li>Retry the transaction;</li>
            <li>Suspend service;</li>
            <li>Charge reasonable administrative or recovery costs;</li>
            <li>Recover the equipment.</li>
          </ul>
          <p>2.4 We may vary fees on 14 days' written notice for ongoing rentals.</p>

          <h2>3. Minimum Term &amp; Termination</h2>
          <p>3.1 Minimum rental period: No minimum term.</p>
          <p>3.2 After any minimum term, rental continues week-to-week.</p>
          <p>3.3 You must provide at least 7 days' notice to cancel.</p>
          <p>3.4 Equipment must be available for collection in safe and accessible condition.</p>
          <p>3.5 We may terminate immediately for serious breach, non-payment, or misuse.</p>

          <h2>4. Delivery &amp; Installation</h2>
          <p>4.1 We will deliver and connect the appliance to existing plumbing and electrical points where reasonably practicable.</p>
          <p>4.2 You warrant that:</p>
          <ul>
            <li>Plumbing connections are compliant and in good working order;</li>
            <li>Drainage is functional and not blocked;</li>
            <li>Electrical outlets are safe and compliant;</li>
            <li>The installation area is suitable and accessible.</li>
          </ul>
          <p>4.3 We are not responsible for:</p>
          <ul>
            <li>Pre-existing plumbing defects;</li>
            <li>Structural issues;</li>
            <li>Electrical faults;</li>
            <li>Inadequate water pressure;</li>
            <li>Blocked drains;</li>
            <li>Non-compliant fittings.</li>
          </ul>

          <h2>5. Limitation of Liability (Important)</h2>
          <p>5.1 Nothing in this Agreement excludes, restricts, or modifies rights under the Australian Consumer Law ("ACL").</p>
          <p>5.2 Subject to clause 5.1, and to the maximum extent permitted by law, we are not liable for any:</p>
          <ul>
            <li>Flooding or water damage</li>
            <li>Mould or moisture damage</li>
            <li>Electrical damage</li>
            <li>Property damage</li>
            <li>Landlord claims</li>
            <li>Loss of rent</li>
            <li>Consequential or indirect loss</li>
          </ul>
          <p>arising from:</p>
          <ul>
            <li>Existing plumbing or drainage faults</li>
            <li>Improper or deteriorated fittings</li>
            <li>Movement of equipment after installation</li>
            <li>Customer misuse</li>
            <li>Failure to follow instructions</li>
            <li>Third-party interference</li>
          </ul>
          <p>5.3 Where liability cannot be excluded, our liability is limited (at our option) to:</p>
          <ul>
            <li>Repair or replacement of the equipment; or</li>
            <li>Refund of rental fees paid for the relevant period.</li>
          </ul>
          <p>5.4 You acknowledge that washing machines operate using pressurised water and improper plumbing may result in leakage or overflow.</p>

          <h2>6. Customer Obligations</h2>
          <p>You must:</p>
          <ul>
            <li>Use equipment for normal domestic purposes only</li>
            <li>Not overload machines</li>
            <li>Use appropriate detergent</li>
            <li>Not tamper with internal components</li>
            <li>Not relocate equipment without written approval</li>
            <li>Notify us immediately of faults</li>
            <li>Maintain clear drainage</li>
          </ul>
          <p>Failure to comply may result in repair charges.</p>

          <h2>7. Repairs &amp; Maintenance</h2>
          <p>7.1 We will repair or replace equipment that becomes faulty due to fair wear and tear.</p>
          <p>7.2 We are not responsible for faults caused by misuse, negligence, foreign objects, pests, corrosion, or unauthorised repairs.</p>
          <p>7.3 If damage is caused by misuse, you must pay reasonable repair or replacement costs.</p>

          <h2>8. Risk &amp; Insurance</h2>
          <p>8.1 Risk in the equipment passes to you upon delivery.</p>
          <p>8.2 You are responsible for theft, loss, or damage (other than fair wear and tear).</p>
          <p>8.3 You should maintain appropriate contents insurance.</p>

          <h2>9. Access &amp; Recovery</h2>
          <p>9.1 You must provide reasonable access for maintenance, inspection, or collection.</p>
          <p>9.2 If you fail to return equipment, we may enter the premises as permitted by law to recover our property.</p>
          <p>9.3 You remain liable for outstanding amounts and recovery costs.</p>

          <h2>10. Indemnity</h2>
          <p>You indemnify us against claims from landlords, property managers, insurers, or third parties arising from:</p>
          <ul>
            <li>Breach of this Agreement</li>
            <li>Misuse of equipment</li>
            <li>Plumbing or drainage defects at your premises</li>
            <li>Your negligence</li>
          </ul>
          <p>This indemnity does not apply to the extent caused by our negligence or breach of law.</p>

          <h2>11. Privacy</h2>
          <p>We collect personal information to provide rental services and process payments. We handle personal data in accordance with the Privacy Act 1988 (Cth). By renting from us, you consent to this collection and use.</p>

          <h2>12. Electronic Transactions</h2>
          <p>You consent to entering this Agreement electronically under the Electronic Transactions (Queensland) Act 2001.</p>

          <h2>13. Force Majeure</h2>
          <p>We are not liable for delay or failure caused by events beyond our reasonable control.</p>

          <h2>14. Governing Law</h2>
          <p>This Agreement is governed by the laws of Queensland, Australia. Disputes are subject to Queensland courts.</p>
        </div>
      </div>
    </div>
  );
}
