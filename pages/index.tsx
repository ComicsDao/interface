import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/future/image"
import notion from "public/img/icon/notion.png"
import discord from "public/img/icon/discord.png"
import twitter from "public/img/icon/twitter.png"
import juice from "public/img/icon/juice.png"
import arrow from "public/img/icon/arrow.svg"
import style from "styles/shared/navbar.module.scss"
import Link from "next/link"
import comicsTitleImg from "public/img/comicsdaogreen.png"
import mask2 from "public/img/mask2.png"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Comics DAO</title>
        <meta
          name="description"
          content="Comics DAO | Creating the ultimate community comic book collection. Don’t just own a piece of history, enjoy it!"
        />
        <link rel="canonical" hrefLang={"en"} href={`https://comicsdao.wtf`} />
        <link href={`https://comicsdao.wtf`} rel="x-default" />
        <meta property="og:title" content="Comics DAO" />
        <meta
          property="og:description"
          content="Comics DAO | Creating the ultimate community comic book collection. Don’t just own a piece of history, enjoy it!"
        />
        <meta
          property="og:image"
          content="https://comicsdao.wtf/img/comicsdaogreen.png"
        />
        <meta property="og:url" content={"https://comicsdao.wtf"} />
        <meta property="og:locale" content={"en"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Comics DAO" />
        <meta
          name="twitter:description"
          content="Comics DAO | Creating the ultimate community comic book collection. Don’t just own a piece of history, enjoy it!"
        />
        <meta
          name="twitter:image"
          content="https://comicsdao.wtf/img/comicsdaogreen.png"
        />
        <meta name="twitter:creator" content="@ComicsDAO" />
      </Head>
      <main>
        <div className="py-[70px] px-[40px] flex justify-between flex-col h-screen pb-[80px]">
          <h1 className="absolute opacity-0 font-londrina text-8xl md:text-9xl text-black-100">
            Comics DAO
          </h1>
          <Image
            src={comicsTitleImg}
            alt="Comics DAO"
            width={240}
            className="mx-auto lg:mx-0"
          />
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 ">
            <a
              href="https://discord.gg/6t8XStmUK5"
              target={"_blank"}
              rel="noreferrer"
              className={`font-ubuntu font-normal text-lg  flex items-center relative p-2 w-full ${style.link_after_home}`}
            >
              <div className="mr-3">
                <Image
                  src={discord}
                  alt="discord icon"
                  height={50}
                  width={50}
                />
              </div>
              <p>Discord</p>
            </a>
            <a
              href="https://comicsdao.notion.site/Comics-DAO-34f5ccd8bc174683984de6c1b84c6241"
              className={`font-ubuntu font-normal text-lg  flex items-center relative p-2 w-full ${style.link_after_home}`}
            >
              <div className="mr-3">
                <Image src={notion} alt="notion icon" height={50} width={50} />
              </div>
              <p>Notion</p>
            </a>
            <a
              href="https://twitter.com/ComicsDAO"
              className={`font-ubuntu font-normal text-lg flex items-center relative p-2 w-full ${style.link_after_home}`}
            >
              <div className="mr-3">
                <Image src={twitter} alt="notion icon" height={50} width={50} />
              </div>
              <p>Twitter</p>
            </a>
            <a
              href="https://juicebox.money/#/v2/p/31"
              className={`font-ubuntu font-normal text-lg flex items-center relative p-2 w-full ${style.link_after_home}`}
            >
              <div className="mr-3">
                <Image src={juice} alt="notion icon" height={50} width={50} />
              </div>
              <p>Treasury</p>
            </a>
          </div>
          <Link href={"/nouns"}>
            <a className="flex items-center animate-bounce lg:justify-end">
              <Image
                src={mask2}
                alt="Comics DAO superhero mask"
                width={80}
                className="mr-4"
              />
              <h2 className="relative text-4xl font-medium font-londrina lg:text-6xl text-black-100">
                Nouns Comics
              </h2>
              <span className="ml-3 bg-green border-solid border-2 border-black-100 h-[40px] w-[40px] flex items-center justify-center rounded-full p-3 cursor-pointer transition-all">
                <Image
                  src={arrow}
                  alt="arrow right"
                  height={20}
                  width={20}
                  className="-rotate-90"
                />
              </span>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
