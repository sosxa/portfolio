import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jose Sosa",
  description: "Portfolio for Jose Sosa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto">
          <div className="leading-relaxed text-slate-200 antialiased selection:bg-teal-300 selection:text-teal-900">
            <div className="z-[-10] bg-slate-950 fixed inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#034a4391,transparent)]"></div>
            {children}
          </div>
        </div>


      </body>
    </html>
  );
}
