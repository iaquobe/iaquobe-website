## $whatis tagesschauer

A systemd service that pushes news from the Tagesschau API as notifications.
Code can be found on [Github](https://github.com/iaquobe/tagesschau)

### how it works
There is one installation script, that installs a 5 minute timer as systemd
userspace service.
Whenever this timer triggers news are pulled from the Tagesschau API and saved in cache. 
This file is then compared with the news form the last call of this script.
For each news article that was not there last time, a push notification is sent.
