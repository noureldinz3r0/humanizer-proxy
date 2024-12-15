import React from 'react';
import { ResultProps } from '../types';

export default function ResultDisplay({ data }: ResultProps) {
  return (
    <div className="mt-6 space-y-4">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Humanized Result</h3>
        <p className="text-gray-700 whitespace-pre-wrap">{data.result}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h4 className="text-sm font-medium text-gray-600">Detection Likelihood</h4>
          <p className="text-2xl font-bold text-blue-600">{data.howLikelyToBeDetected}%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h4 className="text-sm font-medium text-gray-600">Remaining Credits</h4>
          <p className="text-2xl font-bold text-green-600">{data.remainingCredits}</p>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
        <p>System Tokens: {data.systemTokensSpent}</p>
        <p>Content Tokens: {data.tokensSpent}</p>
        <p>Total Tokens: {data.totalTokensSpent}</p>
      </div>
    </div>
  );
}