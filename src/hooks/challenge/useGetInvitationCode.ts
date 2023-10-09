import { useQuery } from "@tanstack/react-query";
import { invitationFetcher, TInvitationCodeResponse } from "src/api/invitation/fetcher";
import { queryKeys } from "src/api/queryKeys";

export const useGetInvitationCode = () => {
  const { data: invitationCode, isLoading } = useQuery<TInvitationCodeResponse>({
    queryKey: [queryKeys.CHALLENGE],
    queryFn: () => invitationFetcher.getInvitationCode(),
  });

  return {
    invitationCode,
    isLoading,
  };
};
