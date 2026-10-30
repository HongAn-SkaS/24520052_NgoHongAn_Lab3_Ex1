AI Failure Audit
Project Context
- Assignment: UIT Web Development – Lab 3, Exercise 1
- Project: Semantic Engineer & Pro-Gamer Profile Card
- Technology: React 19, Vite, and ES2024
- Audit scope: AI assistance used during the implementation and Git workflow for this exercise.
This audit records only an AI failure that was observed during the current project workflow. It does not claim that unverified code defects or runtime failures occurred.
Recorded AI Failure
Field	Details
AI-generated instruction	The assistant instructed me to run git add -f . from the application directory.
Why the instruction was incorrect	The -f option forces Git to add ignored files. The project already had ignore rules for node_modules/ and dist/, so forcing all files into the index was unnecessary and unsafe.
Actual impact	The command staged a very large number of generated and dependency files, including files under node_modules/ and the production dist/ directory. This created a risk of committing unnecessary files and greatly increased the staged change set.
How the failure was detected	I inspected git status --short and saw many staged additions (A), including node_modules/ and dist/.
Correction	I ran git restore --staged . to clear the staging area without deleting or modifying the working files.
Verification after correction	git check-ignore node_modules dist returned both paths, confirming that the ignore rules were active. git status --short then showed the application directory as untracked (?? ./) rather than listing the previously staged files.
Lesson learned	Never use git add -f . as a routine staging command. Check ignore rules and inspect the staged changes before committing.


Preventive Actions
1. Keep node_modules/ and dist/ in .gitignore.
2. Do not use git add -f unless there is a specific, justified need to add an ignored file.
3. Stage only the intended project files.
4. Run git status --short before every commit.
5. Review the staged file list with git diff --cached --stat and, when necessary, git diff --cached.
6. Run npm run build before committing implementation changes.
Audit Conclusion
The observed failure was an unsafe Git staging instruction, not a confirmed defect in the React component implementation. The issue was detected before a commit was made, and the staging area was cleared. The ignore rules for node_modules/ and dist/ were subsequently verified.

No additional AI-generated failures are included because there is not enough verified evidence to report them accurately.