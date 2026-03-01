function typeWriter(elementId, text, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = "";
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Spustiť po načítaní stránky
window.addEventListener('DOMContentLoaded', () => {
    typeWriter('main-title', 'LOS SANTOS POLICE DEPARTMENT', 100);
});

function toggleAuth() {
    const modal = document.getElementById('auth-modal');
    
    // Pridáme efekt prebliknutia celého tela stránky
    document.body.style.opacity = "0.5";
    setTimeout(() => {
        document.body.style.opacity = "1";
        modal.style.display = (modal.style.display === 'none') ? 'flex' : 'none';
    }, 100);
}

const navLinks = document.querySelectorAll('.nav-container a');

navLinks.forEach(link => {
    // Efekt náhodného prebliknutia (Glitch) pri prejdení
    link.addEventListener('mouseenter', (e) => {
        // Jemné pípnutie (voliteľné)
        const hoverSound = new Audio('https://www.soundjay.com/buttons/sounds/button-20.mp3');
        hoverSound.volume = 0.05;
        hoverSound.play().catch(() => {}); // Catch blok kvôli blokovaniu autoplaya v prehliadači

        // Dešifrovací efekt na text v menu
        let iteration = 0;
        const originalText = link.innerText;
        const interval = setInterval(() => {
            link.innerText = originalText.split("")
                .map((letter, index) => {
                    if(index < iteration) return originalText[index];
                    return "01"[Math.floor(Math.random() * 2)]; // Preblikáva binárnym kódom
                })
                .join("");
            
            if(iteration >= originalText.length) clearInterval(interval);
            iteration += 1 / 2;
        }, 50);
    });

    // Vrátenie textu späť pri odchode myšou (ak by náhodou skript zamrzol)
    link.addEventListener('mouseleave', (e) => {
        // Text sa vráti cez interval hore, netreba extra kód
    });
});

// Efekt "Dýchania" pre celú lištu
setInterval(() => {
    const nav = document.querySelector('nav');
    nav.style.borderBottomColor = `rgba(0, 212, 255, ${Math.random() * 0.5 + 0.2})`;
}, 2000);

// Konfigurácia Supabase (použi svoje údaje)
const SUPABASE_URL = 'https://epkhwacccjinygbkjzhl.supabase.co';
const SUPABASE_KEY = 'TU_DOPLN_SVOJ_ANON_KEY'; 
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Funkcia na kontrolu prihlásenia
async function checkAuthState() {
    const { data: { user } } = await supabaseClient.auth.getUser();

    const navPatroly = document.getElementById('nav-patroly');
    const navVolacky = document.getElementById('nav-volacky');
    const authBtn = document.getElementById('auth-trigger'); // Login tlačidlo
    const logoutBtn = document.getElementById('logout-btn'); // Logout tlačidlo (ak máš)

    if (user) {
        // POUŽÍVATEĽ JE PRIHLÁSENÝ
        if(navPatroly) navPatroly.style.display = 'inline-block';
        if(navVolacky) navVolacky.style.display = 'inline-block';
        if(authBtn) authBtn.style.display = 'none';
        if(logoutBtn) logoutBtn.style.display = 'inline-block';
        
        console.log("Používateľ je prihlásený:", user.email);
    } else {
        // POUŽÍVATEĽ NIE JE PRIHLÁSENÝ
        if(navPatroly) navPatroly.style.display = 'none';
        if(navVolacky) navVolacky.style.display = 'none';
        if(authBtn) authBtn.style.display = 'inline-block';
        if(logoutBtn) logoutBtn.style.display = 'none';
    }
}

// Spustiť kontrolu pri každom načítaní stránky
document.addEventListener('DOMContentLoaded', checkAuthState);

<script>
    window.addEventListener('load', function() {
        const loader = document.getElementById('loader');
        // Pridáme mierne oneskorenie (napr. 800ms), aby si užívateľ efekt všimol
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 800);
    });
</script>