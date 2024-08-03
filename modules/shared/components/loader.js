import Spinner from "./spinner";

export default function Loader({ className = "", height = "full" }) {
  return (
    <section
      className={`${
        height === "full" ? "min-h-screen" : "h-auto"
      } grid place-items-center ${className} `}
    >
      <span className="sr-only">Loading...</span>
      <Spinner size={48} color="var(--color-blue-500)" />
    </section>
  );
}
