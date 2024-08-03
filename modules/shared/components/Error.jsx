import { RootLayout } from "../layouts";
import { MainContainer } from "./main-container";

function ErrorComponent({ children }) {
  return (
    <RootLayout>
      <MainContainer className="min-h-screen flex justify-center">
        <section className="w-full flex flex-col gap-10 justify-center items-center font-sans">
          {children}
        </section>
      </MainContainer>
    </RootLayout>
  );
}

function ErrorHeader({ children, title, subtitle }) {
  return (
    <header className="flex flex-col gap-4 justify-center items-center">
      {children}
      <h1 className="text-center text-3xl sm:text-4xl text-gray-600 font-light">
        {title}
      </h1>
      {subtitle && (
        <h2 className="text-center text-base text-gray-600 font-light">
          {subtitle}
        </h2>
      )}
    </header>
  );
}

function ErrorFooter({ title, children }) {
  return (
    <footer className="flex flex-col justify-center items-center">
      <p className="text-sm text-gray-600">{title}</p>
      <div className="flex gap-4 justify-center">{children}</div>
    </footer>
  );
}

/**
 * @typedef {JSX.IntrinsicElements['a'] | JSX.IntrinsicElements['button']} ErrorButtonProps
 * @property {keyof JSX.IntrinsicElements} as
 */

/**
 *
 * @param {ErrorButtonProps} props
 */
function ErrorButton({ as, Icon, children, ...props }) {
  const Component = as || "button";

  return (
    <Component
      {...props}
      className="flex gap-1 items-center text-blue-500 no-underline hover:underline focus:underline focus:text-blue-600"
    >
      <Icon className="w-5 h-5" />
      {children}
    </Component>
  );
}

const Error = Object.assign(ErrorComponent, {
  Header: ErrorHeader,
  Footer: ErrorFooter,
  Button: ErrorButton,
});

export default Error;
