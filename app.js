'use strict';

// All routine content edits belong in content.json. This file handles display.
function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value != null) node.textContent = value;
  return node;
}

function safeUrl(value) {
  if (!value) return null;
  try {
    const url = new URL(value, document.baseURI);
    return ['https:', 'http:', 'mailto:'].includes(url.protocol) ? value : null;
  } catch { return null; }
}

function courseGroup(group, current = false) {
  const section = element('section', current ? 'current-courses' : 'past-institution');
  const heading = element('div', 'institution-heading');
  heading.append(element('h2', '', group.institution), element('span', 'term', group.period));
  const list = element('ul', 'course-list');
  for (const course of group.courses) {
    const item = element('li');
    if (course.code) item.append(element('span', 'course-code', course.code));
    item.append(element('span', 'course-title', course.title));
    const meta = [course.role, course.term].filter(Boolean).join(' · ');
    if (meta) item.append(element('span', 'course-meta', meta));
    list.append(item);
  }
  section.append(heading, list);
  return section;
}

function initReviews(reviews) {
  const valid = reviews.filter(review => typeof review.quote === 'string' && review.quote.trim());
  const section = document.querySelector('#student-reviews');
  if (!valid.length) return;
  section.hidden = false;
  const button = document.querySelector('#shuffle-reviews');
  const batchSize = Math.min(5, valid.length);
  button.hidden = valid.length <= batchSize;
  const container = document.querySelector('#review-content');
  let remaining = [];
  let previousBatch = [];
  function refill() {
    remaining = valid.map((_, i) => i);
    for (let i = remaining.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
    }
    // Avoid showing the identical set of five at the start of a new cycle.
    if (valid.length > batchSize && previousBatch.length && remaining.slice(-batchSize).every(i => previousBatch.includes(i))) {
      [remaining[0], remaining[remaining.length - 1]] = [remaining[remaining.length - 1], remaining[0]];
    }
  }
  function showReviews() {
    const chosen = [];
    while (chosen.length < batchSize) {
      if (!remaining.length) refill();
      // A cycle can end mid-batch if the owner later changes the pool size.
      const slot = remaining.findLastIndex(i => !chosen.includes(i));
      if (slot < 0) break;
      chosen.push(remaining.splice(slot, 1)[0]);
    }
    const figures = chosen.map(index => {
      const review = valid[index];
      const figure = element('figure', 'review-item');
      figure.append(element('blockquote', '', review.quote));
      figure.append(element('figcaption', '', [review.course, review.term, review.institution].filter(Boolean).join(' · ') || 'Anonymous student evaluation'));
      return figure;
    });
    container.replaceChildren(...figures);
    previousBatch = chosen;
  }
  button.addEventListener('click', showReviews);
  showReviews();
}

function renderHome(data) {
  const bio = document.querySelector('#biography');
  bio.replaceChildren(...data.biography.map(text => element('p', '', text)));
  if (data.advisors) {
    const paragraph = element('p');
    const advisorLink = advisor => {
      const href = safeUrl(advisor.url);
      const name = element(href ? 'a' : 'span', '', advisor.name);
      if (href) name.href = href;
      return name;
    };
    paragraph.append('My doctoral advisor was ', advisorLink(data.advisors.advisor), ', with ', advisorLink(data.advisors.coAdvisor), ' as my co-advisor.');
    bio.append(paragraph);
  }
  const links = document.querySelector('#contact-links');
  links.replaceChildren();
  for (const link of data.links) {
    const href = safeUrl(link.url);
    if (!href) continue;
    const anchor = element('a', '', link.label);
    anchor.href = href;
    links.append(anchor);
  }
}

function renderResearch(data) {
  document.querySelector('#research-intro').textContent = data.researchIntro;
  const research = document.querySelector('#research-list');
  research.replaceChildren();
  for (const group of data.research) {
    const section = element('section', 'research-group');
    section.append(element('h2', 'group-label', group.heading));
    for (const paper of group.papers) {
      const article = element('article', 'paper');
      const title = element('h3');
      const href = safeUrl(paper.url);
      if (href) { const a = element('a', '', paper.title); a.href = href; title.append(a); }
      else title.textContent = paper.title;
      article.append(title, element('p', 'authors', paper.authors), element('p', 'paper-meta', paper.status));
      section.append(article);
    }
    research.append(section);
  }
}

function renderTeaching(data) {
  document.querySelector('#teaching-intro').textContent = data.teachingIntro;
  document.querySelector('#current-teaching').replaceChildren(courseGroup(data.currentTeaching, true));
  document.querySelector('#past-teaching').replaceChildren(...data.previousTeaching.map(group => courseGroup(group)));
  initReviews(data.reviews || []);
}

function renderInterests(data) {
  const interests = document.querySelector('#interests');
  interests.replaceChildren();
  for (const interest of data.interests) {
    const article = element('article', 'interest');
    article.append(element('h2', '', interest.title), element('p', '', interest.text));
    interests.append(article);
  }
}

function renderContent(data) {
  const renderers = {home: renderHome, research: renderResearch, teaching: renderTeaching, hobbies: renderInterests};
  const renderPage = renderers[document.body.dataset.page];
  if (renderPage) renderPage(data);
  document.querySelector('#updated').textContent = `Updated ${data.updated}`;
  document.querySelector('#copyright-year').textContent = new Date().getFullYear();
}

fetch('content.json', {cache: 'no-cache'})
  .then(response => { if (!response.ok) throw new Error('Content unavailable'); return response.json(); })
  .then(renderContent)
  .catch(() => { document.querySelector('#content-error').hidden = false; });
