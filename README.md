# Magazine

**Magazine**, bir dergi abonelik ve satış sistemini yönetmek için geliştirilmiş bir konsol uygulamasıdır. Kullanıcıların dergi abonelikleri oluşturmasına, iptal etmesine ve mevcut aboneliklerini görüntülemesine olanak tanır.

## Özellikler

- **Abonelik Yönetimi**: Abonelik oluşturma, iptal etme ve listeleme.
- **Fiyat Hesaplama**: Abonelik sürelerine göre otomatik fiyat hesaplama.
- **Konsol Arayüzü**: Basit komut satırı arayüzü.
- **Kategori Bazlı Abonelikler**: Farklı dergi kategorileri üzerinden abonelik işlemleri.

## Teknolojiler

- **.NET 7.0**
- **C#**
- **OOP (Nesne Yönelimli Programlama)**

## Kurulum

### Gereksinimler

- .NET 7.0 SDK
- Visual Studio veya Visual Studio Code

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
   dotnet restore
   ```

4. Uygulamayı çalıştırın:

   ```bash
   dotnet run
   ```

## API Endpoints

Bu proje bir konsol uygulaması olduğu için herhangi bir API Endpoint'i içermemektedir.

## Proje Yapısı

```
Magazine
├─ Models     # Veri modelleri
├─ Services   # İş servisleri
├─ Data       # Örnek veriler
└─ Program.cs # Uygulama başlatma noktası
```

### Açıklama

- **Models**: Dergi ve abonelik modellerini içerir.
- **Services**: Abonelik işlevlerini yönetir.
- **Data**: Örnek veri sınıflarını içerir.
- **Program.cs**: Uygulamanın başlangıç noktasıdır.

## Lisans

Bu proje açık kaynak değildir ve yalnızca izinli kullanıcılar tarafından kullanılabilir.
