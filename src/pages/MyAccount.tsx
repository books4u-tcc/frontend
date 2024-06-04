import User from "../components/user/User";
import { PageScaffold } from "./PageScaffold";
import { ContentBox } from "../components/content-box";

export function MyAccount() {
  return (
    <PageScaffold>
      <ContentBox>
        <User />
      </ContentBox>
    </PageScaffold>
  );
}
