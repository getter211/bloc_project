import React from 'react';
import Navbar from "@/components/Navbar";
import BlogCard from '@/components/BlogCard';
import Example from '@/components/example';


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* <h1 className="text-3xl font-bold mb-6">Hola user</h1> */}
        <Example />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BlogCard/>
          {/* Puedes agregar más instancias de BlogCard según necesites */}
        </div>
      </div>
    </main>
  );
}
