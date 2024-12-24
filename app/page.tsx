import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Pump Fun API</h1>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
          <Image
            src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Crypto background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 mix-blend-overlay"
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4">Unlock the Power of Real-Time Crypto Insights with Pump Fun API</h2>
            <p className="text-xl mb-8">Empower your applications with cutting-edge data from the Solana crypto market. Stay ahead with wallet insights, trending tokens, and Solana price tracking.</p>
            <div className="space-x-4">
              <Button asChild>
                <Link href="https://rapidapi.com/yllvaranwar/api/pumpfun-api">Get Started Now</Link>
              </Button>
              <Button variant="outline">
                <Link href="#documentation">View Documentation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Pump Fun API?</h2>
            <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
              The Pump Fun API project is a comprehensive solution designed to interact with the Pump Fun platform, providing real-time data and actionable insights for crypto traders, developers, and enthusiasts. This API serves as a critical backbone for applications and services that aim to analyze and participate in the fast-moving crypto market, focusing on the Solana blockchain and its associated tokens.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Image
                  src="https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Real-time data"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Real-time data</h3>
                <p>Access the latest information about coins, trades, and Solana price updates.</p>
              </div>
              <div className="text-center">
                <Image
                  src="https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Coin Discovery"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Coin Discovery</h3>
                <p>Identify newly launched tokens and trending coins instantly.</p>
              </div>
              <div className="text-center">
                <Image
                  src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Scalability"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Scalability</h3>
                <p>Flexible plans for hobbyists, developers, and enterprises.</p>
              </div>
            </div>
            <div className="text-center">
              <Button asChild>
                <Link href="#pricing">Subscribe Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features to Empower Your Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                title="User Wallet Insights"
                description="Retrieve detailed information for a specific wallet address. Ideal for tracking wallet activity, analyzing user behavior, and understanding wallet-specific token holdings."
                endpoint="/users/{wallet}"
                imageSrc="https://images.pexels.com/photos/5980743/pexels-photo-5980743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <FeatureCard
                title="Coin Market Data"
                description="Access latest coins, king of the hill tokens, and specific coin details. Perfect for identifying new opportunities and market trends."
                endpoint="/coins/latest, /coins/king-of-the-hill, /coins/{CA}"
                imageSrc="https://images.pexels.com/photos/6780789/pexels-photo-6780789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <FeatureCard
                title="Solana Price Tracker"
                description="Get real-time Solana (SOL) price data in USD. Essential for accurate price monitoring and valuation of Solana-based assets."
                endpoint="/sol-price"
                imageSrc="https://images.pexels.com/photos/8370784/pexels-photo-8370784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <FeatureCard
                title="Latest Trades"
                description="Monitor the most recent transactions executed on the platform. Critical for understanding market activity and developing trading strategies."
                endpoint="/trades/latest"
                imageSrc="https://images.pexels.com/photos/7567558/pexels-photo-7567558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Flexible Pricing for Every Developer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Basic Plan"
                description="For small-scale projects or testing"
                price="$0.00"
                limit="500 requests/month"
                rateLimit="1000 requests per hour"
                ctaText="Choose Basic"
                ctaLink="https://rapidapi.com/yllvaranwar/api/pumpfun-api/pricing"
              />
              <PricingCard
                title="Pro Plan"
                description="For growing applications"
                price="$4.20"
                limit="50,000 requests/month"
                rateLimit="50 requests per minute"
                ctaText="Choose Pro"
                ctaLink="https://rapidapi.com/yllvaranwar/api/pumpfun-api/pricing"
                highlighted={true}
              />
              <PricingCard
                title="Ultra Plan"
                description="For enterprise-grade solutions"
                price="$14.20"
                limit="200,000 requests/month"
                rateLimit="Unlimited"
                ctaText="Choose Ultra"
                ctaLink="https://rapidapi.com/yllvaranwar/api/pumpfun-api/pricing"
              />
            </div>
          </div>
        </section>

        {/* API Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">API Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Available Endpoints</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>GET Latest Trades</li>
                  <li>GET Solana Price</li>
                  <li>GET Coin Details</li>
                  <li>GET King of the Hill Coins</li>
                  <li>GET Latest Coins</li>
                  <li>GET User by Wallet</li>
                  <li>GET Coins</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Easy Integration: Simplified endpoints for quick integration into your application.</li>
                  <li>Fast Response: Real-time data ensures your app stays ahead of the curve.</li>
                  <li>Supports Innovation: Perfect for crypto trading bots, analytics tools, and research platforms.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation and Resources Section */}
        <section id="documentation" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Get Started with Our Developer Resources</h2>
            <div className="flex justify-center space-x-4">
              <Button asChild>
                <Link href="https://rapidapi.com/yllvaranwar/api/pumpfun-api">API Documentation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://rapidapi.com/yllvaranwar/api/pumpfun-api">Quick Start Guide</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://rapidapi.com/yllvaranwar/api/pumpfun-api">FAQ</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">About</Link></li>
                <li><Link href="#pricing" className="hover:underline">Pricing</Link></li>
                <li><Link href="#documentation" className="hover:underline">Documentation</Link></li>
                <li><Link href="#" className="hover:underline">Terms of Use</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gray-300">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Support: support@pumpfunapi.com</p>
              <Link href="#" className="hover:underline">Contact Form</Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Ready to Build?</h3>
              <Button asChild>
                <Link href="https://rapidapi.com/yllvaranwar/api/pumpfun-api">Start Exploring the Pump Fun API Today!</Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description, endpoint, imageSrc }) {
  return (
    <Card>
      <CardHeader>
        <Image src={imageSrc} alt={title} width={300} height={200} className="rounded-lg mb-4" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">Endpoint: {endpoint}</p>
      </CardFooter>
    </Card>
  )
}

function PricingCard({ title, description, price, limit, rateLimit, ctaText, ctaLink, highlighted = false }) {
  return (
    <Card className={highlighted ? 'border-primary' : ''}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{price}<span className="text-xl font-normal">/month</span></p>
        <p className="text-sm text-muted-foreground mt-2">{limit}</p>
        <p className="text-sm text-muted-foreground">Rate Limit: {rateLimit}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={highlighted ? 'default' : 'outline'} asChild>
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

