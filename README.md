# Sportspage-info-stats

Sportspage-info-stats is an app delivering live updates on various games, including popular sports like soccer, basketball, and more. The user-friendly interface provides access to scores and schedules for free. However, additional features such as player stats and team standings are exclusively available to registered users.

## Technologies used

- React - Next.js
- PostgreSQL
- Playwright
- Jest

## Design and first Draft:

- Figma
  ![Image](https://user-images.githubusercontent.com/121975341/228620208-2ea3d401-bb90-4084-b012-54be3670409a.png)

Languages:

- JavaScript
- JSX
- TypeScript
- TSX

## Setup instructions

1. Clone the project on your local machine (run each line individually):

```bash
git clone <url>
cd <repo name>
yarn
```

2. Connect to default database as admin:

- On Windows

```bash
psql -U postgres
```

- On macOS

```bash
psql postgres
```

- On Linux

```bash
sudo -u postgres psql
```

3. Set up the database:

```bash
CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD <user password>;
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
```

4. After queries are successfully ran, quit `psql` and connect to the database

```bash
\q
```

- On Windows & macOS

```bash
psql -U <user name> <database name>
```

- On Linux

```bash
sudo -u <user name> psql -U <user name> <database name>
```

5. In the repository's directory, run migrations using ley:

```bash
yarn migrate up
```

6. Create a .env file:
   Open the project in your code editor
   Copy the content of the .env.example file into the .env file
   Replace xxxxxxxx with the access information
   add .env file to .gitignore
7. (Optional) Start deployment server:

```bash
yarn dev
```

Open http://localhost:3000 in your browser to see the result.

## 1. Sign up on Vercel: https://vercel.com/

2. Connect your Vercel account to your Git provider (GitHub, GitLab, or Bitbucket) in the Vercel dashboard under the Git Integrations section.

3. Import a project on the Vercel dashboard by clicking on "Import Project" and enter the repository URL in the provided field. Alternatively, you can select a repository from the list of your connected Git repositories.

4. Configure your project by choosing a project name and configuring any build settings, such as the build command, output directory, and framework preset, if necessary. Add any required environment variables, either directly in the Vercel dashboard or by using a .env file in your project.

5. To set up environment variables, go to your project's settings in the Vercel dashboard, navigate to the "Environment Variables" section, and click on "Add". Provide the variable name and value, and then click "Save".

6. Deploy the project by clicking on "Deploy" to start the deployment process. Vercel will automatically install all dependencies, build your project, and deploy it if no errors are encountered.

7. Monitor the deployment process in the Vercel dashboard, and you will be notified when the deployment is successful. If any errors occur, Vercel will provide detailed logs to help you troubleshoot the issue.

8. Continuous Integration: Vercel offers Continuous Integration (CI) features that will automatically build and deploy your project whenever you push changes to your Git repository. This ensures that your live application is always up-to-date with the latest code.

9. If your app needs any additional environment variables such as API keys, add them to the Vercel dashboard using the same process described in step 5.

10. For exposing variables to the browser using variables prefixed with NEXT_PUBLIC, declare a JavaScript variable in your code instead of using environment variables for this, as this information is not secret and will be exposed to the browser. If you absolutely need to set a NEXT_PUBLIC environment variable, you can add it to your .env.production file.

11. Optionally, you can configure a custom domain for your project by following the instructions in the Vercel dashboard.

12. Deploy your application by pushing changes to your Git repository, which will trigger the Vercel CI process. You can monitor the deployment process in the Vercel dashboard.

By following these steps, you should be able to deploy the application on Vercel with ease, and take advantage of its CI features and seamless Git integration.
