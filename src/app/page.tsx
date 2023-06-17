"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import bgJson from "../../bhagwad-gita-quotes.json";

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Home() {
  const [quote, setQuote] = useState<{
    chapter_number: number;
    meaning: string;
    text: string;
    transliteration: string;
    verse_number: string;
    word_meanings: string;
  }>();

  useEffect(() => {
    // axios.get("http://bhagavadgitaapi.in/slok").then((res)=>{
    //   console.log(res)
    // })
    // console.log(bgJson);
    // let totalCount = [];
    // bgJson.map((val)=>totalCount.push({cn: val.chapter_number, vn: val.verse_number}))
    // // console.log(rndInt)
    // console.log(totalCount, bgJson[rndInt], rndInt);
    // let randomQuote = bgJson
    const rndInt = randomIntFromInterval(1, bgJson.length);
    setQuote(bgJson[rndInt]);
    console.log(quote);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(quote);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 w-full">
      <div className="card p-4 w-full flex-col  gap-4">
        <div className="flex justify-between w-full">
          {/* {JSON.stringify(quote)} */}
          <span> Chapter: {quote?.chapter_number}</span>
          <span> Verse: {quote?.verse_number}</span>
        </div>
        <div className="flex justify-center whitespace-break-spaces">
          {quote?.text}
        </div>
        <div className="flex text-left whitespace-break-spaces mb-4">
          Meaning
          <br />
          {quote?.meaning}
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
    </main>
  );
}
