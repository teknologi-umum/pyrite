import type { MetaFunction } from "@remix-run/node";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <div className="flex justify-center items-center p-11 text-4xl font-extrabold lg:text-5xl italic antialiased tracking-wide">
        <h1 className="text-cyan-500">{"Teknum's Open Collective"}</h1>
      </div>

      <div className="flex justify-center items-center">
        <Accordion type="single" collapsible className="w-96">
          <AccordionItem value="why-we-build-this">
            <AccordionTrigger>Why we build this?</AccordionTrigger>
            <AccordionContent className="mx-5">
              <p className="my-3">
                Being an open source community that hosts out own stuff (like{" "}
                <a href="https://github.com/teknologi-umum/pesto">Pesto</a>,{" "}
                <a href="https://github.com/teknologi-umum/pesto">Graphene</a>,
                and <a href="https://github.com/teknologi-umum/bot">some</a>{" "}
                <a href="https://github.com/teknologi-umum/botnet">Telegram</a>{" "}
                <a href="https://github.com/teknologi-umum/captcha">bots</a>)
                and someone {"else's"} stuff (like Verdaccio, Bagetter,
                Libreddit) definitely cost some money, since {"we'll"} need to
                rent some servers, and most of the time, one server is not
                enough. Not just that, we also hosts a yearly community meetup
                called{" "}
                <a href="https://conference.teknologiumum.com">TeknumConf</a>,
                which also cost some money and {"it's"} a lot expensive compared
                to just renting servers. To make everything runs on the day to
                day basis where people can access our service for free and
                attend to TeknumConf event with minimum entrance fee, we setup a
                few places where people can donate their money to us. We ended
                up having{" "}
                <a href="https://github.com/sponsors/teknologi-umum">
                  GitHub Sponsor
                </a>{" "}
                and <a href="https://saweria.co/teknologiumum">Saweria</a> page.
              </p>

              <p className="my-3">
                On the internet, where most people are donating with USD, they
                use a platform called{" "}
                <a href="https://opencollective.com/">OpenCollective</a> where
                you can do money management publicly. Using OpenCollective also
                means that {"we'll"} have to shutdown any other donation funnels
                and just use OpenCollective alone. Sadly, that {"doesn't"} work
                with us. People that interact with the community only able to
                donate with IDR, which on OpenCollective, {"there's"} no actual
                fiscal host that would be compatible to us.
              </p>

              <p className="my-3">
                We are an open source community, we want to uphold our value of
                openness and we want to guarantee that the donations being made
                is used properly.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
