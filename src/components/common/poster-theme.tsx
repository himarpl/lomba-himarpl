"use client";

export function PosterTheme() {
  return (
    <section className="flex">
      <div className="basis-1/3 bg-[#31180E]"></div>
      <div className="basis-2/3 space-y-8 bg-[#7B3018] px-10 py-20">
        <div>
          <h2 className="scroll-m-20 font-wildrodeo text-8xl font-semibold tracking-tight text-zinc-50 ">
            Tema
          </h2>
          <p className="text-pretty font-serif text-lg leading-6 text-zinc-100 ">
            {"Tema untuk lomba poster Dies Natalis RPL ke-5 ini adalah "}
            <u className="underline">“Indonesia Emas VS Indonesia Cemas.”</u>
          </p>
        </div>
        <div>
          <h3 className="scroll-m-20 font-wildrodeo text-6xl tracking-tight text-zinc-50">
            Subtema
          </h3>
          <p className="font-serif text-lg leading-6 text-zinc-100 ">
            Subtema untuk Lomba Poster ini adalah sebagai berikut:
          </p>
          <ol className="ml-4 list-inside list-disc">
            <li className="font-serif text-lg leading-6 text-zinc-100">
              {"Keunggulan dan Krisis Pendidikan Indonesia"}
            </li>
            <li className="font-serif text-lg leading-6 text-zinc-100">
              {"Industri Teknologi Informasi"}
            </li>
            <li className="font-serif text-lg leading-6 text-zinc-100">
              {"Kesenjangan Infrastruktur Publik"}
            </li>
            <li className="font-serif text-lg leading-6 text-zinc-100">
              {"Kegelisahan Stabilitas Ekonomi"}
            </li>
            <li className="font-serif text-lg leading-6 text-zinc-100">
              {"Implementasi Teknologi Inovatif Secara Konsumtif"}
            </li>
            <li className="font-serif text-lg leading-6 text-zinc-100">
              {"Kemandirian dan Krisis Energi"}
            </li>
            <li className="font-serif text-lg leading-6 text-zinc-100">
              {"Cita-Cita Masyarakat Madani"}
            </li>
            <li className="font-serif text-lg leading-6 text-zinc-100">
              {"Kebijakan dan Informasi Publik "}
            </li>
            <li className="font-serif text-lg leading-6 text-zinc-100">
              {"Pengembangan Sumber Daya Manusia"}
            </li>
            <li className="font-serif text-lg leading-6 text-zinc-100">
              {"Kesehatan dan Keselamatan"}
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}