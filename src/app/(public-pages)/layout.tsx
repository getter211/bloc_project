import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Navbar />
        {children}
        <footer className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className="font-medium">
                <img
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className="h-4 ml-2"
                />
              </span>
            </a>
          </div>
        </footer>
    
    </>
  );
}