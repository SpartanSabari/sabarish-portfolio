const $ = (id) => document.getElementById(id);

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function render() {
  $("heroRole").textContent = PORTFOLIO.role;
  $("heroSubtitle").textContent = PORTFOLIO.heroSubtitle;
  $("heroLocation").textContent = PORTFOLIO.location;
  $("heroExperience").textContent = PORTFOLIO.experienceYears;
  $("summary").textContent = PORTFOLIO.summary;
  $("factExp").textContent = PORTFOLIO.experience;

  ["githubBtn", "contactGithub"].forEach(id => $(id).href = PORTFOLIO.contact.github);
  ["linkedinBtn", "contactLinkedin"].forEach(id => $(id).href = PORTFOLIO.contact.linkedin);

  const email = PORTFOLIO.contact.email;
  $("contactEmail").textContent = email;
  $("contactLocation").textContent = PORTFOLIO.contact.location;
  if (email && !email.includes("[YOUR")) {
    $("emailBtn").href = `mailto:${email}`;
  } else {
    $("emailBtn").href = "#contact";
    $("emailBtn").addEventListener("click", () => alert("Open content.js and replace [YOUR EMAIL] with your public email."));
  }

  const skillsGrid = $("skillsGrid");
  Object.entries(PORTFOLIO.skills).forEach(([group, skills]) => {
    const card = el("div", "skill-card reveal");
    card.append(el("h3", "", group));
    const tags = el("div", "tags");
    skills.forEach(skill => tags.append(el("span", "tag", skill)));
    card.append(tags);
    skillsGrid.append(card);
  });

  const experienceList = $("experienceList");
  PORTFOLIO.experience.forEach(exp => {
    const card = el("article", "exp-card reveal");
    const top = el("div", "exp-top");
    const left = el("div");
    left.append(el("h3", "exp-company", exp.company));
    left.append(el("p", "exp-role", `${exp.role} • Band ${exp.band} • ${exp.location}`));
    top.append(left, el("span", "exp-period", exp.period));
    card.append(top);
    const tech = el("div", "tags");
    exp.technologies.forEach(t => tech.append(el("span", "tag", t)));
    card.append(tech);
    const ul = el("ul", "bullets");
    exp.bullets.forEach(b => ul.append(el("li", "", b)));
    card.append(ul);
    experienceList.append(card);
  });

  const projectsGrid = $("projectsGrid");
  PORTFOLIO.projects.forEach((project, index) => {
    const card = el("article", "project-card reveal");
    const top = el("div", "project-top");
    top.append(el("span", "project-index", String(index + 1).padStart(2, "0")));
    top.append(el("span", "project-category", project.category));
    card.append(top);
    card.append(el("h3", "", project.name));
    card.append(el("p", "project-desc", project.description));
    card.append(el("div", "project-sub", "Business purpose"));
    card.append(el("p", "small", project.purpose));
    card.append(el("div", "project-sub", "My contribution"));
    const ul = el("ul", "project-list");
    project.contribution.forEach(x => ul.append(el("li", "", x)));
    card.append(ul);
    card.append(el("div", "project-sub", "Technology"));
    const tags = el("div", "tags");
    project.stack.forEach(x => tags.append(el("span", "tag", x)));
    card.append(tags);
    if (project.architecture) {
      card.append(el("div", "project-sub", "Architecture"));
      card.append(el("p", "small", project.architecture));
    }
    card.append(el("div", "project-sub", "Technical challenges"));
    const ch = el("ul", "project-list");
    project.challenges.forEach(x => ch.append(el("li", "", x)));
    card.append(ch);
    card.append(el("div", "project-sub", "Outcome"));
    card.append(el("p", "small", project.outcome));
    projectsGrid.append(card);
  });

  $("plannedName").textContent = PORTFOLIO.plannedProject.name;
  $("plannedDescription").textContent = PORTFOLIO.plannedProject.description;
  PORTFOLIO.plannedProject.stack.forEach(x => $("plannedStack").append(el("span", "tag", x)));
  PORTFOLIO.plannedProject.concept.forEach(x => $("plannedConcepts").append(el("div", "concept", `◆ ${x}`)));

  const edu = $("educationGrid");
  PORTFOLIO.education.forEach(item => {
    const card = el("article", "edu-card reveal");
    card.append(el("h3", "", item.qualification));
    if (item.institution) card.append(el("p", "", item.institution));
    if (item.year) card.append(el("p", "", item.year));
    card.append(el("p", "", item.score));
    edu.append(card);
  });

  $("year").textContent = new Date().getFullYear();
}

render();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .08 });

document.querySelectorAll(".reveal").forEach(x => observer.observe(x));

$("menuBtn").addEventListener("click", () => $("navLinks").classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a => a.addEventListener("click", () => $("navLinks").classList.remove("open")));

$("themeBtn").addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
  localStorage.setItem("theme", document.documentElement.classList.contains("light") ? "light" : "dark");
});
if (localStorage.getItem("theme") === "light") document.documentElement.classList.add("light");

window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const progress = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  $("progress").style.width = `${progress}%`;
});
