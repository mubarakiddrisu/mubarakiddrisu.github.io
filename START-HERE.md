# Updating Mubarak Iddrisu's website

Public website: https://mubarakiddrisu.github.io/

Repository: https://github.com/mubarakiddrisu/mubarakiddrisu.github.io

## Apply this update

1. Download and extract `Mubarak-Iddrisu-Website-Revision-2.zip`.
2. Open the repository's **Code** tab. Stay at the top level, outside the old `Mubarak-Iddrisu-Website` folder.
3. Select **Add file → Upload files**.
4. Open the extracted folder on your computer, select the individual files inside it, and upload them together. Matching filenames will replace the existing files when committed. Do not upload the enclosing folder or ZIP.
5. Click **Commit changes**, committing to `main`.
6. Wait for the Pages deployment in **Actions** to finish successfully. Open the public website and refresh with **Ctrl+Shift+R** if you still see an older version.

Leave Settings → Pages on `main` and `/ (root)`, with Custom domain blank. These settings do not need to change when updating content. The private draft and the public GitHub website are separate; files prepared in this conversation reach GitHub when you upload and commit them.

## Edit text yourself on GitHub

Open the top-level `content.json` file, select the pencil icon, edit the wording, and click **Commit changes**. Keep the existing double quotes, commas, and brackets. A comma belongs between list items, but not after the last item. The website reads this file on each visit; a normal text update needs no installation or build command.

| What you want to change | Where to edit in `content.json` |
| --- | --- |
| Biography paragraphs | `biography` |
| Advisor names and profile links | `advisors` |
| Email, LinkedIn, and other contact links | `links` |
| Research introduction | `researchIntro` |
| Paper titles, collaborators, status, and links | `research` |
| Teaching introduction | `teachingIntro` |
| Current courses | `currentTeaching` |
| Previous courses | `previousTeaching` |
| Selected student feedback | `reviews` |
| Reading, soccer, and GIS interests | `interests` |
| Footer's update month | `updated` |

The site currently includes 9 research entries, 2 current courses, 3 previous courses, 15 selected student comments, and 3 interests. Teaching-assistant roles have been removed from the website's course list, including the mixed TA/instructor entry for Managerial Decision Models. Previous teaching now lists only Ohio University; current Tulane courses remain. Five student comments appear at a time below the course lists; the button reveals another selection.

The website does not automatically import the complete contents of the CV. Add any additional publications, courses, or projects to the corresponding section in `content.json`. If a section looks incomplete, first check whether the information exists in this file.

## Photos, CV, and layout

- To change your photograph, upload a JPG named `portrait.jpg` at the repository's top level, replacing the existing file.
- To update the downloadable CV, upload a PDF named `Mubarak-Iddrisu-CV.pdf`, replacing the existing file.
- A differently named asset needs a matching link in the website; uploading it alone will not display it.
- The portrait caption and basic homepage structure are in `index.html`. The page includes a fallback biography for visitors whose content file does not load; update that copy too after a substantial biography change.
- Colors, fonts, and spacing are in `styles.css`. The display and random-review behavior are in `app.js`.
- `research.html`, `teaching.html`, and `hobbies.html` define those pages' structure. Most of their text is loaded from `content.json`, so editing the visible placeholder in an HTML file alone may be overwritten by the content file.

## If content does not appear

1. Open the live `https://mubarakiddrisu.github.io/` address. Opening an HTML file directly on your computer can prevent the browser from loading `content.json`.
2. Confirm all website files are at the repository's top level. Edit this copy, not the duplicate inside the old folder.
3. Confirm the deployment has finished and refresh the browser.
4. If you see a content-loading message, check that `content.json` exists and that its punctuation is valid JSON.
5. If a specific item is still missing, note the page and item or share a screenshot so it can be checked precisely.

## A practical maintenance schedule

Update courses at the start of each semester, papers when their status changes, and your CV when you revise it. Review links and contact details every month or two. You do not need to post regularly to keep an academic website useful.
