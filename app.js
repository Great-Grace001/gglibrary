// --- REAL JAMB QUESTIONS DATA (Expanded) ---
const coreQuestions = {
  'Mathematics': [
    { text: "If log₁₀2 = 0.3010 and log₁₀3 = 0.4771, evaluate log₁₀12.", options: ["0.7781", "1.0791", "1.2552", "1.7781"], correct: 1, explanation: "log₁₀12 = log₁₀(4 × 3) = 2log₁₀2 + log₁₀3 = 2(0.3010) + 0.4771 = 1.0791", year: "2019" },
    { text: "Solve for x: 3^(2x) - 4(3^x) + 3 = 0", options: ["x = 0 or 1", "x = 1 or 2", "x = -1 or 0", "x = 3 or 1"], correct: 0, explanation: "Let y = 3^x. y² - 4y + 3 = 0 => (y-3)(y-1)=0. y=3,1. 3^x=3=>x=1, 3^x=1=>x=0.", year: "2020" },
    { text: "Find the derivative of y = sin(2x)", options: ["cos(2x)", "2cos(2x)", "-2cos(2x)", "-cos(2x)"], correct: 1, explanation: "Chain rule: d/dx(sin(2x)) = cos(2x) * d/dx(2x) = 2cos(2x).", year: "2018" },
    { text: "Probability of obtaining a number less than 3 on a fair die?", options: ["1/6", "1/3", "1/2", "2/3"], correct: 1, explanation: "{1, 2} are less than 3. 2/6 = 1/3.", year: "2021" },
    { text: "If 2nd and 5th terms of a G.P are 6 and 48, find sum of first 4 terms.", options: ["24", "45", "15", "30"], correct: 1, explanation: "ar=6, ar⁴=48. r³=8, r=2. a=3. S₄=3(16-1)/1 = 45.", year: "2022" },
    { text: "Evaluate ∫(2x + 1)dx from 0 to 2.", options: ["4", "6", "8", "10"], correct: 1, explanation: "[x² + x] from 0 to 2 = (4+2) - 0 = 6.", year: "2017" },
    { text: "Find the inverse of matrix A = [[2, 1], [1, 1]]", options: ["[[1, -1], [-1, 2]]", "[[1, 1], [1, 2]]", "[[-1, 1], [1, -2]]", "[[2, -1], [-1, 1]]"], correct: 0, explanation: "Det = 2-1=1. Adj = [[1, -1], [-1, 2]]. Inverse = 1/1 * Adj.", year: "2019" },
    { text: "Convert 11011₂ to base 10.", options: ["25", "27", "29", "31"], correct: 1, explanation: "16+8+0+2+1 = 27.", year: "2015" },
    { text: "The gradient of the curve y = 2x³ - 5x at x = 1 is:", options: ["1", "2", "4", "6"], correct: 0, explanation: "dy/dx = 6x² - 5. At x=1, 6(1) - 5 = 1.", year: "2020" },
    { text: "If y varies inversely as x and y=4 when x=2, find y when x=8.", options: ["1", "2", "4", "8"], correct: 0, explanation: "y = k/x. 4 = k/2 => k=8. y = 8/8 = 1.", year: "2016" }
  ],
  'English': [
    { text: "Nearest in meaning: The man is known for his <u>candour</u>.", options: ["Ability", "Freedom", "Frankness", "Kindness"], correct: 2, explanation: "Candour means frankness or openness.", year: "2020" },
    { text: "Same vowel sound as b<u>ea</u>t:", options: ["head", "seat", "threat", "dead"], correct: 1, explanation: "/i:/ sound.", year: "2019" },
    { text: "Opposite in meaning: The soldier was <u>gallant</u>.", options: ["Brave", "Cowardly", "Strong", "Foolish"], correct: 1, explanation: "Gallant means brave. Opposite is Cowardly.", year: "2018" },
    { text: "Choose the correct spelling:", options: ["Embarasment", "Embarrassment", "Embarrasment", "Embarassment"], correct: 1, explanation: "Double r, double s.", year: "2021" },
    { text: "He was charged ___ murder.", options: ["with", "for", "of", "on"], correct: 0, explanation: "Charged 'with' a crime.", year: "2017" },
    { text: "The boy ___ the book on the table yesterday.", options: ["lay", "laid", "lied", "lain"], correct: 1, explanation: "Past tense of 'lay' (to place) is 'laid'.", year: "2016" },
    { text: "Nearest in meaning: The plan was <u>futile</u>.", options: ["Successful", "Useless", "Complex", "Easy"], correct: 1, explanation: "Futile means useless or ineffective.", year: "2019" },
    { text: "Question tag: She is a teacher, ___?", options: ["isn't she", "is she", "wasn't she", "doesn't she"], correct: 0, explanation: "Positive statement takes negative tag.", year: "2020" },
    { text: "Idiom: To 'let the cat out of the bag' means:", options: ["To release a pet", "To reveal a secret", "To make a mistake", "To be angry"], correct: 1, explanation: "Means to reveal a secret.", year: "2015" },
    { text: "Stress pattern: PHO-to-graph", options: ["1st syllable", "2nd syllable", "3rd syllable", "None"], correct: 0, explanation: "Stress is on the first syllable.", year: "2022" }
  ],
  'Physics': [
    { text: "A body of mass 2kg moves with a velocity of 10m/s. Calculate its kinetic energy.", options: ["10J", "20J", "100J", "200J"], correct: 2, explanation: "K.E = 1/2 mv² = 0.5 * 2 * 100 = 100J.", year: "2018" },
    { text: "Which of the following is a scalar quantity?", options: ["Velocity", "Force", "Speed", "Acceleration"], correct: 2, explanation: "Speed has magnitude but no direction.", year: "2019" }
  ],
  'Chemistry': [
    { text: "The pH of a neutral solution at 25°C is:", options: ["0", "1", "7", "14"], correct: 2, explanation: "Neutral pH is 7.", year: "2020" },
    { text: "Which gas is evolved when calcium reacts with cold water?", options: ["Oxygen", "Hydrogen", "Chlorine", "Nitrogen"], correct: 1, explanation: "Ca + 2H₂O -> Ca(OH)₂ + H₂.", year: "2017" }
  ],
  'Biology': [
    { text: "The basic unit of classification is:", options: ["Genus", "Species", "Family", "Order"], correct: 1, explanation: "Species is the fundamental unit of classification.", year: "2018" },
    { text: "Which of these is not a function of the liver?", options: ["Deamination", "Bile production", "Ultrafiltration", "Detoxification"], correct: 2, explanation: "Ultrafiltration occurs in the kidney, not the liver.", year: "2019" }
  ],
  'Economics': [
    { text: "The law of demand states that, ceteris paribus:", options: ["Price and quantity are directly related", "Price and quantity are inversely related", "Demand creates its own supply", "Supply creates its own demand"], correct: 1, explanation: "As price increases, quantity demanded decreases (inverse relationship).", year: "2020" },
    { text: "Opportunity cost is defined as:", options: ["Money cost", "Real cost", "Alternative forgone", "Variable cost"], correct: 2, explanation: "It is the value of the next best alternative forgone.", year: "2016" }
  ],
  'Government': [
    { text: "A system of government where power is shared between central and component units is:", options: ["Unitary", "Federal", "Confederal", "Monarchical"], correct: 1, explanation: "Federalism involves power sharing between tiers of government.", year: "2018" },
    { text: "The first military head of state in Nigeria was:", options: ["Yakubu Gowon", "Aguiyi Ironsi", "Murtala Muhammed", "Olusegun Obasanjo"], correct: 1, explanation: "Aguiyi Ironsi became Head of State in Jan 1966.", year: "2015" }
  ],
  'Literature': [
    { text: "A poem of fourteen lines is called a:", options: ["Ballad", "Sonnet", "Ode", "Elegy"], correct: 1, explanation: "A sonnet is a 14-line poem.", year: "2019" },
    { text: "The main character in a literary work is the:", options: ["Antagonist", "Protagonist", "Villain", "Foil"], correct: 1, explanation: "The protagonist is the central character.", year: "2020" }
  ],
  'CRS': [
    { text: "Who was the first king of Israel?", options: ["David", "Solomon", "Saul", "Samuel"], correct: 2, explanation: "Saul was the first king anointed by Samuel.", year: "2017" },
    { text: "The sermon on the mount is found in the gospel of:", options: ["Mark", "Luke", "John", "Matthew"], correct: 3, explanation: "Matthew Chapters 5-7.", year: "2018" }
  ],
  'Commerce': [
    { text: "Production ends when goods reach the:", options: ["Wholesaler", "Retailer", "Consumer", "Warehouse"], correct: 2, explanation: "Production is complete only when goods reach the final consumer.", year: "2019" },
    { text: "A cheque which has been written more than six months ago is:", options: ["Stale", "Dishonoured", "Post-dated", "Crossed"], correct: 0, explanation: "A cheque older than 6 months is a stale cheque.", year: "2020" }
  ]
};

