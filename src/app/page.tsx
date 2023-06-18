"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
// import bgJson from "../../bhagwad-gita-quotes.json";
import bgJson from "../../bhagwad-gita-explanation-quotes.json";

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

interface IQuote {
  chapter_number: number | string;
  meaning: string;
  text: string;
  transliteration: string;
  verse_number: string | number;
  word_meanings: string;
  siva?: any;
}

export default function Home() {
  const [quote, setQuote] = useState<IQuote>();

  useEffect(() => {
    // axios.get("http://bhagavadgitaapi.in/slok").then((res)=>{
    //   console.log(res)
    // })
    // axios.get("https://www.holy-bhagavad-gita.org/chapter/4/verse/12#").then((res)=>{
    //   console.log(res)
    // })
    // console.log(bgJson.length);
    // let totalCount = [];
    // bgJson.map((val)=>totalCount.push({cn: val.chapter_number, vn: val.verse_number}))
    // // console.log(rndInt)
    // console.log(totalCount, bgJson[rndInt], rndInt);
    // let randomQuote = bgJson
    const rndInt = randomIntFromInterval(1, bgJson.length);
    setQuote(bgJson[rndInt]);
    console.log(quote);
    // a();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(quote);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 w-full">
      <div className="card w-full">
        <div className="w-full p-4 flex flex-col gap-4 cardDiv">
          <div className="flex justify-between w-full">
            {/* {JSON.stringify(quote)} */}
            <span> Chapter: {quote?.chapter_number}</span>
            <span> Verse: {quote?.verse_number}</span>
          </div>
          <div className="flex justify-center whitespace-break-spaces">
            {quote?.text}
          </div>
          <div className="flex text-left whitespace-break-spaces mb-2">
            Meaning
            <br />
            {quote?.meaning}
          </div>
          <div className="flex text-left whitespace-break-spaces mb-6">
            <a
            target="blank"
            referrerPolicy="no-referrer"
            className=" text-inherit text-sm underline"
              href={`https://www.holy-bhagavad-gita.org/chapter/${quote?.chapter_number}/verse/${quote?.verse_number}`}
            >
              For more explanation click Me
            </a>
          </div>
          <div className="flex text-left whitespace-break-spaces">
            Sanskrit: <br />
            {quote?.transliteration}
          </div>
          <div className="flex text-left whitespace-break-spaces">
            Word-Meaning:
            <br />
            {quote?.word_meanings}
          </div>
        </div>
      </div>
    </main>
  );
}
