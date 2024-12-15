import React from 'react';
import { Wand2 } from 'lucide-react';
import HumanizerForm from './components/HumanizerForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Wand2 className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">AI Text Humanizer</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <HumanizerForm />
      </main>

      <footer className="mt-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Powered by StealthGPT API
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;