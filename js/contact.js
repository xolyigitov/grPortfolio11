const BOT_TOKEN = '7328687421:AAGM_f1CUUwXRL3xuVgpkEVCPgZBYOixJSc';  // Tokeningizni shu yerga qo'ying
const CHAT_ID = '1998625340';  // Chat yoki o'zingizning Telegram ID'ingiz
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Formni serverga yuborilishini to'xtatamiz

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const text = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
    `;

    // Send data to Telegram bot
    fetch(TELEGRAM_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Message sent successfully!');
        } else {
            console.error('Telegram API error:', data);
            alert('Failed to send message.');
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
        alert('Error sending message.');
    });
});
