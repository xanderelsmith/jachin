import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Cpu, 
  Battery, 
  Settings, 
  Wrench, 
  Home, 
  Activity, 
  GraduationCap,
  ChevronRight,
  ChevronLeft,
  MonitorPlay,
  X,
  Clock,
  Users,
  MessageCircle,
  AlertTriangle
} from 'lucide-react';
import './index.css';

const coreCourses = [
  { 
    id: 'c1',
    image: '/card_electrical.png',
    icon: <Activity size={24} />, 
    title: 'Electrical Technology', 
    desc: 'Basic rudiments and foundational principles of electrical systems.',
    details: 'Dive deep into the physics and application of electricity. You will learn about voltage, current, resistance, Ohm\'s law, and series/parallel circuits.',
    teachingMethod: '50% Theory / 50% Practical. We begin with classroom knowledge and immediately transition to breadboarding and multimeter testing in the lab.',
    targetAudience: 'Absolute beginners and enthusiasts wanting a solid foundation in electrical systems.'
  },
  { 
    id: 'c2',
    image: '/card_electronic.png',
    icon: <Cpu size={24} />, 
    title: 'Electronic Technology', 
    desc: 'Comprehensive introduction to modern electronic technology.',
    details: 'Understand semiconductors, diodes, transistors, and basic logic gates. Learn how modern consumer electronics process signals.',
    teachingMethod: 'Knowledge-first approach followed by intense practical soldering and circuit building sessions.',
    targetAudience: 'Aspiring technicians and hobbyists looking to understand microelectronics.'
  },
  { 
    id: 'c3',
    image: '/card_component.png',
    icon: <MonitorPlay size={24} />, 
    title: 'Component ID', 
    desc: 'Accurate identification and analysis of electronic components.',
    details: 'Learn to identify resistors, capacitors, inductors, ICs, and surface-mount devices (SMD) visually and via schematics.',
    teachingMethod: 'Hands-on component sorting, schematic reading exercises, and datasheet analysis.',
    targetAudience: 'Anyone looking to repair or design circuits, from novices to intermediate learners.'
  },
  { 
    id: 'c4',
    image: '/card_power.png',
    icon: <Battery size={24} />, 
    title: 'Power Components', 
    desc: 'Mastery of electrical power components and their functions.',
    details: 'Focus on heavy-duty components: transformers, relays, contactors, and high-power capacitors.',
    teachingMethod: 'Practical tear-downs of power supplies and rigorous safety-first theoretical instruction.',
    targetAudience: 'Industrial technicians and those interested in high-voltage or power systems.'
  },
  { 
    id: 'c5',
    image: '/card_circuit.png',
    icon: <Settings size={24} />, 
    title: 'Application Circuits', 
    desc: 'Basic component application circuits and their behaviors.',
    details: 'Learn how to combine components to create useful sub-circuits like amplifiers, oscillators, and timers.',
    teachingMethod: 'Project-based learning. Students will design and prototype functional circuits on breadboards and PCBs.',
    targetAudience: 'Inventors, students, and engineers looking to design custom hardware.'
  },
  { 
    id: 'c6',
    image: '/card_control.png',
    icon: <Zap size={24} />, 
    title: 'Power Control', 
    desc: 'Practical implementation of power control circuit diagrams.',
    details: 'Master motor control, switching regulators, thyristors, and industrial control panels.',
    teachingMethod: 'Heavy practical emphasis involving wiring real-world contactors and building control panels from blueprints.',
    targetAudience: 'Industrial electricians, factory technicians, and advanced electronics students.'
  }
];

const specialCourses = [
  { 
    id: 's1',
    image: '/testing_inverter.png',
    icon: <Battery size={24} />, 
    title: 'Inverter & UPS', 
    desc: 'Professional installation and complex repairs of Inverter and UPS systems.',
    details: 'Complete breakdown of inverter topologies, battery management systems (BMS), and pure sine wave generation.',
    teachingMethod: 'Real-world fault finding. Students will repair broken inverters and perform live solar/battery installations.',
    targetAudience: 'Solar installers, electricians, and technicians capitalizing on the renewable energy boom.'
  },
  { 
    id: 's2',
    image: '/electronic_repair.png',
    icon: <Home size={24} />, 
    title: 'Domestic Electronics', 
    desc: 'Comprehensive diagnostics and repairs for home use electronics.',
    details: 'Repair techniques for TVs, audio systems, microwaves, and other common household appliances.',
    teachingMethod: 'Diagnostic-first training. Learn how to isolate faults using multimeters and oscilloscopes before replacing parts.',
    targetAudience: 'Individuals wanting to start a lucrative home appliance repair business.'
  },
  { 
    id: 's3',
    image: '/electrical_panel.png',
    icon: <Wrench size={24} />, 
    title: 'Stabilizer Repair', 
    desc: 'In-depth troubleshooting and repair of voltage stabilizers.',
    details: 'Understand servo-motor and relay-type automatic voltage regulators (AVR). Learn transformer rewinding basics.',
    teachingMethod: 'Hands-on practical repair of burnt stabilizers, calibrating output voltages, and replacing control boards.',
    targetAudience: 'Technicians operating in areas with unstable power grids requiring constant equipment protection.'
  }
];

