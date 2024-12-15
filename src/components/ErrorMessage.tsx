import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
      <p className="text-red-700">{message}</p>
      <p className="text-sm text-red-600 mt-1">
        Note: You may need to visit{' '}
        <a 
          href="https://cors-anywhere.herokuapp.com/corsdemo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline"
        >
          CORS Anywhere Demo
        </a>
        {' '}to temporarily enable the CORS proxy.
      </p>
    </div>
  );
}