import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In - Synthi AI',
  description: 'Sign in to your Synthi AI account.',
  robots: 'noindex, nofollow',
};

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
