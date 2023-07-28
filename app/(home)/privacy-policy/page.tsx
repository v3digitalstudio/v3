import Link from "next/link"

export default function PrivacyPage() {
  return (
    <section className="container py-12 md:py-40">
      <div className="mx-auto max-w-4xl px-8 text-start">
        <h2 className="font-heading text-4xl leading-[1.1] md:text-6xl">
          Privacy Policy
        </h2>
        {/* <p className="my-10 font-heading text-2xl italic underline decoration-blue-500 decoration-double dark:text-white">
            Digital for Thought
          </p> */}

        <p className="my-10 text-xl md:leading-relaxed">
          Welcome to{" "}
          <Link href="/" className="underline">
            v3digital.studio
          </Link>{" "}
          (the &quot;Site&quot;), hosted by V3 Digital Studio (&quot;V3&quot;,
          &quot;we&quot;, &quot;us&quot;, and/or &quot;our&quot;). V3 Digital
          Studio provides a platform for creating exceptional web experiences
          (the &quot;Services&quot;)​​. We value your privacy and are dedicated
          to protecting your personal data. This Privacy Policy covers how we
          collect, handle, and disclose personal data on our Platform.
        </p>
        <p className="my-6 text-xl md:leading-relaxed">
          If you have any questions, comments, or concerns regarding this
          Privacy Policy, our data practices, or would like to exercise your
          rights, do not hesitate to contact us.
        </p>
        <h2 className="mt-10 font-heading text-2xl">Who does this apply to?</h2>
        <p className="my-2 text-xl md:leading-relaxed">
          This Privacy Policy applies to customers and site visitors. Each
          customer is responsible for posting its own terms, conditions, and
          privacy policies, and ensuring compliance with all applicable laws and
          regulations.
        </p>
        <h2 className="mt-10 font-heading text-2xl">
          Collection of Information
        </h2>
        <p className="my-2 text-xl md:leading-relaxed">
          We collect information directly from you when you provide it to us
          explicitly on our Site. We do not use third-party cookies on our Site.
        </p>
        <h2 className="mt-10 font-heading text-2xl">How to contact us?</h2>
        <p className="my-2 text-xl tracking-tight">
          For privacy-related questions, please contact us at{" "}
          <span className="underline">privacy@v3digital.studio</span>.
        </p>
      </div>
    </section>
  )
}
