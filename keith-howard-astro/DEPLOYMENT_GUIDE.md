# Deployment Guide: GitHub + Netlify

This guide will walk you through deploying your Keith Howard website to GitHub and then to Netlify.

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in to your account.
2. Click the **+** icon in the top right and select **New repository**.
3. Name it `keith-howard-astro`.
4. Choose **Public** (so Netlify can access it).
5. Click **Create repository**.

## Step 2: Upload Your Files to GitHub

You have two options:

### Option A: Upload via GitHub Web Interface (Easiest)

1. In your new GitHub repo, click **Add file** → **Upload files**.
2. Drag and drop all the files from the `keith-howard-astro` folder (or select them).
3. Scroll down and click **Commit changes**.

### Option B: Use Git Command Line

If you prefer the command line:

```bash
# Navigate to your project folder
cd keith-howard-astro

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Keith Howard website"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/keith-howard-astro.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and log in (or create an account).
2. Click **Add new site** → **Import an existing project**.
3. Select **GitHub** as your Git provider and authorize Netlify to access your GitHub account.
4. Select the `keith-howard-astro` repository.
5. Configure the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**.

Netlify will automatically build and deploy your site. You'll get a live URL (something like `https://keith-howard-astro-abc123.netlify.app`).

## Step 4: Connect Your Custom Domain (keith-howard.com)

1. In Netlify, go to **Site settings** → **Domain management**.
2. Click **Add custom domain**.
3. Enter `keith-howard.com`.
4. Follow Netlify's instructions to update your domain's DNS settings (you'll need to log into your domain registrar).

Once DNS is updated (can take up to 48 hours), your site will be live at `keith-howard.com`.

## Step 5: Enable HTTPS

Netlify automatically provides a free SSL certificate. Just make sure it's enabled in **Site settings** → **Domain management**.

## Troubleshooting

**Build fails on Netlify:**
- Make sure `npm run build` works locally first.
- Check that all dependencies are installed: `npm install`.

**Domain not connecting:**
- DNS changes can take up to 48 hours to propagate.
- Double-check your DNS settings in your domain registrar.

**Site looks broken:**
- Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete).
- Check the Netlify build logs for errors.

## Making Updates

Every time you push changes to GitHub, Netlify will automatically rebuild and redeploy your site. Just:

1. Make changes locally
2. Commit and push to GitHub
3. Netlify will automatically deploy the changes

## Questions?

If you run into any issues, let me know and I can help troubleshoot.

