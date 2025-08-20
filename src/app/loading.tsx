import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <LoadingSpinner size="large" text="Loading amazing content..." />
    </div>
  );
}
