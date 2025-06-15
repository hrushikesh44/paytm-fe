interface SubheadingProps {
  label: string;
}

export function Subheading({ label }: SubheadingProps) {
  return <div className="text-md text-neutral-500 pt-1 px-4 pb-4">{label}</div>;
}
