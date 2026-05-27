  function clearModuleNextCue() {
   const nextBtn = document.querySelector(".module-bottom-right .next-btn");
   if (nextBtn) {
     nextBtn.classList.remove("scene-ready");
   }
   }
   
   function activateModuleNextCue() {
   const nextBtn = document.querySelector(".module-bottom-right .next-btn");
   if (nextBtn) {
     nextBtn.classList.add("scene-ready");
   }
   }
   
   function playInclusionIntroSequence() {
   clearInclusionIntroTimers();
   clearModuleNextCue();
   
   const mainCard = document.getElementById("inclusion-intro-card-0");
   
   const cards = [
   document.getElementById("inclusion-intro-card-1"),
   document.getElementById("inclusion-intro-card-2"),
   document.getElementById("inclusion-intro-card-3")
   ];
   
   if (mainCard) {
   mainCard.classList.remove("intro-card-visible");
   mainCard.classList.add("intro-card-hidden");
   }
   
   cards.forEach(card => {
   if (!card) return;
   card.classList.remove("intro-card-visible");
   card.classList.add("intro-card-hidden");
   });
   
   // Show main card first (fade/slide)
   runInclusionIntroTimeout(() => {
   if (!mainCard) return;
   mainCard.classList.remove("intro-card-hidden");
   mainCard.classList.add("intro-card-visible");
   }, 400);
   
   // Then flip in the 3 supporting cards
   cards.forEach((card, index) => {
   runInclusionIntroTimeout(() => {
     if (!card) return;
     card.classList.remove("intro-card-hidden");
     card.classList.add("intro-card-visible");
   }, 900 + index * 900);
   });
   
   runInclusionIntroTimeout(() => {
     activateModuleNextCue();
   }, 900 + cards.length * 900);
   }

function renderWhyMatters() {
  document.getElementById("app").innerHTML = `
    <div class="screen">
      <div class="breadcrumb">Foster Youth / Guided Walkthrough</div>
      <h1>Why Foster Youth data can be confusing</h1>
      <p>
        Local awareness of a student’s situation does not always match the official
        identification used in accountability reporting.
      </p>

      <div class="info-box">
        <strong>Choose a topic to learn more:</strong>
      </div>

      <div class="hotspot-grid">
        <button class="hotspot" onclick="showWhyDetail('identification')">Identification</button>
        <button class="hotspot" onclick="showWhyDetail('size')">Student Group Size</button>
        <button class="hotspot" onclick="showWhyDetail('timing')">Data Timing</button>
      </div>

      <div id="why-detail"></div>

      ${buildModuleBottomBar({
        leftLabel: "Back",
        leftAction: "renderGuidedIntro()",
        backAction: "renderGuidedIntro()",
        nextAction: "renderInclusionIntro()",
        homeAction: "renderHome()"
      })}
    </div>
  `;
}

function showWhyDetail(type) {
  let content = "";

  if (type === "identification") {
    content = `
      <div class="info-box">
        <strong>Identification</strong>
        <p>
          Foster Youth inclusion depends on official identification in state systems.
          Local knowledge of a student’s situation does not always match how the student
          appears in accountability reporting.
        </p>
      </div>
    `;
  }

  if (type === "size") {
    content = `
      <div class="info-box">
        <strong>Student Group Size</strong>
        <p>
          Foster Youth groups are often small. That means one or two students can change
          a rate noticeably from one year to the next.
        </p>
      </div>
    `;
  }

  if (type === "timing") {
    content = `
      <div class="info-box">
        <strong>Data Timing</strong>
        <p>
          Enrollment changes, reporting windows, and when students are identified can
          affect whether they appear in a specific indicator.
        </p>
      </div>
    `;
  }

  document.getElementById("why-detail").innerHTML = content;
}

  function renderHome() {
    document.getElementById("app").innerHTML = `
      <div class="screen">
        <h1>Foster Youth</h1>
        <p class="subtitle">Choose how you want to explore this module.</p>
  
        <div class="home-tile-grid">
          <button class="choice-card tile-basics home-feature-card" onclick="renderBasicsHub()">
            <div class="home-card-accent accent-basics"></div>
            <span class="card-title">The Basics</span>
            <span class="card-text">
              Start with foundational Foster Youth concepts like who is included, why counts may differ, and how to interpret the data.
            </span>
          </button>
  
          <button class="choice-card tile-half home-feature-card" onclick="renderGuidedIntro()">
            <div class="home-card-accent accent-guided"></div>
            <span class="card-title">Guided Walkthrough</span>
            <span class="card-text">
              Follow a short guided path through the most important Foster Youth concepts.
            </span>
          </button>
  
          <button class="choice-card tile-half home-feature-card" onclick="renderExploreHub()">
            <div class="home-card-accent accent-explore"></div>
            <span class="card-title">Explore on Your Own</span>
            <span class="card-text">
              Jump directly to a topic like Suspension, Graduation, or Chronic Absenteeism.
            </span>
          </button>
        </div>
      </div>
    `;
  }

function renderBasicsHub() {
  document.getElementById("app").innerHTML = `
    <div class="screen">
      <div class="breadcrumb">Foster Youth / Basics</div>
      <h1>The Basics</h1>
      <p class="subtitle">
        Start here for the foundational concepts that help explain Foster Youth reporting.
      </p>

      <div class="basics-tile-grid">
        <button class="choice-card basics-video-tile" onclick="renderInclusionVisual(true)">
          <div class="tile-visual tile-include">
            <svg class="tile-svg" viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="120" cy="45" r="10" class="person-fill strong"></circle>
              <rect x="110" y="55" width="20" height="24" rx="8" class="person-fill strong"></rect>
              <circle cx="160" cy="40" r="11" class="person-fill strong"></circle>
              <rect x="148" y="52" width="24" height="28" rx="10" class="person-fill strong"></rect>
              <circle cx="200" cy="45" r="10" class="person-fill strong"></circle>
              <rect x="190" y="55" width="20" height="24" rx="8" class="person-fill strong"></rect>
            </svg>
          </div>
          <span class="card-title">Who Is Included?</span>
          <span class="card-text">
            Learn which students are included as Foster Youth and why local awareness
            does not always match official reporting.
          </span>
        </button>

        <button class="choice-card basics-video-tile" onclick="renderMembershipVisual(true, 'basics')">
          <div class="tile-visual tile-counts">
            <svg class="tile-svg" viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g transform="translate(0,16)">
                <line x1="104" y1="72" x2="140" y2="48" stroke="rgba(255,255,255,0.34)" stroke-width="4" stroke-linecap="round"></line>
                <line x1="184" y1="48" x2="220" y2="24" stroke="rgba(255,255,255,0.34)" stroke-width="4" stroke-linecap="round"></line>
                <rect x="60" y="68" width="44" height="8" rx="4" fill="rgba(255,255,255,0.34)"></rect>
                <circle cx="82" cy="50" r="6" fill="rgba(255,255,255,0.34)"></circle>
                <rect x="75" y="56" width="14" height="10" rx="5" fill="rgba(255,255,255,0.34)"></rect>
                <rect x="140" y="44" width="44" height="8" rx="4" fill="rgba(255,255,255,0.52)"></rect>
                <circle cx="162" cy="26" r="6" fill="rgba(255,255,255,0.52)"></circle>
                <rect x="155" y="32" width="14" height="10" rx="5" fill="rgba(255,255,255,0.52)"></rect>
                <rect x="220" y="20" width="44" height="8" rx="4" fill="rgba(255,255,255,0.70)"></rect>
                <circle cx="242" cy="2" r="5.5" fill="rgba(255,255,255,0.70)"></circle>
                <rect x="235.5" y="7.5" width="13" height="10" rx="5" fill="rgba(255,255,255,0.70)"></rect>
              </g>
            </svg>
          </div>
          <span class="card-title">Why Counts Differ</span>
          <span class="card-text">
            See why Foster Youth counts may not match expectations and how CALPADS
            identification affects reporting.
          </span>
        </button>

        <button class="choice-card basics-video-tile" onclick="renderIndicatorsOverview()">
          <div class="tile-visual tile-indicators">
            <svg class="tile-svg" viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M80 80 A60 60 0 0 1 112 42" class="gauge-red"></path>
              <path d="M112 42 A60 60 0 0 1 152 28" class="gauge-orange"></path>
              <path d="M152 28 A60 60 0 0 1 192 32" class="gauge-yellow"></path>
              <path d="M192 32 A60 60 0 0 1 226 50" class="gauge-green"></path>
              <path d="M226 50 A60 60 0 0 1 240 80" class="gauge-blue"></path>
              <line x1="160" y1="80" x2="206" y2="47" class="gauge-needle"></line>
              <circle cx="160" cy="80" r="6" class="gauge-hub"></circle>
            </svg>
          </div>
          <span class="card-title">Across Indicators</span>
          <span class="card-text">
            Understand how Foster Youth appear within indicators like Suspension,
            Graduation, and Chronic Absenteeism.
          </span>
        </button>
      </div>

      ${buildModuleBottomBar({
        leftLabel: "Back",
        leftAction: "renderHome()",
        backAction: "renderHome()",
        homeAction: "renderHome()"
      })}
    </div>
  `;
}

