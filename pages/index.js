/*
  This file is the websites index page i.e. the first page to land on
*/

import { useEffect } from "react";
import Image from "next/image";
import Trip from "../components/Trip";
import Youtube from "../components/Youtube";
import Snow from "../components/Snow";
import { TypeAnimation } from "react-type-animation";
import { animated, useSpring, config, useInView } from "@react-spring/web";
import Navbar from "../components/Navbar";
import s from "../styles/Index.module.css";
import InfoBox from "../components/InfoBox";
import FAQ from "../components/Faq";
import Countdown from "../components/Countdown";
import PriceCard from "../components/PriceCard";
import InfoCard from "../components/InfoCard";
import Ticket from "../icons/ticket.svg";
import DeliveryTruck from "../icons/deliveryTruck.svg";
import PlusAdd from "../icons/plusAdd.svg";
import Insurance from "../icons/insurance.svg";
import CalenderCancel from "../icons/calenderCancel.svg";
import Ski from "../icons/ski.svg";
import LinkBox from "../components/LinkBox";
import tripImage from "../public/image/trip.webp";
import DivideContainer from "../components/DivideContainer";
import AnimatedContainer from "../components/AnimatedContainer";
import TripDescription from "../components/TripDescription.mdx";
import RootLayout from "../components/RootLayout";
import Socialmedia from "../components/Socialmedia";
import LesArcs from "../public/image/lesarcs.jpg";
import BookButton from "../components/BookButton";


