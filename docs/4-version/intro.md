---
sidebar_position: 2
---

# Introducing Git

Git is a distributed version control system (DVCS) designed to track changes in source code during software development. Created by Linus Torvalds in 2005, Git has become one of the most widely used version control systems in the world.

:::info[Linus Torvalds and Git]
Torvalds was dissatisfied with the available options at the time, finding them either too slow, complex, or lacking in certain features. He wanted a version control system that was fast, distributed, and optimized for the workflow of the Linux kernel development process, which involved thousands of contributors working on different parts of the codebase simultaneously.
:::

Imagine you have a essay writing project, and you want to make changes to it without messing it up. Git is like a special box that helps you keep track of every change you make.

## How it Works

* **Snapshot**: Imagine taking a photo of your project every time you make a change. Git does something similar; it takes snapshots of your project every time you make a change, so you can always go back to any version.

* **Branches**: Sometimes you want to try something new with your project without messing up the original. Git lets you create branches, which are like making a copy of your project. You can work on the copy (branch) separately and then decide if you want to keep the changes or throw them away.

* **Changes**: When you make changes to your project, Git helps you keep track of exactly what you did. It's like writing down every step you take, so you never forget what you did.

* **Merge**: Let's say you made changes in one part of your project and your friend made changes in another part. Git helps you put both sets of changes together neatly without mixing them up. It's like combining two different creations into one without any pieces getting lost.

* **Time Machine**: Git acts like a time machine for your project. You can go back to any snapshot (commit) you took earlier and see exactly how your project looked at that time. It's like rewinding to a specific moment in your building journey.

* **Share with Friends**: Just like you can share your creations with friends, you can share your Git project with others. They can make changes, and Git helps you bring all those changes together seamlessly.

So, Git is like a magical box that helps you build and manage your projects, keeping everything organized, safe, and easy to work on with others!


## Terminologies

### Git Repository

A Git repository, often referred to as a "repo," is a data structure used by Git to store the history and contents of a project. It's essentially a directory or folder on your computer that contains all the files and folders related to your project.

### Working Directory
This is your local copy of the files from the repository that you can edit and make changes to.

### Index (Staging Area)
This is a temporary holding area for changes you've made to files before you commit them. You can add or remove specific files from the index before creating a commit.

### HEAD
This is a reference to the latest commit in the current branch you're working on.

### Branch
A branch is a separate line of development in your project history. It allows you to work on different features or bug fixes without affecting the main codebase.

### Commit
A commit is a snapshot of the state of your project at a specific point in time. It includes all the files and their content at that moment, along with a descriptive message.

### Remote
A remote is a reference to a copy of your repository hosted on a server, like GitHub or GitLab.

### Push
Pushing is the act of transferring your local commits to the remote repository.

### Pull
Pulling is the act of fetching the latest changes from the remote repository and merging them into your local branch.

### Merge
Merging combines the changes from two different branches into a single branch.

### Tag
A tag is a lightweight reference to a specific commit in your Git history. It can be used to mark important milestones or releases of your project.

### Stash
Stashing allows you to temporarily save your uncommitted changes and come back to them later.

### Checkout
Checking out a branch switches your working directory to the specified branch.