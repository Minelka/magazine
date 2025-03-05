# Magazine

**Magazine**, kullanıcıların dergi içeriklerini görüntüleyebildiği, favorilere ekleyebildiği ve yeni makaleler keşfedebildiği bir React uygulamasıdır. Proje, modern arayüz tasarımı ve API entegrasyonları ile dinamik bir kullanıcı deneyimi sunar.

## Özellikler

- **Makale Listeleme**: Dergi makalelerinin listelenmesi.
- **Favorilere Ekleme**: Kullanıcıların favori makalelerini işaretleyebilmesi.
- **Dinamik Filtreleme**: Kategori bazında makale filtreleme.
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu arayüz.
- **API Entegrasyonu**: Dış API'lerden veri çekme.

## Teknolojiler

- **React**
- **Redux (State Yönetimi)**
- **Axios**
- **React Router**
- **TailwindCSS**

## Kurulum

### Gereksinimler

- Node.js (v16 ve üzeri)
- npm veya yarn

### Adımlar

1. Depoyu klonlayın:

   ```bash
   git clone https://github.com/Minelka/magazine.git
   ```

2. Proje dizinine gidin:

   ```bash
   cd magazine
   ```

3. Bağımlılıkları yükleyin:

   ```bash
   npm install
   # veya
   yarn install
   ```

4. Uygulamayı başlatın:

   ```bash
   npm start
   # veya
   yarn start
   ```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışır.

## API Endpoints

Bu proje, aşağıdaki API Endpoint'leri üzerinden veri çekmektedir:

- **GET** `/api/articles` – Tüm makaleleri listeler.
- **GET** `/api/articles/{id}` – Belirli bir makalenin detaylarını getirir.
- **POST** `/api/favorites` – Makaleyi favorilere ekler.
- **DELETE** `/api/favorites/{id}` – Favorilerden kaldırır.

## Proje Yapısı

```
Magazine
├─ src
│  ├─ components    # Yeniden kullanılabilir bileşenler
│  ├─ pages         # Sayfa bileşenleri
│  ├─ services      # API istekleri
│  ├─ store        # Redux Store
│  ├─ assets       # Görseller ve stiller
│  └─ App.jsx      # Ana bileşen
└─ package.json    # Bağımlılıklar
```

## Lisans

Bu proje açık kaynak değildir ve yalnızca izinli kullanıcılar tarafından kullanılabilir.