const data = {
  about: `Week of Winter är en ideell skidförening av studenter för studenter på 
        Uppsala universitet och SLU. Varje år i januari arrangerar vi en maxad 
        skidresa till Alperna, tillsammans med andra roliga skid- och festrelaterade 
        evenemang. Vårt syfte är att tillföra festligheter, kul och såklart skidåkning 
        till Uppsalas studentliv. Vi ser fram emot att hänga och skåla med er i Alperna. Vi ses där!`,
  trip: {
    title: "Häng med på resan 2026!",
    date: "Vecka 4",
    bookingOpens: "25/9 kl. 12.30",
    destination: {
      name: "Val Thorens",
      link: "https://maps.app.goo.gl/rAgnu1TDT8AmnQdM6",
    },
    description: <TripDescription/>,
    image: {
      src: tripImage,
      alt: "Images of Val-d'Isère",
    },
    stats: [
      { value: 50, valueAfter: "+", desc: "Barer och klubbar" },
      { value: 600, desc: "Kilometer pist" },
      { value: 3230, desc: "Meter över havet" },
    ],
    departureDate: new Date(2026, 0, 16, 16, 0, 0), // OBS: 0-indexed
  },

  prices: [
    {
      title: "Flyg",
      price: "11 799 kr",
      href: "https://group.skivenue.com/WOW",
      includes: [
        "Flyg tur och retur från Arlanda, inkl. transfer",
        "Boende (enkel lägenhet med eget kök)",
        "Guideservice 24/7",
        "Turistskatter",
        "Liftkort 6 dagar",
      ],
      buttonSubtitle: "Bokningen öppnar 25/9 kl. 12.30",
    },
    {
      title: "Buss",
      price: "9 299 kr",
      href: "https://group.skivenue.com/WOW",
      popular: true,
      includes: [
        "Bussresa tur och retur från Uppsala",
        "Boende (enkel lägenhet med eget kök)",
        "Guideservice 24/7",
        "Turistskatter",
        "Liftkort 6 dagar",
      ],
      buttonSubtitle: "Bokningen öppnar 25/9 kl. 12.30",
    },
    {
      title: "Basic",
      price: "7 799 kr",
      href: "https://group.skivenue.com/WOW",
      includes: [
        "Boende (enkel lägenhet med eget kök)",
        "Guideservice 24/7",
        "Turistskatter",
        "Liftkort 6 dagar",
      ],
      buttonSubtitle: "Bokningen öppnar 25/9 kl. 12.30",
    },
  ],

  addOns: [
    {
      title: "Eventpaket. ",
      desc: "Välkomstfest, picknick på pisten, Kiss and Goodbye-party och rabatter på barer och klubbar. Låter det som din grej? Då ska du självklart haka på eventpaketet!",
      icon: <Ticket width={70} height={70} />,
    },
    {
      title: "Skidhyra. ",
      desc: "Har du inga skidor eller en snowboard? Då finns det möjlighet att hyra skidor, stavar och hjälm. Eller varför inte en snowboard?",
      icon: <Ski width={70} height={70} />,
    },
    {
      title: "Skidfrakt. ",
      desc: "Har du egna skidor eller en snowboard som du vill ta med dig? Då är detta ett utmärkt val för endast 199 kr om du åker buss och 799 kr om du flyger.",
      icon: <DeliveryTruck width={70} height={70} />,
    },
    {
      title: "Utökat liftkort. ",
      desc: "Vill du få ut maximalt av din skidåkning? Då kan du uppgradera ditt liftkort och få tillgång till hela Trois Vallees med 600 km pist!",
      icon: <PlusAdd width={70} height={70} />,
    },
    {
      title: "Reseförsäkring. ",
      desc: "Vill du känna dig trygg under resan? Då kan du boka en reseförsäkring hos Gouda.",
      icon: <Insurance width={70} height={70} />,
    },
    {
      title: "Avbeställningsskydd. ",
      desc: "Nojig över att en sjukdom eller olycka stoppar din resa? Frukta ej. Det går att lägga till avbeställningskydd till bokningen. Gäller även vid omtenta.",
      icon: <CalenderCancel width={70} height={70} />,
    },
  ],

  faq: [
    {
      q: "Vad är Week of Winter?",
      a: "Week of Winter är en ideell skidförening av studenter för studenter på Uppsala universitet och SLU. Varje år arrangerar vi en maxad skidresa till Alperna, tillsammans med andra festligheter. Hoppas du följer med!",
    },
    {
      q: "Vem får följa med?",
      a: (
        <>
          Studerande vid Uppsala universitet och SLU som även är medlemmar i WOW får delta på resan.
          <br />
          <a style={{ color: "#1d4ed8" }} href="https://go.orbiapp.io/WRn8aD8J5Vb">
            {" "}Bli medlem via orbi här!{" "}
          </a>
        </>
      ),
    },
    {
      q: "Kan man boka egen transport ner?",
      a: "Ja, det går bra att boka egen transport, alternativet fyller man i vid bokningen.",
    },
    {
      q: "Går det bra att ta med sina egna skidor ned?",
      a: "Ja, det går bra ta med sina egna skidor ned, oavsett om man åker buss eller flyger ned så går det att beställa skidtransport.",
    },
    {
      q: "När går det att boka boende?",
      a: "Bokandet av boende öppnar ungefär i mitten av November och mer information kommer ungefär två veckor innan bokningen öppnar.",
    },
    {
      q: "Hur ska jag kontakta Week of Winter?",
      a: (
        <>
          <div style={{ marginBottom: "1rem" }}>
            Kontakta oss via mail, Facebook eller Instagram. Vi svarar så snabbt som möjligt!
          </div>
          <div className={s.questionContact}>
            <a href="mailto: info@weekofwinter.se" className={s.questionEmail}>
              info@weekofwinter.se
            </a>
            <Socialmedia colorInverted />
          </div>
        </>
      ),
    },
    {
      q: "När ska man kontakta Week of winter och när ska man kontakta Skivenue?",
      a: "Week of Winter är den primära kontaktpersonen innan man bokar resan. SkiVenue kan ni alltid kontakta, och ni ska alltid kontakta dem vid alla frågor som rör sig om själva resan, boende, transport, liftkort, betalning, bokning osv.",
    },
    {
      q: "Vad gör SkiVenue och vad gör Week of Winter?",
      a: "Skivenue är vår resebyrå och är därför de som ordnar all transport, boende och står för de aktiviteter som eventbandet ingår i. Styrelsen på Week of Winter kommer också hålla en del aktiviteter och det kommer tydligt framgå när det är vi som håller ett event. Week of Winter är de primära kontaktpersonerna innan bokningen av resan och förmedlar även generell information om resan via våra kanaler.",
    },
    {
      q: "Vad gäller kring deposition för boende?",
      a: "Alla rum betalar deposition för boendet som en säkerhet för uthyraren. Det betalas i samband med incheckning direkt till uthyraren. Beloppet dras inte, men reserveras på kortet och reservationen släpps vid hemresa om allt är fint med lägenheten och inget har gått sönder under resan",
    },
    {
      q: "Om man åker buss, är det raster under vägen?",
      a: "Ja, det är raster under vägen. Oftast har chauffören en ungefärlig plan på vart rasterna sker, men dessa kan ändras beroende på trafik och de pauser chauffören måste ta.",
    },
    {
      q: "Får man ta med sig mat på bussen?",
      a: "Ja! Man får ta med sig mat på bussen. Det kan vara en bra idé att ta med sig mat som kan ätas kall och annat snacks, då det kan vara lång tid mellan raster samt varierande utbud av mat på rastplatser.",
    },
    {
      q: "Vart finns information om min bussresa?",
      a: (
        <>
          På hemsidan där resan bokas. Vid frågor,
          <br />
          <a style={{ color: "#1d4ed8" }} href="https://www.skivenue.se/kontakt">
            {" "}Kontakta Skivenue.{" "}
          </a>
        </>
      ),
    },
    {
      q: "Vart finns information om min flygresa?",
      a: (
        <>
          På hemsidan där resan bokas. Vid frågor,
          <br />
          <a style={{ color: "#1d4ed8" }} href="https://www.skivenue.se/kontakt">
            {" "}Kontakta Skivenue.{" "}
          </a>
        </>
      ),
    },
    {
      q: "Hur vet man om det sker något event?",
      a: (
        <>
          Vi i styrelsen kommer påminna er om både våra egna event och SkiVenues. Klicka på länken för att se eventschemat. Glöm inte att följa oss på ORBI och Instagram för att få de senaste uppdateringarna och eventuella ändringar i schemat!
          <br />
          Nytt för resan 2026 är att vi kommer ha en Whatsapp-grupp där vi skickar ut information under själva resan.
          <br />
          <a style={{ color: "#1d4ed8" }} href="https://www.weekofwinter.se/mer/eventschema">
            {" "}Eventschema{" "}
          </a>
        </>
      ),
    },
    {
      q: "Hur anmäler jag mig till Week of winters event?",
      a: (
        <>
          Anmälan till våra event sker via ORBI. Det är även där man är registrerad som medlem.
          <br />
          <a style={{ color: "#1d4ed8" }} href="https://link.orbiapp.io/yy2T">
            {" "}Week of Winter på ORBI{" "}
          </a>
        </>
      ),
    },
  ],
};


