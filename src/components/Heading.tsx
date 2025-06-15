interface HeadingProps {
  label: string;
}

export function Heading({ label }: HeadingProps) {
  return <div className="text-4xl pt-6 font-bold">{label}</div>;
}
