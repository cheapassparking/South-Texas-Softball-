type StatPillProps = {
  value: string;
  label: string;
};

export default function StatPill({ value, label }: StatPillProps) {
  return (
    <div className="stat-pill">
      <span className="sv">{value}</span>
      <span className="sl">{label}</span>
    </div>
  );
}
