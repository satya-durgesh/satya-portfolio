# 📸 How to Add Your Professional Headshot

To add your professional headshot to the portfolio, follow these simple steps:

## Method 1: Replace Placeholder in HTML (Recommended)

1. **Save your headshot image** as `headshot.jpg` in the same folder as `index.html`

2. **Open `index.html`** and find this section (around line 137-143):
```html
<div class="about-visual">
    <div class="headshot-container">
        <div class="headshot-placeholder">
            <div class="headshot-icon">👤</div>
            <p>Professional Headshot</p>
        </div>
    </div>
</div>
```

3. **Replace it with**:
```html
<div class="about-visual">
    <div class="headshot-container">
        <div class="headshot-image">
            <img src="headshot.jpg" alt="Satya Durgesh Keerthi">
        </div>
    </div>
</div>
```

4. **Add this CSS** to your `styles.css` file:
```css
.headshot-image {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--primary-red);
    position: relative;
    transition: all var(--transition-medium);
}

.headshot-image:hover {
    border-color: var(--accent-yellow);
    box-shadow: 0 20px 60px rgba(225, 6, 0, 0.5);
    transform: scale(1.02);
}

.headshot-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all var(--transition-medium);
}

.headshot-image:hover img {
    transform: scale(1.05);
}
```

## Method 2: Keep Placeholder Style but Add Image

If you prefer to keep the animated border style:

1. Save your image as `headshot.jpg`

2. Replace the headshot section with:
```html
<div class="about-visual">
    <div class="headshot-container">
        <div class="headshot-placeholder" style="background-image: url('headshot.jpg'); background-size: cover; background-position: center;">
            <div class="headshot-icon" style="display: none;"></div>
            <p style="display: none;">Professional Headshot</p>
        </div>
    </div>
</div>
```

## Quick Tips

- **Image Format**: Use JPG or PNG format
- **Recommended Size**: At least 800x800 pixels for best quality
- **Aspect Ratio**: Square images work best (1:1 ratio)
- **Background**: Professional headshot with clean background
- **File Size**: Keep under 500KB for fast loading

## Alternative Image Locations

You mentioned you have these image files:
- `DSC_1185.JPG` - Your desktop image
- `RESUME\OLD RESUME\headshot .jpg` - Resume headshot

You can use either of these:
```html
<img src="DSC_1185.JPG" alt="Satya Durgesh Keerthi">
<!-- OR -->
<img src="RESUME/OLD RESUME/headshot .jpg" alt="Satya Durgesh Keerthi">
```

## Final Note

Your portfolio is now fully customized with your actual data! Just add the headshot to complete the professional look.

