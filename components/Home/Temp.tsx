type TempProps = {
  className?: string;
};

export default function Temp({ className }: TempProps) {
  return (
    <div className={`h-full ${className}`}>
      <h1>Temporary Column</h1>
      <div></div>
    </div>
  );
}