const emailServiceConfig = {
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
  serviceId: 'YOUR_EMAILJS_SERVICE_ID',
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID'
};

// --- APP LOGIC ---
const app = {
  state: {
    currentScreen: 'signup',
    subject: 'Mathematics',
    questions: [],
    currentIndex: 0,
    answers: {}, 
    score: 0,
    timer: 120 * 60, 
    timerInterval: null,
    mode: 'exam', 
    isSubmitted: false,
    user: null,
    registeredUser: null,
    finalScore: 0
  },

  init() {
    lucide.createIcons();
    const savedUser = localStorage.getItem('registeredUser');
    if (savedUser) {
      this.state.registeredUser = JSON.parse(savedUser);
      this.showScreen('login');
    } else {
      this.showScreen('signup');
    }
  },

  isLikelyRealEmail(email) {
    const normalizedEmail = email.trim().toLowerCase();
    const strictEmailPattern = /^[a-z0-9](?:[a-z0-9._%+-]{0,62}[a-z0-9])?@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/;
    if (!strictEmailPattern.test(normalizedEmail)) return false;

    const [, domain = ''] = normalizedEmail.split('@');
    const blockedDomains = new Set(['example.com', 'example.org', 'example.net', 'test.com', 'fake.com']);
    if (blockedDomains.has(domain)) return false;
    if (normalizedEmail.includes('..')) return false;

    const tld = domain.split('.').pop() || '';
    return tld.length >= 2;
  },

  isEmailServiceConfigured() {
    return (
      emailServiceConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY' &&
      emailServiceConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailServiceConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID'
    );
  },

  async sendConfirmationEmail(name, email) {
    if (!window.emailjs) {
      throw new Error('Email service is unavailable.');
    }

    if (!this.isEmailServiceConfigured()) {
      throw new Error('Email service is not configured.');
    }

    window.emailjs.init({ publicKey: emailServiceConfig.publicKey });
    return window.emailjs.send(
      emailServiceConfig.serviceId,
      emailServiceConfig.templateId,
      {
        to_name: name,
        to_email: email,
        app_name: 'Great Grace Library',
        message: `Welcome ${name}! Your account has been created successfully.`
      }
    );
  },

  handleLogin(e) {
    e.preventDefault();
    // Verify login
    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim().toLowerCase();
    
    if (!this.state.registeredUser || this.state.registeredUser.email !== email) {
      emailInput.setCustomValidity('Account not found. Please sign up first.');
      emailInput.reportValidity();
      return;
    }

    emailInput.setCustomValidity('');
    const localPart = email.split('@')[0] || 'Student';
    const displayName = localPart
      .replace(/[._-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    this.state.user = { name: displayName, email: email };
    document.getElementById('user-name').textContent = displayName;
    this.showScreen('dashboard');
  },

  async handleSignup(e) {
    e.preventDefault();
    // Simulate signup
    const name = e.target.querySelector('input[type="text"]').value;
    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim().toLowerCase();

    emailInput.setCustomValidity('');
    if (!this.isLikelyRealEmail(email)) {
      emailInput.setCustomValidity('Use a valid, real email address (placeholder emails are not allowed).');
      emailInput.reportValidity();
      return;
    }

    try {
      await this.sendConfirmationEmail(name, email);
    } catch (error) {
      alert('Could not send confirmation email. Please try again later.');
      return;
    }

    this.state.registeredUser = { name: name, email: email };
    localStorage.setItem('registeredUser', JSON.stringify({ name: name, email: email }));
    alert('Account created and confirmation email sent successfully. Please sign in with your email.');
    this.showScreen('login');
  },

  logout() {
    this.state.user = null;
    localStorage.removeItem('currentUser');
    this.showScreen('login');
  },

  showScreen(screenId) {
    document.querySelectorAll('.screen-section').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(`screen-${screenId}`);
    if (target) {
      target.classList.add('active');
      target.classList.remove('page-transition');
      void target.offsetWidth; 
      target.classList.add('page-transition');
    }
    this.state.currentScreen = screenId;
    window.scrollTo(0,0);
  },

  generateQuestions(subject) {
    const core = coreQuestions[subject] || coreQuestions['Mathematics'];
    const totalNeeded = 40;
    let generated = [];
    
    for (let i = 0; i < totalNeeded; i++) {
      const sourceQ = core[i % core.length];
      generated.push({
        ...sourceQ,
        id: i + 1,
        year: sourceQ.year 
      });
    }
    return generated;
  },

  startExam(subject) {
    this.state.subject = subject;
    this.state.questions = this.generateQuestions(subject);
    this.state.currentIndex = 0;
    this.state.answers = {};
    this.state.isSubmitted = false;
    this.state.mode = 'exam';
    this.state.timer = 120 * 60; 

    document.getElementById('exam-subject').textContent = subject;
    document.getElementById('screen-exam').classList.remove('review-mode');
    document.getElementById('review-score-banner').style.display = 'none';
    
    this.startTimer();
    this.renderQuestion();
    this.renderGrid();
    this.showScreen('exam');
  },

  startTimer() {
    if (this.state.timerInterval) clearInterval(this.state.timerInterval);
    const timerEl = document.getElementById('exam-timer');
    
    this.state.timerInterval = setInterval(() => {
      this.state.timer--;
      const h = Math.floor(this.state.timer / 3600);
      const m = Math.floor((this.state.timer % 3600) / 60);
      const s = this.state.timer % 60;
      timerEl.textContent = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
      
      if (this.state.timer <= 0) {
        this.submitExam();
      }
    }, 1000);
  },

  renderQuestion() {
    const q = this.state.questions[this.state.currentIndex];
    const total = this.state.questions.length;
    
    document.getElementById('question-counter').textContent = `Question ${this.state.currentIndex + 1} of ${total}`;
    document.getElementById('question-year').textContent = `JAMB ${q.year}`;
    document.getElementById('question-text').innerHTML = q.text;
    
    const progress = ((this.state.currentIndex + 1) / total) * 100;
    document.getElementById('exam-progress').style.width = `${progress}%`;

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    q.options.forEach((opt, idx) => {
      const el = document.createElement('div');
      el.className = 'answer-card';
      el.style.padding = '16px';
      el.style.borderRadius = '12px';
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.gap = '12px';
      
      const letter = String.fromCharCode(65 + idx);
      const userSelected = this.state.answers[this.state.currentIndex] === idx;
      
      if (this.state.mode === 'exam') {
        if (userSelected) el.classList.add('selected');
        el.onclick = () => this.selectAnswer(idx);
      } else {
        if (idx === q.correct) {
          el.classList.add('correct'); 
        } else if (userSelected && idx !== q.correct) {
          el.classList.add('incorrect'); 
        }
      }

      el.innerHTML = `
        <div style="width:28px;height:28px;border-radius:50%;border:2px solid ${userSelected ? '#3B28CC' : '#E8EAF0'};display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;color:${userSelected ? '#3B28CC' : '#6B7080'};flex-shrink:0;">${letter}</div>
        <span style="font-size:15px;color:#1A1D2E;font-weight:500;">${opt}</span>
      `;
      
      container.appendChild(el);
    });

    const expBox = document.getElementById('explanation-box');
    if (this.state.mode === 'review') {
      document.getElementById('explanation-text').textContent = q.explanation;
      expBox.style.display = 'block';
    } else {
      expBox.style.display = 'none';
    }

    document.getElementById('btn-prev').disabled = this.state.currentIndex === 0;
    document.getElementById('btn-prev').style.opacity = this.state.currentIndex === 0 ? '0.5' : '1';
    
    this.updateGridActiveState();
    lucide.createIcons();
  },

  renderGrid() {
    const grid = document.getElementById('question-grid');
    grid.innerHTML = '';
    this.state.questions.forEach((_, idx) => {
      const item = document.createElement('div');
      item.className = 'grid-item';
      item.textContent = idx + 1;
      item.id = `grid-item-${idx}`;
      item.onclick = () => {
        this.state.currentIndex = idx;
        this.renderQuestion();
      };
      grid.appendChild(item);
    });
    this.updateGridActiveState();
  },

  updateGridActiveState() {
    document.querySelectorAll('.grid-item').forEach((el, idx) => {
      el.className = 'grid-item';
      if (this.state.answers[idx] !== undefined) el.classList.add('answered');
      if (idx === this.state.currentIndex) el.classList.add('active');
    });
  },

  selectAnswer(idx) {
    if (this.state.mode !== 'exam') return;
    this.state.answers[this.state.currentIndex] = idx;
    this.renderQuestion(); 
  },

  nextQuestion() {
    if (this.state.currentIndex < this.state.questions.length - 1) {
      this.state.currentIndex++;
      this.renderQuestion();
    }
  },

  prevQuestion() {
    if (this.state.currentIndex > 0) {
      this.state.currentIndex--;
      this.renderQuestion();
    }
  },

  confirmExit() {
    if(confirm("Are you sure you want to quit the exam? Progress will be lost.")) {
      this.showScreen('dashboard');
    }
  },

  submitExam() {
    if (this.state.mode === 'exam' && !confirm("Are you sure you want to submit? You cannot change answers after this.")) return;
    
    clearInterval(this.state.timerInterval);
    this.state.isSubmitted = true;
    
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;
    
    this.state.questions.forEach((q, idx) => {
      const ans = this.state.answers[idx];
      if (ans === undefined) skippedCount++;
      else if (ans === q.correct) correctCount++;
      else wrongCount++;
    });
    
    const percentage = Math.round((correctCount / this.state.questions.length) * 100);
    this.state.finalScore = percentage;
    
    document.getElementById('result-subject').textContent = this.state.subject;
    document.getElementById('result-score').textContent = `${percentage}%`;
    document.getElementById('result-fraction').textContent = `${correctCount}/${this.state.questions.length}`;
    document.getElementById('result-correct').textContent = correctCount;
    document.getElementById('result-wrong').textContent = wrongCount;
    document.getElementById('result-skipped').textContent = skippedCount;
    
    // Set Remark
    let remark = "Keep Practicing";
    if (percentage >= 80) remark = "Outstanding! 🌟";
    else if (percentage >= 70) remark = "Excellent! 👏";
    else if (percentage >= 60) remark = "Very Good! 👍";
    else if (percentage >= 50) remark = "Good Effort! 💪";
    else if (percentage >= 40) remark = "Fair Attempt";
    document.getElementById('result-remark').textContent = remark;
    
    // Animate Ring
    const circle = document.getElementById('score-ring');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;
    
    // Reset first for animation
    circle.style.strokeDashoffset = circumference;
    
    this.showScreen('results');
    
    // Trigger animation after screen is visible
    setTimeout(() => {
      circle.style.strokeDashoffset = offset;
    }, 100);
  },

  reviewExam() {
    this.state.mode = 'review';
    this.state.currentIndex = 0;
    document.getElementById('screen-exam').classList.add('review-mode');
    
    // Show Score Banner
    const banner = document.getElementById('review-score-banner');
    banner.style.display = 'block';
    document.getElementById('review-score-display').textContent = `${this.state.finalScore}%`;
    
    this.renderQuestion();
    this.renderGrid(); 
    this.showScreen('exam');
  },

  toggleMapMobile() {
    const panel = document.getElementById('question-map-panel');
    if (panel.style.display === 'none' || panel.style.display === '') {
      panel.style.display = 'block';
      panel.style.position = 'absolute';
      panel.style.top = '60px';
      panel.style.right = '0';
      panel.style.bottom = '0';
      panel.style.zIndex = '30';
      panel.style.width = '80%';
      panel.style.boxShadow = '-4px 0 20px rgba(0,0,0,0.1)';
    } else {
      panel.style.display = ''; 
      panel.style.position = '';
      panel.style.width = '';
      panel.style.boxShadow = '';
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
