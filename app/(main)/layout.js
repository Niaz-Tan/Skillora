import Footer from "@/components/Footer";
import Header from "@/components/header/Header";

const navLinks = [
  {
    title: "Features",
    href: "/#features",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Documentation",
    href: "/docs",
  },
];

export default async function RootLayout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