export default function HomePage() {
  //VIKTIGT att uppdatera om något ändras så att det blir rätt på Google/Bing
  const meta = {
    title: "Week of Winter - En skidförening för Uppsalas studenter",
    description: data.about,
    keywords:
      "week of winter, weekofwinter, Uppsala universitet skidförening, Skidförening Uppsala",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Week of Winter",
      url: "https://weekofwinter.se/",
      location: "Uppsala, Sverige",
      logo: "https://weekofwinter.se/logo.webp",
      description: data.desc,
      sameAs: [
        "https://www.instagram.com/weekofwinter/",
        "https://www.facebook.com/Wofwinter",
        "https://www.tiktok.com/@weekofwinter/",
      ],
    },
  };

  return (
    <RootLayout meta={meta}>
      <main>
        <Navbar stickyOffset />
        <ParallaxEffect />
        <article className={s.content}>
          <div className={s.innerContent}>
            {/* OM OSS */}
            <section id="om" className={s.section}>
              <DivideContainer>
                <>
                  <AnimatedContainer>
                    <header>
                      <h2 className={s.aboutTitle}>Om oss</h2>
                    </header>
                  </AnimatedContainer>
                  <AnimatedContainer>
                    <p className={s.about}>{data.about}</p>
                  </AnimatedContainer>
                </>
                <Youtube
                  title="Week of Winter - Aftermovie"
                  videoId="CIMq1W1dGSg"
                />
              </DivideContainer>
            </section>

            {/* ÅRETS RESA */}
            <section id="arets-resa" className={s.section}>
              <Trip
                title="Häng med på resan 2026!"
                date="Vecka 4"
                ticket="Bokningen öppnar 25/9 kl. 12.30."
                place="Val Thorens"
                //placeLink="https://maps.app.goo.gl/s6FFxx84DYuMnrsx7"
                description={
                  <>
                    <TripDescription />
                  </>
                }
                imageSrc={tripImage}
                imageAlt="Images of Val-d'Isère"
              />

              <div className={s.infoBoxContainer}>
                {data.trip.stats.map((stat, i) => (
                  <InfoBox key={i} {...stat} />
                ))}
              </div>
            </section>

            {/* ANMÄLAN / PRISER */}
            <section id="anmal" className={s.section}>
              <header className={`${s.header} ${s.priceCardHeader}`}>
                <h2>Hur vill du följa med?</h2>
              </header>
              <div className={s.priceCardContainer}>
                {data.prices.map((p, i) => (
                  <PriceCard key={i} {...p} />
                ))}
              </div>

              {/* TILLVAL */}
              <div className={s.addOnContainer}>
                <h3 className={s.header}>Tillval</h3>
                <div className={s.addOnCards}>
                  {data.addOns.map((addOn, i) => (
                    <InfoCard key={i} {...addOn} />
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="fragor" className={`${s.section} ${s.faq}`}>
              <header className={`${s.header} ${s.splitHeader}`}>
                <h2>Frågor? Svar.</h2>
              </header>
              <FAQ questions={data.faq} />
            </section>

            {/* MER */}
            <section id="mer" className={`${s.section} ${s.more}`}>
              <header className={s.header}>
                <h2>Mer</h2>
              </header>
              <LinkBox name="Medlemskap" href="/mer/medlemskap" />
              <LinkBox name="Eventschema" href="/mer/eventschema" />
              <LinkBox name="Bilder" href="/mer/bilder" />
              <LinkBox name="Styrelsen" href="/mer/styrelsen" />
              <LinkBox name="Postbeskrivningar" href="/mer/postbeskrivningar" />
              <LinkBox name="Stadgar" href="/mer/stadgar" />
              <LinkBox name="Historia" href="/mer/historia" />
              <LinkBox name="Dokument" href="/mer/dokument" />
            </section>

            {/* COUNTDOWN */}
            <section className={s.section}>
              <header className={s.header}>
                <h2>Avresa {data.trip.destination.name}</h2>
              </header>
              <Countdown date={data.trip.departureDate} />
            </section>
          </div>
        </article>
      </main>
    </RootLayout>
  );
}

//Override default page layout
HomePage.getLayout = (page) => page;

//debounce to not change the parallax on every pixel
/*
function debounce(func, timeout = 10){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
*/

// TODO: Maybe add React.memo
// This component is used to display the parallax effect
const ParallaxEffect = () => {
  const [ref, inView] = useInView();

  const [{ offset }, animation] = useSpring(() => ({
    from: { offset: 0 },
    config: { ...config.gentle },
  }));

  let ticking = false;

  const handleScroll = () => {
    if (!ticking && window.scrollY < window.innerHeight) {
      // Used for optimization
      window.requestAnimationFrame(() => {
        animation.start({ offset: window.scrollY });
        ticking = false;
      });
      ticking = true;
    }
  };

  useEffect(() => {
    if (!inView) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView]);

  const layers = [
    { speed: 0.5 },
    { speed: 0.3 },
    { speed: 0.2 },
    { speed: 0.1 },
  ];

  return (
    <div ref={ref} className={s.parallaxContainer} id="landingPage">
      {layers.map(({ speed }, i) => (
        <animated.div
          key={i}
          className={s.parallaxMountain}
          style={{
            transform: offset.to(
              (o) => `translate3d(0px, ${o * speed}px, 0px)`
            ),
          }}
        >
          <Image
            src={`/parallax/layer${i}.svg`}
            className={s.mountainImage}
            alt="Mountain landscape"
            fill
            priority
          />
        </animated.div>
      ))}

      <animated.div
        className={s.welcomeContainer}
        style={{
          transform: offset.to((o) => `translate3d(0px, ${o * 1.2}px, 0px)`),
        }}
      >
        <h1 className={s.welcomeHeading}>Week of Winter</h1>
        <TypeAnimation
          sequence={[
            "En skidförening för Uppsalas studenter",
            1000,
            `Vi ses i ${data.trip.destination.name}!`,
            1000,
            "För studenter av studenter.",
            1000,
            "@weekofwinter",
            1000,
          ]}
          speed={60}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className={`${s.welcomeSubheading} h3`}
        />
        {/*
        <BookButton
          title="Boka nu"
          subtitle={`Bokningen öppnar ${data.trip.bookingOpens}`}
          href={data.prices[0].href}
          size={1.1}
          subTitleStyle={{ textShadow: `0 0 5px rgba(0, 0, 0, 0.7)` }}
          containerStyle={{marginTop: "1.5rem"}}
        />
        */}
      </animated.div>

      <div className={s.coverMountain}>
        <Snow />
        <Image
          src={`/parallax/layer4.svg`}
          className={s.mountainImage}
          alt="Mountain landscape"
          fill
          priority
        />
      </div>
    </div>
  );
};
