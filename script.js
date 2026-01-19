// ===============================
// Experience Data
// ===============================

const experienceData = {
    'forge': {
        title: 'Innovation Engineer',
        company: 'Forge Innovation & Ventures',
        duration: 'Oct 2023 – May 2024',
        location: 'India',
        image: './forge-experience.jpeg',
        overview: 'Worked in a highly collaborative, innovation-driven environment contributing to multiple interdisciplinary projects spanning IoT, embedded systems, UI/UX, fintech, and 3D modelling.',
        keyProjects: [
            'Non-invasive fuel measurement system for industrial applications',
            'Robotic arm system for surgical use cases',
            'TakoPay: Digital UPI-based payment solution UI/UX and product design leadership',
        ],
        responsibilities: [
            'Developed and prototyped innovative solutions across multiple technology domains',
            'Led UI/UX and product design efforts for fintech application',
            'Mentored and guided students in prototype development',
            'Contributed to rapid prototyping workflows and design validation',
            'Translated early-stage ideas into functional prototypes',
        ],
        techs: ['IoT', 'Embedded Systems', 'UI/UX Design', 'Prototyping', 'Fintech', 'Product Design', '3D Modelling', 'Arduino'],
        impact: 'Gained strong exposure to real-world innovation workflows, applied engineering problem-solving, and the full product development lifecycle from concept to prototype.'
    },
    'narl': {
        title: 'Research Intern',
        company: 'National Atmospheric Research Lab (NARL)',
        duration: 'Jun 2023 – Aug 2023',
        location: 'Department of Space, India',
        image: './narl-experience.jpeg',
        overview: 'Worked on mission-critical systems under the guidance of Mr. Munirajulu (Scientist-D and Head of CDMG) in the Computer Data Management Group, supporting secure transmission of atmospheric and weather data from NARL to ISRO launch facilities.',
        keyProjects: [
            'High-reliability data communication channel design and validation',
            'Secure transmission of telemetry and control data to ISRO facilities',
            'Mission-critical atmospheric and weather data handling systems',
        ],
        responsibilities: [
            'Supported design and validation of high-reliability data communication systems',
            'Ensured accurate, interference-free transmission of scientific data',
            'Implemented secure data handling protocols for national space infrastructure',
            'Collaborated with senior scientists on system validation and testing',
            'Documented technical specifications and validation procedures',
        ],
        techs: ['Data Communication', 'Telemetry Systems', 'Systems Design', 'ISRO Integration', 'Scientific Data Handling', 'Network Security', 'Research Methodology'],
        impact: 'Gained valuable insight into large-scale scientific infrastructure, secure data handling practices, and the precision required in systems that directly support national space and atmospheric research programs.'
    },
    'ucd-demonstrator': {
        title: 'Demonstrator (Teaching Assistant)',
        company: 'University College Dublin — School of Computer Science',
        duration: '2025 – Present',
        location: 'Dublin, Ireland',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
        overview: 'Supporting 200+ students across three core modules—Software Engineering, Web Development, and Operating Systems—providing hands-on lab guidance, debugging support, and applied learning.',
        keyProjects: [
            'Guided students through practical labs and project implementations',
            'Helped teams apply software engineering practices (version control, testing)',
            'Supported web app development with React/TypeScript and REST APIs',
            'Assisted OS labs: processes, scheduling, memory, concurrency'
        ],
        responsibilities: [
            'Conduct lab sessions and provide real-time troubleshooting',
            'Clarify complex concepts and bridge theory to practice',
            'Assist with assignments, reviews, and structured feedback',
            'Support debugging across frontend, backend, and OS topics',
            'Mentor diverse cohorts and promote best engineering practices'
        ],
        modules: [
            { name: 'Software Engineering', details: 'Requirements, design patterns, testing, CI/CD, Git workflows (Java/Python projects).' },
            { name: 'Web Development', details: 'React, TypeScript, REST APIs, CSS/Tailwind, state management, accessibility, deployment.' },
            { name: 'Operating Systems', details: 'Processes/threads, IPC, synchronization, scheduling, memory management, Linux tooling.' }
        ],
        techs: [
            'Java', 'Python', 'React', 'TypeScript', 'HTML/CSS', 'Git/GitHub',
            'Linux', 'Docker', 'Node.js', 'Testing', 'CI/CD', 'VS Code'
        ],
        impact: 'Strengthened student outcomes through clear technical communication, effective mentoring, and practice-focused guidance across labs and projects.'
    }
};

// ===============================
// Experience Modal Handlers
// ===============================

