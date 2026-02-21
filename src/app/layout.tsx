import "./globals.css";
import { roboto, lora, poppins, BricolageGrotesque, inter } from "./fonts";
import { Footer } from "@/components/layout";
import GoToTop from "@/components/common/GoToTop";

export const metadata = {
  metadataBase: new URL("https://auditiqueconsulting.com"),

  title: {
    default: "Auditique Consulting | Chartered Accountant & Financial Advisory Firm",
    template: "%s | Auditique Consulting",
  },

  description:
    "Auditique Consulting is a trusted Chartered Accountant firm providing expert tax consultancy, accounting, compliance, and financial advisory services for businesses, professionals, and individuals globally.",

  keywords: [
    "Auditique Consulting",
    "Chartered Accountant firm",
    "Tax consultancy services",
    "Financial advisory services",
    "GST filing services",
    "Income tax filing",
    "Business compliance services",
    "Accounting and bookkeeping",
    "Startup financial advisory",
    "CA firm in Chennai",
    "Global tax consulting",
  ],

  authors: [
    {
      name: "Auditique Consulting",
      url: "https://auditiqueconsulting.com",
    },
  ],

  creator: "Auditique Consulting",
  publisher: "Auditique Consulting",

  openGraph: {
    title: "Auditique Consulting | Trusted Chartered Accountant & Financial Advisory Firm",

    description:
      "Professional Chartered Accountant services including tax filing, GST compliance, accounting, and financial advisory tailored for businesses and individuals globally.",

    url: "https://auditiqueconsulting.com",

    siteName: "Auditique Consulting",

    images: [
      {
        url: "https://auditiqueconsulting.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Auditique Consulting - Chartered Accountant Firm",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Auditique Consulting | Chartered Accountant & Financial Advisory Firm",

    description:
      "Expert tax consultancy, GST filing, accounting, and financial advisory services from trusted Chartered Accountants.",

    images: ["https://auditiqueconsulting.com/og-image.png"],
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  category: "Finance",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>

      <body
        className={`${roboto.variable} ${inter.variable} ${lora.variable} ${poppins.variable} ${BricolageGrotesque.className} antialiased overflow-hidden`}
      >
        <GoToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
