import React, { Suspense } from 'react';
import { SearchResults } from './SearchResults';

export default function SearchPage() {
  return (
    <main className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Результаты поиска</h1>
      
      <Suspense fallback={
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      }>
        <SearchResults />
      </Suspense>
    </main>
  );
} 