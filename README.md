# Laundry Service App Landing Page

A professional landing page for a laundry service marketplace app, designed to collect emails from potential users and business partners.

## File Structure

```
laundry-landing/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # This file
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dual Audience Targeting**: Separate sections for users and businesses
- **Email Collection**: Forms for beta testers and business partners
- **Modern Animations**: Smooth scrolling, hover effects, and fade-in animations
- **Professional UI**: Clean design following the app's blue and white theme

## GitHub Pages Deployment Guide

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `laundry-app-landing`)
4. Make sure it's set to **Public** (required for free GitHub Pages)
5. Check "Add a README file"
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**
1. In your new repository, click "uploading an existing file"
2. Drag and drop all your files OR click "choose your files"
3. Upload: `index.html`, `css/style.css`, `js/script.js`
4. Commit the files with a message like "Add landing page files"

**Option B: Using Git (if you have it installed)**
```bash
git clone https://github.com/yourusername/laundry-app-landing.git
cd laundry-app-landing
# Copy your files into this directory
git add .
git commit -m "Add landing page files"
git push origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, click on **Settings** tab
2. Scroll down to **Pages** section (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**

### Step 4: Access Your Live Site

- Your site will be available at: `https://yourusername.github.io/repository-name/`
- For example: `https://johndoe.github.io/laundry-app-landing/`
- It may take 5-10 minutes for the site to go live

### Step 5: Custom Domain (Optional - for later)

When you're ready to use a custom domain:
1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In GitHub Pages settings, add your domain in the "Custom domain" field
3. Configure your domain's DNS settings to point to GitHub Pages
4. GitHub will provide detailed instructions for your specific case

## Making Updates

To update your live site:
1. Edit the files in your repository
2. Commit and push changes
3. GitHub Pages will automatically rebuild your site (takes 1-2 minutes)

## Form Integration

Currently, the forms show success messages but don't actually collect emails. To collect real emails:

### Option 1: Netlify Forms (Free)
1. Deploy to Netlify instead of GitHub Pages
2. Add `netlify` attribute to your forms
3. Netlify will automatically handle form submissions

### Option 2: Formspree (Free tier available)
1. Sign up at [Formspree.io](https://formspree.io)
2. Replace form `action` with your Formspree endpoint
3. Add `method="POST"` to forms

### Option 3: EmailJS (Free tier available)
1. Sign up at [EmailJS.com](https://www.emailjs.com)
2. Add EmailJS SDK to your project
3. Configure email templates and send emails directly from JavaScript

## Customization

### Adding Your App Screenshots
Replace the placeholder in the phone mockup:
```html
<div class="phone-screen">
    <img src="path/to/your/screenshot.png" alt="App Screenshot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
</div>
```


## Support

For GitHub Pages specific issues, check the [GitHub Pages documentation](https://docs.github.com/en/pages).

## License

This project is open source and available under the [MIT License](LICENSE).