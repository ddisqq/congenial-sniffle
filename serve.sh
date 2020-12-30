

yarn
yarn add @angular/cli
yarn add @aws-amplify/cli
yarn add aws-amplify @aws-amplify/ui-angular
amplify pull --appId d2qedav01jvzfi --envName staging
ng serve
open https://dev.d328v7rxk7g2vo.amplifyapp.com
open https://localhost:4200
open https://dev.my3dbank.com
open https://my3dbank.com
open https://www.my3dbank.com
find . -type d -depth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{} pull origin master \;

npm install -g @angular/cli
npm install -g @aws-amplify/cli
npm i