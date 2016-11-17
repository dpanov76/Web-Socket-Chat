///// create/run DB on port 27017
_________________________________
./mongodb-osx-x86_64-3.2.10/bin/mongod --dbpath=/Users/dpanov/Desktop/ws/data --port 27017

if errors edit hosts file to add username in it (copy from the error)


if it is already running use

ps wuax | grep mongo

if process number is for example 31936

kill 31936


/////run express server
_______________________
node server
npm start
