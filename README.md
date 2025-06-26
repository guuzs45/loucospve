
<h1 align="center">
 Using google-sheet as a database with Next.js and Tailwind CSS 📊 
</h1>

<p align="center">
  The page use Google sheets as a database hosted <a href="https://vote.hshiferaw.me" target="_blank">here</a> built with <a href="https://nextjs.org/" target="_blank">Next.js</a>, <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> and hosted with <a href="https://www.vercel.com/" target="_blank">Vercel</a>. 

</p>

<p align="center">
  The original template is designed by <a href="https://paulie.dev/" target="_blank">Paul Scanlon</a> and can be found <a href="https://github.com/PaulieScanlon/nextjs-google-sheets-database" target="_blank">here</a>. The demo for the same can be found <a href="https://nextjs-google-sheets-database.vercel.app" target="_blank">here</a> 
</p>


![demo](https://github.com/hshiferaw/nextjs-google-sheets-database/public/static/images/demo.png)

<div align="center">

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

</div>

## 🛠 Installation & Set Up

1. Clone this repository

   ```sh
   git clone https://github.com/hshiferaw/nextjs-google-sheets-database.git
   ```

2. Change directories

   ```sh
   cd nextjs-google-sheets-database
   ```

3. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

4. Install dependencies

   ```sh
   yarn install
   ```

5. Start the development server

   ```sh
   yarn dev
   ```

6. Create a .env.local and following the .env.example input some environment variables so that can run normally.

   ```txt
    GOOGLE_SERVICE_ACCOUNT_EMAIL=
    GOOGLE_PRIVATE_KEY=
    GOOGLE_SHEET_ID=
   ```

## 🏗️ Building and Running for Production

1. Generate a full static production build

   ```sh
    yarn build
    ```

2. Preview the site as it will appear once deployed

   ```sh
   yarn start
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

##  Google side Customization

1. Create a Google Sheet
    - Create a Google Sheet and add the data you want to display on the site. The first row of the sheet should contain the column names. The column names should match the keys in the `index.js` file.
2. Share the Google Sheet
    - After creating the Google Sheet, you will need to share it with the service account that you will be using to access the data (next step).
3. Create a Service Account
    - create a service account in the Google Cloud Console. This service account will be used to access the data in the Google Sheet. Make sure to grant the service account access to the Google Sheets API.
4. Obtain credentials for your service account
    - Create a service account key in the Google Cloud console and download the JSON file. This contains the credentials that will be used for above step 6.
5. Add the credentials to your project
    - Add the credentials JSON file to your project and add the path to the file as an environment variable. The name of the environment variable should be `GOOGLE_APPLICATION_CREDENTIALS`.
6. Obtain the Google Sheet ID
    - The Google Sheet ID can be obtained from the URL of the Google Sheet. The ID is the string between `/d/` and `/edi
7. Add the Google Sheet ID to your project
    - Add the Google Sheet ID as an environment variable. The name of the environment variable should be `GOOGLE_SHEET_ID`.

## 🚀 Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/timlrx/tailwind-nextjs-starter-blog)
