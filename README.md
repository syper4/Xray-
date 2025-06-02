# x-ui

A multi-protocol, multi-user xray panel

# Features

- System status monitoring
- Supports multiple users and protocols, web-based visual operation
- Supported protocols: vmess, vless, trojan, shadowsocks, dokodemo-door, socks, http
- Supports configuring more transport options
- Traffic statistics, traffic limit, expiration time limit
- Customizable xray configuration templates
- Supports https access to the panel (with your own domain + SSL certificate)
- One-click SSL certificate application and auto-renewal
- More advanced configuration options, see the panel for details

# Installation & Upgrade

```
bash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)
```

## Manual Installation & Upgrade

1. First, download the latest archive from https://github.com/vaxilu/x-ui/releases, usually choose the `amd64` architecture
2. Then upload this archive to the `/root/` directory on your server and log in as the `root` user

> If your server CPU architecture is not `amd64`, replace `amd64` in the commands with your architecture

```
cd /root/
rm x-ui/ /usr/local/x-ui/ /usr/bin/x-ui -rf
tar zxvf x-ui-linux-amd64.tar.gz
chmod +x x-ui/x-ui x-ui/bin/xray-linux-* x-ui/x-ui.sh
cp x-ui/x-ui.sh /usr/bin/x-ui
cp -f x-ui/x-ui.service /etc/systemd/system/
mv x-ui/ /usr/local/
systemctl daemon-reload
systemctl enable x-ui
systemctl restart x-ui
```

## Install using Docker

> This Docker tutorial and image are provided by [Chasing66](https://github.com/Chasing66)

1. Install Docker

```shell
curl -fsSL https://get.docker.com | sh
```

2. Install x-ui

```shell
mkdir x-ui && cd x-ui
docker run -itd --network=host \
    -v $PWD/db/:/etc/x-ui/ \
    -v $PWD/cert/:/root/cert/ \
    --name x-ui --restart=unless-stopped \
    enwaiax/x-ui:latest
```

> Build your own image

```shell
docker build -t x-ui .
```

## SSL Certificate Application

> This feature and tutorial are provided by [FranzKafkaYu](https://github.com/FranzKafkaYu)

The script has a built-in SSL certificate application feature. To use it, you need:

- Know your Cloudflare registration email
- Know your Cloudflare Global API Key
- The domain has been resolved to this server via Cloudflare

How to get the Cloudflare Global API Key:
    ![](media/bda84fbc2ede834deaba1c173a932223.png)
    ![](media/d13ffd6a73f938d1037d0708e31433bf.png)

When using, just enter your `domain`, `email`, and `API KEY`, as shown below:
        ![](media/2022-04-04_141259.png)

Notes:

- This script uses DNS API for certificate application
- Let'sEncrypt is used as the CA by default
- The certificate installation directory is /root/cert
- All certificates applied by this script are wildcard certificates

## Telegram Bot Usage (In development, not available yet)

> This feature and tutorial are provided by [FranzKafkaYu](https://github.com/FranzKafkaYu)

X-UI supports daily traffic notifications, panel login alerts, and more via a Telegram bot. You need to apply for a bot yourself.
For instructions, see [this blog post](https://coderfan.net/how-to-use-telegram-bot-to-alarm-you-when-someone-login-into-your-vps.html)
Usage: Set the bot parameters in the panel backend, including

- Telegram bot Token
- Telegram bot ChatId
- Telegram bot schedule time, using crontab syntax  

Example syntax:
- 30 * * * * * //Notify at the 30th second of every minute
- @hourly      //Notify every hour
- @daily       //Notify every day (at midnight)
- @every 8h    //Notify every 8 hours  

Telegram notifications include:
- Node traffic usage
- Panel login alerts
- Node expiration reminders
- Traffic warning alerts  

More features are planned...
## Recommended Systems

- CentOS 7+
- Ubuntu 16+
- Debian 8+

# FAQ

## Migrating from v2-ui

First, install the latest x-ui on the server with v2-ui installed, then use the following command to migrate all local v2-ui `inbound account data` to x-ui. `Panel settings and username/password will not be migrated.`

> After migration, please `stop v2-ui` and `restart x-ui`, otherwise the inbounds of v2-ui and x-ui will cause `port conflicts`

```
x-ui v2-ui
```

## Issue Closure

Too many basic questions, so issues may be closed quickly.

## Stargazers over time

[![Stargazers over time](https://starchart.cc/vaxilu/x-ui.svg)](https://starchart.cc/vaxilu/x-ui)
