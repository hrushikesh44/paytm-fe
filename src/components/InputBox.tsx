interface InputBoxProps {
  label: string;
  placeholder: string;
  reference?: any;
}

export function InputBox({ label, placeholder, reference }: InputBoxProps) {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200"
        ref={reference}
      />
    </div>
  );
}
