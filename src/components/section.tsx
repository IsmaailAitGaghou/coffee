import Loading from "@/app/loading";

function Section({ color, title }: { color: string; title: string }) {
   return (
      <section className="min-h-screen sticky top-0">
         <div
            className={`flex min-h-screen items-center justify-center ${color} text-4xl font-bold`}
         >
            {title}
            <Loading />
         </div>
      </section>
   );
}

export default Section;