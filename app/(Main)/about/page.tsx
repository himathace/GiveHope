import { Heart, Users, Globe, Target, ArrowRight } from "lucide-react";

export default function About(){

    const stats = [
    { value: "5,000+", label: "Active NGOs" },
    { value: "120+", label: "Countries" },
    { value: "2M+", label: "Lives Impacted" },
    { value: "$50M+", label: "Funds Raised" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe in the power of empathy and caring for one another across all borders.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Together, we can achieve more. We foster connections that create lasting change.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our platform enables changemakers worldwide to reach those who need help most.",
    },
    {
      icon: Target,
      title: "Transparency",
      description: "We ensure every donation and action is tracked, verified, and impactful.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      name: "Aisha Patel",
      role: "Head of Partnerships",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    },
    {
      name: "David Okafor",
      role: "Community Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    },
  ];

  
    return (  
        <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
            {/* Hero Section */}
            <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                    Connecting Hearts,
                    <span className="text-gradient-hero block">Creating Change</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                    ImpactHub was founded with a simple mission: to make it easier for passionate 
                    people to connect with NGOs making a real difference in the world.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button>
                    Join Our Mission
                    <ArrowRight className="w-5 h-5" />
                    </button>
                    <button>
                    Contact Us
                    </button>
                </div>
                </div>
            </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                    <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                        {stat.value}
                    </p>
                    <p className="text-muted-foreground">{stat.label}</p>
                    </div>
                ))}
                </div>
            </div>
            </section>

            {/* Our Story */}
            <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-primary font-medium mb-2">Our Story</p>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Built by Changemakers, for Changemakers
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                    <p>
                        ImpactHub started in 2020 when our founders saw a gap in how NGOs 
                        connect with supporters. Despite the incredible work being done by 
                        organizations worldwide, many struggled to share their stories and 
                        reach people who wanted to help.
                    </p>
                    <p>
                        We built ImpactHub to bridge that gap – creating a platform where 
                        NGOs can showcase their work, share their stories, and connect with 
                        a global community of supporters ready to make a difference.
                    </p>
                    <p>
                        Today, we're proud to support thousands of organizations across 
                        120+ countries, helping them amplify their impact and reach the 
                        people who need it most.
                    </p>
                    </div>
                </div>
                <div className="relative">
                    <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
                    alt="Team collaboration"
                    className="rounded-2xl shadow-elevated"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-card">
                    <p className="font-display text-3xl font-bold text-primary">2020</p>
                    <p className="text-muted-foreground">Founded</p>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* Values */}
            <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                <p className="text-primary font-medium mb-2">Our Values</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    What Drives Us
                </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                    <div
                    key={value.title}
                    className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-smooth animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                ))}
                </div>
            </div>
            </section>

            {/* Team */}
            <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                <p className="text-primary font-medium mb-2">Our Team</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    Meet the People Behind ImpactHub
                </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {team.map((member, index) => (
                    <div
                    key={member.name}
                    className="text-center animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    >
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-card"
                    />
                    <h3 className="font-display text-lg font-semibold text-foreground">
                        {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                    </div>
                ))}
                </div>
            </div>
            </section>
        </main> 
        </div>
    );


}