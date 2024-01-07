import Script from 'next/script'

export const Hotjar = () => {
  const HOTJAR_ID = process.env.HOTJAR_ID
  const HOTJAR_VERSION = process.env.HOTJAR_VERSION
  return (
    <Script
      id="hotjar-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${HOTJAR_ID},hjsv:${HOTJAR_VERSION}};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `
      }}
    />
  )
}
