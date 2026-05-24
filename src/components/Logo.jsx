// Real Airport Energy brand mark — square logo with rounded corners.
export default function Logo({ className = 'h-9 w-9' }) {
  return (
    <img
      src="/logo.jpg"
      alt="Airport Energy logo"
      className={`${className} rounded-lg object-cover shadow-sm ring-1 ring-white/10`}
      width="64"
      height="64"
    />
  );
}
