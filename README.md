# Final Project - Soroban Token UI (Freighter + React + Tailwind)

Bu proje, Soroban akıllı sözleşmesi ile etkileşim kurabilen, Freighter cüzdanı entegre edilmiş bir React frontend arayüzüdür.

## 🚀 Özellikler

- ✅ Freighter cüzdanı ile bağlantı
- 🔒 Token dondurma (freeze_account)
- 🔓 Token çözme (unfreeze_account)
- 🔁 Token transferi (transfer)
- 💅 TailwindCSS ile sade ve modern UI

## 🛠 Kurulum

Aşağıdaki adımları takip ederek projeyi çalıştırabilirsiniz:

```bash
npm install
npm start
```

## 🧪 Bağlantı Sorunu Yaşarsanız

- Freighter kurulu olduğundan emin olun: https://www.freighter.app/
- Cüzdanınızda Soroban Testnet ağı tanımlı olmalı:

  - **Network Name**: Soroban Testnet
  - **RPC URL**: https://soroban-testnet.stellar.org
  - **Passphrase**: Test SDF Network ; September 2015

- Tarayıcı olarak **Chrome** kullanmanızı tavsiye ederiz
- Site adresi: `http://localhost:3000` (izin verildiğinden emin olun)

## 💡 Geliştirici

**Cüzdan Adresi:**  
`GAAZHV3OQY4UUABRU4KDVXKNYPM2PFKHECKBGWXDQKKYREOBQF5INZN7`

Hazırlayan: Eren Karakoyun

---

📝 Not: `contractId` henüz kodda sabitlenmedi. Gerçek sözleşme adresinizi `soroban.js` içine manuel olarak eklemelisiniz.
