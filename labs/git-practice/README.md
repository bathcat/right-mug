# Lab: Git Practice

## Overview

You're working on a new project, and your job is to set up the repository on github, and the first step is to add these informative notes to README.md:

```
# Lorem Ipsum

> Lorem ipsum dolor sit amet, consectetur adipiscing
> elit. Donec et tempus mauris, vel condimentum lorem.
> Praesent a nisi odio. Mauris vel magna tincidunt,
> imperdiet lacus nec, varius justo. 

```

The sprint backlog item ID is _8392_

## Requirements
1. Create a new public repository on Github. (You've probably done this already.) **Share the link with everyone on slack.**

2. Clone the repository to your hard drive
```
git clone https://github.com/bathcat/throwoway121

```

3. Create a new branch to hold the changes for this work item.
```
git checkout -b backlog-8392
```

4. Make the changes outlined above.
- (Edit file)
- Commit to whatever branch you just created

5. Merge the changes from your feature branch into main.
```
git checkout main
git merge backlog-8392
```

6. Push the changes to your public repository.
```
git push
``
* Throw it in slack. 