
npm install -g @angular/cli
npm install -g @aws-amplify/cli
npm install -g @aws-amplify/ui-angular
npm i
amplify pull --appId d2qedav01jvzfi --envName staging
ng serve
open https://dev.d328v7rxk7g2vo.amplifyapp.com
open https://localhost:4200
open https://dev.my3dbank.com
open https://my3dbank.com
open https://www.my3dbank.com
find . -type d -depth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{} pull origin master \;
