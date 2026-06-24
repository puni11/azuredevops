import { Geist, Geist_Mono, Arimo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
    description: "Master AZ-104 and AZ-400 in just 1 month. Build real-world cloud and DevOps skills.",
    type: "website",
    // url: "https://yourwebsite.com/azure-devops-course", // Add your actual URL here
    // siteName: "Your Brand Name",
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
