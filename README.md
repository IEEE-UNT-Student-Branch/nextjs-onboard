# NextJS Onboarding

Practice React.js/Typescript Frontend (70%) and Node.js/Express.js Backend (30%)

TODO:

- Backend features (and compile `tspc -p server/tsconfig.json; node server/main.js`) (somehow `node server/main.ts` works?)

Create your own portfolio or personal website, from scratch or taking inspiration from [other people's portfolios](https://github.com/emmabostian/developer-portfolios)

- Make 2 separate webpages of content, anything goes

- Bonus points for using videos, slideshows, or interactive content

- Bonus points for streaming/loading dynamic content or animations

## Setup Instructions

### Requirements

This project is intended to be used in a Linux environment

> If you use <ins>**Windows**</ins>, you can easily install [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) with which VSCode works seamlessly using the [WSL Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)

```sh
wsl --install -d Ubuntu
wsl --install --web-download -d Ubuntu    # If command above gets stuck at 0.0%
```

> If you use <ins>**MacOS**</ins>, you are already using a Unix system. Open the terminal and ensure that Homebrew is installed by running:
```sh
brew --version

# If Homebrew is not installed, run the Homebrew install command
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Also install [<ins>**Visual Studio Code**</ins>](https://code.visualstudio.com/download), from which we will use code formatting extensions. 

> For best experience, add/install VSCode to `$PATH`

### Installation (Windows WSL)

Pull this repository and install Node Version Manager for Node 22

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install git curl
git clone https://github.com/IEEE-UNT-Student-Branch/nextjs-onboard.git
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
source ~/.bashrc

# Run these commands manually
nvm install 22.21.1
nvm use 22
npm install -g pnpm
```

Install Node dependencies

```bash
cd nextjs-onboard/
pnpm install
```

### Installation (MacOS)

Pull this repository and install Node Version Manager for Node 22

```bash
brew update && brew upgrade && brew cleanup
brew install git curl
git clone https://github.com/IEEE-UNT-Student-Branch/nextjs-onboard.git
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | zsh
source ~/.zshrc

# Run these commands manually
nvm install 22.21.1
nvm use 22
npm install -g pnpm
```

Install Node dependencies

```bash
cd nextjs-onboard/
pnpm install
```

## Development

Run `pnpm run web-dev` and access [http://localhost:3000](http://localhost:3000) on your browser

Run `code .` to open Visual Studio Code in the current directory

> When debugging with your browser's F12 screen, make sure to enable the "Disable Cache" option

### Recommended VSCode Extensions

| Extension Name                         | Author       | Notes                                                |
| -------------------------------------- | ------------ | ---------------------------------------------------- |
| WSL (_if using Windows_)               | Microsoft    | !!! REOPEN WSL AND RUN `code .` AFTER INSTALLING !!! |
| ES7+ React/Redux/React-Native snippets | dsznajder    |                                                      |
| Prettier - Code formatter              | prettier.io  | !!! IF WINDOWS, REFER TO WSL EXTENSION FIRST !!!     |
| ESLint                                 | Microsoft    | !!! IF WINDOWS, REFER TO WSL EXTENSION FIRST !!!     |
| Prettier ESLint                        | Rebecca Vest | !!! IF WINDOWS, REFER TO WSL EXTENSION FIRST !!!     |

### `src/` (Frontend)

> Refer to the [Next.js Docs](https://nextjs.org/docs/pages/getting-started/project-structure) for details. For our case, do not use the App router and only use the Pages Router

#### Development Commands (Defined in package.json)

```bash
pnpm run web-dev        # Real time frontend development
                        # https://nextjs.org/docs/architecture/fast-refresh

pnpm run web-build      # Compile for production

pnpm run web-start      # Run compiled code
```

### `server/` (Backend) (WORK IN PROGRESS)

> Refer to [w3schools](https://www.w3schools.com/nodejs/nodejs_express.asp) for a quick overview on making APIs and the [Express.js Docs](https://expressjs.com/en/5x/api.html) for documentation

Copy `.example.env` to `.env`

```bash
cp .example.env .env
```

#### Development Commands (Defined in package.json)

```bash
pnpm run api-prepare    # Prepare TS plugins (only need run once)

pnpm run api-dev        # Real time backend development

pnpm run api-build      # Compile for production

pnpm run api-start      # Run compiled code
```

### Miscellaneous
