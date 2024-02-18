import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie policy | Coingarage",
}

export default function Page() {
  return (
    <main>
      <section className="container mx-auto mt-6 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:mt-14 xl:justify-between">
        <div className="w-full max-w-[1200px] p-4">
          <h1 className="font-heading text-4xl">Cookie Policy</h1>
          <h3 className="mb-4 mt-8 font-heading text-2xl">
            1. What do we mean when we use the term <i>cookie</i>, <i>web beacon</i> or <i>similar technology</i>?
          </h3>
          <p>
            Cookies is a term used to describe is a small text file (typically made of letters and numbers) that is
            downloaded and stored on your browser or your device by websites that you visit. They are sometimes
            considered as forming part of the “memory” of your use of websites and related services as they allow
            service providers to remember you and respond appropriately.
          </p>
          <h3 className="mb-4 mt-8 font-heading text-2xl">Cookies are typically split into 2 main types, namely:</h3>
          <p>
            <b>Session cookies.</b> Session cookies are stored in your device&apos;s memory only for the length of time
            of your browsing session. For example, sessions cookies allow you to move around our website and your
            account features without having to repeatedly log in. They are not accessible after your browser session may
            have been inactive for a period of time and are deleted from your device when your browser is closed down.
          </p>
          <p>
            <b>Persistent cookies.</b> Persistent cookies are stored in your device&apos;s memory and are not deleted
            when your browser is closed. Persistent cookies can helpfully remember you and your preferences each time
            you access our Services. We use both of these types of cookies.
          </p>
          <h3 className="mb-4 mt-8 font-heading text-2xl">Cookies can also be further categorised as follows:</h3>
          <p>
            <b>Strictly necessary cookies.</b> These are cookies that are required for the necessary operation of our
            services. They include, for example, cookies that enable you to log into secure areas of our website and/or
            app.
          </p>
          <p>
            <b>Performance cookies.</b> They allow us to recognise and count the number of visitors and to see how
            visitors move around our website when they are using it. This helps us to improve the way our website works,
            for example, by ensuring that users are finding what they are looking for easily.
          </p>
          <p>
            <b>Functionality cookies.</b> These are used to recognise you when you return to our website. This enables
            us to personalise our content for you, greet you by name and remember your preferences (for example, your
            choice of language or region).
          </p>
          <p>
            <b>Targeting cookies.</b> These cookies record your visit to our website, the pages you have visited and the
            links you have followed. We will use this information to make our website and the advertising displayed on
            it more relevant to your interests. We may also share this information with third parties for this purpose.
          </p>
          <h3 className="mb-4 mt-8 font-heading text-2xl">Web beacons</h3>
          <p>
            The term ‘web beacon’ is used to describe an object embedded in a webpage or email. This object is typically
            invisible to you, but it permits us to confirm whether you have viewed the web page and/or email (as the
            case may be). There are other names for ‘web beacons’ which you may come across – these include web bug,
            tracking bug, clear gif and pixel tag.
          </p>
          <h3 className="mb-4 mt-8 font-heading text-2xl">2. Managing Cookies</h3>
          <p>
            You can manage your cookies (including the enabling or disabling of cookies) by using your browser. For
            example, you block cookies by activating the setting on your browser that allows you to refuse the setting
            of all or some cookies. However, if you use your browser settings to block all cookies (including cookies
            that are strictly necessary) you may not be able to access all or parts of our Services. <br />
            Each browser is different and as such we suggest that you check the <i>Help</i> menu on your particular
            browser (or your mobile phone&apos;s handset manual) to learn how to change your cookie preference. You may
            also find more information on how to manage your cookies from third party websites.
          </p>
          <p className="mt-6 font-bold">
            Here are some links to popular browser cookie information pages which you might find helpful to assist in
            your cookie management Internet:
          </p>
          <ul>
            <li>Explorer</li>
            <li>Safari</li>
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
          </ul>
          <h3 className="mb-4 mt-8 font-heading text-2xl">3. General</h3>
          <p>
            We hope the above has clearly explained how we use cookies and similar technologies as well as how you many
            manage such matters. While we have provided details of third party websites and services which we thought
            you may find useful, please note that we are not responsible for the content, functionality or services
            provided by such sites. If you have any further questions or comments about our use of cookies, please
            contact Support.
          </p>
        </div>
      </section>
    </main>
  )
}
