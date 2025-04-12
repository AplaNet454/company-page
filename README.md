# 💼 Business Card Website "APLA"

A clean and minimalistic **personal business card website** built using **Webpack** and modern frontend tooling. The project uses SCSS for styling, includes asset management, and outputs an optimized production-ready bundle.

## 📂 Project Structure

📦 project-root
├── 📁 docs               # Outputs (prod versioon)
├── 📁 src
│   ├── 📁 assets         # static assets
│   ├── index.js          # Main JS file (input file)
│   ├── index.html        # HTML
│   └── styles.scss       # SCSS styles
├── webpack.config.js     # Webpacka configuration
├── package.json
└── README.md


## 🛠️ Technologies Used

- **Webpack 5** – Module bundler
- **SCSS/SASS** – CSS preprocessor
- **HTMLWebpackPlugin** – Generates `index.html` from a template
- **MiniCssExtractPlugin** – Extracts CSS into separate files
- **CssMinimizerPlugin** – Minifies the CSS output
- **TerserPlugin** – Minifies the JavaScript bundle
- **CopyWebpackPlugin** – Copies static assets to the build directory
- **Webpack Dev Server** – Local development server with auto-reload

## 🚀 Getting Started

### 1. Clone the repository

### 2. **Install dependencies**  
   Make sure you have **Node.js** and **npm** installed. Then, in the project root, run:

### 3. Start the development server
npm start

### 4.Build for production
npm run build

############TO DO
resize assets
.htaccess



