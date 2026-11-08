"use strict";
// Jokes are chosen randomly on every page load/refresh. The optional shuffle button is no longer shown, but the code still safely supports pages without it.
const HOMEPAGE_JOKES = [
  ["The website is fine. The developer isn't.","One of them is currently under maintenance. Guess which."],
  ["Congratulations. You've exhausted another developer.","He was last seen debugging something that worked yesterday."],
  ["The developer sold his brain to afford this website.","Unfortunately, it was already running on borrowed intelligence."],
  ["The developer had a CGPA once.","Then somebody said, ‘Can you make a website?’"],
  ["99 bugs in the code. 99 bugs in the code.","Take one down, patch it around. 137 bugs in the code."],
  ["The developer tried touching grass.","It threw a 500 Internal Server Error."],
  ["We wanted to make mathematics fun.","The developer has not experienced fun since."],
  ["This website runs on caffeine, unpaid labour, and questionable decisions.","Mostly questionable decisions."],
  ["The developer is currently being held together by semicolons.","Please do not remove any."],
  ["The website has 99.9% uptime.","The developer has 0.1%."],
  ["Our developer is open source.","Unfortunately nobody wants to maintain him."],
  ["The developer has been deprecated.","A replacement is not available."],
  ["Please be patient. Our developer is experiencing technical difficulties.","Have you tried turning him off and on again?"],
  ["The last two brain cells are resolving a merge conflict.","Neither one has write access."],
  ["Powered by Azure and one academically endangered student.","Only one of those has a service-level agreement."],
  ["Just one more commit, he said.","That was 43 commits and three existential crises ago."],
  ["Our developer requested a coffee break.","The request timed out."],
  ["The compiler has finished.","The developer has not."],
  ["We've temporarily misplaced the developer's sanity.","If found, please open a pull request."],
  ["One developer. Three rounds. Zero spare brain cells.","He built an Enter button anyway. It would be rude not to use it."],
  ["The developer lost sleep making this button.","Go ahead. Make his sacrifice mildly worthwhile."]
];
const ROUND_JOKES = [
  ["BRO. We literally warned you.","You clicked Enter anyway. The last brain cell has filed a complaint."],
  ["Congratulations. You're our prime suspect.","Your fingerprints were found all over the Enter button. Rookie mistake."],
  ["The brain cell was doing just fine.","Then YOU showed up asking for Round 2."],
  ["404: Your innocence was not found.","Our evidence? You clicked a very suspiciously tempting button."],
  ["You've been caught red-handed.","The brain was already at 1% battery. You opened another tab."],
  ["We said the developer needed sleep.","And you said, ‘Okay but where's the quiz?’"],
  ["The jury has made its decision.","Guilty of having absolutely no chill. Sentence: come back later."],
  ["This is a highly sophisticated crime scene.","Our detective is a rubber duck. He knows what you did."],
  ["The last brain cell has rage-quit.","Apparently seeing you click Enter was the final pull request."],
  ["Please stop poking the crime scene.","Every refresh adds another bug to the evidence bag."],
  ["The suspect has returned to the scene.","That means you. Yes, you. Nice browser by the way."],
  ["One more click and we're telling the compiler.","It hasn't forgiven us for the last 137 errors."],
  ["The autopsy revealed a fatal exception.","Cause: ‘just one tiny feature.’ Alleged accomplice: you."],
  ["There's a brain-shaped hole in our budget.","We suspect you used it to enter the competition early."],
  ["You've unlocked the secret final round.","It's called ‘Let the developer sleep.’ You're losing."],
  ["Detective Duck has one question.","Why did you think clicking harder would make it work?"],
  ["You have the right to remain silent.","Especially about when the website will be ready."],
  ["The developer's brain is now evidence.","Please don't try to debug it. We already tried restarting it."],
  ["The crime? Excessive enthusiasm.","The suspect? Someone who clicked Enter after reading a warning."],
  ["No brain cells were harmed by this button.","That is a lie. The button is under investigation."]
];

const stage = document.body.dataset.stage;
const jokes = stage === "home" ? HOMEPAGE_JOKES : stage === "caught" ? ROUND_JOKES : null;
const headline = document.getElementById("headline");
const punchline = document.getElementById("punchline");
const container = document.getElementById("joke-container");
let current = -1;
function showJoke(animate = false) {
  if (!jokes) return;
  let next = Math.floor(Math.random() * (jokes.length - (current === -1 ? 0 : 1)));
  if (current !== -1 && next >= current) next++;
  current = next;
  headline.textContent = jokes[current][0];
  punchline.textContent = jokes[current][1];
  container.classList.remove("entering");
  if (animate) { void container.offsetWidth; container.classList.add("entering"); }
}
const another = document.getElementById("another-joke");
if (another) another.addEventListener("click", () => showJoke(true));
document.getElementById("year").textContent = new Date().getFullYear();
showJoke();
