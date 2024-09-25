import Script from "next/script"

export const SmartlookScript = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") return null

  return (
    <>
      <Script
        id="smartlook-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.smartlook||(function(d) {
            var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
            var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
            c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
            smartlook('init', 'd03ae68f7cc1db4951860212426e0d064ecbb31c', { region: 'eu' });
          `,
        }}
      />
    </>
  )
}
