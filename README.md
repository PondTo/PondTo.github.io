# 3 Years, One Love — Our Story

เว็บไซต์ครบรอบ 3 ปี แบบ static ล้วน (HTML + CSS + Vanilla JS)
ไม่มี backend ไม่มี database ไม่มี build step — เปิด `index.html` ได้เลย

---

## โครงสร้างไฟล์

```
anniversary/
├── index.html      โครงหน้าเว็บ 8 section
├── style.css       สไตล์ทั้งหมด (แบ่งเป็น 15 หมวด มี comment กำกับ)
├── script.js       CONFIG + โค้ดการทำงาน
├── README.md       ไฟล์นี้
└── assets/
    ├── images/     รูปคู่ทั้งหมด
    └── music/      เพลงของเรา (our-song.mp3)
```

---

## เริ่มใช้งานใน 3 ขั้น

### 1. แก้ข้อมูลส่วนตัว

เปิด `script.js` ทุกอย่างที่ต้องแก้อยู่ในบล็อก **CONFIG** ด้านบนสุดของไฟล์

```js
const anniversaryConfig = {
  partnerName: "[PARTNER_NAME]",   // ชื่อแฟน
  yourName:    "[YOUR_NAME]",      // ชื่อเรา (ใช้ลงท้ายจดหมาย)
  startDate:   "2023-01-01",       // [START_DATE] วันเริ่มคบ → ตัวนับใช้ค่านี้
  startTime:   "00:00",            // เวลาโดยประมาณ
  anniversaryYear: 3,
  waxInitial: "♥",                 // อักษรบนตราครั่ง
  music: {
    src:    "assets/music/our-song.mp3",
    title:  "[SONG_TITLE]",
    artist: "[ARTIST]"
  }
};
```

`startDate` ต้องเป็นรูปแบบ `YYYY-MM-DD` เท่านั้น ตัวนับ days / hours / minutes / seconds
จะคำนวณจากค่านี้แบบเรียลไทม์

จากนั้นแก้ array ที่เหลือในไฟล์เดียวกัน

| ตัวแปร | ใช้ในส่วน | แก้อะไร |
|---|---|---|
| `gallery` | Memory Gallery | รายการรูป + caption + ขนาดกล่อง |
| `thingsILove` | Things I Love About You | หัวข้อ + คำอธิบายสั้น ๆ |
| `letter` | A Letter To You | ข้อความจดหมาย (1 บรรทัด = 1 ย่อหน้า) |
| `letterSignoff` | A Letter To You | คำลงท้าย เช่น "รักนะ" |
| `future` | To Be Continued | ข้อความเกี่ยวกับอนาคต |

ในจดหมายใช้ `<em>ข้อความ</em>` เพื่อเน้นเป็นตัวเอียงสีแดงได้ เช่น

```js
const letter = [
  "ขอบคุณที่อยู่ข้างกันมาตลอด",
  "และ <em>ถ้าย้อนกลับไปได้ ฉันก็ยังเลือกเธอ</em>"
];
```

### 2. ใส่รูปและเพลง

วางรูปไว้ที่ `assets/images/` โดยตั้งชื่อให้ตรงกับที่เขียนไว้ใน `script.js`

```
assets/images/photo-01.jpg   ถึง photo-12.jpg สำหรับแกลเลอรี
```

วางเพลงไว้ที่ `assets/music/our-song.mp3`

ถ้ายังไม่ได้ใส่รูปหรือเพลง เว็บก็ยังเปิดได้ปกติ — ช่องรูปจะขึ้นกรอบพร้อมชื่อไฟล์ที่ต้องวาง
และเครื่องเล่นเพลงจะขึ้นข้อความบอกว่ายังไม่พบไฟล์

**แนะนำ:** ย่อรูปให้กว้างไม่เกิน 1600px และบันทึกเป็น `.jpg` คุณภาพ 80%
หรือแปลงเป็น `.webp` เพื่อให้โหลดไวบนมือถือ

### 3. เปิดดู

ดูวิธีเปิดในหัวข้อถัดไป

---

## วิธีเปิดเว็บไซต์

**วิธีที่ 1 — ดับเบิลคลิก**
ดับเบิลคลิกที่ `index.html` เพื่อเปิดในเบราว์เซอร์ ใช้ได้ทันทีสำหรับดูเอง

**วิธีที่ 2 — เปิดผ่าน local server** (แนะนำ เพราะไฟล์เสียงจะทำงานเสถียรกว่า)

```bash
cd anniversary
python3 -m http.server 8000
```

แล้วเปิด `http://localhost:8000` ในเบราว์เซอร์

