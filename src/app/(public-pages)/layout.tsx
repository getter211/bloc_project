import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {children}
      </div>
      <footer className="w-full bg-gray-200 py-6 mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Blog Yucateco😸. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
