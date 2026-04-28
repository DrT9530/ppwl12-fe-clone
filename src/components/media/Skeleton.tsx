interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
}

export default function Skeleton({ className = '', variant = 'rectangular' }: SkeletonProps) {
  const baseClasses = 'skeleton-loading';
  const variantClasses = {
    rectangular: 'skeleton-rectangular',
    circular: 'skeleton-circular',
    text: 'skeleton-text',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
  );
}