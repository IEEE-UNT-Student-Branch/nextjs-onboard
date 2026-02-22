# NextJS Onboarding

Practice React.js/Typescript Frontend (70%) and Node.js/Express.js Backend (30%)

Create your own portfolio or personal website, from scratch or taking inspiration from [other people's portfolios](https://github.com/emmabostian/developer-portfolios)

- Make 2 separate webpages of content, anything goes

- Bonus points for using videos, slideshows, or interactive content

- Bonus points for streaming/loading dynamic content or animations

### Installation

Install Node Version Manager for Node 22

```bash
sudo apt install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
source ~/.bashrc

# Run these commands manually
nvm install 22.21.1
nvm use 22
npm install -g pnpm
```

Install Node dependencies

```bash
pnpm install
```

## Development

Run `pnpm run dev` and access [http://localhost:3000](http://localhost:3000) on your browser

Run `code .` to open the Visual Studio Code in the current directory

When debugging with your browser's F12 screen, make sure to enable the "Disable Cache" option

### Recommended VSCode Extensions

| Extension Name                         | Author       | Notes                                                 |
| -------------------------------------- | ------------ | ----------------------------------------------------- |
| WSL                                    | Microsoft    | !!! RELOAD VSCODE AND REOPEN WSL AFTER INSTALLING !!! |
| ES7+ React/Redux/React-Native snippets | dsznajder    |                                                       |
| Prettier - Code formatter              | prettier.io  |                                                       |
| ESLint                                 | Microsoft    |                                                       |
| Prettier ESLint                        | Rebecca Vest |                                                       |

### `src/` (Frontend)

Refer to the [Next.js Docs](https://nextjs.org/docs/pages/getting-started/project-structure) for details. For simplicity, do not use the App router and only use the Pages Router

### `server/` (Backend) (WORK IN PROGRESS)

Refer to [w3schools](https://www.w3schools.com/nodejs/nodejs_express.asp) for a quick overview on making APIs and the [Express.js Docs](https://expressjs.com/en/5x/api.html) for documentation

### Etc
