// Global CRT overlay: scanlines + vignette + noise (pointer-events: none)
export const CrtOverlay = () => (
  <div className="crt-overlay" aria-hidden="true">
    <div className="crt-scanlines" />
    <div className="crt-vignette" />
    <div className="crt-noise" />
  </div>
);
