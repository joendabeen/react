interface ResetCountProps {
  onReset: () => void;
}

export default function ResetCount({ onReset }: ResetCountProps) {
  return (
    <button className="rs" onClick={onReset}>
      reset
    </button>
  );
}
