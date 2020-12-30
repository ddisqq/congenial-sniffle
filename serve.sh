
npm install -g @angular/cli
npm install -g @aws-amplify/cli
npm i
ng serve
find . -type d -depth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{} pull origin master \;
