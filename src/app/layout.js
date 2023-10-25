import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daily Edventure",
  description: "The best blog app-Where education meets adventure. At Daily Edventure, we believe learning is a thrilling journey. Delve into enlightening articles, riveting tales, and thought-provoking insights that make every day an educational escapade. Your quest for knowledge just got more exciting.Discover the Edventure Awaiting You",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
        <meta name="google-site-verification" content="KMjRtZ0OoyygeQRMdAu9XfHC3rQYyp6pVaeu54xIE4E" />
    </Head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Analytics />
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