หรือถ้าใช้ VS Code ให้ติดตั้งส่วนขยาย **Live Server** แล้วคลิกขวาที่ `index.html` → *Open with Live Server*

**ดูบนมือถือในบ้านเดียวกัน:** รันคำสั่ง `python3 -m http.server 8000` แล้วเปิด
`http://[IP-เครื่องคอม]:8000` บนมือถือ (เครื่องต้องต่อ Wi-Fi วงเดียวกัน)

---

## เอาขึ้นออนไลน์ให้แฟนเปิดจากที่ไหนก็ได้

เว็บเป็น static ทั้งหมด อัปโหลดโฟลเดอร์ขึ้นบริการฟรีเหล่านี้ได้เลย

- **Netlify Drop** — ลากโฟลเดอร์ `anniversary` ไปวางที่ [app.netlify.com/drop](https://app.netlify.com/drop) ได้ลิงก์ทันที
- **Vercel** — `npx vercel` ในโฟลเดอร์
- **GitHub Pages** — push ขึ้น repo แล้วเปิด Pages ที่ Settings
- **Cloudflare Pages** — เชื่อม repo หรืออัปโหลดตรง

---

## สิ่งที่มีในเว็บ

| Section | รายละเอียด |
|---|---|
| 1 · Opening | ม่านเต็มจอ + ปุ่ม Open My Heart, แสงระเบิด, หัวใจพุ่ง |
| 2 · Hero | ชื่อแฟน, วันเริ่มคบ, ตัวนับเวลาแบบเรียลไทม์ |
| 3 · Gallery | Bento grid + lightbox (ปุ่มถัดไป/ก่อนหน้า, ปุ่มลูกศร, Esc, ปัดนิ้ว) |
| 4 · Things I Love | การ์ด 8 ใบ มีแสงตามเมาส์ / แตะได้บนมือถือ |
| 5 · Our Song | เครื่องเล่นเพลงเอง: play/pause, เลื่อนเพลง, เวลา, ระดับเสียง, แผ่นเสียงหมุน |
| 6 · A Letter To You | ซองจดหมายเปิดจริง (ตราครั่ง → ฝาซองเปิด → จดหมายลอยขึ้น) |
| 7 · To Be Continued | ดาวกะพริบช้า ๆ + ข้อความอนาคต |
| 8 · Finale | ข้อความไล่ขึ้นทีละบรรทัด + หัวใจลอยบน canvas |

---

## รายละเอียดเชิงเทคนิค

- **ฟอนต์:** Cormorant Garamond (หัวเรื่อง) · Noto Serif Thai (ภาษาไทย) · Inter (label)
- **Animation:** ใช้ CSS เป็นหลัก, JavaScript เฉพาะ canvas ของ finale
- **Performance:** หัวใจลอยจำกัดที่ 14 ชิ้น (มือถือ 8), canvas จำกัด 54 particle (มือถือ 26)
  และหยุดทำงานอัตโนมัติเมื่อเลื่อนออกนอกจอหรือสลับแท็บ
- **Reveal:** ใช้ IntersectionObserver ตัวเดียวร่วมกันทุก element ไม่ผูกกับ scroll event
- **Reduced motion:** ถ้าเครื่องเปิด "ลดการเคลื่อนไหว" ไว้ animation จะถูกปิดทั้งหมด
  แต่เนื้อหายังอ่านครบ
- **Responsive:** ทดสอบ layout ที่ 360 / 390 / 768 / 1024 / 1440px
- **Accessibility:** ปุ่มทุกตัวเป็น `<button>` จริง, มี focus ring, lightbox ใช้คีย์บอร์ดได้

---

## แก้ไขเพิ่มเติมที่ทำได้ง่าย

**เปลี่ยนโทนสี** — แก้ตัวแปรที่ `:root` ในไฟล์ `style.css` บรรทัดแรก ๆ

```css
--ink:    #140409;   /* พื้นหลัง */
--claret: #6e1230;   /* แดงเข้ม */
--rose:   #d98c9a;   /* ชมพูกุหลาบ */
--blush:  #f3d2d0;   /* ชมพูอ่อน */
--cream:  #f7efe6;   /* ตัวอักษร */
```

**เพิ่มรูปในแกลเลอรี** — เพิ่ม object ใน `gallery` ได้เลย ไม่ต้องแก้ HTML

```js
{ src: "assets/images/photo-13.jpg", caption: "แคปชันของรูปนี้", size: "wide" }
```

`size` เลือกได้ระหว่าง `"big"` `"wide"` `"tall"` หรือไม่ใส่เลย (ขนาดปกติ)

**เปลี่ยนคำบนปุ่ม / หัวข้อภาษาอังกฤษ** — แก้ตรง ๆ ใน `index.html`

---

Made by hand. ♥
