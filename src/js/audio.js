const membershipAudioFiles = {
  0: "https://www.dropbox.com/scl/fi/kb77oea5xjspoye7ztn1f/fy_counts_00_intro.mp3?rlkey=am8q5j0oz2q4ldvqjgpwutt90&st=v8lx10eh&raw=1",
  1: "https://www.dropbox.com/scl/fi/xf26s2e9qdp8ch8jeo4gw/fy_counts_01_example.mp3?rlkey=d8rgdj5kkwcfvz5pcdq2fn41z&st=x9fohibw&raw=1",
  2: "https://www.dropbox.com/scl/fi/pqr11lz567too9zj61bkj/fy_counts_02_calpads.mp3?rlkey=piqbshx88w0i2q7qz5b1kn5b8&st=l2gxy4je&raw=1",
  3: "https://www.dropbox.com/scl/fi/rm3x4bn8bu5t53s6ooflk/fy_counts_03_match.mp3?rlkey=vgpzwcarp9nmf0tdv1pwiq798&st=6pc8fra4&raw=1",
  4: "https://www.dropbox.com/scl/fi/bd817j01ehtmfk1o4ispy/fy_counts_04_mismatch.mp3?rlkey=k946v8k5s2pz368yugtvqd4xa&st=qxs435c6&raw=1",
  5: "https://www.dropbox.com/scl/fi/d4kp0k53mljflhlrsvevn/fy_counts_05_reverse.mp3?rlkey=o4u5ejofybcigiywyzen8eev1&st=xxyhygwv&raw=1",
  6: "https://www.dropbox.com/scl/fi/fcqay4w152xqxify3641h/fy_counts_06_steps.mp3?rlkey=445ueygqefdsgc1gj39jcsp8z&st=zv7bv47z&raw=1",
  7: "https://www.dropbox.com/scl/fi/muvk4y3atvrm3p9d41vvy/fy_counts_07_takeaway.mp3?rlkey=xowqeicjznwc16krxql6sgkv5&st=4uivfm3f&raw=1"
};

function playSceneAudio(src) {
  if (!src) {
    console.log("No audio source for this phase.");
    return;
  }

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  console.log("Attempting to play:", src);

  currentAudio = new Audio(src);
  currentAudio.preload = "auto";
  currentAudio.volume = 0.95;

  currentAudio.play()
    .then(() => {
      console.log("Audio playing.");
    })
    .catch(error => {
      console.error("Audio failed:", error);
    });
}

function stopSceneAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

function playMembershipPhaseAudio(phase) {
  console.log("Phase:", phase, "Audio:", membershipAudioFiles[phase]);

  const src = membershipAudioFiles[phase];

  if (!src) {
    stopSceneAudio();
    return;
  }

  playSceneAudio(src);
}
