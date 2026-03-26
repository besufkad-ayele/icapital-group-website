git pull
yarn install
rm -rf .next
pm2 stop icapital
pm2 delete icapital
rm .env
echo '
NEXT_PUBLIC_DOMAIN=icapitalafrica.org
NEXT_PUBLIC_API=https://icapital-cms.frontiertech.org/graphql
NEXT_PUBLIC_DATA=https://icapital-cms.frontiertech.org
NEXT_PUBLIC_SOCKET=wss://icapital-cms.techawks.io/graphql
NEXT_PUBLIC_NODE_ENV=production

' >.env
yarn build
pm2 start yarn  --name icapital -- start
