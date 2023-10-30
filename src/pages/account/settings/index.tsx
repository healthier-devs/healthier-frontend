import Divider from "src/components/divider";
import * as Styled from "./index.style";
import Logout from "./logout";
import Notifications from "./notifications";
import SignOut from "./signout";
import Terms from "./terms";
import VersionInformation from "./version-info";

function Settings() {
  return (
    <div>
      <Notifications />
      <Divider />
      <Terms />
      <Divider />

      <Styled.Box padding="2.4rem">
        <Logout />
        <SignOut />
        <VersionInformation />
      </Styled.Box>
    </div>
  );
}

export default Settings;