function initExperienceModal() {
    const modal = document.getElementById('experienceModal');
    const backdrop = document.getElementById('experienceBackdrop');
    const closeBtn = document.getElementById('closeExperienceModal');
    const expandBtns = document.querySelectorAll('[data-expand]');

    if (!modal) {
        console.warn('Experience modal not found in DOM');
        return;
    }

    function openExperienceModal(experienceKey) {
        const exp = experienceData[experienceKey];
        if (!exp) {
            console.warn('Experience data not found for key:', experienceKey);
            return;
        }

        const modalBody = document.getElementById('experienceModalBody');
        if (!modalBody) {
            console.warn('Modal body not found');
            return;
        }

        // Build modules section if available
        let modulesHTML = '';
        if (exp.modules && exp.modules.length > 0) {
            modulesHTML = `
                <div class="modal-experience-section">
                    <h4>Modules Supported</h4>
                    <ul>
                        ${exp.modules.map(mod => `
                            <li><strong>${mod.name}:</strong> ${mod.details}</li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }

        modalBody.innerHTML = `
            <img src="${exp.image}" alt="${exp.title}" class="modal-experience-image" onerror="this.src='https://via.placeholder.com/900x300?text=${encodeURIComponent(exp.company)}'">
            
            <h2 class="modal-experience-title">${exp.title}</h2>
            
            <div class="modal-experience-meta">
                <div class="modal-experience-meta-item">
                    <span class="modal-experience-meta-label">Company</span>
                    <span class="modal-experience-meta-value">${exp.company}</span>
                </div>
                <div class="modal-experience-meta-item">
                    <span class="modal-experience-meta-label">Duration</span>
                    <span class="modal-experience-meta-value">${exp.duration}</span>
                </div>
                <div class="modal-experience-meta-item">
                    <span class="modal-experience-meta-label">Location</span>
                    <span class="modal-experience-meta-value">${exp.location}</span>
                </div>
            </div>

            <div class="modal-experience-section">
                <h4>Overview</h4>
                <p>${exp.overview}</p>
            </div>

            ${modulesHTML}

            <div class="modal-experience-section">
                <h4>Key Projects & Contributions</h4>
                <ul>
                    ${exp.keyProjects.map(project => `<li>${project}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-experience-section">
                <h4>Responsibilities</h4>
                <ul>
                    ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-experience-section">
                <h4>Technologies & Tools</h4>
                <div class="modal-experience-tech-list">
                    ${exp.techs.map(tech => `<span class="modal-tech-badge">${tech}</span>`).join('')}
                </div>
            </div>

            <div class="modal-experience-section">
                <h4>Impact & Learning</h4>
                <p>${exp.impact}</p>
            </div>
        `;

        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeExperienceModal() {
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    expandBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const experienceKey = btn.getAttribute('data-expand');
            openExperienceModal(experienceKey);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeExperienceModal);
    if (backdrop) backdrop.addEventListener('click', closeExperienceModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
            closeExperienceModal();
        }
    });
}

// ===============================
// Project Data
// ===============================

const projectsData = {
    'dublin-bikes': {
        title: 'Dublin Bikes - Smart Urban Mobility',
        org: 'University College Dublin',
        description: 'A comprehensive real-time bike-sharing analytics platform built with Python Flask and React, featuring predictive modeling with scikit-learn to forecast bike availability and demand patterns across Dublin city.',
        highlights: [
            'Real-time bike availability tracking across 80+ stations',
            'AI/ML model predicting bike demand with 87% accuracy',
            'Interactive Leaflet.js map visualization',
            'PostgreSQL database with optimized queries',
            'JWT-based authentication system'
        ],
        techs: ['Python', 'Flask', 'React', 'Scikit-Learn', 'PostgreSQL', 'LeafletJS', 'Docker', 'AWS'],
        problemSolved: 'Urban commuters needed reliable real-time bike availability data and intelligent predictions to plan their journeys efficiently. Our solution provided data-driven insights into bike distribution patterns.',
        impact: 'Earned Distinction Grade. The platform improved bike station utilization predictions, helping city planners optimize station locations and inventory management.'
    },
    'smarttrip-nyc': {
        title: 'SmartTrip NYC - Intelligent Travel Planning',
        org: 'Full-Stack Development Project',
        description: 'Full-stack travel planning application powered by AI recommendations and Google Maps integration. Built with React/TypeScript frontend and Flask backend, deployed on AWS.',
        highlights: [
            'AI-powered travel recommendations based on user preferences',
            'Google Maps integration for real-time routing',
            'User authentication and saved trip management',
            'Real-time weather and event data integration',
            'Responsive mobile-first design',
            'Docker containerized deployment on AWS EC2'
        ],
        techs: ['React', 'TypeScript', 'Flask', 'Google Maps API', 'AWS EC2', 'RDS', 'Docker', 'JWT'],
        problemSolved: 'Travelers struggled with planning multi-destination trips in unfamiliar cities. SmartTrip provides personalized recommendations, integrated maps, and weather data in one platform.',
        impact: 'Demonstrated full-stack proficiency with cloud deployment. The app serves as a portfolio piece showcasing modern web development practices and API integration.'
    },
    'smart-jacket': {
        title: 'Smart Safety Jacket – Coal Miner Protection',
        org: 'Team Innovation Project',
        description: 'IoT-based wearable system designed for real-time health monitoring and safety alerts in hazardous mining environments. Features embedded sensors for vital signs and gas detection.',
        highlights: [
            'Embedded C firmware for Arduino-based sensor integration',
            'Real-time vital sign monitoring (heart rate, body temperature)',
            'Gas leak detection with instant alerts via GSM',
            'RFID-based worker identification and geofencing',
            'Low-power design for extended field operation',
            'Cloud logging of safety events'
        ],
        techs: ['Embedded C', 'Arduino', 'IoT', 'GSM Module', 'RFID', 'Sensors', 'Cloud Logging'],
        problemSolved: 'Coal miners face critical safety risks including gas exposure, heat stress, and communication issues in underground environments. The Smart Safety Jacket provides real-time monitoring and emergency alerts.',
        impact: 'Won team innovation award. Prototype demonstrated potential for significant real-world impact in occupational safety, attracting interest from mining operations.'
    },
    'forge-fuel': {
        title: 'Capacitance-based Fuel Level Sensing',
        org: 'Prototype Lab (Forge Innovation & Ventures)',
        description: 'Non-intrusive fuel tank level sensing system using capacitance measurement techniques. Designed as a drop-in replacement for traditional float sensors, avoiding intrusion into fuel tanks.',
        highlights: [
            'Capacitive sensing circuit design and calibration',
            'Arduino-based signal processing and conversion',
            'Non-invasive measurement — no tank penetration required',
            'Python-based data visualization and validation',
            'Tested on multiple fuel tank geometries',
            'Low-cost BOM with high accuracy'
        ],
        techs: ['Embedded C', 'Arduino', 'Signal Processing', 'Python', 'Electrical Design'],
        problemSolved: 'Traditional float-based fuel sensors require tank penetration and are prone to corrosion. This capacitive solution is non-invasive, reliable, and suitable for industrial and automotive applications.',
        impact: 'Prototype successfully demonstrated feasibility for industrial fuel measurement systems. Potential commercial applications in automotive and heavy machinery industries.'
    },
    'juice-shop': {
        title: 'OWASP Juice Shop – Cybersecurity Analysis',
        org: 'Indian Servers Company (Internship)',
        description: 'Comprehensive web application security testing and vulnerability exploitation of OWASP Juice Shop. Demonstrated attack vectors, documented findings, and implemented secure fixes.',
        highlights: [
            'Identified and exploited SQL Injection vulnerabilities',
            'Cross-Site Scripting (XSS) attack demonstrations',
            'Cross-Site Request Forgery (CSRF) vulnerability analysis',
            'Broken Authentication testing and bypass techniques',
            'API security testing with Postman',
            'Documented remediation strategies for each vulnerability'
        ],
        techs: ['Burp Suite', 'OWASP ZAP', 'Postman', 'SQL Injection', 'XSS', 'CSRF', 'Authentication'],
        problemSolved: 'Organizations need to understand common web vulnerabilities to secure their applications. This project demonstrates real attack vectors and defense mechanisms.',
        impact: 'Completed comprehensive security audit report. Enhanced understanding of OWASP Top 10 and modern penetration testing methodologies.'
    }
};

// ===============================
// Project Modal Handlers
// ===============================

function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const backdrop = document.getElementById('projectBackdrop');
    const closeBtn = document.getElementById('closeProjectModal');
    const projectBtns = document.querySelectorAll('[data-project]');

    if (!modal) {
        console.warn('Project modal not found in DOM');
        return;
    }

    function openProjectModal(projectKey) {
        const proj = projectsData[projectKey];
        if (!proj) {
            console.warn('Project data not found for key:', projectKey);
            return;
        }

        const modalBody = document.getElementById('projectModalBody');
        if (!modalBody) {
            console.warn('Project modal body not found');
            return;
        }

        modalBody.innerHTML = `
            <h2 class="modal-project-title">${proj.title}</h2>
            <p class="modal-project-org">${proj.org}</p>
            <p class="modal-project-desc">${proj.description}</p>

            <div class="modal-section">
                <h4>Key Highlights</h4>
                <ul>
                    ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <h4>Problem Solved</h4>
                <p>${proj.problemSolved}</p>
            </div>

            <div class="modal-section">
                <h4>Impact & Outcomes</h4>
                <p>${proj.impact}</p>
            </div>

            <div class="modal-section">
                <h4>Technologies Used</h4>
                <div class="modal-tech-list">
                    ${proj.techs.map(tech => `<span class="modal-tech-badge">${tech}</span>`).join('')}
                </div>
            </div>
        `;

        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    projectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectKey = btn.getAttribute('data-project');
            openProjectModal(projectKey);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
    if (backdrop) backdrop.addEventListener('click', closeProjectModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
            closeProjectModal();
        }
    });
}

// ===============================
// Project Filtering
// ===============================

function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.projects-filter .filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || (category && category.includes(filter))) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
}

// ===============================
// Achievement Filtering
// ===============================

function initAchievementFilters() {
    const filterBtns = document.querySelectorAll('.achievements-filter .filter-btn');
    const achievementCards = document.querySelectorAll('.achievement-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            achievementCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
}

// ===============================
// Theme Toggle
// ===============================

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'dark';

    html.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'light' ? '☀️' : '🌙';
    });
}

// ===============================
// Contact Form Handler
// ===============================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const mailtoLink = `mailto:charansingu09@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        window.location.href = mailtoLink;
    });
}

