
npm install -g @angular/cli
npm install -g @aws-amplify/cli
npm i
amplify pull --appId d2qedav01jvzfi --envName staging
ng serve
find . -type d -depth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{} pull origin master \;
