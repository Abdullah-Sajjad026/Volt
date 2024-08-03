import { sharedRoutes } from "modules/shared";
import Error from "modules/shared/components/Error";
import ArrowReturnIcon from "modules/shared/icons/ArrowReturnIcon";
import HomeIcon from "modules/shared/icons/HomeIcon";
import { useRouter } from "next/router";

export default function Error404Page() {
  const router = useRouter();

  return (
    <Error>
      <Error.Header title="404 - Page not found">
        {/* <img
          alt="Oops!"
          src="/images/oops.png"
          className="w-full sm:w-72 h-auto"
        /> */}
      </Error.Header>
      <Error.Footer title="Let's find your way back">
        <Error.Button Icon={ArrowReturnIcon} onClick={() => router.back()}>
          Previous Page
        </Error.Button>
        <Error.Button as="a" Icon={HomeIcon} href={sharedRoutes.dashboard.path}>
          Dashboard
        </Error.Button>
      </Error.Footer>
    </Error>
  );
}
