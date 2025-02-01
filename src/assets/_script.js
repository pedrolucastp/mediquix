import { auth, db, doc, setDoc, getDoc, createUserWithEmailAndPassword, signInWithEmailAndPassword, initAuthState, signOut } from "./firebase.js";

// DOM Elements
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const authContainer = document.getElementById("auth-container");

// Function to update UI based on authentication state
function updateAuthUI(user) {
    authContainer.innerHTML = ""; // Clear the container

    if (user) {
        // User is logged in
        console.log("User is logged in:", user);
        createLogoutButton(); // Show logout button
        loginForm.style.display = "none";
        signupForm.style.display = "none";
    } else {
        // No user is logged in
        console.log("No user is logged in.");
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    }
}

// Listen for authentication state changes
initAuthState(updateAuthUI);

// Toggle Forms
document.getElementById("show-signup").addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
});

document.getElementById("show-login").addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
});

// Sign Up
document.getElementById("signup-button").addEventListener("click", async () => {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User signed up:", user);

        // Save user to Firestore
        await setDoc(doc(db, "users", user.uid), { words: [] });

        alert("Sign up successful! Redirecting...");
        updateAuthUI(user); // Update UI after signup
    } catch (error) {
        console.error("Error signing up:", error.message);
        alert(error.message);
    }
});

// Login
document.getElementById("login-button").addEventListener("click", async () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User logged in:", user);

        // Load user's words
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const userData = docSnap.data();
            console.log("User data loaded:", userData);
        }

        updateAuthUI(user); // Update UI after login
    } catch (error) {
        console.error("Error logging in:", error.message);
        alert(error.message);
    }
});

// Create Logout Button
function createLogoutButton() {
    const logoutButton = document.createElement("button");
    logoutButton.textContent = "Logout";
    logoutButton.id = "logout-button";
    logoutButton.addEventListener("click", handleLogout);
    authContainer.appendChild(logoutButton);
}

// Handle Logout
async function handleLogout() {
    try {
        await signOut(auth);
        console.log("User logged out");
        alert("You have been logged out.");
        updateAuthUI(null); // Update UI after logout
    } catch (error) {
        console.error("Error logging out:", error.message);
        alert(error.message);
    }
}

// Verifica se o navegador suporta Service Workers
const useServiceWorker = false
if (useServiceWorker && 'serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then((registration) => {
            console.log('Service Worker registrado com sucesso: ' + registration.scope);
            // Se desejar desregistrar o Service Worker, descomente a linha abaixo
            // registration.unregister();
        })
        .catch((error) => {
            // alert('Falha ao registrar o Service Worker: ' + error);
        });
    // } else {
    // console.log('Service Worker não é suportado neste navegador.');
}

const allowPWA = false
if (allowPWA) {

    // Variável para armazenar o evento `beforeinstallprompt`
    let deferredPrompt;

    // Lidar com o evento `beforeinstallprompt`
    window.addEventListener('beforeinstallprompt', (event) => {
        console.log('Evento beforeinstallprompt disparado');

        // Prevenir que o prompt padrão seja exibido
        event.preventDefault();
        deferredPrompt = event;

        // Verificar se o PWA já foi instalado
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        const isInstalled = localStorage.getItem('pwaInstalled') === 'true';

        if (!isStandalone && !isInstalled) {
            console.log('PWA não instalado. Exibindo botão de instalação.');

            // Criar botão personalizado de instalação
            const installButton = document.createElement('button');
            installButton.textContent = 'Download MedQuix';
            installButton.className = 'install-button'; // Classe para estilização via CSS

            const installContainer = document.getElementById('install-icon');
            if (installContainer) {
                installContainer.appendChild(installButton);
                console.log('Botão de instalação adicionado ao #install-icon');

                installButton.addEventListener('click', () => {
                    console.log('Botão de instalação clicado');

                    // Exibir o prompt de instalação
                    if (deferredPrompt) {
                        deferredPrompt.prompt();

                        // Verificar a escolha do usuário
                        deferredPrompt.userChoice.then((choiceResult) => {
                            if (choiceResult.outcome === 'accepted') {
                                console.log('Usuário aceitou instalar o PWA.');
                                // Salvar no localStorage que o app foi instalado
                                localStorage.setItem('pwaInstalled', 'true');
                            } else {
                                console.log('Usuário recusou instalar o PWA.');
                            }
                            deferredPrompt = null; // Resetar a variável após o uso
                        }).catch((error) => {
                            console.error('Erro ao obter a escolha do usuário:', error);
                        });
                    }
                });
            } else {
                console.error('Elemento #install-icon não encontrado no HTML.');
            }
        } else {
            console.log('PWA já instalado ou rodando em modo standalone.');
        }
    });

    // Lidar com o evento `appinstalled`
    window.addEventListener('appinstalled', () => {
        console.log('PWA instalado');
        // alert('PWA instalado');
        localStorage.setItem('pwaInstalled', 'true');
    });

    // Verificar o status da conexão e exibir mensagens
    document.addEventListener('DOMContentLoaded', () => {
        const statusDisplay = document.createElement('div');
        statusDisplay.className = 'status-display'; // Classe para estilização via CSS
        document.body.appendChild(statusDisplay);

        function updateOnlineStatus() {
            if (navigator.onLine) {
                statusDisplay.textContent = 'Online - Modo Offline disponível';
                statusDisplay.classList.remove('offline');
                statusDisplay.classList.add('online');
            } else {
                statusDisplay.textContent = 'Offline - Você ainda pode jogar!';
                statusDisplay.classList.remove('online');
                statusDisplay.classList.add('offline');
            }
            statusDisplay.style.display = 'block';

            setTimeout(() => {
                statusDisplay.style.display = 'none';
            }, 3000);
        }

        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        // Mostrar status inicial
        updateOnlineStatus();
    });

    // Verificar se o app já está sendo executado em modo standalone
    if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('O PWA já está rodando em modo standalone.');
        // alert('O PWA já está rodando em modo standalone.');
        localStorage.setItem('pwaInstalled', 'true');
    }

}

