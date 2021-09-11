## Domain for my app 
- time and project tracker for individual users as well as teams.

## User Stories
- MVP: As a user, I can:
  - Log into the site
  - View a list of my current and completed projects
  - View time spent on each stage of a project
  - Create a new project and associate time entries with said project
  - Create a time entry by starting a countdown timer (pomodoro-style) and input project name and current stage of project associated with that session.
- Stretch: 
  - a user can team up with other users and work on a project together
  - a project can be associated with a client
  - in a team context, one user would have admin role
  - implement secure password

## Project Requirements:
- *Create* action
  - create a timer associated with a project and a label
  - create a user during signup
  - create a session when a user logs in
- *Index* action
  - a user can view a list of all time entries
  - a user can view a list of projects
  - a user can view a list of labels
- *Show* action
  - a user can view a specific project and the time spent during each stage of that project
- *Update* action
  - a user can edit their name and/or email
- *Delete* action
  - a user can delete a time entry
  
- client-side routes: 
  - signup page
  - login page
  - logout page
  - timer page
  - time-entry page

