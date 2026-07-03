import { Geist, Geist_Mono, Arimo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const lexend = Arimo({
  variable: "--font-lexend",
  subsets: ["latin"],
});
export const metadata = {
  title: "Azure Administrator & DevOps Engineer Fast Track | Master AZ-104 & AZ-400",
  description: "Join our intensive 1-month fast-track training program to master Microsoft Azure (AZ-104) and DevOps Engineering (AZ-400). Learn cloud infrastructure, CI/CD, Terraform, Docker, and AKS through hands-on projects.",
  keywords: [
    "Azure Administrator", 
    "AZ-104", 
    "DevOps Engineer", 
    "AZ-400", 
    "Microsoft Azure Training", 
    "Cloud Computing Course", 
    "CI/CD Pipeline", 
    "Terraform", 
    "Docker", 
    "Kubernetes"
  ],
  openGraph: {
    title: "Azure Administrator & DevOps Engineer Fast Track",
    description: "Master AZ-104 and AZ-400 in just 60 hours. Build real-world cloud and DevOps skills.",
    type: "website",
    // url: "https://yourwebsite.com/azure-devops-course", // Add your actual URL here
    // siteName: "Your Brand Name",
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} h-full antialiased scroll-smooth dark:bg-white`}
    >
       <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KVT3D2V');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8REWMK67XF"
          strategy="afterInteractive"
        />

        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8REWMK67XF');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KVT3D2V"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
