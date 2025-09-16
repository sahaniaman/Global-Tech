'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Mail, Phone, MapPin, Code, Palette, Cloud, Bot, MessageSquare, ChevronDown, ArrowRight, Star, Zap, Target, Users, Award, Database, Server, Smartphone, Monitor, Brain, Cpu, MessageCircle, Shield, Rocket, Lightbulb, CheckCircle, Clock, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'We build complete web applications from start to finish.',
      subtitle: 'End-to-End Web Solutions',
      detailedDescription: 'We handle everything from user interfaces to server logic and databases. Our team works with you to create web applications that work well and solve real problems.',
      features: ['Frontend Development', 'Backend APIs', 'Database Design', 'Deployment'],
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB'],
      benefits: [
        'One team for everything',
        'Faster development time',
        'Better communication',
        'Consistent quality',
        'Easier maintenance'
      ],
      process: [
        'Understanding your needs',
        'Planning the architecture',
        'Building the frontend',
        'Creating the backend',
        'Testing everything',
        'Launching and supporting'
      ]
    },
    {
      icon: Palette,
      title: 'Web Design',
      description: 'We create websites that look good and work well.',
      subtitle: 'Design That Works',
      detailedDescription: 'We focus on making websites that people enjoy using. Good design isn\'t just about looking nice - it\'s about making things easy and intuitive for your users.',
      features: ['UI Design', 'User Experience', 'Responsive Layouts', 'Brand Identity'],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'CSS', 'JavaScript'],
      benefits: [
        'Happy users',
        'Better conversion rates',
        'Mobile-friendly',
        'Brand consistency',
        'Easy to navigate'
      ],
      process: [
        'Learning about your business',
        'Creating wireframes',
        'Designing the look and feel',
        'Building interactive prototypes',
        'Testing with real users',
        'Handing off to developers'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'We help you move to the cloud and manage your infrastructure.',
      subtitle: 'Reliable Cloud Infrastructure',
      detailedDescription: 'Cloud services can save you money and give you more flexibility. We help you choose the right cloud setup and make sure everything runs smoothly.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Monitoring', 'Security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
      benefits: [
        'Lower costs',
        'Better reliability',
        'Easy scaling',
        'Automatic backups',
        'Global reach'
      ],
      process: [
        'Reviewing your current setup',
        'Planning the migration',
        'Setting up cloud infrastructure',
        'Moving your data and applications',
        'Testing everything works',
        'Ongoing monitoring and support'
      ]
    },
    {
      icon: Bot,
      title: 'AI Agent',
      description: 'We build AI tools that can help automate your business processes.',
      subtitle: 'Smart Automation',
      detailedDescription: 'AI can help automate repetitive tasks and provide insights from your data. We create custom AI solutions that fit your specific business needs.',
      features: ['Process Automation', 'Data Analysis', 'Custom AI Models', 'Integration'],
      technologies: ['Python', 'TensorFlow', 'OpenAI', 'APIs', 'Cloud Services'],
      benefits: [
        'Save time on routine tasks',
        'Better decision making',
        '24/7 operation',
        'Handle complex workflows',
        'Continuous improvement'
      ],
      process: [
        'Understanding your processes',
        'Identifying automation opportunities',
        'Preparing and cleaning data',
        'Building and training AI models',
        'Testing with real scenarios',
        'Deploying and monitoring'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Chatbot',
      description: 'We create chatbots that can talk to your customers and help them.',
      subtitle: 'Conversational AI',
      detailedDescription: 'Chatbots can handle customer questions 24/7 and free up your team for more complex issues. We build chatbots that understand natural language and integrate with your systems.',
      features: ['Natural Language', 'Multi-channel', 'Integration', 'Analytics'],
      technologies: ['Dialogflow', 'Rasa', 'Python', 'Web APIs', 'Messaging Platforms'],
      benefits: [
        'Always available support',
        'Faster response times',
        'Lower support costs',
        'Consistent answers',
        'Valuable customer insights'
      ],
      process: [
        'Mapping conversation flows',
        'Training the language model',
        'Connecting to your systems',
        'Testing with real conversations',
        'Deploying to your channels',
        'Improving based on feedback'
      ]
    }
  ]

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '10+' },
    { icon: Target, label: 'Projects Completed', value: '20' },
    { icon: Award, label: 'Awards Won', value: '1' },
    { icon: Zap, label: 'Years Experience', value: '2' }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Listen',
      description: 'We start by understanding what you need and what you want to achieve.',
      icon: Lightbulb
    },
    {
      step: '02',
      title: 'Plan',
      description: 'We figure out the best approach and create a clear plan.',
      icon: Target
    },
    {
      step: '03',
      title: 'Design',
      description: 'We create designs that look good and work well for your users.',
      icon: Palette
    },
    {
      step: '04',
      title: 'Build',
      description: 'We write clean, solid code to bring everything to life.',
      icon: Code
    },
    {
      step: '05',
      title: 'Test',
      description: 'We make sure everything works perfectly before launch.',
      icon: Shield
    },
    {
      step: '06',
      title: 'Launch',
      description: 'We go live and help you succeed long-term.',
      icon: Rocket
    }
  ]

  const technologies = [
    { name: 'Frontend', icon: Monitor, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: Server, items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { name: 'Cloud', icon: Cloud, items: ['AWS', 'Azure', 'Docker', 'Kubernetes'] },
    { name: 'AI/ML', icon: Brain, items: ['Python', 'TensorFlow', 'OpenAI', 'LangChain'] },
    { name: 'Mobile', icon: Smartphone, items: ['React Native', 'Flutter', 'iOS', 'Android'] },
    { name: 'DevOps', icon: Cpu, items: ['GitHub Actions', 'Docker', 'AWS', 'Monitoring'] }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Your message has been sent successfully!",
        })
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold"
            >
              Global Tech
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Services', 'Process', 'Technologies', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-black transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, black 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, black 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <Star className="w-8 h-8 mx-auto text-black mb-4" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
              Global
              <br />
              Tech
            </h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Web development services for your business
            </motion.p>
            <motion.p 
              className="text-lg mb-12 text-gray-500 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full stack development, web design, cloud solutions, AI agents, and chatbots
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-8 py-4 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We build web solutions that help your business grow
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  <div className="bg-white p-8 rounded-2xl border border-gray-200">
                    <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.detailedDescription}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-500 mb-3">What we do</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-500 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Benefits</h4>
                    <div className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <TrendingUp className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">How we work</h4>
                    <div className="space-y-3">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">{idx + 1}</span>
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Talk about {service.title}
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">About Global Tech</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Global Tech is a Web Development service Platform.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We work with you to understand your needs and build something that helps your business grow. No jargon, just good work.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {['Experienced', 'Reliable', 'Practical', 'Focused'].map((value, idx) => (
                    <motion.span
                      key={idx}
                      className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {value}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-black rounded-3xl flex items-center justify-center">
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Process</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              How we work with you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white p-8 rounded-3xl border border-black/10 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="technologies" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Technology Stack</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Technologies we use to build great things
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white p-8 rounded-3xl border border-black/10 text-center h-full">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{tech.name}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {tech.items.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Let's talk about your project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-black/10 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Send us a message</CardTitle>
                  <CardDescription className="text-gray-600">
                    Tell us about your project and we'll get back to you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-black/20 focus:border-black transition-colors"
                          placeholder="Anurag"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-black/20 focus:border-black transition-colors"
                          placeholder="anurag@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="border-black/20 focus:border-black transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="border-black/20 focus:border-black transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 py-3 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, text: 'nsebakan@gmail.com', label: 'Email' },
                    { icon: Phone, text: '+447741177919', label: 'Phone' },
                    { icon: MapPin, text: 'London, UK', label: 'Location' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{item.label}</div>
                        <div className="text-lg font-medium">{item.text}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-4">Global Tech</h3>
              <p className="text-gray-400 mb-8 text-lg">
                Web development services
              </p>
              <div className="flex justify-center space-x-8 mb-12">
                {[
                  { icon: Mail, href: 'nsebakan@gmail.com' },
                  { icon: Phone, href: '+447741177919' },
                  { icon: MapPin, href: '#' }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-500 text-sm">
                  © 2024 Global Tech. All rights reserved.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}