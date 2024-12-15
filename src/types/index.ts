export interface StealthGPTResponse {
  result: string;
  howLikelyToBeDetected: number;
  systemTokensSpent: number;
  tokensSpent: number;
  totalTokensSpent: number;
  remainingCredits: number;
}

export interface FormProps {
  onSubmit: (text: string) => Promise<void>;
  loading: boolean;
}

export interface ResultProps {
  data: StealthGPTResponse;
}