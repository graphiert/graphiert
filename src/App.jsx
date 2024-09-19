import { AuroraBackground } from "@/components/ui/aurora-background";
import { FocusCards } from "@/components/ui/focus-cards";
import { FloatingNav } from "@/components/ui/floating-navbar";
import ContactForm from "./components/Form";

import { cn } from "./lib/utils";

export default function App() {
  const sectionGap = "px-8 md:px-12 lg:px-16 py-3 md:py-6 lg:py-9 mt-16";
  const cards = [
    {
      title: "Anime Searcher",
      src: "/anime-searcher.png",
    },
    {
      title: "Landing Page Online Shop",
      src: "/landing-shop.png",
    },
    {
      title: "Contact Management in Django",
      src: "/contact-django.png",
    },
  ];
  
  const navItems = [
    {
      name: (
          <>
          <i className="bi bi-house text-md"></i>{" "}
          <span className="text-xs">Home</span>
        </>
      ),
      icon: (
        <>
          <i className="bi bi-house"></i>{" "}
          <span className="text-xs">Home</span>
        </>
      ),
      link: "#",
    },
    {
      name: (
        <>
          <i className="bi bi-card-text text-md"></i>{" "}
          <span className="text-xs">Projects</span>
        </>
      ),
      icon: (
        <>
          <i className="bi bi-card-text"></i>{" "}
          <span className="text-xs">Projects</span>
        </>
      ),
      link: "#projects",
    },
    {
      name: (
        <>
          <i className="bi bi-person-lines-fill text-md"></i>{" "}
          <span className="text-xs">Contact</span>
        </>
      ),
      icon: (
        <>
          <i className="bi bi-person-lines-fill"></i>{" "}
          <span className="text-xs">Contact</span>
        </>
      ),
      link: "#contact",
    },
  ];

  return (
    <>
      <nav className="relative">
        <FloatingNav navItems={navItems} />
      </nav>
      <AuroraBackground className="text-slate-800 dark:text-slate-200">
        <section id="#" className="container">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Hello World!
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Hello! I am Galih Puji Irianto, High School Student. Beginner
                technology enthusiast.
              </p>
              <div className="my-4">
                <h3 className="text-2xl my-2 mb-4 font-bold tracking-tight leading-none md:text-3xl dark:text-white">
                  About Me!
                </h3>
                <p className="my-2 text-gray-500 dark:text-gray-400">
                  Halo! Saya Galih. Siswa SMA, Beginner technology enthusiast.
                </p>
                <p className="my-2 text-gray-500 dark:text-gray-400">
                  Hobiku macam-macam, bisa tergantung situasi (tak tentu). Tapi
                  kalau apa yang disuka, aku suka ngoding, suka ngegame, suka
                  matematika, suka ngoceh, suka makan, suka tidur.
                </p>
                <p className="my-2 text-gray-500 dark:text-gray-400">
                  Skill? Masih banyak hal yang harus dipelajari, entah apa yang
                  disebut atau secara nyata di real life.
                </p>
                <div className="my-4 flex gap-4">
                  <a href="https://instagram.com/graphiert" target="_blank">
                    <i className="bi bi-instagram text-2xl md:text-3xl"></i>
                  </a>
                  <a href="https://x.com/graphiert">
                    <i className="bi bi-twitter-x text-2xl md:text-3xl"></i>
                  </a>
                  <a href="https://github.com/graphiert" target="_blank">
                    <i className="bi bi-github text-2xl md:text-3xl"></i>
                  </a>
                  <a href="https://reddit.com/u/graphiert" target="_blank">
                    <i className="bi bi-reddit text-2xl md:text-3xl"></i>
                  </a>
                  <i className="bi bi-discord text-2xl md:text-3xl"></i>

                  <span className="mt-auto mb-1 text-slate-500 text-xs">
                    /graphiert
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden lg:col-span-5 lg:flex w-64 h-64 my-auto mx-auto">
              <img
                src="/galih.jpg"
                alt="mockup"
                className="rounded-full block"
              />
            </div>
          </div>
        </section>
      </AuroraBackground>
      <section id="projects" className={cn(sectionGap)}>
        <h3 className="text-2xl my-4 font-bold tracking-tight leading-none md:text-3xl dark:text-white text-center">
          My Project
        </h3>
        <FocusCards cards={cards} />
      </section>
      <section id="contact" className={cn(sectionGap)}>
        <ContactForm />
      </section>
      <section className="flex justify-center items-center">
        <blockquote
          className={cn(
            sectionGap,
            "lg:w-1/2 container text-xl italic font-semibold text-gray-900 dark:text-white",
          )}
        >
          <p>
            "Motivation is overrated. It is not a constant state, it is not
            enough to achieve anything, and it can be a distraction. Instead,
            focus on building good habits that will carry you through the tough
            times and help you achieve your goals."
          </p>
        </blockquote>
      </section>
      <footer className="mt-16 p-4 bg-slate-300 text-xs text-center">
        <span>
          Made with 🛌 by{" "}
          <a href="https://instagram.com/graphiert">@graphiert</a>
        </span>
      </footer>
    </>
  );
}
