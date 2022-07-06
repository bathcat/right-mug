12. What's `git merge`?
* Take changes from one branch to another.
* Often it's from feature branch into main.

2. Why is it import to create repositories locally?
* Local tools
  - e.g. Node, npm, visual studio, etc.
* Workspace

 
1. What's the workflow for fixing a bug?
* Get a JIRA ticket (task in sprint)
  - triage 
* Make sure you got the source
  - Git clone 
* Make a branch - specifically for big
  - stage changes
  - commit changes
  - 'Done is...' 
		o tested
		o documented
* Merge from feature branch into main

10. Why is git and github important?
* Everyone's on the same page
* Distributed version control
* Industry standard tools
  - Everyone does it

6. What's `git push`?
* Moves commits from git to github
* From a local repo to a shared repo.

3. How do you do a pull request?
* Github UI
  - Branch menu -> button
  - Github CLI
* (Or Atlassian or something.)

9. What's the difference between git and github?
* Git manages work, keeps tracks of sources
* Github hosts repositories
  - git -> email
    github -> gmail
	

5. How do you edit text in a readme file via command line?
* Navigate to correct directory, where the file is.
* Command: `start ./README.md` 
* Google 'rubber duck debugging' 

4. What's `git fetch`?
* Download changes from a remote repository
* Don't merge them

13. What's `git init`?
* Initialize a new (empty) repository

7. What's pull request?
* Request for you to merge in some changes that I made

11. What's the difference between `git pull` and `git fetch`?
* git fetch brings in changes from remote repository 
* git pull - brings in changes from remote repo AND updates your local stuff with latest and greatest

17. What is version control?
* Records changes to files
* Keeps history
* Rescue deleted stuff


14. How do you create a new branch via the CLI?
* `git checkout -b some-new-branch`


8. How do you make a directory via powershell?
```
mkdir stuff
```

15. Is there a way to restart/refresh from the command line or is that a webpage specific thing only?
* To get the latest from the server:
  `git pull` or `git fetch`
* To get rid of local changes:
  `git reset --hard`


16. How do you delete a repository you're done with?
```
git branch -d some-new-branch
```