# Uyime Oku Landing Page

**Lead Cloud Engineer:** Uyime Oku  
**Live Demo:** [https://uyime-oku.duckdns.org]

---

## 🚀 Project Overview

This is a dynamic prototype web application built to showcase our team’s technical skills to potential investors.

## 📦 Features

- Personalized dynamic landing page
- Node.js + Express.js backend
- Nginx reverse proxy
- SSL secured with Let’s Encrypt
- Hosted on AWS EC2 (Ubuntu)
- Custom domain with DuckDNS
- GitHub-based deployment

---

## 🖥 Tech Stack

- **Cloud Provider:** AWS EC2
- **OS:** Ubuntu 22.04 LTS
- **Web Server:** Nginx
- **Backend:** Node.js with Express.js
- **Frontend:** HTML, CSS (with optional TailwindCSS)
- **SSL:** Let’s Encrypt via Certbot

---

## 🔧 Installation & Deployment Steps

1. **Setup a server using AWS EC2**

- Logged into my AWS account through the AWS console.
  
- Selected AWS EC2.
  
- Selected a region `us-east-1` (US).
  
- Configured an instance:

  i. Name: Startup Prototype Server

  ii. AMI (OS): Ubuntu Server

  iii. Instance Type: t2.micro

  iv. Created and downloaded new key pair(prototype-key.pem)

  v. Network Settings: Allowed SSH(port 22), HTTP (port 40), and HTTPS (PORT 443) from anywhere.

- Launched Instance. 

2. **Connect to Server**

- Opened Local Terminal
  
- Navigated to the folder with my keypair. In my case its the Downloads folder.

```cd Downloads```

- Run:

```ssh -i "prototype-key.pem" ubuntu@ec2-13-40-229-156.eu-west-2.compute.amazonaws.com```

- Updated server:

```sudo apt update```
3. **Install Nginx**

- Run:

```sudo apt install nginx -y```

- Checked if nginx is running:

```sudo systemctl status nginx```

- Nginx is running. 

- Tested the nginx webserver with my EC2 public IP. It displayed the default Nginx page which confirm that my instance and nginx webserver are running fine. 

4. **Create Landing Page**
- After creating landing page, push to github
-Clone the repository:
```cd /home/ubuntu```

```git clone https://github.com/Soulchildpsalmy/portfolio-next.js-main```
```cd /portfolio-next.js-main```
- Confirmed landing page renders via EC2 public IP(18.212.201.4)

<img width="1664" alt="Main Page Displayed on EC2 IP" src="https://github.com/Soulchildpsalmy/portfolio-next.js-main/tree/main/components/images/local-index.JPG" />

5. **Set Up Node.js App**
```npm install```
```node app.js```   # or use PM2 below

- Keep Node App Running with PM2
```sudo npm install -g pm2```
```pm2 start app.js```
```pm2 save```
```pm2 startup```

6. **Configure Nginx Reverse Proxy**

#```server {```
    ```listen 80;```
    ```server_name uyime-oku.duckdns.org;```

7. **Point Domain and Secure site with Let's Encrypt SSL (Certbot)**

- Setup a free domain on Duck DNS
  
- Linked Domain to EC2 IP

<img width="1395" alt="Domain Linked to IP" src="https://github.com/Soulchildpsalmy/portfolio-next.js-main/tree/main/components/images/duckdns.JPG" />

[Landing Page rendered on Duck DNS domain](https://uyime-oku.duckdns.org/)

- Installed Certbot on my EC2

```sudo apt update -y```

```sudo apt install -y epel-release```

```sudo apt install -y certbot python3-certbot-nginx```

- Added a server block file and added a new config to ensure my domain https://uyime-oku.duckdns.org/ serve the index.html from /var/www/html.

```sudo nano /etc/nginx/sites-available/default```

- Enabled server block

```sudo ln -s /etc/nginx/sites-available/growher /etc/nginx/sites-enabled/```

- Tested and reloaded Nginx

```sudo nginx -t```

```sudo systemctl reload nginx```

- Install and configure SSL. Run Certbot: 

```sudo apt install certbot python3-certbot-nginx -y```
```sudo certbot --nginx -d uyime-oku.duckdns.org```

6. **Site Live and Secured**

<img width="1503" alt="Site Secured" src="https://github.com/Soulchildpsalmy/portfolio-next.js-main/tree/main/components/images/local-index.JPG" />

👨‍💻 About Me
Uyime Oku is a cloud-savvy product leader and engineer, experienced in launching B2B SaaS tools. Passionate about solving operational bottlenecks using modern infrastructure and AI.

© 2025 Uyime Oku — All rights reserved.