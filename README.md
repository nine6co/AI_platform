# AI Chatbot Platform - 生成式AI應用入口

A comprehensive **Generative AI Application Portal** designed to integrate multiple AI-powered tools and services. The platform provides a unified interface for various AI assistance features including chatbot support, document translation, audio transcription, meeting notes organization, and more.

## 📋 Overview

The AI Chatbot Platform is a modern web application built with **Tailwind CSS** and **Lucide Icons**, providing a clean, intuitive user experience for accessing generative AI applications. The platform is designed to be fully responsive across desktop and mobile devices.

### Technology Stack

- **Frontend Framework**: HTML5 + Vanilla JavaScript
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: Lucide Icons
- **Fonts**: Plus Jakarta Sans (Google Fonts)
- **Responsive Design**: Mobile-first approach

## ✨ Key Features

### 1. **華寶 (AI Assistant System)** 
- **Purpose**: Quick retrieval of internal company regulations and compliance guidelines
- **Page**: `assistant.html`
- **Disclaimer**: AI provides summary assistance only; actual compliance decisions must be made by employees based on official regulations
- **Features**:
  - Category selection (HR, Deposits/Withdrawals, Accounting, Wealth Management, Foreign Exchange, Credit/Loan, Duty Center 555)
  - Voice input capability with microphone button
  - Real-time chat interface
  - Responsive chat UI with message bubbles
  - Submit functionality with visual feedback

### 2. **文件翻譯 (Document Translation)**
- **Purpose**: Translate Word documents and other file formats
- **Supported Languages**: Chinese, English, Vietnamese
- **Page**: `translation.html`
- **Capabilities**: File upload and translation between multiple languages

### 3. **語音會議記錄逐字稿 (Audio Transcription)**
- **Purpose**: Convert audio recordings (MP3, etc.) into transcribed text
- **Page**: `transcription.html`
- **Features**: Audio file processing with AI-powered transcription

### 4. **會議記錄整理 (Meeting Minutes Organization)**
- **Purpose**: Automatically organize meeting transcripts
- **Page**: `minutes.html`
- **Outputs**: 
  - Main topics
  - Summaries
  - Conclusions
  - Follow-up items

### 5. **時事模擬情境 (Current Events Simulation)**
- **Purpose**: Generate FAQ and mock Q&A based on provided documents
- **Page**: `simulation.html`
- **Features**: Document-based scenario generation and Q&A preparation

### 6. **金融業法規摘要 (Financial Regulations Summary)**
- **Purpose**: Extract and summarize key points from financial regulatory documents
- **Page**: `regulations.html`
- **Use Cases**: Compliance review and regulatory document analysis

---

## 📁 Project Structure

```
ai_platform/
├── index.html                    # Main dashboard page
├── assistant.html                # AI Assistant (華寶) page
├── translation.html              # Document translation page
├── transcription.html            # Audio transcription page
├── minutes.html                  # Meeting minutes organization page
├── translation-history.html      # Translation history/records
├── assistant-files.html          # File management for assistant
├── demo.html                     # Demo page
│
├── components/                   # Reusable HTML components
│   ├── head-common.html          # Shared <head> configuration
│   ├── sidebar.html              # Navigation sidebar component
│   └── topbar-user.html          # User profile & notification bar
│
├── page/                         # Alternative page structures
│   ├── index.html
│   ├── assistant.html
│   ├── translation.html
│   ├── transcription.html
│   ├── minutes.html
│   ├── translation-history.html
│   └── assistant-files.html
│
├── css/
│   └── sidebar.css               # Sidebar-specific styles
│
├── js/
│   └── components.js             # JavaScript for component loading
│
└── img/
    └── logo.png                  # Platform logo
```

---

## 🎨 Design System

### Color Palette

The platform uses a cohesive color scheme defined in Tailwind configuration:

| Color Name | Value | Purpose |
|-----------|-------|---------|
| **Primary** | `#000093` | Main blue color for buttons, links, and highlights |
| **Primary Hover** | `#000079` | Darker blue for hover states |
| **Background** | `#F3F4F6` | Light gray page background |
| **Surface** | `#FFFFFF` | White background for cards and panels |
| **Border** | `#E5E7EB` | Light gray for borders and dividers |
| **Text** | `#1F2937` | Dark gray for main text (headings) |
| **Text Muted** | `#6B7280` | Medium gray for secondary text |

### Typography

- **Font Family**: Plus Jakarta Sans (weights: 300, 400, 500, 600, 700)
- **Scalable**: Responsive font sizes across all breakpoints
- **Accessibility**: Focus states with 2px solid blue outline

---

## 🏗️ Layout Architecture

### Main Layout Structure

All pages follow a consistent two-column layout:

```
┌─────────────────────────────────────────┐
│         Top Bar (Header)                │
├──────────┬──────────────────────────────┤
│ Sidebar  │                              │
│ (264px)  │   Main Content Area          │
│          │   (Flexible Width)           │
│          │                              │
└──────────┴──────────────────────────────┘
```

### 1. **Sidebar Navigation** (`components/sidebar.html`)

