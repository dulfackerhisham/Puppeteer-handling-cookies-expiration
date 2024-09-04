Simple Node js app Hosting on AWS EC2

1. create aws ec2 instance
2. launch into gitbash or aws console using SSH key
   
  IF(gitbash) {
  using git bash Use SSH to Connect:
  On your local machine, use the following command to connect
  (code-> path-to-your-key.pem)
  } else(aws console) {
    1. Update the package lists:
        (code -> sudo apt update)
    2. install Node.js:
        (code -> apt install nodejs)
        (to check node version -> node -v) 
    3. Upload Your Script to the EC2 Instance:
        (code -> mkdir puppeteer-project
              cd puppeteer-project )
    4. Clone Git repository:
        install git if not installed
        (code -> apt-get install git -y)
        (verify version -> git --version)
    5. Install packages:
        (code -> npm install)

Iinstall pm2: -> PM2 automatically restarts your script if it crashes
sudo npm install pm2@latest -g
Run Your Script with PM2: Navigate to your script directory and start it with PM2:
pm2 start your-script.js
Save the Process List: Save the PM2 process list and corresponding environment:
pm2 save
Startup Script: Generate and configure a startup script to ensure PM2 starts on system boot:
pm2 startup
