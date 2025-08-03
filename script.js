const templates = {
  metode1: (nama, link) => `🎰 *${nama} स्लॉट - आपका सुनहरा मौका हर दिन जीतने का!* 🎰

क्या आप हर दिन आसानी से पैसे कमाना चाहते हैं? *Vinz* के साथ जुड़िए और पाएं शानदार गेमिंग अनुभव के साथ भारी बोनस और कैशबैक! 

🔥 *हमारे स्पेशल ऑफ़र:*  
✅ नए सदस्यों के लिए 100% स्वागत बोनस  
✅ हर दिन कैशबैक – आपका हारना अब भी फायदे में!  
✅ हर रात जैकपॉट इवेंट – बड़ा इनाम आपका इंतजार कर रहा है  
✅ न्यूनतम जमा मात्र ₹10,000 – शुरूआत करें बिना ज्यादा खर्च किए  
✅ ई-वॉलेट और मोबाइल क्रेडिट के जरिए आसान जमा, बिना किसी कटौती के!

💥 *टॉप रेटेड स्लॉट्स:*  
Gates of Olympus, Starlight Princess, Mahjong Ways और कई अन्य – सबके लिए कुछ खास!

⚡ *उच्च RTP और बेहतर जीत की संभावनाएं!*  
हमारे प्लेटफॉर्म पर गेम खेलने का मतलब है असली मज़ा और असली कमाई। आपकी जीत हमारा मकसद है!

🚀 *अभी रजिस्टर करें और शुरू करें अपना गेमिंग सफर:*  
[${link}]

समय न गवाएं, जो जल्दी आता है वही जीतता है। *Vinz* के साथ जुड़ें और अपने सपनों को हकीकत बनाएं! 💸🔥
`,

  metode2: (nama, link) => `🌟🎰${nama} — o território dos verdadeiros caçadores de lucro!  
Não é só mais um slot… aqui é adrenalina e vitória garantida! 💥🤑

💎 Bônus de 100% para novos membros — comece ganhando!  
🔁 Cashback diário automático — quanto mais joga, mais recebe!  
💸 Depósito mínimo de apenas 10K — barato e super lucrativo!  
⚡ Processamento rápido — aceitamos e-wallet e crédito SEM desconto!  
🎮 Slots mais QUENTES: Gates of Olympus ⚡ Mahjong 🀄 Starlight 🌟 Wild West Gold 🤠 e muito mais!

🔥 Aqui a sorte não espera… ela corre atrás de você!  
Jogue de manhã, ganhe à noite! 🌙💰  
De iniciantes a profissionais, todos têm chance de sacar grande! 💣🎉

🚀 Cadastre-se agora e sinta a emoção de girar sem parar:  
👉 ${link}

💬 Chame os amigos, monte sua tropa, quanto mais gente, mais sorte!  
${nama} — onde o lucro é REI! 🏆🎰💥`,

  metode3: (nama, link) => `🔥🎰 *${nama} — असली कमाई का ज़ोन!* 🎰🔥  
क्या आप ढूंढ रहे हैं ऐसा स्लॉट प्लेटफ़ॉर्म जो वाकई में पैसा दिलाए?  
अब स्पिन करो और हर दिन करो शानदार कमाई! 💸⚡

✨ *${nama} को खास क्या बनाता है?*  
✅ *100% नया यूज़र बोनस* — छोटा इन्वेस्टमेंट, बड़ा प्रॉफिट!  
✅ *हर दिन कैशबैक* — घाटा? यहां नहीं होता!  
✅ *न्यूनतम डिपॉजिट सिर्फ़ ₹10K* — नए और प्रो प्लेयर्स के लिए परफेक्ट!  
✅ *तेज़ ट्रांजैक्शन* — ई-वॉलेट और मोबाइल बैलेंस से, कोई कटौती नहीं!  
✅ *हाई RTP स्लॉट्स* — Olympus ⚡ Mahjong 🀄 Starlight जैसे हॉट गेम्स!

🚀 अभी रजिस्टर करें और शुरुआत करें अपनी कमाई की यात्रा:  
👉 ${link}

💬 *अब नहीं जुड़े तो पछताओगे, जब सब WD दिखा रहे होंगे!*  
💥 *${nama} — जहां हर खिलाड़ी बनता है विनर!* 🏆🤑`,

  metode4: (nama, link) => `💎 VIP独家老虎机促销 💎

✨ ${nama} 为严肃玩家带来：
✅ 高回报率热门老虎机
✅ 每周活动，真实现金奖励
✅ 推荐奖金

📲 立即加入，获取促销优惠！
👉 ${link}`
};

function generateText() {
  const nama = document.getElementById("namaWeb").value.trim();
  const link = document.getElementById("linkWeb").value.trim();
  const method = document.getElementById("methodSelect").value;
  const resultBox = document.getElementById("resultText");

  if (!nama || !link) {
    resultBox.textContent = "(Harap isi Nama Web dan Link terlebih dahulu)";
    return;
  }

  const templateFunc = templates[method];
  resultBox.textContent = templateFunc(nama, link);
}

function copyText() {
  const text = document.getElementById("resultText").textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("Teks berhasil disalin!");
  });
}