const ExpandableCard = ({ item, isSpecial }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      layout
      onClick={() => setIsOpen(!isOpen)}
      className={`card ${isOpen ? 'expanded' : ''}`}
      style={{ cursor: 'pointer' }}
      whileHover={{ scale: isOpen ? 1 : 1.03, translateY: isOpen ? 0 : -5 }}
      transition={{ layout: { duration: 0.4, type: "spring", bounce: 0.2 } }}
    >
      <div className="card-image-header">
        <img src={item.image} alt={item.title} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,18,22,1) 0%, transparent 100%)' }} />
      </div>

      <div className="card-content">
        <motion.div layout="position" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '-40px', position: 'relative', zIndex: 2 }}>
          <div className={`card-icon ${isSpecial ? 'amber' : ''}`}>{item.icon}</div>
          <AnimatePresence>
            {isOpen && (
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                className="close-btn"
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
              >
                <X size={20} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
        
        <motion.h3 layout="position" className="card-title">{item.title}</motion.h3>
        <motion.p layout="position" className="card-desc" style={{ marginBottom: isOpen ? '1rem' : 0 }}>
          {item.desc}
        </motion.p>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="card-details-container"
            >
              <div className="detail-section">
                <h4>Course Details</h4>
                <p>{item.details}</p>
              </div>
              <div className="detail-section">
                <h4>How We Teach</h4>
                <p>{item.teachingMethod}</p>
              </div>
              <div className="detail-section">
                <h4>Target Audience</h4>
                <p>{item.targetAudience}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <motion.div layout="position" className="click-indicator">
            Click to learn more
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const sliderImages = [
  { src: '/electrical_panel.png', alt: 'Industrial Electrical Panel' },
  { src: '/soldering_circuit.png', alt: 'Precision Circuit Soldering' },
  { src: '/testing_inverter.png', alt: 'Advanced Inverter Installation' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section" style={{ paddingTop: '2rem' }}>
      <h2 className="section-title">Practical Excellence</h2>
      <p className="section-subtitle">Stop reading textbooks. Start building in the lab.</p>
      
      <div className="slider-container" style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', height: '500px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={sliderImages[currentIndex].src}
            alt={sliderImages[currentIndex].alt}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}
          />
        </AnimatePresence>

        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,12,0.8) 0%, transparent 40%)' }} />
        
        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <motion.h3 
            key={`title-${currentIndex}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}
          >
            {sliderImages[currentIndex].alt}
          </motion.h3>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={prevSlide} className="close-btn" style={{ background: 'rgba(0,0,0,0.5)' }}><ChevronLeft size={24} color="#fff" /></button>
            <button onClick={nextSlide} className="close-btn" style={{ background: 'rgba(0,0,0,0.5)' }}><ChevronRight size={24} color="#fff" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

const RegistrationForm = () => {
  return (
    <section id="register" className="section highlight-section" style={{ background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Secure Your Spot Before It's Too Late
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem', color: 'var(--accent-secondary)' }}
        >
          Over 150+ engineers have accelerated their careers. Don't be left behind.
        </motion.p>
        
        <motion.div 
          className="form-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" className="form-control" placeholder="Enter your full name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" className="form-control" placeholder="Enter your phone number" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="course">Desired Program</label>
              <select id="course" className="form-control" required>
                <option value="">Select a training program...</option>
                <optgroup label="Core Training">
                  <option value="electrical">Electrical Technology</option>
                  <option value="electronic">Electronic Technology</option>
                  <option value="power_control">Power Control</option>
                </optgroup>
                <optgroup label="Specialized">
                  <option value="inverter">Inverter & UPS</option>
                  <option value="domestic">Domestic Electronics</option>
                  <option value="stabilizer">Stabilizer Repair</option>
                </optgroup>
                <optgroup label="Advanced">
                  <option value="topup">Graduate Top-up (OND/HND/BSc)</option>
                </optgroup>
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1.2rem', fontSize: '1.1rem' }}>
              Reserve My Seat Now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const CountdownBanner = () => {
  const calculateTimeLeft = () => {
    // Target: July 30, 2026
    const difference = +new Date('2026-07-30T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
        background: 'rgba(18, 18, 22, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--accent-secondary)',
        borderRadius: '12px',
        padding: '1.5rem 3rem',
        boxShadow: '0 0 20px rgba(255, 170, 0, 0.2)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ background: 'rgba(255, 170, 0, 0.15)', padding: '0.75rem', borderRadius: '50%' }}>
          <AlertTriangle size={24} color="var(--accent-secondary)" />
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>High Demand</div>
          <div style={{ color: 'var(--accent-secondary)', fontWeight: 'bold' }}>Strictly 30 spots remaining!</div>
        </div>
      </div>

      <div style={{ width: '1px', height: '40px', background: 'var(--border-color)', margin: '0 1rem' }} className="divider" />

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Clock size={24} color="var(--accent-secondary)" />
        <div style={{ display: 'flex', gap: '1rem', textAlign: 'center' }}>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                {String(value).padStart(2, '0')}
              </span>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
        background: scrolled ? 'rgba(10, 10, 12, 0.95)' : 'rgba(10, 10, 12, 0.8)',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div className="nav-brand">
          <Zap size={28} color="#00d4ff" />
          <span>JACHINTECH</span>
        </div>
        <div className="nav-links">
          <a href="#core" className="nav-link">Core Training</a>
          <a href="#special" className="nav-link">Specialization</a>
          <a href="#advanced" className="nav-link">Top-up Program</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="grid-overlay"></div>
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Don't Let Your Degree <br />
          <span style={{ color: 'var(--accent-primary)' }}>Collect Dust.</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontSize: '1.3rem' }}
        >
          The industry demands <strong>practical</strong> experience. Join Jachin Technologies and master real-world Electrical and Electronic skills before the next batch fills up.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#register" className="btn btn-primary" style={{ background: 'var(--accent-primary)', color: '#000' }}>
            Claim Your Spot Now
          </a>
          <a href="#core" className="btn btn-secondary">
            See Programs <ChevronRight size={18} />
          </a>
        </motion.div>

        <CountdownBanner />
      </section>

      {/* Core Training Programs */}
      <section id="core" className="section">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          Core Training Programs
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          Stop memorizing. Start building.
        </motion.p>

        <motion.div 
          className="grid-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {coreCourses.map((course) => (
            <ExpandableCard key={course.id} item={course} isSpecial={false} />
          ))}
        </motion.div>
      </section>

      {/* Special Training Section */}
      <section id="special" className="section highlight-section">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          High-Income Specializations
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Dominate lucrative technical niches
        </motion.p>

        <motion.div 
          className="grid-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {specialCourses.map((special) => (
            <ExpandableCard key={special.id} item={special} isSpecial={true} />
          ))}
        </motion.div>
      </section>

      {/* Image Slider Section */}
      <ImageSlider />

      {/* Advanced / Graduate Topup (Alternating Layout) */}
      <section id="advanced" className="section" style={{ background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ flex: '1 1 500px' }}
          >
            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid var(--border-color)' }}>
              <img src="/graduates_fomo.png" alt="Engineering Graduates" style={{ width: '100%', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,12,0.9) 0%, transparent 60%)' }} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ flex: '1 1 400px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(0, 212, 255, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                <GraduationCap size={32} color="var(--accent-primary)" />
              </div>
              <h2 style={{ fontSize: '2.5rem', margin: 0, lineHeight: 1.1 }}>Graduate Top-up Training</h2>
            </div>
            
            <p style={{ color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              For Engineering Graduates (OND, HND, BSc.)
            </p>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Are you a University Grad or Electrical Engineer who knows the theory but struggles with a multimeter? <strong style={{ color: '#fff' }}>Employers are hiring technicians who can DO, not just those who KNOW.</strong>
            </p>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Don't lose out on high-paying industry roles. Bridge the gap between classroom theory and real-world execution. Fast-track your hands-on expertise in <span style={{ color: 'var(--text-primary)' }}>Electronics</span> and <span style={{ color: 'var(--text-primary)' }}>Power & Machines</span> with our intensive practical lab sessions.
            </p>

            <a href="#register" className="btn btn-primary" style={{ display: 'inline-flex', padding: '1.2rem 2rem', fontSize: '1.1rem', width: 'auto' }}>
              Join The Top-up Batch <ChevronRight size={20} />
            </a>
          </motion.div>

        </div>
      </section>

      {/* Registration Form */}
      <RegistrationForm />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>JACHINTECH</h3>
            <p>Empowering the next generation of electrical and electronic engineers through practical, industry-standard training.</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Contact</h4>
            <p>Email: info@jachintech.com</p>
            <p>Phone: +234 (0) 901 614 7127</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Jachin Technologies Limited. All rights reserved.
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/2349016147127" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

export default App;
