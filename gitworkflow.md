# Jagruk Mahila — GitHub Workflow Cheatsheet

---

## Branch Structure

```
main          → production ready code only
development   → ongoing work, merge here first
feature/*     → individual features (e.g. feature/helpline-screen)
```

---

## First Time Setup

```bash
git clone https://github.com/fareed-ak/jagruk-mahila.git
cd jagruk-mahila
git checkout development          # always work from development, not main
```

---

## Daily Start (Before You Code)

```bash
git checkout development          # switch to development branch
git pull origin development       # get latest changes from team
```

---

## Creating a New Branch

### Development branch (one time)
```bash
git checkout -b development
git push -u origin development
```

### Feature branch (every new feature)
```bash
git checkout development          # start from development
git pull origin development       # get latest first
git checkout -b feature/your-feature-name
```

**Examples:**
```bash
git checkout -b feature/helpline-screen
git checkout -b feature/language-switcher
git checkout -b feature/resources-page
```

---

## Making Changes & Committing

### Check what you changed
```bash
git status                        # shows modified/new files
git diff                          # shows exact line changes
```

### Stage your changes
```bash
git add .                         # stage all changes
git add app/helpline.jsx          # stage specific file only
```

### Commit with message
```bash
git commit -m "feat: add helpline screen with call buttons"
```

### Commit Message Format
```
type: short description (max 50 chars)
```

| Type | When to use | Example |
|---|---|---|
| `feat:` | New feature added | `feat: add language switcher` |
| `fix:` | Bug fixed | `fix: urdu text not showing RTL` |
| `chore:` | Setup, config, dependencies | `chore: update react to 19.2.4` |
| `style:` | UI/styling changes only | `style: change hero color to purple` |
| `refactor:` | Code cleanup, no feature change | `refactor: move helplines data to constants` |
| `docs:` | Documentation update | `docs: update CONTRIBUTING.md` |
| `content:` | Text/translation update | `content: add urdu translations for resources` |

---

## Pushing Your Branch

```bash
git push origin feature/your-feature-name
```

First time pushing a new branch:
```bash
git push -u origin feature/your-feature-name
```

---

## Merging Feature → Development

On GitHub:
1. Go to repo → **Pull Requests** → **New Pull Request**
2. base: `development` ← compare: `feature/your-feature-name`
3. Add description of what you built
4. Request review from teammate
5. Merge after approval

Via terminal (if solo):
```bash
git checkout development
git pull origin development
git merge feature/your-feature-name
git push origin development
git branch -d feature/your-feature-name    # delete local branch after merge
```

---

## Merging Development → Main (Release)

Only when feature is fully tested:
```bash
git checkout main
git pull origin main
git merge development
git push origin main
```

---

## Checking Status

```bash
git status                        # what files changed locally
git log --oneline                 # commit history (short)
git log --oneline --graph --all   # visual branch tree
git branch                        # list local branches
git branch -a                     # list all branches (local + remote)
```

---

## Switching Branches

```bash
git checkout main
git checkout development
git checkout feature/helpline-screen
```

---

## Pulling Latest Changes

```bash
git pull origin main              # pull from main
git pull origin development       # pull from development
```

If teammate pushed changes while you were working:
```bash
git stash                         # temporarily save your changes
git pull origin development       # get latest
git stash pop                     # bring your changes back
```

---

## Undoing Mistakes

```bash
git restore app/index.jsx         # undo changes in a file (not committed yet)
git restore .                     # undo ALL uncommitted changes
git reset HEAD~1                  # undo last commit (keeps changes)
```

---

## Quick Workflow Summary

```
1. git checkout development
2. git pull origin development
3. git checkout -b feature/my-feature
4. ... make changes ...
5. git add .
6. git commit -m "feat: what you did"
7. git push origin feature/my-feature
8. Open Pull Request on GitHub → merge to development
```

---

## Common Errors

| Error | Fix |
|---|---|
| `Your branch is behind origin` | `git pull origin development` |
| `Merge conflict` | Open the file, fix conflict markers `<<<< HEAD`, then `git add . && git commit` |
| `Already up to date` | You already have latest — no action needed |
| `Cannot switch branch, uncommitted changes` | `git stash` then switch |
| Pushed to wrong branch | `git checkout correct-branch && git cherry-pick <commit-hash>` |