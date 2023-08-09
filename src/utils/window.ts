export const handleResizeWindow = () => {
  const screenRatio = 0.7;
  const vh = window.innerHeight * 0.01;
  const vw = Math.min(window.innerWidth * 0.01, vh * screenRatio);

  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
};
