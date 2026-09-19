# Launching Mubarak Iddrisu's website

Your chosen public address is **www.mubarakiddrisu.com**. The current ChatGPT-hosted address is the private draft. Publishing the files through GitHub Pages and connecting your own domain will give visitors your chosen address, without `chatgpt.site` in their browser.

You already have a GitHub account. A repository is a project folder inside that account; you need a new repository for the website, not a second account.

## 1. Sign in to your existing account

Go to https://github.com/login and sign in to the account currently named `mubarak23k`. Your existing verified email can remain attached to the account.

## 2. Decide your username before creating the website repository

If you want your full name as your GitHub identity, try `mubarakiddrisu` first. An account named `middrisu` already exists as of September 19, 2026. A public lookup found no account named `mubarakiddrisu`, but GitHub must confirm that it is available for a username change.

Open https://github.com/settings/admin, or use your profile picture → Settings → Account. In the Change username section, choose Change username, review GitHub's explanation, and enter the name you want. Confirm only if GitHub says it is available and you want the change.

| Final GitHub username | Website repository name | Default website address |
| --- | --- | --- |
| mubarakiddrisu | mubarakiddrisu.github.io | https://mubarakiddrisu.github.io/ |
| middrisu | middrisu.github.io | https://middrisu.github.io/ |
| mubarak23k | mubarak23k.github.io | https://mubarak23k.github.io/ |

There is a dot before `github`: `middrisu.github.io`, not `middrisugithub.io`.

Changing your username is optional for the custom domain. Any of these accounts can publish at `www.mubarakiddrisu.com` once the domain is registered and connected.

Your repositories remain in your account after a username change. Update links to your old profile because they do not redirect. Update Git remote URLs for any projects you work on locally. If your profile introduction is stored in a repository named `mubarak23k`, rename that profile repository to exactly match the new username so its README continues to appear on your profile. This profile repository and your website repository are two different projects.

## 3. Create the website repository

Go to https://github.com/new while signed in. Select your personal account as Owner. Enter the matching repository name from the table above. Set visibility to Public for free GitHub Pages hosting. Create the repository.

Keep yourself as the only person with write access if you want to be its sole editor. Public visibility lets people read the source; it does not give them permission to edit your website.

## 4. Upload the website files

Extract `Mubarak-Iddrisu-Website.zip` on your computer. In the repository, use Add file → Upload files (or the upload-existing-file link for an empty repository).

Upload the extracted website files to the repository's top level, not the ZIP itself and not a containing folder. `index.html` must be at the top level. Keep these files together:

- `index.html`
- `research.html`
- `teaching.html`
- `hobbies.html`
- `content.json`
- `app.js`
- `styles.css`
- `portrait.jpg`
- `Mubarak-Iddrisu-CV.pdf`
- `.nojekyll` (an empty file that tells GitHub to serve the static site directly)

The included `START-HERE.md` is this guide; uploading it is optional. The raw teaching-evaluation report, private source notes, and ChatGPT hosting configuration are excluded from the ZIP.

Commit the upload to your default branch, normally `main`.

## 5. Enable GitHub Pages

In the website repository, open Settings → Pages. Under Build and deployment, choose Deploy from a branch. Select `main` (or your actual default branch) and `/ (root)`, then Save.

Wait for GitHub to finish publishing, then use Visit site from the Pages settings. It can take up to 10 minutes. Check the navigation, portrait, CV, and random teaching comments. The website becomes public when GitHub Pages publishes it.

## 6. Register your personal domain

Use a registrar such as https://porkbun.com/ to search for `mubarakiddrisu.com`. A registry lookup on September 19, 2026 returned no registration record for this name; confirm availability and the registration and renewal prices at checkout. Buy the domain in an account you control. The `www` subdomain is part of that domain; it is not a second purchase.

GitHub Pages supplies the website hosting, so a separate paid hosting plan is not needed for this website. A custom mailbox is optional and is separate from the website. The site's current contact email remains `middrisu@tulane.edu`.

## 7. Verify and connect the domain

First open your **GitHub account settings → Pages** (https://github.com/settings/pages). Add and verify `mubarakiddrisu.com` using the exact TXT record GitHub provides. Keep that verification record afterward.

Then open your **website repository → Settings → Pages**. Set Custom domain to `www.mubarakiddrisu.com` and Save. Do this before changing the website's DNS routing. When publishing from a branch, GitHub adds a `CNAME` file to the repository; retain that file during later uploads.

At your domain registrar's DNS settings, configure the records below. Use your final username, not a profile URL or repository path, in the CNAME target.

| Type | Host/name | Value |
| --- | --- | --- |
| CNAME | www | YOUR-FINAL-USERNAME.github.io |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

For example, if your final username is `mubarakiddrisu`, the CNAME value is `mubarakiddrisu.github.io`. Do not include `https://` or `/index.html` in that value. Replace conflicting website-routing records at those hosts, while preserving email records and the GitHub verification TXT record.

Once GitHub's DNS check and certificate provisioning finish, enable **Enforce HTTPS**. DNS and HTTPS availability can take up to 24 hours. Confirm that both `mubarakiddrisu.com` and `www.mubarakiddrisu.com` reach the website, with the bare domain redirecting to your chosen `www` address.

## 8. Update it yourself

Most ongoing edits happen in `content.json`. Open it in GitHub, select the pencil icon, edit the relevant text, and commit. Keep JSON quotation marks, commas, and brackets intact. GitHub Pages republishes the update.

- Biography: `biography`.
- Contact and profile links: `links`.
- Papers: `research`; use `url` for an actual paper link when available.
- Courses: `currentTeaching` and `previousTeaching`.
- Student comments: `reviews` (fields are `quote`, `course`, `term`, and `institution`).
- Personal interests: `interests`.
- Last updated month: `updated`.
- CV: replace `Mubarak-Iddrisu-CV.pdf` using that exact filename.
- Photo: replace `portrait.jpg` using that exact filename.

For a new appointment or institution, also update the fixed role line on `index.html` and relevant page descriptions. Updating the website text does not edit the CV PDF.

The Teaching page currently draws five comments from a curated pool of fifteen. Each comment preserves the original wording. The pool cycles through all comments before repeating, and no displayed group contains a duplicate. Source/course information appears beneath each comment. To add another comment, use a genuine anonymized evaluation response and fill in the accurate course, term, and institution.

## Before the public launch

Confirm the previously flagged CV details: MBAMS 638 is dated Fall 2023 in the older CV and Fall 2024 in the newer one; the site follows 2024. The Cape Coast course list combines both CVs. The downloadable CV is the supplied current PDF, including its reference-contact page; replace it with your preferred public version if needed. Research statuses follow the July 2026 CV.

## Official instructions

- Change username: https://docs.github.com/en/account-and-profile/how-tos/account-management/changing-your-username
- Effects of username changes: https://docs.github.com/en/account-and-profile/concepts/username-changes
- Profile README: https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme
- Create the site: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Verify the domain: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
- Connect the domain: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

This guide and the website files are prepared. No GitHub username has been changed, no repository has been created in your GitHub account, and no domain has been purchased or connected during this work.
