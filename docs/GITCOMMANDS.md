CHEAT SHEAT

Start Working:
┌───────────────────────────────┐
│ 1. Make sure main is up-to-date│
│                               │
│ git checkout main             │
│ git pull                      │
└───────────────────────────────┘
               │
               ▼
Create a New Branch:
┌───────────────────────────────┐
│ 2. Make a feature branch      │
│                               │
│ git checkout -b my-feature    │
│ Example: git checkout -b hero │
└───────────────────────────────┘
               │
               ▼
Make Changes:
┌───────────────────────────────┐
│ 3. Edit files in VS Code      │
│                               │
│ index.html, css/style.css, js │
│ assets/images                 │
└───────────────────────────────┘
               │
               ▼
Stage & Commit:
┌───────────────────────────────┐
│ 4. Stage changes:             │
│ git add .                     │
│                               │
│ 5. Commit changes:             │
│ git commit -m "Describe change"│
└───────────────────────────────┘
               │
               ▼
Push Branch to GitHub:
┌───────────────────────────────┐
│ 6. Push your branch           │
│ git push -u origin my-feature │
└───────────────────────────────┘
               │
               ▼
Merge to Main (via GitHub):
┌───────────────────────────────┐
│ 7. Create Pull Request         │
│ - Click "Compare & pull request"│
│ - Merge to main after review   │
└───────────────────────────────┘
               │
               ▼
Update Local Main:
┌───────────────────────────────┐
│ 8. Switch to main & pull       │
│ git checkout main             │
│ git pull                      │
└───────────────────────────────┘
               │
               ▼
Repeat for next feature!


Quick Notes:

Always start with git pull so you have the latest code.

Always work in a branch, not directly on main.

Use clear commit messages. Example:

Add responsive hero section with buttons
Update hours in contact page
Fix navbar spacing on mobile


Merge via GitHub to avoid conflicts.


BRANCH NAMING CONVENTIONS 

# Branch Naming Cheat Sheet

A simple guide for naming branches consistently in Sidewalk Web Dev projects.

## Rules

1. Use **lowercase letters** only  
2. Separate words with **hyphens** `-`  
3. Be **descriptive** — your teammate should know what the branch does  
4. Keep names **short and clear**

---

## Common Prefixes

| Prefix      | Use For                                       | Example                     |
|------------|-----------------------------------------------|-----------------------------|
| `setup-`    | Initial setup or base structure              | `setup-html-css`            |
| `feature-`  | New features or content                       | `feature-hero-section`      |
| `fix-`      | Bug fixes or small adjustments               | `fix-navbar-spacing`        |
| `update-`   | Content updates                               | `update-hours`              |
| `style-`    | CSS styling changes only                      | `style-footer`              |
| `refactor-` | Rewriting code without changing functionality| `refactor-header-html`      |

---

## Examples for a New Client Site

- Setting up HTML/CSS → `setup-html-css`  
- Adding hero section → `feature-hero-section`  
- Adding contact form → `feature-contact-form`  
- Fixing mobile navbar → `fix-navbar-mobile`  
- Updating business hours → `update-hours`  
- Adjusting footer styling → `style-footer`  

---

## Workflow Example

1. Pull the latest main branch:
   git checkout main
   git pull