// ===============================
// Video modal init
// ===============================

function initVideoModal() {
  const modal = document.getElementById('videoModal');
  const backdrop = document.getElementById('videoBackdrop');
  const closeBtn = document.getElementById('closeVideoModal');
  const modalBody = document.getElementById('videoModalBody');
  const triggers = document.querySelectorAll('[data-video]');

  if (!modal || !modalBody) return;

  function openVideoModal(url) {
    if (!url) return;
    modalBody.innerHTML = `
      <video id="juiceVideo" class="project-video" controls autoplay>
        <source src="${url}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalBody.innerHTML = ''; // stop and clear
  }

  triggers.forEach(btn => {
    btn.addEventListener('click', () => openVideoModal(btn.getAttribute('data-video')));
  });

  if (closeBtn) closeBtn.addEventListener('click', closeVideoModal);
  if (backdrop) backdrop.addEventListener('click', closeVideoModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeVideoModal();
  });
}

// ===============================
// Initialize All on DOM Ready
// ===============================

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initExperienceModal();
    initProjectModal();
    initProjectFilters();
    initAchievementFilters();
    initContactForm();
    initVideoModal();
    console.log('✅ All modules initialized successfully');
});

// Append Demonstrator role to existing experience data (no redeclare)
experienceData['ucd-demonstrator'] = {
  title: 'Demonstrator (Teaching Assistant)',
  company: 'University College Dublin — School of Computer Science',
  duration: '2025 – Present',
  location: 'Dublin, Ireland',
  image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
  overview: 'Supporting 200+ students across three core modules—Software Engineering, Web Development, and Operating Systems—providing hands-on lab guidance, debugging support, and applied learning.',
  keyProjects: [
    'Guided students through practical labs and project implementations',
    'Helped teams apply software engineering practices (version control, testing)',
    'Supported web app development with React/TypeScript and REST APIs',
    'Assisted OS labs: processes, scheduling, memory, concurrency'
  ],
  responsibilities: [
    'Conduct lab sessions and provide real-time troubleshooting',
    'Clarify complex concepts and bridge theory to practice',
    'Assist with assignments, reviews, and structured feedback',
    'Support debugging across frontend, backend, and OS topics',
    'Mentor diverse cohorts and promote best engineering practices'
  ],
  modules: [
    { name: 'Software Engineering', details: 'Requirements, design patterns, testing, CI/CD, Git workflows (Java/Python projects).' },
    { name: 'Web Development', details: 'React, TypeScript, REST APIs, CSS/Tailwind, state management, accessibility, deployment.' },
    { name: 'Operating Systems', details: 'Processes/threads, IPC, synchronization, scheduling, memory management, Linux tooling.' }
  ],
  techs: [
    'Java', 'Python', 'React', 'TypeScript', 'HTML/CSS', 'Git/GitHub',
    'Linux', 'Docker', 'Node.js', 'Testing', 'CI/CD', 'VS Code'
  ],
  impact: 'Strengthened student outcomes through clear technical communication, effective mentoring, and practice-focused guidance across labs and projects.'
};
