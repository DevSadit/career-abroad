import PaymentClient from "./PaymentClient";

export const metadata = {
  title: "Session Payment | Career Abroad Mentors",
  description: "Complete your 1-on-1 mentoring session payment via bKash, bank transfer, PayPal, or Wise.",
  robots: { index: false },
};

export default function SessionPaymentPage() {
  return <PaymentClient />;
}
