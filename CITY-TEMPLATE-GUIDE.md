# 🏙️ City Detail Page Template Guide
## Discover Pakistan Project

---

## 📋 Overview

This is a **professional, reusable template** for creating city detail pages in the "Discover Pakistan" website. The template includes all necessary sections with placeholder content that you can easily replace.

---

## 🎯 Template Features

✅ **Hero Section** - Full-width banner with city name and tagline  
✅ **Quick Facts** - Province, Population, Language, Founded  
✅ **History Section** - Authentic historical information  
✅ **Famous Places** - Card-based layout with images  
✅ **Culture & Food** - Two-column layout  
✅ **Travel Tips** - Best time, transport, accommodation  
✅ **Photo Gallery** - Responsive 6-image grid with hover effects  
✅ **Google Map** - Embedded location map  
✅ **Nearby Cities** - Internal navigation links  
✅ **Fully Responsive** - Works on all devices  
✅ **Professional Design** - Matches index.html style  

---

## 📝 How to Use This Template

### Step 1: Copy the Template
```bash
cp city-template.html [your-city-name].html
```
Example: `cp city-template.html rawalpindi.html`

### Step 2: Replace All Placeholders

Search for text in **[BRACKETS]** and replace with actual content:

#### 🔹 Page Title (Line 6)
```html
<title>[CITY NAME] - [TAGLINE] | Discover Pakistan</title>
```
**Example:**
```html
<title>Rawalpindi - Twin City of Islamabad | Discover Pakistan</title>
```

#### 🔹 Hero Section (Lines 65-85)
Replace:
- `[CITY-IMAGE].jpg` → Your hero background image
- `[CITY NAME]` → City name (appears 2 times)
- `[CITY TAGLINE]` → Short tagline
- `[PROVINCE]` → Province name
- `[HERITAGE TYPE]` → e.g., "Mughal Heritage", "Ancient City"
- `[SPECIAL FEATURE]` → e.g., "Cultural Hub", "Industrial City"

**Example:**
```html
<h1 class="display-2 fw-bold mb-3">Rawalpindi</h1>
<p class="lead fs-3 mb-4">Twin City of Islamabad</p>
<span class="badge bg-light text-dark me-2 px-3 py-2">Punjab</span>
<span class="badge bg-success me-2 px-3 py-2">Military Heritage</span>
<span class="badge bg-warning text-dark px-3 py-2">Commercial Hub</span>
```

#### 🔹 Quick Facts (Lines 90-120)
Replace:
- `[PROVINCE NAME]` → e.g., "Punjab"
- `[POPULATION]` → e.g., "2.5 Million"
- `[LANGUAGE]` → e.g., "Punjabi, Urdu"
- `[FOUNDED YEAR]` → e.g., "1493 AD"

#### 🔹 History Section (Lines 125-145)
Write 2-3 paragraphs of authentic history. Include:
- Founding and early history
- Important rulers/dynasties
- Major historical events
- Modern significance

#### 🔹 Famous Places (Lines 150-200)
For each place card, replace:
- `[PLACE1-IMAGE].jpg` → Image filename
- `[PLACE NAME 1]` → Name of the place
- Description text
- `[ERA/PERIOD]` → e.g., "Mughal Era", "Modern"
- `[LOCATION]` → e.g., "City Center", "Old Town"

**Add more cards by copying the structure!**

#### 🔹 Culture & Food (Lines 205-260)
- `[CULTURE-IMAGE].jpg` → Cultural image
- `[Cultural Element 1-4]` → List cultural aspects
- `[FOOD-IMAGE].jpg` → Food image
- `[DISH NAME 1-4]` → Local dishes with descriptions

#### 🔹 Travel Tips (Lines 265-330)
Replace:
- `[BEST MONTHS]` → e.g., "October to March"
- `[Airport Name]` → Local airport
- `[Railway Station]` → Main station
- `[Bus Terminal]` → Bus terminal name
- `[AREA 1-3]` → Recommended areas to stay
- `[TRANSPORT OPTION 1-3]` → Local transport options
- `[TIP 1-6]` → Practical travel tips

#### 🔹 Photo Gallery (Lines 335-395)
Replace:
- `[GALLERY1-6].jpg` → 6 different images
- `[Image Caption 1-6]` → Captions for each image

#### 🔹 Google Map (Lines 400-425)
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your city
3. Click **Share** → **Embed a map**
4. Copy the iframe code
5. Replace the entire iframe section

**Example:**
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." 
    width="100%" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

