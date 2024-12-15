import React, { useState } from 'react';
import TextForm from './TextForm';
import ResultDisplay from './ResultDisplay';
import ErrorMessage from './ErrorMessage';
import { humanizeText } from '../services/api';
import { StealthGPTResponse } from '../types';

export default function HumanizerForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<StealthGPTResponse | null>(null);

  const handleSubmit = async (text: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await humanizeText(text);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <TextForm onSubmit={handleSubmit} loading={loading} />
      {error && <ErrorMessage message={error} />}
      {result && <ResultDisplay data={result} />}
    </div>
  );
}