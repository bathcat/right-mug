# Day 2: Git
## Start @ 900

## Agenda
1. Housekeeping
  - Nags: 
    o Upcoming [Survey](https://www.surveymonkey.com/r/TSHZXK2)
	o Github account
  - Links
    o https://matt-rickard.com/what-comes-after-git/
    o https://sfconservancy.org/blog/2022/jun/30/give-up-github-launch/
    o https://codewords.recurse.com/issues/two/git-from-the-inside-out
  - Follow-ups
2. Review
3. Branching and Merging (Cont)
4. Remotes
5. Tips 'n' Tricks



## Follow-ups
1. What's [`git checkout`](https://www.atlassian.com/git/tutorials/using-branches/git-checkout)
> In Git terms, a "checkout" is the act of 
> switching between different versions of a 
> target entity. The git checkout command 
> operates upon three distinct entities: files, 
> commits, and branches.

2. What's the deal with SSH v HTTPS?
* Similarities
  - Transport-level security
* Setup hassle 
* Additonal security 
  - Bad guy with ssh key can't delete your repo
* My own personal takeaway: Github forces 2FA anyways
  - 



## Review
9. How do you cycle through your terminal history?
* History: Up and down arrows
* Tab: complete things - file paths, commands

2. What's the difference between **git** and **gihub**?
* Github is cloud-based
  - allows sharing, editing, etc.
* Git is a tool 
  - involves local storage
* analogy
  - git -> email
  - github -> gmail
* github 
  - owned by msft
  - big - open source projects 
  - adds extra stuff
    o hosting static sites
	o pull requests

7. What's a commit?
- Save of progress
- Moves changes from staging to local repository
- Involves a message.
  o e.g. Fixing off-by-1 error
  o e.g. Add unit test
  
3. What's the command to view the history of a repository?
`git log`

10. How to you get a list of commands?
`git --help`

4. How do you throw away your local changes?
`git reset --hard`


6. What's a branch?
* A copy of *some* line of development
  - Like a draft
* Reccomendation:
  - Do all of your work in some feature branch.
  - Branch for:
    o Experimennt
	o Bug fix
	o Enhancement

5. What's a pull request?
* How a feature branch gets merged into main
* Github / Microsoft tools / Atlassian tools
* Checks and balances


1. What's the deal with git's staging area?
* Limbo between local workspace and repo
* Sets the table before a merge
* Text in green

8. How long does git keep a repo's history?
* Forever

