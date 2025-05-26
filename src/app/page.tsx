import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Building2, Home, Smartphone, Phone, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="text-sm">
              Elektrotjenester av kvalitet
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              HGN Elektro AS
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Vår visjon er å levere elektrotjenester av kvalitet gjennom stolthet til vårt arbeid
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/kontakt-oss">
                  Kontakt oss
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portefolje">
                  Se våre prosjekter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Slider */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Utvalgte prosjekter</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Se noen av de spennende prosjektene vi har jobbet med
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Oslo Handelstands Forening</CardTitle>
                <CardDescription>
                  Et spennende prosjekt med smarte løsninger og intelligent styring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portefolje/oslo-handelstands-forening">
                    Se prosjektet
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Brand Factory</CardTitle>
                <CardDescription>
                  Spennende og lyskrevende lokaler for Brand Factory
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portefolje/brand-factory">
                    Se prosjektet
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Grenseveien 88</CardTitle>
                <CardDescription>
                  Et moderne kontorbygg skapt for fremtidens arbeidsplasser
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portefolje/grenseveien-88">
                    Se prosjektet
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Modules */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Våre tjenester</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vi tilbyr et bredt spekter av elektrotjenester tilpasset dine behov
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Næring og offentlig */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Næring og offentlig</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center space-y-3">
                  <p>HGN elektro tilbyr alle elektrotjenester til næring- og offentlig sektor.</p>
                  <p>Vi har en bred erfaringshistorikk innenfor hoteller, kontor, industri, skoler og butikker.</p>
                  <p>Sammen med våre leverandører og samarbeidspartnere, skreddersyr vi løsninger etter ditt ønske.</p>
                </CardDescription>
                <div className="text-center">
                  <Button variant="outline" asChild>
                    <Link href="/tjenester/naering-offentlig">
                      Les mer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Privat */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Privat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center space-y-3">
                  <p>Vi tilbyr både service og nyinstallasjon til privatkunder i både nye og gamle hjem.</p>
                  <p>Vi er også oppdatert på det siste innen elbil-lading, enøktiltak, smarthusløsninger, og trender innen belysning.</p>
                </CardDescription>
                <div className="text-center">
                  <Button variant="outline" asChild>
                    <Link href="/tjenester/privat">
                      Les mer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Smarthus */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Smarthus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center space-y-3">
                  <p>Et smarthussystem kan hjelpe deg i hverdagen, og gi deg praktisk informasjon om elforbruk og tilstandsstatus.</p>
                  <p>Vi kan finne løsningen som passer for deg og dine behov, slik at smarthussystemet gir deg den utnyttelsen du forventer.</p>
                </CardDescription>
                <div className="text-center">
                  <Button variant="outline" asChild>
                    <Link href="/tjenester/smarthus">
                      Les mer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Har du et spennende prosjekt på gang?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Vi ønsker å arbeide med deg! Ta kontakt for en uforpliktende samtale om ditt prosjekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontakt-oss">
                  Kontakt oss
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <a href="tel:22120003" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                  <Phone className="h-4 w-4" />
                  <span>22 12 00 03</span>
                </a>
                <a href="mailto:post@hgnelektro.no" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                  <Mail className="h-4 w-4" />
                  <span>post@hgnelektro.no</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