- **Width**: 264px (collapsible)
- **Features**:
  - Logo and platform name in header
  - Dashboard navigation link
  - Expandable "Generative AI Applications" menu
  - Sub-navigation items for each AI tool
  - Smooth transitions and hover effects
  - Toggle button for collapse/expand (position: -right-3)
  - Auto-scrolling support for long menu lists

- **Navigation Items**:
  - 儀表版 (Dashboard)
  - 生成式AI應用入口 (AI Applications Hub) - Collapsible
    - 華寶 (AI Assistant)
    - 文件翻譯 (Translation)
    - 語音會議記錄逐字稿 (Transcription)
    - 會議記錄整理 (Minutes)
    - 時事模擬情境 (Simulation)
    - 金融業法規摘要 (Regulations)

### 2. **Top Bar / Header**

- **Height**: 80px (h-20)
- **Position**: Sticky/Fixed
- **Components**:
  - Left Section: Breadcrumb navigation + page title
  - Right Section: Search bar (on index), notifications, user profile dropdown
  - Shadow and border styling for visual separation

### 3. **User Profile Section** (`components/topbar-user.html`)

- **Notification Button**: Bell icon with unread indicator
- **User Avatar**: Circular avatar with initials (e.g., "G")
- **Dropdown Menu**: 
  - User name and employee ID
  - Logout option with confirmation modal
  - Smooth animations (fade-in, scale transitions)

### 4. **Logout Confirmation Modal**

- **Backdrop**: Semi-transparent black (50% opacity) with blur effect
- **Modal Features**:
  - Alert triangle icon
  - Confirmation/Cancel buttons
  - Close button (X icon)
  - Smooth entrance animations (opacity fade + scale grow)

---

## 📄 Page Details

### **Dashboard / Index (`index.html`)**

**Purpose**: Main entry point with overview of all AI applications

**Features**:
- Grid layout of AI tool cards (responsive: 1-4 columns)
- Search functionality
- Pagination system (configurable items per page: 5, 10, 15, 20)
- Card properties:
  - Icon
  - Title
  - Description
  - Last updated timestamp
  - Hover animation (lift up effect)
  - Navigate to detail page on click
- Pagination controls with page numbers

**Pagination Logic**:
```javascript
- Current page tracking
- Dynamic card visibility based on selected items per page
- Previous/Next button states
- Page number button generation
- Range display (e.g., "Showing 1 to 6 of 6 items")
```

### **AI Assistant Page (`assistant.html`)**

**Purpose**: Main chatbot interface for querying internal regulations

**Key Sections**:
1. **Disclaimer Banner**: Yellow alert box with warning icon
2. **Chat Interface**: 
   - Message display area with scrollbar hidden
   - Initial greeting from AI bot
   - User message bubbles (right-aligned, max 85% width)
3. **Input Controls**:
   - Category dropdown selector
   - Voice input button (microphone icon)
   - Text input field with placeholder
   - Submit button ("填完送出") with send icon
4. **Responsive Design**: 
   - Column layout on mobile
   - Row layout on larger screens

**Available Categories**:
- HR (人資)
- Deposits/Withdrawals (存匯)
- Accounting (會計)
- Wealth Management (財富管理)
- Foreign Exchange (外匯)
- Credit/Loan (徵信授信)
- Duty Center 555 (勤務中心555)
- Uncategorized (不分類)

### **Translation Page (`translation.html`)**

**Purpose**: Document translation interface

**Features**:
- File upload functionality
- Language selection
- Document processing
- Translation output display

### **Transcription Page (`transcription.html`)**

**Purpose**: Audio-to-text conversion interface

**Features**:
- Audio file upload
- Real-time transcription processing
- Transcript display and editing
- Export functionality

### **Minutes Page (`minutes.html`)**

**Purpose**: Meeting minutes organization

**Features**:
- Document/transcript input
- Automatic categorization into:
  - Topics
  - Summary
  - Conclusions
  - Action items
- Export organized minutes

---

## 🎯 Component Usage Guide

### **Common Head Configuration** (`components/head-common.html`)

Include in all pages' `<head>` section:

```html
<head>
    <!-- Include all content from head-common.html -->
    <title>AI Chatbot Platform - [Page Name]</title>
    <!-- Optional page-specific styles -->
</head>
```

### **Sidebar Component** (`components/sidebar.html`)

The sidebar is dynamically loaded by `js/components.js` on all pages. No manual inclusion needed; it's automatically rendered when the page loads.

### **TopBar User Component** (`components/topbar-user.html`)

Place inside header's right content area:

```html
<div class="flex items-center space-x-6">
    <!-- TopBar User Component Contents -->
    <!-- Notifications button -->
    <!-- User profile dropdown -->
    <!-- Logout modal -->
</div>
```

---

## 🖥️ Responsive Design

The platform is optimized for multiple screen sizes:

| Breakpoint | Devices | Notes |
|-----------|---------|-------|
| **Mobile** | < 640px | Single column, full-width content |
| **Tablet** | 640px - 1024px | 2-column grid, adjusted spacing |
| **Desktop** | > 1024px | 3-4 column grid, full functionality |

