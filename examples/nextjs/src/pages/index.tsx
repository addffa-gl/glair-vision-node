import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>GLAIR Vision NextJS Sample</title>
        <meta name="description" content="GLAIR Vision NextJS Sample" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">src/pages/index.tsx</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
          <Link
            href="/passive-liveness"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              Passive Liveness <span>-&gt;</span>
            </h2>
            <p
              className={`${inter.className} m-auto lg:m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Sample demo to integrate passive liveness detection using GLAIR
              Web Components and GLAIR Vision NodeJS SDK.
            </p>
          </Link>

          <Link
            href="/passive-liveness-sessions"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              Passive Liveness Sessions<span>-&gt;</span>
            </h2>
            <p
              className={`${inter.className} m-auto lg:m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Sample demo to integrate passive liveness detection using Passive
              Liveness Sessions.
            </p>
          </Link>

          <Link
            href="/ktp"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              KTP OCR <span>-&gt;</span>
            </h2>
            <p
              className={`${inter.className} m-auto lg:m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Sample demo to integrate KTP OCR using GLAIR Web Components and
              GLAIR Vision NodeJS SDK.
            </p>
          </Link>

          <Link
            href="/ktp-sessions"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              KTP Sessions<span>-&gt;</span>
            </h2>
            <p
              className={`${inter.className} m-auto lg:m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Sample demo to integrate KTP OCR using KTP Sessions.
            </p>
          </Link>

          <Link
            href="/npwp"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              NPWP OCR <span>-&gt;</span>
            </h2>
            <p
              className={`${inter.className} m-auto lg:m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Sample demo to integrate NPWP OCR using GLAIR Web Components and
              GLAIR Vision NodeJS SDK.
            </p>
          </Link>

          <Link
            href="/npwp-sessions"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              NPWP Sessions<span>-&gt;</span>
            </h2>
            <p
              className={`${inter.className} m-auto lg:m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Sample demo to integrate NPWP OCR using NPWP Sessions.
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}
