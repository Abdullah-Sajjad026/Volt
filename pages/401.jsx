import { sharedRoutes } from "modules/shared";
import Error from "modules/shared/components/Error";
import ArrowReturnIcon from "modules/shared/icons/ArrowReturnIcon";
import SignInIcon from "modules/shared/icons/SignInIcon";
import { useRouter } from "next/router";

export default function Error401Page() {
  const router = useRouter();

  return (
    <Error>
      <Error.Header
        title="Unauthenticated Access"
        subtitle="Please sign in to view this page"
      >
        {/* <img
          alt=""
          src="/images/logo-fading-blue.png"
          className="w-full sm:w-48 h-auto"
        /> */}
      </Error.Header>
      <Error.Footer>
        <Error.Button Icon={ArrowReturnIcon} onClick={() => router.back()}>
          Previous Page
        </Error.Button>
        <Error.Button
          as="a"
          Icon={SignInIcon}
          href={sharedRoutes.auth.signIn.path}
        >
          Sign In
        </Error.Button>
      </Error.Footer>
    </Error>
  );
}
