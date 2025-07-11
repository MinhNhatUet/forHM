# 🌟 Hệ Mặt Trời Hoa - Solar System Flower Gallery

Một trải nghiệm tương tác đầy màu sắc với các hành tinh hoa xinh đẹp quay quanh mặt trời trong không gian vũ trụ.

## ✨ Tính năng

- 🪐 **13 hành tinh hoa** với thông điệp riêng biệt
- ☀️ **Mặt trời trung tâm** với hiệu ứng phát sáng
- 🌌 **Background vũ trụ** động với ngôi sao lấp lánh
- 📱 **Responsive design** hoạt động trên mọi thiết bị
- ♿ **Accessibility** hỗ trợ đầy đủ cho người khuyết tật
- 🎨 **Modal đẹp** hiển thị ảnh và thông điệp
- 🔄 **Auto-rotate icons** thay đổi biểu tượng liên tục

## 🚀 Cách sử dụng

### Chạy trực tiếp
1. Mở file `index.html` trong trình duyệt
2. Click hoặc nhấn Enter/Space trên các hành tinh và mặt trời
3. Thưởng thức các thông điệp đẹp!

### Với Live Server (Khuyến nghị)
```bash
# Sử dụng VS Code Live Server extension
# Hoặc Python
python -m http.server 8000

# Hoặc Node.js
npx serve .
```

## 📁 Cấu trúc Project

```
forru/
├── index.html          # Trang chính
├── test.html           # Trang test với ít hành tinh
├── admin.html          # Panel quản trị
├── css/
│   └── style.css       # CSS chính (tối ưu, clean)
├── js/
│   └── script.js       # JavaScript chính (ES6+, OOP)
├── images/
│   ├── goodmorningebe.jpg
│   └── chung/          # Ảnh các hành tinh
└── README.md          # File này
```

## 🎮 Điều khiển

### Chuột
- **Click** trên hành tinh/mặt trời để xem thông tin
- **Click** ngoài modal hoặc nút X để đóng

### Bàn phím
- **Tab** để di chuyển giữa các hành tinh
- **Enter/Space** để mở thông tin
- **Escape** để đóng modal

## 🛠️ Tính năng kỹ thuật

### CSS
- ✅ CSS Variables cho dễ tùy chỉnh
- ✅ Modern CSS với Grid/Flexbox
- ✅ Smooth animations với 60fps
- ✅ Responsive breakpoints
- ✅ Dark mode native
- ✅ Print styles
- ✅ Reduced motion support

### JavaScript
- ✅ ES6+ Class-based architecture
- ✅ Event delegation cho performance
- ✅ Memory management
- ✅ Image preloading
- ✅ Error handling
- ✅ Performance monitoring
- ✅ Debounced resize handling

### Accessibility
- ✅ Semantic HTML5
- ✅ ARIA labels và roles
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus management
- ✅ High contrast support

### SEO & Performance
- ✅ Meta tags đầy đủ
- ✅ Open Graph cho social media
- ✅ Schema.org structured data
- ✅ Optimized images
- ✅ Minimal HTTP requests
- ✅ Gzip-friendly code

## 🎨 Customization

### Thay đổi màu sắc
Chỉnh sửa CSS variables trong `style.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

### Thêm hành tinh mới
1. Thêm orbit trong HTML
2. Thêm data trong `planetData` object (JS)
3. Thêm ảnh vào thư mục `images/`

### Tùy chỉnh animations
Thay đổi `--orbit-duration` cho từng orbit hoặc animation timing functions.

## 🧪 Testing

- **test.html**: Trang test với ít hành tinh hơn
- **admin.html**: Panel quản trị với stats và controls
- Browser DevTools để debug performance

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 🚀 Performance

- ⚡ First Contentful Paint < 1s
- ⚡ Largest Contentful Paint < 2s
- ⚡ Cumulative Layout Shift < 0.1
- ⚡ 60fps animations
- ⚡ Memory usage < 50MB

## 🐛 Troubleshooting

### Ảnh không hiển thị
- Kiểm tra đường dẫn trong `images/` folder
- Đảm bảo file ảnh tồn tại và có đúng tên

### Animations lag
- Kiểm tra hardware acceleration trong browser
- Giảm số lượng ngôi sao trong `createStarfield()`
- Sử dụng `prefers-reduced-motion` CSS

### Click không hoạt động
- Kiểm tra z-index của các elements
- Đảm bảo `pointer-events: auto`
- Mở DevTools console để xem lỗi

## 🤝 Contributing

1. Fork project
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - feel free to use for personal/commercial projects.

## 👨‍💻 Author

Solar System Flower Gallery Team

---

**Enjoy exploring the beautiful flower planets! 🌸🪐✨**
