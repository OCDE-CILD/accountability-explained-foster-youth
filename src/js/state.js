let currentScenario = 0;
let score = 0;
let scenarioAnswered = false;

let suspensionChoiceMade = false;
let suspensionSource = "guided";

let currentAudio = null;

let membershipAutoTimer = null;
let membershipSceneTimers = [];

let membershipPhase = 0;
let membershipCurrentScene = 1;
let membershipIsPlaying = false;
let membershipSource = "guided";

const membershipVisualShiftX = 30;

let inclusionSource = "basics";
let inclusionFlipIndex = 0;
let inclusionFlipLocked = false;

let inclusionIntroTimers = [];

function clearMembershipSceneTimers() {
  membershipSceneTimers.forEach(timer => clearTimeout(timer));
  membershipSceneTimers = [];
}

function runMembershipSceneTimeout(callback, delay) {
  const timer = setTimeout(() => {
    membershipSceneTimers = membershipSceneTimers.filter(t => t !== timer);
    callback();
  }, delay);

  membershipSceneTimers.push(timer);
  return timer;
}

function clearInclusionIntroTimers() {
  inclusionIntroTimers.forEach(timer => clearTimeout(timer));
  inclusionIntroTimers = [];
}

function runInclusionIntroTimeout(callback, delay) {
  const timer = setTimeout(() => {
    inclusionIntroTimers = inclusionIntroTimers.filter(t => t !== timer);
    callback();
  }, delay);

  inclusionIntroTimers.push(timer);
  return timer;
}
