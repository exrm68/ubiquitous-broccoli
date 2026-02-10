# 🎬 CINEFLIX Mini App

## ✨ Demo Data সহ - সাথে সাথে দেখুন!

এই version এ **12টি demo movies/series** আছে যাতে আপনি Firebase setup করার আগেই দেখতে পারবেন কেমন দেখাবে!

---

## 🚀 দ্রুত চালান (Demo Mode):

```bash
npm install
npm run dev
```

**ব্যাস! খুলে যাবে demo data সহ! 🎉**

---

## 📱 Demo তে কি আছে:

✅ **12টি Popular Movies/Series:**
- Avengers: Endgame
- Squid Game (Episodes সহ)
- Stranger Things (Episodes সহ)
- The Batman
- Spider-Man: No Way Home
- Breaking Bad (Episodes সহ)
- Interstellar
- Money Heist (Episodes সহ)
- Parasite
- Itaewon Class (Episodes সহ)
- The Dark Knight
- Inception

✅ **সব Features কাজ করে:**
- Auto-Rotating Banner
- Story Circles
- Trending Row
- Category Tabs
- Search
- Favorites
- Movie Details
- Episodes (Series এর জন্য)

---

## 🔧 Firebase Setup (Optional):

যদি আপনি নিজের data use করতে চান:

### **1. Firebase Config:**
`firebase.ts` ফাইলে:

```typescript
const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### **2. Bot Username:**
`constants.ts` এ:

```typescript
export const BOT_USERNAME = 'YourBotUsername';
```

### **3. Firestore এ Data যোগ করুন:**

**movies Collection:**
```json
{
  "title": "Movie Name",
  "thumbnail": "https://image-url.jpg",
  "category": "Exclusive",
  "telegramCode": "FILE_ID",
  "rating": 9.5,
  "views": "1.2M",
  "year": "2024",
  "quality": "4K",
  "description": "Description...",
  "createdAt": "timestamp"
}
```

**settings/config Document:**
```json
{
  "botUsername": "YourBot",
  "channelLink": "https://t.me/channel",
  "noticeText": "Welcome! 🎬"
}
```

---

## 🎨 UI Features:

### **Home Page:**
- Notice Bar (Firebase থেকে বা default)
- Auto-Rotating Banner (Featured movies)
- Story Circles (Top movies)
- Trending Row (Horizontal scroll)
- Category Tabs (All, Exclusive, Korean Drama, Series)
- Movies Grid (3 columns)

### **Search:**
- Search by title
- Filter by category
- সব content browse

### **Favorites:**
- Local storage এ save
- Quick access

### **Movie Details:**
- Full info
- Watch button → Telegram bot
- Episodes (for series)

---

## 📂 File Structure:

```
clean-mini-app/
├── App.tsx
├── components/
│   ├── Banner.tsx
│   ├── BottomNav.tsx
│   ├── Explore.tsx
│   ├── MovieDetails.tsx
│   ├── MovieTile.tsx
│   ├── NoticeBar.tsx
│   ├── Sidebar.tsx
│   ├── SplashScreen.tsx
│   ├── StoryCircle.tsx
│   ├── StoryViewer.tsx
│   ├── TrendingRow.tsx
│   └── Watchlist.tsx
├── types.ts
├── constants.ts       ← Demo data এখানে
├── firebase.ts        ← Firebase config
└── ...
```

---

## 🎯 Demo Data কিভাবে কাজ করে:

1. App চালু হলে **সাথে সাথে demo data দেখাবে**
2. Firebase connect হলে এবং data থাকলে Firebase এর data দেখাবে
3. Firebase empty থাকলে demo data দেখাবে
4. Firebase error হলেও demo data দেখাবে

**মানে যেভাবেই হোক কিছু না কিছু দেখাবে!** 🎉

---

## 🚀 Deploy:

### **Build:**
```bash
npm run build
```

### **Deploy:**
- **Vercel:** `vercel`
- **Netlify:** `netlify deploy`
- **GitHub Pages:** Upload dist folder

---

## 💡 Important Notes:

### **Demo থেকে Real Data এ যেতে:**
1. Firebase setup করুন
2. Firestore এ movies add করুন
3. Automatically Firebase data দেখাবে

### **Demo Data Edit করতে চাইলে:**
`constants.ts` ফাইলে `INITIAL_MOVIES` array edit করুন

### **Image URLs:**
- Demo তে TMDB এর images use করা হয়েছে
- আপনি যেকোনো valid image URL use করতে পারবেন

---

## 🎬 Telegram Bot Integration:

### **Watch Button:**
```
https://t.me/YourBot?start=TELEGRAM_CODE
```

### **File ID Format:**
```
BAACAgQAAx0CdVfNyAACAy1n...
```

---

## 🔧 Troubleshooting:

### **কিছু দেখা যাচ্ছে না?**
- Browser refresh করুন
- Console (F12) এ error দেখুন
- `npm install` করেছেন?

### **Images লোড হচ্ছে না?**
- Internet connection check করুন
- TMDB images blocked হতে পারে (VPN try করুন)
- বা constants.ts এ local images use করুন

---

## ✅ Demo Features:

✅ Real movie posters (TMDB)  
✅ Working categories  
✅ Working search  
✅ Working favorites  
✅ Series with episodes  
✅ Beautiful UI  
✅ Smooth animations  
✅ Mobile responsive  

---

## 🎉 Ready to Use!

শুধু `npm install && npm run dev` করুন এবং দেখুন!

Firebase setup optional - demo data যথেষ্ট preview এর জন্য!

---

**কোন Admin Panel নেই - Clean UI, Demo Data সহ!** 🎬