#### 🔹 Nearby Cities (Lines 430-490)
For each nearby city, replace:
- `[CITY1-URL].html` → Link to city page
- `[CITY1-IMAGE].jpg` → City image
- `[CITY 1 NAME]` → City name
- `[Brief tagline]` → Short description
- `[DISTANCE]` → Distance in km

---

## 🎨 Design Guidelines

### Colors
- **Primary Green:** `#28a745` (Success)
- **Dark Green:** `#006400`
- **Primary Blue:** `#007bff`
- **Warning Yellow:** `#ffc107`
- **Danger Red:** `#dc3545`

### Typography
- **Headings:** Bold, clear hierarchy
- **Body Text:** Readable, 16px base
- **Icons:** Font Awesome 6.0.0

### Images
- **Hero:** 1920x1080px (landscape)
- **Place Cards:** 800x600px
- **Gallery:** 800x600px
- **Nearby Cities:** 600x400px

---

## 📂 File Structure

```
project/
├── city-template.html          ← Template file
├── images/                     ← All images
│   ├── [city-name]-hero.jpg
│   ├── [place1].jpg
│   ├── [place2].jpg
│   └── ...
├── styles.css                  ← Existing styles (don't change)
├── script.js                   ← Existing scripts (don't change)
└── [your-city].html           ← Your new city page
```

---

## ✅ Checklist Before Publishing

- [ ] Replaced ALL `[PLACEHOLDER]` text
- [ ] Added authentic historical content
- [ ] Uploaded all images to `/images/` folder
- [ ] Tested on mobile devices
- [ ] Verified all internal links work
- [ ] Added Google Maps embed code
- [ ] Checked spelling and grammar
- [ ] Tested in different browsers
- [ ] Verified footer displays correctly
- [ ] Tested chatbot functionality

---

## 🚀 Quick Start Example

Let's create a page for **Rawalpindi**:

1. **Copy template:**
   ```bash
   cp city-template.html rawalpindi.html
   ```

2. **Replace title:**
   ```html
   <title>Rawalpindi - Twin City | Discover Pakistan</title>
   ```

3. **Update hero:**
   ```html
   <h1>Rawalpindi</h1>
   <p class="lead">Twin City of Islamabad</p>
   ```

4. **Add facts:**
   - Province: Punjab
   - Population: 2.5 Million
   - Language: Punjabi, Urdu
   - Founded: 1493 AD

5. **Write history** (2-3 paragraphs)

6. **Add 3-6 famous places** with images

7. **Fill culture & food sections**

8. **Add travel tips**

9. **Upload 6 gallery images**

10. **Embed Google Map**

11. **Link 4 nearby cities**

12. **Test and publish!**

---

## 🔧 Customization Tips

### Adding More Place Cards
Copy this structure and paste after existing cards:

```html
<div class="col-lg-4 col-md-6">
    <div class="card h-100 border-0 shadow">
        <img src="images/your-image.jpg" class="card-img-top" alt="Place Name" style="height: 250px; object-fit: cover;">
        <div class="card-body">
            <h5 class="card-title text-success">Place Name</h5>
            <p class="card-text">Description here...</p>
            <div class="d-flex justify-content-between align-items-center">
                <span class="badge bg-success"><i class="fas fa-clock me-1"></i>Era</span>
                <span class="text-muted small"><i class="fas fa-map-marker-alt me-1"></i>Location</span>
            </div>
        </div>
    </div>
</div>
```

### Adding More Gallery Images
Copy and paste gallery item divs (6 images recommended for best layout)

### Changing Badge Colors
- `bg-success` → Green
- `bg-primary` → Blue
- `bg-warning` → Yellow
- `bg-danger` → Red
- `bg-info` → Light Blue

---

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px

All sections automatically adjust!

---

## 🆘 Troubleshooting

### Images Not Showing?
- Check file path: `images/filename.jpg`
- Verify image exists in `/images/` folder
- Check file extension (.jpg, .jpeg, .png)

### Map Not Loading?
- Verify Google Maps embed code is complete
- Check internet connection
- Ensure iframe has proper closing tag

### Layout Broken?
- Verify all HTML tags are closed
- Check Bootstrap classes are correct
- Clear browser cache

---

## 📞 Support

For questions or issues:
- Check existing city pages for examples
- Review Bootstrap 5 documentation
- Test in browser developer tools

---

## 🎉 You're Ready!

Use this template to create beautiful, consistent city pages for your "Discover Pakistan" project. Happy coding! 🇵🇰
