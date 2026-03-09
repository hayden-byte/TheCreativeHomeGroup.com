import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Home, DollarSign, Calendar, Users, ShieldCheck, MapPin, CheckCircle2, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import heroVideo from "@/assets/videos/hero-home.mp4";
import cashOfferImg from "@/assets/images/cash-offer.png";
import distressedImg from "@/assets/images/distressed.png";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Homeowner",
    content: "We were in a tight spot with a divorce pending and needed to sell fast. The Creative Home Group made the process painless and fair. Highly recommend!",
    rating: 5,
    initials: "SM"
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "Real Estate Agent",
    content: "I've referred several clients to TCHG when they needed a quick close or creative solution. Their professionalism and speed are unmatched in our market.",
    rating: 5,
    initials: "JR"
  },
  {
    id: 3,
    name: "Patricia Lee",
    role: "Homeowner",
    content: "My rental property had issues I couldn't afford to fix. They bought it as-is for a fair price and closed in 10 days. Best decision I made!",
    rating: 5,
    initials: "PL"
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Investor Partner",
    content: "We've successfully partnered on over 20 deals. Their creative approach and transparent dealings make them an invaluable partner. A+",
    rating: 5,
    initials: "MC"
  },
  {
    id: 5,
    name: "Jennifer Adams",
    role: "Homeowner",
    content: "I was about to lose my home to foreclosure. They stepped in, helped me understand my options, and found a solution that let me walk away with dignity.",
    rating: 5,
    initials: "JA"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-2xl bg-white rounded-3xl">
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-foreground text-lg leading-relaxed font-medium">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevTestimonial}
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        data-testid="testimonial-prev"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        data-testid="testimonial-next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentIndex
                ? "bg-primary w-8 h-3"
                : "bg-primary/30 w-3 h-3 hover:bg-primary/50"
            }`}
            data-testid={`testimonial-dot-${i}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-background selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card px-6 py-4 flex items-center justify-between border-b border-white/20">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Home className="h-6 w-6 text-primary" />
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-foreground">
            The Creative Home Group
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#solutions" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Solutions</a>
          <a href="#book" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Book a Call</a>
          <a href="#testimonials" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Reviews</a>
          <Button className="rounded-full px-6 font-semibold shadow-lg shadow-primary/20">Get Cash Offer</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay"></div>
        
        <div className="relative z-10 container px-4 mx-auto text-center mt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.span 
              variants={fadeIn}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-semibold mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Buying Properties in Any Condition
            </motion.span>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
            >
              Selling Your Home Can Be <br className="hidden md:block"/>
              <span className="gold-gradient-text italic font-serif pr-2">Creative & Simple.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-medium"
            >
              Low equity? Can't make payments? Distressed property? We offer all-cash, as-is solutions tailored to your unique circumstance.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="glass-card p-3 rounded-2xl max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 shadow-2xl border-white/20"
            >
              <div className="relative flex-grow">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Enter your property address for a quick offer..." 
                  className="pl-12 py-7 text-lg border-none bg-white/60 focus-visible:ring-2 focus-visible:ring-primary h-full rounded-xl font-medium placeholder:text-muted-foreground/70"
                  data-testid="input-address"
                />
              </div>
              <Button size="lg" className="py-7 px-8 text-lg rounded-xl h-full w-full sm:w-auto shrink-0 group shadow-lg shadow-primary/20" data-testid="button-get-offer">
                Get My Offer
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white py-10 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-serif text-xl font-bold"><CheckCircle2 className="text-primary"/> As-Is Purchases</div>
            <div className="flex items-center gap-2 font-serif text-xl font-bold"><CheckCircle2 className="text-primary"/> No Commissions</div>
            <div className="flex items-center gap-2 font-serif text-xl font-bold"><CheckCircle2 className="text-primary"/> Creative Financing</div>
            <div className="flex items-center gap-2 font-serif text-xl font-bold"><CheckCircle2 className="text-primary"/> Fast Closings</div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <section id="solutions" className="py-32 bg-background relative">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">No Matter The Situation, <br/> We Have a Solution</h2>
            <p className="text-muted-foreground text-xl">Traditional selling isn't for everyone. We specialize in creative structures that benefit you when the standard market can't.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white group overflow-hidden rounded-3xl">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={distressedImg} alt="Distressed property solutions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 font-serif">All-Cash, As-Is Offers</h3>
                <p className="text-muted-foreground leading-relaxed">Got a distressed property? Don't spend a dime on repairs. We buy it exactly as it stands, in cash, allowing you to walk away clean and fast.</p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white group overflow-hidden rounded-3xl">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={cashOfferImg} alt="Cash offer handshake" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 font-serif">Low Equity Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">Owe too much? Can't afford closing costs or agent commissions? Our creative financing structures can take over your burden seamlessly.</p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white group overflow-hidden rounded-3xl">
              <div className="h-64 overflow-hidden relative bg-secondary flex flex-col items-center justify-center p-8 text-center">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <Calendar className="h-16 w-16 text-primary mb-4 relative z-10" />
                <h4 className="text-3xl font-serif font-bold text-white relative z-10">Fast Closings</h4>
                <p className="text-white/80 relative z-10 mt-2 font-medium">In as little as 7 days</p>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 font-serif">Pre-Foreclosure Relief</h3>
                <p className="text-muted-foreground leading-relaxed">Falling behind on payments? We can intervene quickly to save your credit score and help you transition smoothly to your next chapter.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book" className="py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[100px] rounded-full translate-x-1/2"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Free Consultation</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight">Let's Discuss <br/><span className="text-primary">Your Situation.</span></h2>
              <p className="text-white/80 text-xl mb-10 font-light leading-relaxed">
                Every property and every seller is unique. Book a zero-pressure, confidential consultation with our creative real estate experts today. We'll map out your options clearly.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="bg-primary/20 p-3 rounded-xl"><CheckCircle2 className="text-primary h-6 w-6"/></div>
                  <div>
                    <h4 className="font-bold text-lg">100% Confidential</h4>
                    <p className="text-white/60 text-sm">Your information is safe with us.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="bg-primary/20 p-3 rounded-xl"><CheckCircle2 className="text-primary h-6 w-6"/></div>
                  <div>
                    <h4 className="font-bold text-lg">No Obligation</h4>
                    <p className="text-white/60 text-sm">Review our offer with zero pressure.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full max-w-md lg:max-w-none">
              <Card className="bg-white/10 border-white/20 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <div className="text-center mb-8">
                    <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/30">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">Schedule a Time</h3>
                    <p className="text-white/70">Select a convenient time for a 15-min discovery call.</p>
                  </div>
                  
                  <div className="bg-black/20 rounded-2xl p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold">October 2023</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 border-white/20 text-white hover:bg-white/10 bg-transparent">&lt;</Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 border-white/20 text-white hover:bg-white/10 bg-transparent">&gt;</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day, i) => (
                        <div key={day} className="text-center py-2 text-xs font-semibold text-white/50">{day}</div>
                      ))}
                      {Array.from({length: 31}).map((_, i) => (
                        <div 
                          key={i} 
                          className={`aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-all
                            ${i < 3 || i % 7 === 5 || i % 7 === 6 ? 'text-white/20' : 
                              i === 15 ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/40 scale-110' : 
                              'bg-white/5 text-white/90 hover:bg-white/20 cursor-pointer'}
                          `}
                        >
                          {(i % 31) + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full py-6 text-lg font-bold rounded-xl shadow-lg shadow-primary/20" data-testid="button-confirm-time">Confirm Time</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white/50 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">What Our Clients Say</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif tracking-tight">Real Reviews from Real People</h2>
            <p className="text-muted-foreground text-xl">See what sellers and real estate professionals have to say about working with us.</p>
          </div>

          <div className="max-w-4xl mx-auto px-8 lg:px-16">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-20 border-t-8 border-primary">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <span className="font-serif font-bold text-2xl tracking-tight">
                  The Creative Home Group
                </span>
              </div>
              <p className="text-white/60 max-w-md mb-8 text-lg">
                Redefining real estate transactions with tailored, creative solutions for sellers in any circumstance.
              </p>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"><Users className="h-5 w-5" /></div>
              </div>
            </div>
            
            <div className="md:col-span-3 md:col-start-7">
              <h4 className="font-bold text-xl mb-6 font-serif">Quick Links</h4>
              <ul className="space-y-4 text-white/70 font-medium">
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-4 w-4"/> Get an Offer</a></li>
                <li><a href="#solutions" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-4 w-4"/> Our Solutions</a></li>
                <li><a href="#book" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-4 w-4"/> Book Consultation</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-4 w-4"/> Client Reviews</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="font-bold text-xl mb-6 font-serif">Contact Us</h4>
              <ul className="space-y-4 text-white/70 font-medium">
                <li className="flex flex-col">
                  <span className="text-sm text-white/40 uppercase tracking-wider mb-1">Email</span>
                  <a href="mailto:contact@creativehomegroup.com" className="hover:text-primary transition-colors">contact@creativehomegroup.com</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm text-white/40 uppercase tracking-wider mb-1">Phone</span>
                  <a href="tel:1-800-555-HOME" className="hover:text-primary transition-colors text-xl">1-800-555-HOME</a>
                </li>
                <li className="flex flex-col mt-4 pt-4 border-t border-white/10">
                  <span className="text-sm text-white/40 uppercase tracking-wider mb-1">Hours</span>
                  <span>Mon-Sat, 9am - 6pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/40 pt-8 border-t border-white/10">
            <p>&copy; {new Date().getFullYear()} The Creative Home Group. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
