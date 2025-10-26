# Bento Form Integration Guide

This guide explains how to integrate your Bento form embed into the Contact page.

## Step 1: Create a Bento Form

1. Go to [bento.me](https://bento.me)
2. Sign up or log in to your account
3. Create a new form for your email list
4. Configure the form:
   - **Form name:** "RightMessage Implementation Checklist"
   - **Email field:** Required
   - **Success message:** "Check your email for the checklist!"
   - **Redirect URL:** (optional) Leave blank or point to a thank you page

## Step 2: Get Your Embed Code

1. In Bento, go to your form settings
2. Click **"Embed"** or **"Share"**
3. Copy the embed code (it will look like this):

```html
<iframe
  src="https://bento.me/embed/YOUR_FORM_ID"
  width="100%"
  height="500"
  frameborder="0"
  scrolling="no"
></iframe>
```

## Step 3: Add the Embed to Your Website

Open `client/src/pages/Contact.tsx` and find this section:

```tsx
{/* Bento Embed Placeholder */}
<div className="bg-muted rounded-lg p-4 mb-4 text-center">
  <p className="text-sm text-foreground/60 mb-3">
    Email signup form powered by Bento
  </p>
  <div
    id="bento-form"
    className="min-h-[120px] flex items-center justify-center text-foreground/40"
  >
    {/* Bento embed will be inserted here */}
    <p className="text-sm">
      [Bento form embed will appear here]
    </p>
  </div>
</div>
```

Replace it with your Bento embed code:

```tsx
{/* Bento Embed */}
<div className="bg-muted rounded-lg p-4 mb-4">
  <iframe
    src="https://bento.me/embed/YOUR_FORM_ID"
    width="100%"
    height="500"
    frameBorder="0"
    scrolling="no"
    style={{ border: "none" }}
  ></iframe>
</div>
```

**Important:** Replace `YOUR_FORM_ID` with your actual Bento form ID.

## Step 4: Test the Form

1. Save the file
2. The dev server will auto-refresh
3. Go to the Contact page and test the form
4. Make sure the form submits and you receive the email

## Step 5: Deploy to Netlify

1. Commit your changes to GitHub
2. Netlify will automatically rebuild and deploy
3. Test the form on your live site

## Troubleshooting

**Form not showing:**
- Make sure you replaced `YOUR_FORM_ID` with your actual form ID
- Check that the iframe URL is correct
- Clear your browser cache

**Form not submitting:**
- Check your Bento account to make sure the form is published
- Make sure your email is correct in Bento settings
- Check the browser console for errors

**Styling issues:**
- The iframe may not perfectly match your site's styling
- You can adjust the `height` property in the iframe
- Bento provides some styling customization in their dashboard

## Alternative: Using Bento's React Component

If you want more control, Bento also provides a React component:

```tsx
import { BentoForm } from "@bento/react";

export default function Contact() {
  return (
    <BentoForm
      formId="YOUR_FORM_ID"
      className="w-full"
    />
  );
}
```

Check Bento's documentation for more details on the React component.

## Next Steps

Once the form is working:

1. Create a thank you email in Bento
2. Set up email automation to send the $27 checklist
3. Monitor form submissions in your Bento dashboard
4. Optimize based on conversion rates

---

For more help, visit [Bento's documentation](https://docs.bento.me).

