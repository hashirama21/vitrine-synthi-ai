import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up - Synthi AI',
  description: 'Create your Synthi AI account.',
  robots: 'noindex, nofollow',
};

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
