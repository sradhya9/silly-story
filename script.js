function generateStory() {
  const keyword = document.getElementById("keyword").value.trim();
  const storyBox = document.getElementById("storyBox");

  if (!keyword) {
    storyBox.innerHTML = "Please enter a keyword 🥲";
    return;
  }

  const templates = [
    `Once upon a time, a ${keyword} discovered it could talk to bananas.`,
    `In the land of ${keyword}s, everyone wore shoes on their hands and danced backward.`,
    `The ${keyword} ran for president and won by promising free marshmallows for all.`,
    `A mysterious ${keyword} appeared at my door and challenged me to a dance-off.`,
    `One day, a ${keyword} invented a machine that turns hiccups into confetti.`,
    `A ${keyword} opened a bakery that only sold invisible cookies.`,
    `Every ${keyword} in town vanished, only to return dressed as flamingos.`
  ];

  const randomIndex = Math.floor(Math.random() * templates.length);
  storyBox.innerHTML = templates[randomIndex];
}
