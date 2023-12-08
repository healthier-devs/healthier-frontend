import { useState } from "react";

export default function useTermsModal() {
  const [termOfUseOpen, setTermOfUseOpen] = useState<boolean>(false);
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState<boolean>(false);

  const openTermOfUse = () => {
    setTermOfUseOpen(true);
  };
  const closeTermOfUse = () => {
    setTermOfUseOpen(false);
  };

  const openPrivacyPolicy = () => {
    setPrivacyPolicyOpen(true);
  };

  const closePrivacyPolicy = () => {
    setPrivacyPolicyOpen(false);
  };

  return {
    termOfUseOpen,
    openTermOfUse,
    closeTermOfUse,
    privacyPolicyOpen,
    openPrivacyPolicy,
    closePrivacyPolicy,
  };
}
