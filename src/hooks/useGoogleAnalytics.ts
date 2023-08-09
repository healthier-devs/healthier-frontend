import { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

function useGoogleAnalytics() {
  const location = useLocation();
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (!window.location.pathname.includes("localhost") && process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID) {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: location.pathname });
      ReactGA.send("pageview");
    }
  }, [initialized, location]);
}

export default useGoogleAnalytics;
