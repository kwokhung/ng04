npm install -g @angular/cli

ng new ng04
ng add @angular/elements
ng generate component framework-vote
ng generate component framework-result

npm install --save bootstrap
npm install --save-dev fs-extra concat
npm run build:element

1. Init Repo (VSCode)

2. Commit Repo (VSCode)

3. Create Repo (GitHub REST API)
-> curl -u 'kwokhung' https://api.github.com/user/repos -d '{"name":"ng04"}'

4. Remote Add Origin
-> git remote add origin https://github.com/kwokhung/ng04

5. Push Origin Master
-> git push -u origin master