function renderGuidedIntro() {
  document.getElementById("app").innerHTML = `
    <div class="screen">
      <div class="breadcrumb">Foster Youth / Guided Walkthrough</div>
      <h1>Guided Walkthrough</h1>
      <p>This path is designed for first-time users who want a clear introduction to Foster Youth accountability.</p>

      <div class="info-box">
        <strong>Suggested sequence:</strong>
        <ol>
          <li>Why Foster Youth data can be confusing</li>
          <li>Why counts may differ</li>
          <li>Who Counts as Foster Youth?</li>
          <li>How Foster Youth appear across indicators</li>
          <li>Foster Youth in Suspension</li>
        </ol>
      </div>

      <div class="button-row">
        <button class="primary-btn" onclick="renderWhyMatters()">Begin</button>
        <button class="secondary-btn" onclick="renderHome()">Back</button>
      </div>
    </div>
  `;
}

  function renderExploreHub() {
    document.getElementById("app").innerHTML = `
      <div class="screen">
        <div class="breadcrumb">Foster Youth / Explore</div>
        <h1>Explore Foster Youth Topics</h1>
  
        <div class="info-box">
          <strong>What result are you trying to interpret?</strong>
  
          <div class="button-stack" style="margin-top:16px;">
            <button class="decision-btn" onclick="renderSuspension('explore')">
              Why did Foster Youth suspension change?
            </button>
  
            <button class="decision-btn" onclick="renderIndicatorPlaceholder('Graduation')">
              How are Foster Youth reflected in Graduation?
            </button>
  
            <button class="decision-btn" onclick="renderIndicatorPlaceholder('Chronic Absenteeism')">
              How are Foster Youth reflected in Chronic Absenteeism?
            </button>
  
            <button class="decision-btn" onclick="renderIndicatorPlaceholder('College/Career Indicator (CCI)')">
              How are Foster Youth reflected in the College/Career Indicator (CCI)?
            </button>
  
            <button class="decision-btn" onclick="renderIndicatorPlaceholder('Science')">
              How are Foster Youth reflected in Science?
            </button>
          </div>
        </div>
  
        <div class="info-box">
          <strong>Browse indicator topics</strong>
  
          <div class="hotspot-grid" style="margin-top:16px;">
            <button class="hotspot" onclick="renderSuspension('explore')">Suspension</button>
            <button class="hotspot" onclick="renderIndicatorPlaceholder('Graduation')">Graduation</button>
            <button class="hotspot" onclick="renderIndicatorPlaceholder('Chronic Absenteeism')">Chronic Absenteeism</button>
            <button class="hotspot" onclick="renderIndicatorPlaceholder('College/Career Indicator (CCI)')">College/Career Indicator (CCI)</button>
            <button class="hotspot" onclick="renderIndicatorPlaceholder('Science')">Science</button>
            <button class="hotspot" onclick="renderIndicatorPlaceholder('Academic Indicators')">Academic Indicators</button>
            <button class="hotspot" onclick="renderResources()">Resources</button>
          </div>
        </div>
  
        ${buildModuleBottomBar({
          leftLabel: "Back",
          leftAction: "renderHome()",
          backAction: "renderHome()",
          homeAction: "renderHome()"
        })}
      </div>
    `;
  }
   
   function renderInclusionVisual(autoPlay = true, source = "basics") {
   inclusionSource = source;
   renderInclusionIntro();
   }
   
   function renderInclusionIntro() {
   clearInclusionIntroTimers();
   clearModuleNextCue();
   
   const backAction =
     inclusionSource === "explore"
       ? "renderExploreHub()"
       : "renderBasicsHub()";
   
   const backLabel =
     inclusionSource === "explore"
       ? "Back to Explore"
       : "Back to Basics";
   
   document.getElementById("app").innerHTML = `
     <div class="screen">
       <div class="breadcrumb">Foster Youth / Basics</div>
       <h1>Who is included as Foster Youth?</h1>
   
       <div class="presentation-frame">
         <div class="presentation-stage-shell">
           <div class="presentation-stage-header">
             <div class="scene-kicker">Foster Youth / Basics</div>
             <h2 class="presentation-title">Official identification determines inclusion</h2>
           </div>
   
           <div class="inclusion-intro-stage">
             <div class="inclusion-intro-sequence">
   
                         <div id="inclusion-intro-card-0"
                  class="inclusion-intro-card inclusion-intro-card-main intro-card-hidden info-box inclusion-intro-main">
               <p style="margin-top:0;">
                 A school may know that a student is in a foster situation based on local information, but local awareness does not determine whether a student is included in Foster Youth reporting.
               </p>
   
               <p style="margin-bottom:0;">
                 Foster Youth status is determined through a state data match between the California Department of Social Services (CDSS) and CALPADS. Only students who meet the state definition and are identified through this match process will appear in reporting.
               </p>
             </div>
   
             <div class="three-col-grid inclusion-intro-grid">
   
               <div id="inclusion-intro-card-1"
      class="inclusion-intro-card intro-card-hidden info-box">
   <strong>1. Known locally</strong>
   <p>Staff may know a student is in foster care or track the student locally, but local awareness alone does not determine Foster Youth reporting.</p>
   </div>
   
               <div id="inclusion-intro-card-2"
      class="inclusion-intro-card intro-card-hidden info-box">
   <strong>2. Officially identified</strong>
   <p>The student must be identified through the CDSS/CALPADS match process, or through a local foster match when the statewide match misses an eligible student.</p>
   </div>
   
               <div id="inclusion-intro-card-3"
      class="inclusion-intro-card intro-card-hidden info-box">
   <strong>3. Included in reporting</strong>
   <p>Only students who meet the LCFF foster youth definition and appear in CALPADS will be included in Foster Youth reporting.</p>
   </div>
   
             </div>
           </div>
   
           </div>
         </div>
   
         ${buildModuleBottomBar({
           leftLabel: backLabel,
           leftAction: backAction,
           backAction: backAction,
           nextAction: "renderInclusionFlipCards()",
           homeAction: "renderHome()"
         })}
       </div>
     </div>
   `;
   
   requestAnimationFrame(() => {
     requestAnimationFrame(() => {
       playInclusionIntroSequence();
     });
   });
   }
   
   function renderInclusionFlipCards() {
   clearInclusionIntroTimers();
   clearModuleNextCue();
   
   document.getElementById("app").innerHTML = `
   <div class="screen">
     <div class="breadcrumb">Foster Youth / Basics</div>
   
     <div class="presentation-frame">
       <div class="presentation-stage-shell">
   
         <div class="presentation-stage-header">
           <div class="scene-kicker">Foster Youth / Basics</div>
           <h2 class="presentation-title">Who is included as Foster Youth?</h2>
         </div>
   
         <div class="presentation-text" style="margin-top: 12px;">
           Review each example, make your best judgment, and reveal the explanation.
         </div>
   
       <div class="progress-wrap">
         <div class="progress-label">Examples Reviewed</div>
         <div class="progress-bar">
           <div id="inclusion-progress-fill" class="progress-fill"></div>
         </div>
         <div id="inclusion-progress-text" class="progress-text">0 of ${inclusionFlipCards.length}</div>
       </div>
   
       <div class="flip-card-grid">
         ${inclusionFlipCards.map((card, index) => `
           <div class="flip-card multi-card" id="inclusion-flip-card-${index}">
             <div class="flip-card-inner">
   
               <div class="flip-card-front">
                 <div class="scenario-label">Included or Not Included?</div>
                 <p class="scenario-text">${card.text}</p>
   
                 <div class="button-row answer-row compact-answer-row">
                   <button
                     id="inclusion-answer-yes-${index}"
                     class="primary-btn inclusion-answer-btn"
                     data-index="${index}"
                     data-answer="yes">
                     Included
                   </button>
   
                   <button
                     id="inclusion-answer-no-${index}"
                     class="secondary-btn inclusion-answer-btn"
                     data-index="${index}"
                     data-answer="no">
                     Not Included
                   </button>
                 </div>
               </div>
   
               <div class="flip-card-back">
                 <div id="inclusion-flip-result-${index}"></div>
               </div>
   
             </div>
           </div>
         `).join("")}
       </div>
   
       <div id="inclusion-complete-banner"></div>
   
   </div>
   
       ${buildModuleBottomBar({
         leftLabel: "Back to Basics",
         leftAction: "renderBasicsHub()",
         backAction: "renderInclusionIntro()",
         nextAction: "continueFromInclusionCards()",
         homeAction: "renderHome()"
       })}
   
     </div>
   </div>
   `;
   
   inclusionFlipCards.forEach(card => {
   card.answered = false;
   card.selectedAnswer = null;
   });
   
   document.querySelectorAll(".inclusion-answer-btn").forEach(btn => {
     btn.addEventListener("click", function () {
       const index = Number(this.dataset.index);
       const answer = this.dataset.answer;
       handleInclusionFlipAnswer(index, answer);
     });
   });
   
   updateInclusionFlipProgress();
   }
   
   function handleInclusionFlipAnswer(index, answer) {
   const card = inclusionFlipCards[index];
   if (!card) return;
   
   card.answered = true;
   card.selectedAnswer = answer;
   
   const correct = answer === card.correct;
   const flipCard = document.getElementById(`inclusion-flip-card-${index}`);
   const yesBtn = document.getElementById(`inclusion-answer-yes-${index}`);
   const noBtn = document.getElementById(`inclusion-answer-no-${index}`);
   const resultEl = document.getElementById(`inclusion-flip-result-${index}`);
   
   if (yesBtn) {
     yesBtn.disabled = true;
     yesBtn.classList.add("disabled-btn");
   }
   
   if (noBtn) {
     noBtn.disabled = true;
     noBtn.classList.add("disabled-btn");
   }
   
   if (resultEl) {
     resultEl.innerHTML = `
       <div class="${correct ? 'flip-result-correct' : 'flip-result-wrong'} inclusion-result-panel">
         <div class="feedback-title-compact">${correct ? "Correct" : "Take another look"}</div>
         <p class="inclusion-result-label"><strong>${card.resultLabel}</strong></p>
         <p class="inclusion-result-text">${card.explanation}</p>
         <button
           class="flip-back-icon-btn"
           type="button"
           aria-label="Flip card back to front"
           onclick="flipInclusionCardToFront(${index})">
         </button>
       </div>
     `;
   }
   
   if (flipCard) {
     flipCard.classList.add("flipped");
   }
   
   updateInclusionFlipProgress();
   }
   
   function flipInclusionCardToFront(index) {
   const flipCard = document.getElementById(`inclusion-flip-card-${index}`);
   const yesBtn = document.getElementById(`inclusion-answer-yes-${index}`);
   const noBtn = document.getElementById(`inclusion-answer-no-${index}`);
   
   if (flipCard) {
     flipCard.classList.remove("flipped");
   }
   
   if (yesBtn) {
     yesBtn.disabled = false;
     yesBtn.classList.remove("disabled-btn");
   }
   
   if (noBtn) {
     noBtn.disabled = false;
     noBtn.classList.remove("disabled-btn");
   }
   }
   
   function updateInclusionFlipProgress() {
   const total = inclusionFlipCards.length;
   const completed = inclusionFlipCards.filter(card => card.answered).length;
   const percent = (completed / total) * 100;
   
   const fill = document.getElementById("inclusion-progress-fill");
   const text = document.getElementById("inclusion-progress-text");
   const banner = document.getElementById("inclusion-complete-banner");
   const nextBtn = document.querySelector(".module-bottom-right .next-btn");
   
   if (fill) {
     fill.style.width = percent + "%";
   }
   
   if (text) {
     text.textContent = completed + " of " + total;
   }
   
   if (nextBtn) {
     if (completed === total) {
       nextBtn.disabled = false;
       nextBtn.classList.remove("disabled-btn");
       nextBtn.style.pointerEvents = "auto";
       nextBtn.style.opacity = "1";
     } else {
       nextBtn.disabled = true;
       nextBtn.classList.add("disabled-btn");
       nextBtn.style.pointerEvents = "none";
       nextBtn.style.opacity = "0.35";
     }
   }
   
   if (banner) {
     if (completed === total) {
       banner.innerHTML = `
         <div class="info-box">
           <strong>Key takeaway:</strong>
           Foster Youth inclusion depends on official identification through state systems,
           not local awareness alone.
         </div>
       `;
     } else {
       banner.innerHTML = "";
     }
   }
   }
   
   function continueFromInclusionCards() {
   renderIdentification();
   }
   
   function initializeMembershipTokens() {
   const positions = [
     { x: 444, y: 108 },
     { x: 486, y: 138 },
     { x: 404, y: 150 },
     { x: 426, y: 190 },
     { x: 474, y: 196 },
     { x: 450, y: 160 },
     { x: 420, y: 180 }
   ];
   
   positions.forEach((pos, index) => {
     const token = document.getElementById(`token-${index + 1}`);
     if (!token) return;
     token.style.left = pos.x + "px";
     token.style.top = pos.y + "px";
     token.classList.remove("token-visible");
     token.classList.add("token-hidden");
   });
   
   const token8 = document.getElementById("token-8");
   if (token8) {
     token8.style.left = "470px";
     token8.style.top = "125px";
     token8.classList.remove("token-visible");
     token8.classList.add("token-hidden");
   }
   
   hideScene2Tokens();
   }
   
   function hideMembershipTokens() {
   const ids = ["token-1", "token-2", "token-3", "token-4", "token-5", "token-6", "token-7", "token-8"];
   ids.forEach(id => {
     const token = document.getElementById(id);
     if (!token) return;
     token.classList.remove("token-visible");
     token.classList.add("token-hidden");
   });
   }
   
   function hideScene2Tokens() {
   const ids = [
   "expected-token-1","expected-token-2","expected-token-3",
   "expected-token-4","expected-token-5","expected-token-6","expected-token-7","expected-token-8",
   "state-token-1","state-token-2","state-token-3",
   "state-token-4","state-token-5","state-token-6","state-token-7","state-token-8"
   ];
   
   ids.forEach(id => {
     const token = document.getElementById(id);
     if (!token) return;
     token.classList.remove("scene2-visible");
   });
   }
   
   function showAllMembershipTokens() {
   const ids = ["token-1", "token-2", "token-3", "token-4", "token-5", "token-6", "token-7", "token-8"];
   ids.forEach(id => {
     const token = document.getElementById(id);
     if (!token) return;
     token.classList.remove("token-hidden");
     token.classList.add("token-visible");
   });
   }
   
   function hideBaseLightTokens() {
   const ids = ["token-1", "token-2", "token-3", "token-4", "token-5", "token-6"];
   ids.forEach(id => {
     const token = document.getElementById(id);
     if (!token) return;
     token.classList.remove("token-visible");
     token.classList.add("token-hidden");
   });
   }
   
   function showToken8At(x, y, highlighted = false) {
   const token8 = document.getElementById("token-8");
   if (!token8) return;
   
   token8.style.left = x + "px";
   token8.style.top = y + "px";
   token8.classList.remove("token-hidden");
   token8.classList.add("token-visible");
   
   if (highlighted) {
     token8.classList.add("token-dark", "token-dark-green");
   } else {
     token8.classList.remove("token-dark", "token-dark-green");
   }
   }
   
   function setMembershipClusterPositions() {
   const shiftX = membershipVisualShiftX;
   
   setTokenPositions({
     "token-1": { x: 444 + shiftX, y: 108 },
     "token-2": { x: 486 + shiftX, y: 138 },
     "token-3": { x: 404 + shiftX, y: 150 },
     "token-4": { x: 426 + shiftX, y: 190 },
     "token-5": { x: 474 + shiftX, y: 196 },
     "token-6": { x: 450 + shiftX, y: 160 },
     "token-8": { x: 475 + shiftX, y: 110 }
   });
   }
   
   function setTokenPositions(positionMap) {
   Object.entries(positionMap).forEach(([id, pos]) => {
     const token = document.getElementById(id);
     if (!token) return;
     token.style.left = pos.x + "px";
     token.style.top = pos.y + "px";
   });
   }
   
   function showScene2Tokens(ids) {
   ids.forEach(id => {
     const token = document.getElementById(id);
     if (!token) return;
     token.classList.add("scene2-visible");
   });
   }
   
   function setMembershipText(kicker, title, caption) {
   document.getElementById("membership-kicker").textContent = kicker;
   document.getElementById("membership-title").textContent = title;
   document.getElementById("membership-caption").innerHTML = caption;
   }
   
   function clearMembershipNextCue() {
   const nextBtn = document.querySelector(".frame-nav-row .next-btn");
   if (nextBtn) {
     nextBtn.classList.remove("scene-ready");
   }
   }
   
   function activateMembershipNextCue() {
   const nextBtn = document.querySelector(".frame-nav-row .next-btn");
   if (nextBtn) {
     nextBtn.classList.add("scene-ready");
   }
   }
   
   function resetMembershipVisuals() {
   ["membership-ring-expected", "membership-ring-state"].forEach(id => {
     const el = document.getElementById(id);
     if (!el) return;
     el.className = "membership-ring hidden-ring";
     el.style.cssText = "";
   });
   
   ["membership-label-expected", "membership-label-state"].forEach(id => {
     const el = document.getElementById(id);
     if (!el) return;
     el.className = "membership-label hidden-label";
     el.style.cssText = "";
     el.innerHTML = "";
     el.textContent = "";
   });
   
   hideMembershipTokens();
   hideScene2Tokens();
   }
   
   function setMembershipStageMode(mode) {
   const canvasWrap = document.querySelector(".presentation-canvas-wrap");
   const caption = document.getElementById("membership-caption");
   
   if (!canvasWrap || !caption) return;
   
   canvasWrap.classList.remove("intro-phase");
   caption.classList.remove("intro-phase");
   
   if (mode === "intro") {
     canvasWrap.classList.add("intro-phase");
     caption.classList.add("intro-phase");
   }
   }
   
   function showMembershipPhase(phase) {
   membershipPhase = phase;
   clearMembershipSceneTimers();
   resetMembershipVisuals();
   
   const titleEl = document.getElementById("membership-title");
     if (titleEl) {
   titleEl.classList.remove("scene4-pulse");
   }
   
     const bgLayer = document.querySelector(".membership-bg-layer");
   if (bgLayer) {
     bgLayer.style.display = "";
   }
   
   const membershipCanvas = document.getElementById("membership-canvas");
   if (membershipCanvas) {
   membershipCanvas.classList.remove(
     "intro-hero",
     "scene0-active",
     "scene-shift-0",
     "scene-shift-1",
     "scene-shift-2"
   );
   
   if (phase <= 1) {
     membershipCanvas.classList.add("scene-shift-0");
   } else if (phase <= 3) {
     membershipCanvas.classList.add("scene-shift-1");
   } else {
     membershipCanvas.classList.add("scene-shift-2");
   }
   }
   
   clearMembershipNextCue();
   playMembershipPhaseAudio(phase);
   
   if (phase === 0) {
   setMembershipStageMode("intro");
   
   setMembershipText(
     "Foster Youth / Explainer",
     "Why counts may differ...",
     "District and school leaders may find that Foster Youth counts do not match their expectations.<br> When examining Dashboard Indicators, it helps to understand why."
   );
   
   setMembershipClusterPositions();
   hideMembershipTokens();
   
   const labelExpected = document.getElementById("membership-label-expected");
   const labelState = document.getElementById("membership-label-state");
   if (labelExpected) labelExpected.innerHTML = "";
   if (labelState) labelState.innerHTML = "";
   
       if (membershipCanvas) {
     membershipCanvas.classList.add("scene0-active", "intro-hero");
   
     requestAnimationFrame(() => {
       requestAnimationFrame(() => {
         if (membershipPhase !== 0) return;
         membershipCanvas.classList.remove("intro-hero");
       });
     });
   
     runMembershipSceneTimeout(() => {
       if (membershipPhase !== 0) return;
       activateMembershipNextCue();
     }, 2400);
   }
   
   return;
   }
   
   if (phase === 1) {
   setMembershipStageMode("default");
   
   setMembershipText(
     "Scene 1 of 7",
     "Consider the example below...",
     "A school believes that they have 8 students identified as Foster Youth."
   );
   
   const shiftX = membershipVisualShiftX;
   
   const ringExpected = document.getElementById("membership-ring-expected");
   ringExpected.className = "membership-ring ring-small-center visible-ring";
   ringExpected.style.left = (360 + shiftX) + "px";
   
   const labelExpected = document.getElementById("membership-label-expected");
   labelExpected.className = "membership-label label-small-center visible-label";
   labelExpected.innerHTML = "Expected<br>Foster Youth";
   labelExpected.style.width = "170px";
   labelExpected.style.textAlign = "center";
   labelExpected.style.left = (345 + shiftX) + "px";
   
   setMembershipClusterPositions();
   showAllMembershipTokens();
   activateMembershipNextCue();
   return;
   }
   
   if (phase === 2) {
     setMembershipStageMode("default");
   
     setMembershipText(
       "Scene 2 of 7",
       "Bringing CALPADS into the discussion...",
       "It is reasonable to expect that the 8 students would be identified as Foster Youth in CALPADS."
     );
   
     hideBaseLightTokens();
     hideScene2Tokens();
   
     const ringExpected = document.getElementById("membership-ring-expected");
     const ringState = document.getElementById("membership-ring-state");
     const labelExpected = document.getElementById("membership-label-expected");
     const labelState = document.getElementById("membership-label-state");
     const stateToken7 = document.getElementById("state-token-7");
       if (stateToken7) {
        stateToken7.classList.remove("token-dark", "token-dark-orange");
     } 
   
     ringExpected.className = "membership-ring visible-ring";
     ringState.className = "membership-ring visible-ring";
     labelExpected.className = "membership-label visible-label";
     labelState.className = "membership-label visible-label";
   
     labelExpected.innerHTML = "Expected<br>Foster Youth";
     labelState.innerHTML = "CALPADS Identified<br>Foster Youth";
   
     const shiftX = membershipVisualShiftX;
   
     const finalExpectedLeft = 222 + shiftX;
     const finalStateLeft = 447 + shiftX;
     const ringTop = 92;
     const ringSize = 190;
   
     const expectedStartLeft = 334 + shiftX;
     const stateStartLeft = expectedStartLeft;
   
     ringExpected.style.left = expectedStartLeft + "px";
     ringExpected.style.top = ringTop + "px";
     ringExpected.style.width = ringSize + "px";
     ringExpected.style.height = ringSize + "px";
     ringExpected.style.transition = "left 900ms ease";
   
     ringState.style.left = stateStartLeft + "px";
     ringState.style.top = ringTop + "px";
     ringState.style.width = ringSize + "px";
     ringState.style.height = ringSize + "px";
     ringState.style.transition = "left 900ms ease, opacity 400ms ease";
     ringState.style.opacity = "0";
   
     labelExpected.style.left = (expectedStartLeft - 20) + "px";
     labelExpected.style.top = "32px";
     labelExpected.style.width = "210px";
     labelExpected.style.textAlign = "center";
     labelExpected.style.transition = "left 900ms ease";
   
     labelState.style.left = (stateStartLeft - 35) + "px";
     labelState.style.top = "30px";
     labelState.style.width = "260px";
     labelState.style.textAlign = "center";
     labelState.style.transition = "left 900ms ease, opacity 400ms ease";
     labelState.style.opacity = "0";
   
     const expectedFinalTokens = {
   "expected-token-1": { x: finalExpectedLeft + 56, y: ringTop + 42 },
   "expected-token-2": { x: finalExpectedLeft + 124, y: ringTop + 60 },
   "expected-token-3": { x: finalExpectedLeft + 84, y: ringTop + 92 },
   "expected-token-4": { x: finalExpectedLeft + 48, y: ringTop + 132 },
   "expected-token-5": { x: finalExpectedLeft + 118, y: ringTop + 138 },
   "expected-token-6": { x: finalExpectedLeft + 86, y: ringTop + 148 },
   "expected-token-7": { x: finalExpectedLeft + 140, y: ringTop + 96 },
   "expected-token-8": { x: finalExpectedLeft + 100, y: ringTop + 115 }
   };
   
   const stateFinalTokens = {
   "state-token-1": { x: finalStateLeft + 56, y: ringTop + 42 },
   "state-token-2": { x: finalStateLeft + 124, y: ringTop + 60 },
   "state-token-3": { x: finalStateLeft + 84, y: ringTop + 92 },
   "state-token-4": { x: finalStateLeft + 48, y: ringTop + 132 },
   "state-token-5": { x: finalStateLeft + 118, y: ringTop + 138 },
   "state-token-6": { x: finalStateLeft + 86, y: ringTop + 148 },
   "state-token-7": { x: finalStateLeft + 140, y: ringTop + 96 },
   "state-token-8": { x: finalStateLeft + 100, y: ringTop + 115 }
   };
   
   const expectedStartTokens = {
   "expected-token-1": { x: expectedStartLeft + 56, y: ringTop + 42 },
   "expected-token-2": { x: expectedStartLeft + 124, y: ringTop + 60 },
   "expected-token-3": { x: expectedStartLeft + 84, y: ringTop + 92 },
   "expected-token-4": { x: expectedStartLeft + 48, y: ringTop + 132 },
   "expected-token-5": { x: expectedStartLeft + 118, y: ringTop + 138 },
   "expected-token-6": { x: expectedStartLeft + 86, y: ringTop + 148 },
   "expected-token-7": { x: expectedStartLeft + 140, y: ringTop + 96 },
   "expected-token-8": { x: expectedStartLeft + 100, y: ringTop + 115 }
   };
   
   const stateStartTokens = {
   "state-token-1": { x: expectedStartLeft + 56, y: ringTop + 42 },
   "state-token-2": { x: expectedStartLeft + 124, y: ringTop + 60 },
   "state-token-3": { x: expectedStartLeft + 84, y: ringTop + 92 },
   "state-token-4": { x: expectedStartLeft + 48, y: ringTop + 132 },
   "state-token-5": { x: expectedStartLeft + 118, y: ringTop + 138 },
   "state-token-6": { x: expectedStartLeft + 86, y: ringTop + 148 },
   "state-token-7": { x: expectedStartLeft + 140, y: ringTop + 96 },
   "state-token-8": { x: expectedStartLeft + 100, y: ringTop + 115 }
   };
   
     setTokenPositions(expectedStartTokens);
     setTokenPositions(stateStartTokens);
   
     showScene2Tokens([
   "expected-token-1",
   "expected-token-2",
   "expected-token-3",
   "expected-token-4",
   "expected-token-5",
   "expected-token-6",
   "expected-token-7",
   "expected-token-8"
   ]);
   
         runMembershipSceneTimeout(() => {
   if (membershipPhase !== 2) return;
   ringExpected.style.left = finalExpectedLeft + "px";
   labelExpected.style.left = (finalExpectedLeft - 20) + "px";
   setTokenPositions(expectedFinalTokens);
   }, 80);
   
     runMembershipSceneTimeout(() => {
   if (membershipPhase !== 2) return;
   ringState.style.opacity = "1";
   labelState.style.opacity = "1";
   
   showScene2Tokens([
     "state-token-1",
     "state-token-2",
     "state-token-3",
     "state-token-4",
     "state-token-5",
     "state-token-6",
     "state-token-7",
     "state-token-8"
   ]);
   }, 520);
   
         runMembershipSceneTimeout(() => {
   if (membershipPhase !== 2) return;
   ringState.style.left = finalStateLeft + "px";
   labelState.style.left = (finalStateLeft - 35) + "px";
   setTokenPositions(stateFinalTokens);
   }, 720);
   
     runMembershipSceneTimeout(() => {
   if (membershipPhase !== 2) return;
   activateMembershipNextCue();
   }, 1700);
   
     return;
   }
   
     if (phase === 3) {
     setMembershipStageMode("default");
   
     setMembershipText(
       "Scene 3 of 7",
       "These numbers should match...",
       "Often, the students a school believes to be Foster Youth do align with the students identified as Foster Youth in CALPADS."
     );
   
     hideBaseLightTokens();
     hideScene2Tokens();
   
     const ringExpected = document.getElementById("membership-ring-expected");
     const ringState = document.getElementById("membership-ring-state");
     const labelExpected = document.getElementById("membership-label-expected");
     const labelState = document.getElementById("membership-label-state");
     const token8 = document.getElementById("token-8");
     const stateToken7 = document.getElementById("state-token-7");
   
     if (token8) {
       token8.classList.remove("token-dark", "token-dark-green");
       token8.classList.add("token-hidden");
       token8.classList.remove("token-visible");
     }
   
     if (stateToken7) {
       stateToken7.classList.remove("token-dark", "token-dark-orange");
     }
   
     ringExpected.className = "membership-ring visible-ring";
     ringState.className = "membership-ring hidden-ring";
     labelExpected.className = "membership-label visible-label";
     labelState.className = "membership-label hidden-label";
   
     const shiftX = membershipVisualShiftX;
   
     const ringTop = 92;
     const ringSize = 190;
     const centerLeft = 334 + shiftX;
   
     ringExpected.style.left = centerLeft + "px";
     ringExpected.style.top = ringTop + "px";
     ringExpected.style.width = ringSize + "px";
     ringExpected.style.height = ringSize + "px";
     ringExpected.style.transition = "";
   
     ringState.style.left = centerLeft + "px";
     ringState.style.top = ringTop + "px";
     ringState.style.width = ringSize + "px";
     ringState.style.height = ringSize + "px";
     ringState.style.opacity = "0";
     ringState.style.transition = "";
   
     labelExpected.innerHTML = "Expected / CALPADS<br>Foster Youth";
     labelExpected.style.left = (centerLeft - 30) + "px";
     labelExpected.style.top = "30px";
     labelExpected.style.width = "250px";
     labelExpected.style.textAlign = "center";
     labelExpected.style.transition = "";
   
     labelState.innerHTML = "";
     labelState.style.opacity = "0";
     labelState.style.transition = "";
   
     setTokenPositions({
   "expected-token-1": { x: centerLeft + 56, y: ringTop + 42 },
   "expected-token-2": { x: centerLeft + 124, y: ringTop + 60 },
   "expected-token-3": { x: centerLeft + 84, y: ringTop + 92 },
   "expected-token-4": { x: centerLeft + 48, y: ringTop + 132 },
   "expected-token-5": { x: centerLeft + 118, y: ringTop + 138 },
   "expected-token-6": { x: centerLeft + 86, y: ringTop + 148 },
   "expected-token-7": { x: centerLeft + 140, y: ringTop + 96 },
   "expected-token-8": { x: centerLeft + 100, y: ringTop + 115 }
   });
   
         showScene2Tokens([
   "expected-token-1",
   "expected-token-2",
   "expected-token-3",
   "expected-token-4",
   "expected-token-5",
   "expected-token-6",
   "expected-token-7",
   "expected-token-8"
   ]);
   
     activateMembershipNextCue();
     return;
   }
   
   if (phase === 4) {
     setMembershipStageMode("default");
   
     setMembershipText(
       "Scene 4 of 7",
       "However, this may not always be a correct assumption...",
       "These students all attend our school but they may not all be identified as Foster Youth in CALPADS.<br>One of the students is not identified as Foster Youth in CALPADS."
     );
   
     hideBaseLightTokens();
     hideScene2Tokens();
   
     const ringExpected = document.getElementById("membership-ring-expected");
     const ringState = document.getElementById("membership-ring-state");
     const labelExpected = document.getElementById("membership-label-expected");
     const labelState = document.getElementById("membership-label-state");
     const stateToken7 = document.getElementById("state-token-7");
     if (stateToken7) {
       stateToken7.classList.remove("token-dark-orange");
       stateToken7.classList.remove("token-dark");
     }
   
     ringExpected.className = "membership-ring visible-ring";
     ringState.className = "membership-ring visible-ring";
     labelExpected.className = "membership-label visible-label";
     labelState.className = "membership-label visible-label";
   
     const vennShiftX = membershipVisualShiftX;
   
   const ringTop = 72;
   const ringSize = 220;
   const expectedLeft = 300 + vennShiftX;
   const stateLeft = 430 + vennShiftX;
   
   ringExpected.style.left = expectedLeft + "px";
   ringExpected.style.top = ringTop + "px";
   ringExpected.style.width = ringSize + "px";
   ringExpected.style.height = ringSize + "px";
   
   ringState.style.left = stateLeft + "px";
   ringState.style.top = ringTop + "px";
   ringState.style.width = ringSize + "px";
   ringState.style.height = ringSize + "px";
   
   labelExpected.innerHTML = "Expected<br>Foster Youth";
   labelState.innerHTML = "CALPADS Identified<br>Foster Youth";
   
   labelExpected.style.left = (250 + vennShiftX) + "px";
   labelExpected.style.top = "18px";
   labelExpected.style.width = "150px";
   labelExpected.style.textAlign = "center";
   
   labelState.style.left = (500 + vennShiftX) + "px";
   labelState.style.top = "18px";
   labelState.style.width = "190px";
   labelState.style.textAlign = "center";
   
   setTokenPositions({
   "state-token-1": { x: 460 + vennShiftX, y: 200 },
   "state-token-2": { x: 470 + vennShiftX, y: 115 },
   "state-token-3": { x: 450 + vennShiftX, y: 160 },
   "state-token-4": { x: 470 + vennShiftX, y: 230 },
   "state-token-5": { x: 490 + vennShiftX, y: 145 },
   "state-token-6": { x: 480 + vennShiftX, y: 175 },
   "state-token-7": { x: 445 + vennShiftX, y: 130 }
   });
   
   showToken8At(360 + vennShiftX, 195, true);
   
         showScene2Tokens([
       "state-token-1",
       "state-token-2",
       "state-token-3",
       "state-token-4",
       "state-token-5",
       "state-token-6",
       "state-token-7"
     ]);
   
     activateMembershipNextCue();
     return;
   }
   
   if (phase === 5) {
   setMembershipStageMode("default");
   
   setMembershipText(
     "Scene 5 of 7",
     "Making things even more complicated...",
     "There may be situations in which a student is identified as Foster Youth in CALPADS and the site may not be aware of the student being identified Foster Youth!"
   );
   
   const titleEl = document.getElementById("membership-title");
   if (titleEl) {
     titleEl.classList.add("scene4-pulse");
   }
   
   hideBaseLightTokens();
   hideScene2Tokens();
   
   const ringExpected = document.getElementById("membership-ring-expected");
   const ringState = document.getElementById("membership-ring-state");
   const labelExpected = document.getElementById("membership-label-expected");
   const labelState = document.getElementById("membership-label-state");
   
   const stateToken7 = document.getElementById("state-token-7");
   const stateToken8 = document.getElementById("state-token-8");
   
   if (stateToken7) {
     stateToken7.classList.remove("token-dark", "token-dark-orange");
   }
   
   if (stateToken8) {
     stateToken8.classList.add("token-dark", "token-dark-orange");
   }
   
   ringExpected.className = "membership-ring visible-ring";
   ringState.className = "membership-ring visible-ring";
   labelExpected.className = "membership-label visible-label";
   labelState.className = "membership-label visible-label";
   
   const vennShiftX = membershipVisualShiftX;
   
   const ringTop = 72;
   const ringSize = 220;
   const expectedLeft = 300 + vennShiftX;
   const stateLeft = 430 + vennShiftX;
   
   ringExpected.style.left = expectedLeft + "px";
   ringExpected.style.top = ringTop + "px";
   ringExpected.style.width = ringSize + "px";
   ringExpected.style.height = ringSize + "px";
   
   ringState.style.left = stateLeft + "px";
   ringState.style.top = ringTop + "px";
   ringState.style.width = ringSize + "px";
   ringState.style.height = ringSize + "px";
   
   labelExpected.innerHTML = "Expected<br>Foster Youth";
   labelState.innerHTML = "CALPADS Identified<br>Foster Youth";
   
   labelExpected.style.left = (250 + vennShiftX) + "px";
   labelExpected.style.top = "18px";
   labelExpected.style.width = "150px";
   labelExpected.style.textAlign = "center";
   
   labelState.style.left = (500 + vennShiftX) + "px";
   labelState.style.top = "18px";
   labelState.style.width = "190px";
   labelState.style.textAlign = "center";
   
   setTokenPositions({
     "state-token-1": { x: 460 + vennShiftX, y: 200 },
     "state-token-2": { x: 470 + vennShiftX, y: 115 },
     "state-token-3": { x: 450 + vennShiftX, y: 160 },
     "state-token-4": { x: 470 + vennShiftX, y: 230 },
     "state-token-5": { x: 490 + vennShiftX, y: 145 },
     "state-token-6": { x: 480 + vennShiftX, y: 175 },
   
     /* moved light-blue dot */
     "state-token-7": { x: 445 + vennShiftX, y: 130 },
   
     /* new highlighted dark-blue/orange dot */
     "state-token-8": { x: 570 + vennShiftX, y: 195 }
   });
   
   showToken8At(360 + vennShiftX, 195, true);
   
     showScene2Tokens([
     "state-token-1",
     "state-token-2",
     "state-token-3",
     "state-token-4",
     "state-token-5",
     "state-token-6",
     "state-token-7",
     "state-token-8"
   ]);
   
   activateMembershipNextCue();
   return;
   }
   
   if (phase === 6) {
   setMembershipStageMode("default");
   
   
   setMembershipText(
   "Scene 6 of 7",
   "Monitoring local and CALPADS data is important to...",
   `
   <ul style="text-align:left; max-width:700px; margin:0 auto; padding-left:20px;">
     <li>Find students incorrectly thought to be Foster Youth</li>
     <li>Identify Foster Youth you may not have been aware of</li>
   </ul>
   `
   );
   
   const titleEl = document.getElementById("membership-title");
   if (titleEl) {
     titleEl.classList.add("scene4-pulse");
   }
   
   hideBaseLightTokens();
   hideScene2Tokens();
   
   const ringExpected = document.getElementById("membership-ring-expected");
   const ringState = document.getElementById("membership-ring-state");
   const labelExpected = document.getElementById("membership-label-expected");
   const labelState = document.getElementById("membership-label-state");
   
   const stateToken7 = document.getElementById("state-token-7");
   const stateToken8 = document.getElementById("state-token-8");
   
   if (stateToken7) {
     stateToken7.classList.remove("token-dark", "token-dark-orange");
   }
   
   if (stateToken8) {
     stateToken8.classList.add("token-dark", "token-dark-orange");
   }
   
   ringExpected.className = "membership-ring visible-ring";
   ringState.className = "membership-ring visible-ring";
   labelExpected.className = "membership-label visible-label";
   labelState.className = "membership-label visible-label";
   
   const vennShiftX = membershipVisualShiftX;
   
   const ringTop = 72;
   const ringSize = 220;
   const expectedLeft = 300 + vennShiftX;
   const stateLeft = 430 + vennShiftX;
   
   ringExpected.style.left = expectedLeft + "px";
   ringExpected.style.top = ringTop + "px";
   ringExpected.style.width = ringSize + "px";
   ringExpected.style.height = ringSize + "px";
   
   ringState.style.left = stateLeft + "px";
   ringState.style.top = ringTop + "px";
   ringState.style.width = ringSize + "px";
   ringState.style.height = ringSize + "px";
   
   labelExpected.innerHTML = "Expected<br>Foster Youth";
   labelState.innerHTML = "CALPADS Identified<br>Foster Youth";
   
   labelExpected.style.left = (250 + vennShiftX) + "px";
   labelExpected.style.top = "18px";
   labelExpected.style.width = "150px";
   labelExpected.style.textAlign = "center";
   
   labelState.style.left = (500 + vennShiftX) + "px";
   labelState.style.top = "18px";
   labelState.style.width = "190px";
   labelState.style.textAlign = "center";
   
   setTokenPositions({
     "state-token-1": { x: 460 + vennShiftX, y: 200 },
     "state-token-2": { x: 470 + vennShiftX, y: 115 },
     "state-token-3": { x: 450 + vennShiftX, y: 160 },
     "state-token-4": { x: 470 + vennShiftX, y: 230 },
     "state-token-5": { x: 490 + vennShiftX, y: 145 },
     "state-token-6": { x: 480 + vennShiftX, y: 175 },
   
     /* moved light-blue dot */
     "state-token-7": { x: 445 + vennShiftX, y: 130 },
   
     /* new highlighted dark-blue/orange dot */
     "state-token-8": { x: 570 + vennShiftX, y: 195 }
   });
   
   showToken8At(360 + vennShiftX, 195, true);
   
       showScene2Tokens([
     "state-token-1",
     "state-token-2",
     "state-token-3",
     "state-token-4",
     "state-token-5",
     "state-token-6",
     "state-token-7",
     "state-token-8"
   ]);
   
   activateMembershipNextCue();
   return;
   }
   
   if (phase === 7) {
   setMembershipStageMode("default");
   
   setMembershipText(
     "Scene 7 of 7",
     "What should leaders take from this?",
     "Differences in Foster Youth counts do not automatically mean the data is wrong, rather it may need to be reconciled. Leaders should expect differences, check context, and interpret the data carefully."
   );
   
   const titleEl = document.getElementById("membership-title");
   if (titleEl) {
     titleEl.classList.add("scene4-pulse");
   }
   
   hideBaseLightTokens();
   hideScene2Tokens();
   
   const ringExpected = document.getElementById("membership-ring-expected");
   const ringState = document.getElementById("membership-ring-state");
   const labelExpected = document.getElementById("membership-label-expected");
   const labelState = document.getElementById("membership-label-state");
   
   const stateToken7 = document.getElementById("state-token-7");
   const stateToken8 = document.getElementById("state-token-8");
   
   if (stateToken7) {
     stateToken7.classList.remove("token-dark", "token-dark-orange");
   }
   
   if (stateToken8) {
     stateToken8.classList.add("token-dark", "token-dark-orange");
   }
   
   ringExpected.className = "membership-ring visible-ring";
   ringState.className = "membership-ring visible-ring";
   labelExpected.className = "membership-label visible-label";
   labelState.className = "membership-label visible-label";
   
   const vennShiftX = membershipVisualShiftX;
   
   const ringTop = 72;
   const ringSize = 220;
   const expectedLeft = 300 + vennShiftX;
   const stateLeft = 430 + vennShiftX;
   
   ringExpected.style.left = expectedLeft + "px";
   ringExpected.style.top = ringTop + "px";
   ringExpected.style.width = ringSize + "px";
   ringExpected.style.height = ringSize + "px";
   
   ringState.style.left = stateLeft + "px";
   ringState.style.top = ringTop + "px";
   ringState.style.width = ringSize + "px";
   ringState.style.height = ringSize + "px";
   
   labelExpected.innerHTML = "Expected<br>Foster Youth";
   labelState.innerHTML = "CALPADS Identified<br>Foster Youth";
   
   labelExpected.style.left = (250 + vennShiftX) + "px";
   labelExpected.style.top = "18px";
   labelExpected.style.width = "150px";
   labelExpected.style.textAlign = "center";
   
   labelState.style.left = (500 + vennShiftX) + "px";
   labelState.style.top = "18px";
   labelState.style.width = "190px";
   labelState.style.textAlign = "center";
   
   setTokenPositions({
     "state-token-1": { x: 460 + vennShiftX, y: 200 },
     "state-token-2": { x: 470 + vennShiftX, y: 115 },
     "state-token-3": { x: 450 + vennShiftX, y: 160 },
     "state-token-4": { x: 470 + vennShiftX, y: 230 },
     "state-token-5": { x: 490 + vennShiftX, y: 145 },
     "state-token-6": { x: 480 + vennShiftX, y: 175 },
   
     /* moved light-blue dot */
     "state-token-7": { x: 445 + vennShiftX, y: 130 },
   
     /* new highlighted dark-blue/orange dot */
     "state-token-8": { x: 570 + vennShiftX, y: 195 }
   });
   
   showToken8At(360 + vennShiftX, 195, true);
   
     showScene2Tokens([
     "state-token-1",
     "state-token-2",
     "state-token-3",
     "state-token-4",
     "state-token-5",
     "state-token-6",
     "state-token-7",
     "state-token-8"
   ]);
   
   activateMembershipNextCue();
   return;
   }
   
   if (phase === 8) {
  setMembershipStageMode("default");

  hideMembershipTokens();
  hideScene2Tokens();

  const labelExpected = document.getElementById("membership-label-expected");
  const labelState = document.getElementById("membership-label-state");
  const bgLayer = document.querySelector(".membership-bg-layer");

  if (labelExpected) {
    labelExpected.innerHTML = "";
    labelExpected.textContent = "";
    labelExpected.className = "membership-label hidden-label";
    labelExpected.style.cssText = "display:none !important;";
  }

  if (labelState) {
    labelState.innerHTML = "";
    labelState.textContent = "";
    labelState.className = "membership-label hidden-label";
    labelState.style.cssText = "display:none !important;";
  }

  if (bgLayer) {
    bgLayer.style.display = "none";
  }

  setMembershipText(
    "Next",
    "Who Counts as Foster Youth?",
    ""
  );

  activateMembershipNextCue();

  document.getElementById("membership-caption").innerHTML = `
    <div class="membership-endcard">
      <div class="membership-endcard-title">Ready for the next section?</div>
      <div class="membership-endcard-text">
        Continue to the Identification section to explore who is included and why identification matters.
        <br><br>
        <span class="membership-endcard-text-emphasis">
          Use the <strong>Next</strong> button below to continue.
        </span>
      </div>
    </div>
  `;

  return;
    }
   }
   
   function scheduleMembershipMotionAdvance() {
   if (membershipAutoTimer) {
     clearTimeout(membershipAutoTimer);
     membershipAutoTimer = null;
   }
   }
   
   function pauseMembershipMotion() {
   membershipIsPlaying = false;
   
   if (membershipAutoTimer) {
     clearTimeout(membershipAutoTimer);
     membershipAutoTimer = null;
   }
   
   clearMembershipSceneTimers();
   }
   
  function playMembershipMotion() {
  stopSceneAudio();
    
   if (membershipAutoTimer) {
     clearTimeout(membershipAutoTimer);
     membershipAutoTimer = null;
   }
   
   clearMembershipSceneTimers();
   membershipIsPlaying = false;
   
   const phaseToReplay = membershipPhase;
   const sourceToReplay = membershipSource;
   
   renderMembershipVisual(false, sourceToReplay);
   
   requestAnimationFrame(() => {
     requestAnimationFrame(() => {
       if (phaseToReplay > 0) {
         showMembershipPhase(phaseToReplay);
       }
     });
   });
   }
   
   function restartMembershipMotion() {
   if (membershipAutoTimer) {
     clearTimeout(membershipAutoTimer);
     membershipAutoTimer = null;
   }
   
   clearMembershipSceneTimers();
   membershipPhase = 0;
   membershipIsPlaying = false;
   showMembershipPhase(0);
   }
   
   function goMembershipMotionNext() {
  stopSceneAudio()

  pauseMembershipMotion();

  if (membershipPhase < 8) {
    membershipPhase += 1;
    showMembershipPhase(membershipPhase);
  } else {
    renderIdentification();
  }
}
   
   function goMembershipMotionBack() {
  stopSceneAudio();

  pauseMembershipMotion();

  if (membershipPhase > 0) {
    membershipPhase -= 1;
    showMembershipPhase(membershipPhase);
  } else {
    if (membershipSource === "explore") {
      renderExploreHub();
    } else if (membershipSource === "basics") {
      renderBasicsHub();
    } else {
      renderWhyMatters();
    }
  }
}
   
   function renderIdentification() {
   currentScenario = 0;
   score = 0;
   scenarioAnswered = false;
   
   document.getElementById("app").innerHTML = `
     <div class="screen">
       <div class="breadcrumb">Foster Youth / Identification</div>
       <h1>Who Counts as Foster Youth?</h1>
   
       <p>
         District leaders often struggle here first. Local understanding of a student's situation
         does not always match the official identification used in accountability reporting.
       </p>
   
       <div class="info-box intro-box">
         <strong>Try this quick check:</strong>
         Review each example and decide whether the student would be included in the Foster Youth student group.
       </div>
   
       <div class="progress-wrap">
         <div class="progress-label">Progress</div>
         <div class="progress-bar">
           <div id="progress-fill" class="progress-fill"></div>
         </div>
         <div id="progress-text" class="progress-text"></div>
       </div>
   
       <div id="scenario"></div>
   
       <div class="button-row">
         <button class="secondary-btn" onclick="renderExploreHub()">Back to Explore</button>
         <button class="secondary-btn" onclick="renderHome()">Home</button>
       </div>
     </div>
   `;
   
   loadScenario(currentScenario);
   }
   
   function loadScenario(index) {
   scenarioAnswered = false;
   const s = scenarios[index];
   updateProgress();
   
   document.getElementById("scenario").innerHTML = `
     <div class="scenario-card">
       <div class="scenario-label">Scenario ${index + 1}</div>
       <p class="scenario-text">${s.text}</p>
   
       <div class="button-row answer-row">
         <button id="answer-yes" class="primary-btn" onclick="checkAnswer('yes')">Included</button>
         <button id="answer-no" class="secondary-btn" onclick="checkAnswer('no')">Not Included</button>
       </div>
   
       <div id="feedback"></div>
     </div>
   `;
   }
   
   function checkAnswer(answer) {
   if (scenarioAnswered) return;
   
   scenarioAnswered = true;
   
   const yesBtn = document.getElementById("answer-yes");
   const noBtn = document.getElementById("answer-no");
   
   if (yesBtn) {
     yesBtn.disabled = true;
     yesBtn.classList.add("disabled-btn");
   }
   
   if (noBtn) {
     noBtn.disabled = true;
     noBtn.classList.add("disabled-btn");
   }
   
   const s = scenarios[currentScenario];
   const correct = answer === s.correct;
   
   if (correct) {
     score++;
   }
   
   document.getElementById("feedback").innerHTML = `
     <div class="feedback-box ${correct ? 'feedback-correct' : 'feedback-revise'}">
       <div class="feedback-title">${correct ? "Correct" : "Take another look"}</div>
       <p>${s.explanation}</p>
       <button class="primary-btn" onclick="nextScenario()">Next</button>
     </div>
   `;
   }
   
   function nextScenario() {
   currentScenario++;
   
   if (currentScenario < scenarios.length) {
     loadScenario(currentScenario);
   } else {
     showSummary();
   }
   }
   
   function updateProgress() {
   const percent = (currentScenario / scenarios.length) * 100;
   const fill = document.getElementById("progress-fill");
   const text = document.getElementById("progress-text");
   
   if (fill) {
     fill.style.width = percent + "%";
   }
   
   if (text) {
     const displayStep = Math.min(currentScenario + 1, scenarios.length);
     text.textContent = displayStep + " of " + scenarios.length;
   }
   }
   
   function showSummary() {
   const percentCorrect = Math.round((score / scenarios.length) * 100);
   
   document.getElementById("progress-fill").style.width = "100%";
   document.getElementById("progress-text").textContent = scenarios.length + " of " + scenarios.length;
   
   document.getElementById("scenario").innerHTML = `
     <div class="summary-card">
       <h3>Identification Check Complete</h3>
       <p class="summary-score">You answered ${score} of ${scenarios.length} correctly (${percentCorrect}%).</p>
   
       <div class="info-box">
         <p><strong>Key takeaway:</strong> Foster Youth student group inclusion depends on official identification and reporting conditions, not just local awareness of a student's circumstances.</p>
       </div>
   
       <div class="button-row">
         <button class="primary-btn" onclick="renderIndicatorsOverview()">Continue</button>
         <button class="secondary-btn" onclick="renderExploreHub()">Explore More Topics</button>
       </div>
     </div>
   `;
   }
   
   function renderIndicatorsOverview() {
   document.getElementById("app").innerHTML = `
     <div class="screen">
       <div class="breadcrumb">Foster Youth / Guided Walkthrough</div>
       <h1>How Foster Youth Appear Across Indicators</h1>
   
       <p>
         Foster Youth are not reported as a separate, isolated measure.
         Instead, they appear as a student group within multiple accountability indicators.
       </p>
   
       <div class="info-box">
         <strong>Select an indicator to see how Foster Youth are viewed in context:</strong>
       </div>
   
       <div class="hotspot-grid">
         <button class="hotspot" onclick="showIndicatorDetail('academic')">Academic Indicators</button>
         <button class="hotspot" onclick="showIndicatorDetail('suspension')">Suspension</button>
         <button class="hotspot" onclick="showIndicatorDetail('absenteeism')">Chronic Absenteeism</button>
         <button class="hotspot" onclick="showIndicatorDetail('graduation')">Graduation</button>
         <button class="hotspot" onclick="showIndicatorDetail('cci')">CCI</button>
         <button class="hotspot" onclick="showIndicatorDetail('science')">Science</button>
       </div>
   
       <div id="indicator-detail"></div>
   
       <div class="button-row">
         <button class="primary-btn" onclick="renderSuspension()">Continue to Suspension</button>
         <button class="secondary-btn" onclick="renderIdentification()">Back</button>
         <button class="secondary-btn" onclick="renderHome()">Home</button>
       </div>
     </div>
   `;
   }
   
   function showIndicatorDetail(type) {
   let content = "";
   
   if (type === "academic") {
     content = `
       <div class="info-box">
         <strong>Foster Youth and Academic Indicators</strong>
         <p>
           In Academic Indicators, Foster Youth performance is viewed within measures such as ELA and mathematics.
           Results should be interpreted in context, especially when the student group is small.
         </p>
       </div>
     `;
   }
   
   if (type === "suspension") {
     content = `
       <div class="info-box">
         <strong>Foster Youth and Suspension</strong>
         <p>
           In Suspension, Foster Youth are viewed as a student group whose rate is compared over time.
           Small student group size, mobility, and individual incidents can significantly affect results.
         </p>
       </div>
     `;
   }
   
   if (type === "absenteeism") {
     content = `
       <div class="info-box">
         <strong>Foster Youth and Chronic Absenteeism</strong>
         <p>
           In Chronic Absenteeism, Foster Youth are viewed within attendance patterns.
           Enrollment changes and student mobility can make interpretation more complex.
         </p>
       </div>
     `;
   }
   
   if (type === "graduation") {
     content = `
       <div class="info-box">
         <strong>Foster Youth and Graduation</strong>
         <p>
           In Graduation, Foster Youth are viewed within the graduation indicator.
           Leaders often need to understand both who is included and how cohort-based calculations affect interpretation.
         </p>
       </div>
     `;
   }
   
   if (type === "cci") {
     content = `
       <div class="info-box">
         <strong>Foster Youth and the College/Career Indicator (CCI)</strong>
         <p>
           In College/Career Indicator reporting, Foster Youth are viewed within readiness outcomes.
           This section will later explain how Foster Youth are reflected in CCI and what leaders should look for.
         </p>
       </div>
     `;
   }
   
   if (type === "science") {
     content = `
       <div class="info-box">
         <strong>Foster Youth and Science</strong>
         <p>
           In Science, Foster Youth are viewed within science-related accountability reporting.
           This section will later explain how Foster Youth are reflected in Science and how leaders should interpret the results.
         </p>
       </div>
     `;
   }
   
   document.getElementById("indicator-detail").innerHTML = content;
   }
   
   function renderSuspension(source = "guided") {
   suspensionSource = source;
   suspensionChoiceMade = false;
   
   const backAction =
     suspensionSource === "explore" ? "renderExploreHub()" : "renderIndicatorsOverview()";
   
   const backLabel =
     suspensionSource === "explore" ? "Back to Explore" : "Back";
   
   document.getElementById("app").innerHTML = `
     <div class="screen">
       <div class="breadcrumb">Foster Youth / Suspension</div>
       <h1>Foster Youth in Suspension</h1>
   
       <p>
         A district leader notices that the Foster Youth suspension rate increased.
         Before drawing conclusions, it is important to interpret the result in context.
       </p>
   
       <div class="dashboard-panel">
         <div class="dashboard-card">
           <div class="dashboard-label">Student Group</div>
           <div class="dashboard-value">Foster Youth</div>
         </div>
   
         <div class="dashboard-card">
           <div class="dashboard-label">Current Suspension Rate</div>
           <div class="dashboard-value emphasis">12%</div>
         </div>
   
         <div class="dashboard-card">
           <div class="dashboard-label">Previous Year</div>
           <div class="dashboard-value">6%</div>
         </div>
   
         <div class="dashboard-card">
           <div class="dashboard-label">Student Group Note</div>
           <div class="dashboard-value small-text">Small student group</div>
         </div>
       </div>
   
       <div class="info-box">
         <strong>Leadership prompt:</strong>
         The superintendent asks, “What does this change mean, and what should we look at first?”
       </div>
   
       <div class="scenario-card">
         <div class="scenario-label">Choose the best first response</div>
   
         <div class="button-stack">
           <button class="decision-btn" onclick="evaluateSuspensionChoice(1)">
             Review student group size, student movement, and discipline patterns before drawing conclusions
           </button>
   
           <button class="decision-btn" onclick="evaluateSuspensionChoice(2)">
             Assume student behavior has worsened significantly and report that immediately
           </button>
   
           <button class="decision-btn" onclick="evaluateSuspensionChoice(3)">
             Dismiss the change because student group results are always too small to matter
           </button>
         </div>
   
         <div id="suspension-feedback"></div>
       </div>
   
             ${buildModuleBottomBar({
         leftLabel: backLabel,
         leftAction: backAction,
         centerHtml: `<button class="secondary-btn" onclick="renderExploreHub()">Explore Topics</button>`,
         backAction: backAction,
         homeAction: "renderHome()"
       })}
     </div>
   `;
   }
   
   function evaluateSuspensionChoice(choice) {
   if (suspensionChoiceMade) return;
   
   suspensionChoiceMade = true;
   
   let feedback = "";
   let boxClass = "feedback-revise";
   
   if (choice === 1) {
     boxClass = "feedback-correct";
     feedback = `
       <div class="feedback-title">Strong first step</div>
       <p>
         This is the best response. Foster Youth results should be interpreted in context.
         Small student group size, mobility, and a small number of incidents can significantly affect the rate.
       </p>
   
       <div class="button-row">
         <button class="primary-btn" onclick="showSuspensionInterpretation()">Show Why This Matters</button>
       </div>
     `;
   }
   
   if (choice === 2) {
     feedback = `
       <div class="feedback-title">Pause before concluding</div>
       <p>
         This moves too quickly to a conclusion. A change in the rate may reflect student group size,
         student movement, or reporting context, not just a broad behavior trend.
       </p>
   
       <div class="button-row">
         <button class="primary-btn" onclick="showSuspensionInterpretation()">Continue</button>
       </div>
     `;
   }
   
   if (choice === 3) {
     feedback = `
       <div class="feedback-title">Not the best response</div>
       <p>
         Small student group size does matter for interpretation, but it does not mean the result should be ignored.
         The better response is to investigate carefully and explain the context.
       </p>
   
       <div class="button-row">
         <button class="primary-btn" onclick="showSuspensionInterpretation()">Continue</button>
       </div>
     `;
   }
   
   document.getElementById("suspension-feedback").innerHTML = `
     <div class="feedback-box ${boxClass}">
       ${feedback}
     </div>
   `;
   }
   
   function showSuspensionInterpretation() {
   document.getElementById("app").innerHTML = `
     <div class="screen">
       <div class="breadcrumb">Foster Youth / Suspension</div>
       <h1>Interpreting Foster Youth Suspension Results</h1>
   
       <p>
         A change in the Foster Youth suspension rate should be reviewed carefully before it is explained publicly.
       </p>
   
       <div class="three-col-grid">
         <div class="info-box">
           <strong>Student Group Size</strong>
           <p>
             Foster Youth groups are often small, so one or two students can have a large effect on the rate.
           </p>
         </div>
   
         <div class="info-box">
           <strong>Student Movement</strong>
           <p>
             Mobility and enrollment changes may affect who is represented in the indicator during the reporting window.
           </p>
         </div>
   
         <div class="info-box">
           <strong>Incident Count</strong>
           <p>
             A small number of incidents may shift the rate significantly when the student group is small.
           </p>
         </div>
       </div>
   
       <div class="info-box">
         <strong>Leadership takeaway:</strong>
         When Foster Youth results change, leaders should explain the context, review local practices, and avoid oversimplifying the result.
       </div>
   
               ${buildModuleBottomBar({
         leftLabel: "Back",
         leftAction: "renderSuspension()",
         centerHtml: `<button class="primary-btn" onclick="renderSuspensionReflection()">Continue</button>`,
         backAction: "renderSuspension()",
         nextAction: "renderSuspensionReflection()",
         homeAction: "renderHome()"
       })}
     </div>
   `;
   }
   
   function renderSuspensionReflection() {
   document.getElementById("app").innerHTML = `
     <div class="screen">
       <div class="breadcrumb">Foster Youth / Suspension</div>
       <h1>What Should a Leader Do Next?</h1>
   
       <div class="info-box">
         <p>
           In practice, the goal is not just to explain the number. It is to decide what should happen next.
         </p>
       </div>
   
       <div class="scenario-card">
         <div class="scenario-label">Recommended next moves</div>
         <ul>
           <li>Review student group size and underlying incident patterns</li>
           <li>Check whether student mobility may be affecting the result</li>
           <li>Examine discipline practices and support systems</li>
           <li>Communicate the result with context, not assumptions</li>
         </ul>
       </div>
   
           ${buildModuleBottomBar({
         leftLabel: "Back",
         leftAction: "showSuspensionInterpretation()",
         centerHtml: `<button class="primary-btn" onclick="renderKeyTakeaways()">Continue</button>`,
         backAction: "showSuspensionInterpretation()",
         nextAction: "renderKeyTakeaways()",
         homeAction: "renderHome()"
       })}
     </div>
   `;
   }
   
   function renderKeyTakeaways() {
   document.getElementById("app").innerHTML = `
     <div class="screen">
       <div class="breadcrumb">Foster Youth / Guided Walkthrough</div>
       <h1>Key Takeaways</h1>
   
       <div class="three-col-grid">
         <div class="info-box">
           <strong>Identification matters</strong>
           <p>
             Foster Youth inclusion depends on official identification and reporting context.
           </p>
         </div>
   
         <div class="info-box">
           <strong>Indicators provide context</strong>
           <p>
             Foster Youth are viewed within measures such as Suspension, Graduation, and Academic Indicators.
           </p>
         </div>
   
         <div class="info-box">
           <strong>Interpret carefully</strong>
           <p>
             Changes in student group results should be reviewed thoughtfully before conclusions are shared.
           </p>
         </div>
       </div>
   
             ${buildModuleBottomBar({
         leftLabel: "Back",
         leftAction: "renderSuspensionReflection()",
         centerHtml: `<button class="primary-btn" onclick="renderExploreHub()">Explore on Your Own</button>`,
         backAction: "renderSuspensionReflection()",
         nextAction: "renderExploreHub()",
         homeAction: "renderHome()"
       })}
     </div>
   `;
   }
   
   function openExternal(url) {
   window.open(url, "_blank", "noopener,noreferrer");
   }
   
   function buildModuleBottomBar({
   leftLabel = "",
   leftAction = "",
   centerHtml = "",
   backAction = "",
   nextAction = "",
   homeAction = "renderHome()"
   } = {}) {
   const leftHtml = leftLabel && leftAction
     ? `<button class="nav-text-btn" onclick="${leftAction}">${leftLabel}</button>`
     : "";
   
   const backHtml = backAction
     ? `<button class="nav-icon-btn back-btn" onclick="${backAction}" title="Back"></button>`
     : "";
   
   const nextHtml = nextAction
     ? `<button class="nav-icon-btn next-btn" onclick="${nextAction}" title="Next"></button>`
     : "";
   
   const homeHtml = homeAction
     ? `<button class="nav-icon-btn home-btn" onclick="${homeAction}" title="Home"></button>`
     : "";
   
   return `
     <div class="module-bottom-bar">
       <div class="module-bottom-left">
         ${leftHtml}
       </div>
   
       <div class="module-bottom-center">
         ${centerHtml}
       </div>
   
       <div class="module-bottom-right">
         ${backHtml}
         ${nextHtml}
         ${homeHtml}
       </div>
     </div>
   `;
   }
   
   function renderIndicatorPlaceholder(title) {
   document.getElementById("app").innerHTML = `
     <div class="screen">
       <div class="breadcrumb">Foster Youth / ${title}</div>
       <h1>Foster Youth and ${title}</h1>
   
       <div class="info-box">
         <strong>Planned section</strong>
         <p>
           This section is part of the Foster Youth module structure and is planned for a future build.
         </p>
       </div>
   
       <div class="info-box">
         <strong>What this section will include</strong>
         <ul>
           <li>How Foster Youth are reflected in ${title}</li>
           <li>Why leaders may see unexpected results</li>
           <li>Indicator-specific interpretation guidance</li>
           <li>Supporting resource links or district guidance</li>
         </ul>
       </div>
   
       <div class="info-box">
         <strong>Status</strong>
         <p>
           Content and/or resource integration for this section is still in development.
         </p>
       </div>
   
       ${buildModuleBottomBar({
   leftLabel: "Back to Explore",
   leftAction: "renderExploreHub()",
   centerHtml: `<button class="secondary-btn" onclick="renderResources()">Resources</button>`,
   backAction: "renderExploreHub()",
   homeAction: "renderHome()"
   })}
     </div>
   `;
   }
   
   function renderResources() {
   document.getElementById("app").innerHTML = `
     <div class="screen">
       <div class="breadcrumb">Foster Youth / Resources</div>
       <h1>Foster Youth Resources</h1>
   
       <p>
         Use these resources when you need more detail, want to verify a point, or need help with a specific Foster Youth accountability question.
       </p>
   
       <div class="info-box">
         <strong>Need help with a specific question?</strong>
         <div class="button-stack" style="margin-top:16px;">
           <button class="decision-btn" onclick="renderIdentification()">
             Who counts as Foster Youth?
           </button>
   
           <button class="decision-btn" onclick="renderMembershipVisual(true, 'explore')">
             Why do counts differ?
           </button>
   
           <button class="decision-btn" onclick="renderSuspension('explore')">
             Foster Youth and Suspension
           </button>
   
           <button class="decision-btn" onclick="renderIndicatorPlaceholder('Graduation')">
             Foster Youth and Graduation
           </button>
         </div>
       </div>
   
       <div class="resource-grid">
         <div class="resource-card">
           <h3>Dashboard Guidance</h3>
           <p>Overview guidance for understanding Dashboard measures and interpretation.</p>
           <button class="secondary-btn" onclick="openExternal('https://www.cde.ca.gov/ta/ac/cm/dashboardguide.asp')">
             Open resource
           </button>
         </div>
   
         <div class="resource-card">
           <h3>CALPADS Foster Youth Glossary</h3>
           <p>Reference for Foster Youth terminology and data definitions.</p>
           <button class="secondary-btn" onclick="openExternal('https://documentation.calpads.org/Glossary/GeneralData/FosterYouth/')">
             Open resource
           </button>
         </div>
   
         <div class="resource-card">
           <h3>Foster Youth Enrolled Student List</h3>
           <p>Reference for the enrolled student list report and related details.</p>
           <button class="secondary-btn" onclick="openExternal('https://documentation.calpads.org/Reports/FosterYouth/Report5.7_FosterYouthEnrolledStudentList/')">
             Open resource
           </button>
         </div>
   
         <div class="resource-card">
           <h3>Former Foster Youth Student List</h3>
           <p>Reference for the former Foster Youth student list report.</p>
           <button class="secondary-btn" onclick="openExternal('https://documentation.calpads.org/Reports/FosterYouth/Report5.9_FormerFosterYouthStudentList/')">
             Open resource
           </button>
         </div>
   
         <div class="resource-card">
           <h3>CALPADS Update Flash</h3>
           <p>Additional update and policy context related to Foster Youth reporting.</p>
           <button class="secondary-btn" onclick="openExternal('https://www.cde.ca.gov/ds/sp/cl/calpadsupdflash304.asp')">
             Open resource
           </button>
         </div>
   
         <div class="resource-card">
           <h3>More Resources</h3>
           <p>Additional district-specific resources or internal guidance can be added here.</p>
         </div>
       </div>
   
             ${buildModuleBottomBar({
         leftLabel: "Back to Explore",
         leftAction: "renderExploreHub()",
         backAction: "renderExploreHub()",
         homeAction: "renderHome()"
       })}
     </div>
   `;
   }
   
   function renderPlaceholder(title) {
   document.getElementById("app").innerHTML = `
     <div class="screen">
       <div class="breadcrumb">Foster Youth / ${title}</div>
       <h1>${title}</h1>
       <p>This section is reserved for the next build phase.</p>
   
       <div class="button-row">
         <button class="secondary-btn" onclick="renderExploreHub()">Back to Explore</button>
         <button class="secondary-btn" onclick="renderHome()">Home</button>
       </div>
     </div>
   `;
   }
   
   // DEV ENTRY POINTS
   
   window.onload = renderHome;
   // window.onload = renderGuidedIntro;
   // window.onload = renderWhyMatters;
   // window.onload = () => renderMembershipVisual(false);
   // window.onload = () => {
   //   renderMembershipVisual(false);
   //   showMembershipPhase(3);
   // };
   // window.onload = renderSuspension;
   // window.onload = renderResources;
   
   //window.onload = () => renderMembershipVisual(true);
