import { sharedRoutes } from "modules/shared";
import Error from "modules/shared/components/Error";
import ArrowReturnIcon from "modules/shared/icons/ArrowReturnIcon";
import HomeIcon from "modules/shared/icons/HomeIcon";
import { getStandardErrorMessage } from "modules/shared/shared.utils";
import { useRouter } from "next/router";

export default function Error400Page() {
  const router = useRouter();

  return (
    <Error>
      <Error.Header
        title="Something went wrong"
        subtitle={getStandardErrorMessage("on our end")}
      >
        {/* <img
          alt=""
          src="/images/logo-fading-blue.png"
          className="w-full sm:w-48 h-auto"
        /> */}
      </Error.Header>
      <Error.Footer title="Let's find your way back">
        <Error.Button Icon={ArrowReturnIcon} onClick={() => router.back()}>
          Previous Page
        </Error.Button>
        <Error.Button as="a" Icon={HomeIcon} href={sharedRoutes.dashboard.path}>
          Home
        </Error.Button>
      </Error.Footer>
    </Error>
  );
}
