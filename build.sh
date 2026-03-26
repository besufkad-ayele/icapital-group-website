yarn install
rm -rf .next
rm .env
echo '
NEXT_PUBLIC_DOMAIN=icapital.com
NEXT_PUBLIC_API=https://icapital-cms.frontiertech.org/graphql
NEXT_PUBLIC_DATA=https://icapital-cms.frontiertech.org
NEXT_PUBLIC_SOCKET=wss://icapital-cms.techawks.io/graphql
NEXT_PUBLIC_NODE_ENV=production

' >.env

yarn build