### Responsive Classes Used:
- `hidden sm:block` - Hide on mobile, show on larger screens
- `md:hidden` - Hide on medium screens and above
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` - Responsive card grid
- `flex-col sm:flex-row` - Stack on mobile, horizontal on desktop

---

## 🔐 Authentication & Security

### User Management

- **Login System**: Integrated (displayed in header)
- **Session Management**: User profile dropdown with logout
- **Confirmation**: Logout confirmation modal to prevent accidental logout
- **User Info Display**: Name and employee ID in top bar

### Data Protection

- Focus on compliance and regulatory content
- Internal rules and regulations retrieval
- Role-based access (implied by menu structure)

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build process required (CDN-based setup)
- Internet connection for external resources (Tailwind, Lucide Icons, Google Fonts)

### Installation

1. **Clone or download the project**:
   ```bash
   git clone <repository-url>
   cd ai_platform
   ```

2. **Open in browser**:
   - Open `index.html` in your web browser
   - Navigate through the sidebar to access different features

3. **File Structure Setup**:
   - Ensure all HTML files are in the project root
   - Keep `components/` folder with shared components
   - Maintain `css/sidebar.css` for sidebar styling
   - Place images in `img/` folder

### Development

**No build step required!** This is a static HTML/CSS/JS application.

To make changes:
1. Edit HTML files directly
2. Modify Tailwind classes in HTML (changes apply immediately in modern browsers)
3. Update `css/sidebar.css` for sidebar-specific styles
4. Modify `js/components.js` for component behavior

---

## 📱 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full support |
| Firefox 88+ | ✅ Full support |
| Safari 14+ | ✅ Full support |
| Edge 90+ | ✅ Full support |
| IE 11 | ❌ Not supported |

---

## 🎓 Usage Examples

### Accessing AI Assistant (華寶)

1. Click "華寶 (AI助理系統)" in the sidebar
2. Select a category from the dropdown (e.g., "人資")
3. Type your question in the input field
4. Click "填完送出" to submit

### Translating Documents

1. Navigate to "文件翻譯" via sidebar
2. Upload a Word document or similar file
3. Select target language (中文/English/Tiếng Việt)
4. Submit for translation
5. Download the translated document

### Transcribing Audio

1. Go to "語音會議記錄逐字稿"
2. Upload an audio file (MP3, WAV, etc.)
3. Wait for AI processing
4. View transcribed text
5. Make edits if needed
6. Export as document

---

## 🔧 Customization

### Changing Colors

Modify the Tailwind config in any `<head>` section:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#000093',          // Change primary color
                primaryHover: '#000079',
                // ... other colors
            }
        }
    }
}
```

### Adding New Features

1. Create a new HTML page (e.g., `new-feature.html`)
2. Include the common head configuration
3. Use the same sidebar and topbar components
4. Add navigation link in `components/sidebar.html`
5. Follow the existing layout pattern

### Styling Guide

- Use Tailwind utility classes for most styling
- Avoid inline styles; use CSS classes instead
- Follow the existing color scheme for consistency
- Test responsive designs across breakpoints

---

## 📊 File Sizes & Performance

- **Lightweight**: Uses CDN-based resources (no local builds needed)
- **Fast Loading**: Minimal JavaScript, mostly CSS
- **Efficient**: Component-based reusable HTML snippets
- **Responsive**: Mobile-optimized with lazy loading support

---

## 🤝 Contributing

When adding new features or pages:

1. **Follow Naming Conventions**:
   - Use Traditional Chinese names for feature pages
   - Use kebab-case for HTML filenames (e.g., `new-feature.html`)

2. **Maintain Consistency**:
   - Use the same color palette
   - Include navigation in sidebar
   - Add breadcrumb in header
   - Use common components

3. **Documentation**:
   - Update README with new feature descriptions
   - Add comments to complex JavaScript
   - Include usage examples

---

## 📝 Notes & Disclaimers

### Data Privacy

- All regulatory content is for internal company use
- User activity may be logged for compliance purposes
- Sensitive information should not be shared in chat

### AI Limitations

- **華寶 AI Assistant**: 
  - Provides summaries only; not authoritative
  - Employees must verify with official regulations
  - Used for quick reference, not final decisions

- **General**: 
  - AI-generated content should be reviewed by humans
  - Always verify with official sources
  - Compliance decisions require human judgment

---

## 🔗 Resources

- **Tailwind CSS**: https://tailwindcss.com
- **Lucide Icons**: https://lucide.dev
- **Google Fonts**: https://fonts.google.com

---

## 📞 Support

For issues or questions:

1. **Check Documentation**: Review this README first
2. **Review Code Comments**: Check HTML/JS comments for implementation details
3. **Browser Console**: Check browser developer tools for errors
4. **Contact Team**: Reach out to the development team for support

---

## 📅 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-04-18 | Initial release with 6 AI applications |

---

## 📄 License

[Add your license information here]

---

**Last Updated**: April 20, 2026  
**Status**: Active Development  
**Maintained by**: AI Platform Development Team
