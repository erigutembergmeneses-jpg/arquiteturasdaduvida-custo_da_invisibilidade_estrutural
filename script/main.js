// script/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Animação de fade-in ao rolar a página (Intersection Observer)
    const sections = document.querySelectorAll('.section.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- Mapa Interativo (Canvas) ---
    const canvas = document.getElementById('mapaTransferencias');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Função para desenhar o mapa de fundo (simplificado)
        function drawBackground() {
            ctx.fillStyle = '#eef2f5';
            ctx.fillRect(0, 0, width, height);
            
            // Desenha contorno de um mapa do Brasil bem simplificado
            ctx.strokeStyle = '#aaa';
            ctx.lineWidth = 1;
            ctx.beginPath();
            // Forma abstrata lembrando o Brasil
            ctx.moveTo(300, 50);   // Norte
            ctx.lineTo(500, 120);  // Nordeste
            ctx.lineTo(600, 250);  // Leste
            ctx.lineTo(550, 380);  // Sudeste
            ctx.lineTo(400, 450);  // Sul
            ctx.lineTo(200, 400);  // Oeste
            ctx.lineTo(150, 200);  // Noroeste
            ctx.closePath();
            ctx.strokeStyle = '#2c3e50';
            ctx.stroke();
        }

        // Função para desenhar as linhas das transferências
        function drawTransferLines() {
            // Pontos representando presídios (coordenadas aproximadas no canvas)
            const prisons = [
                { x: 220, y: 180, name: 'PR 1' },  // Norte
                { x: 480, y: 140, name: 'PR 2' },  // Nordeste
                { x: 580, y: 260, name: 'PR 3' },  // Leste
                { x: 520, y: 350, name: 'PR 4' },  // Sudeste
                { x: 380, y: 420, name: 'PR 5' },  // Sul
                { x: 250, y: 340, name: 'PR 6' },  // Centro-Oeste
                { x: 300, y: 250, name: 'PR 7' }   // Central
            ];

            // Desenha as 24 transferências (linhas conectando pontos aleatórios)
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = '#c0392b';
            ctx.globalAlpha = 0.4;

            for (let i = 0; i < 24; i++) {
                const startIdx = Math.floor(Math.random() * prisons.length);
                let endIdx = Math.floor(Math.random() * prisons.length);
                // Evita linha para ela mesma
                while (endIdx === startIdx) {
                    endIdx = Math.floor(Math.random() * prisons.length);
                }
                
                const start = prisons[startIdx];
                const end = prisons[endIdx];
                
                ctx.beginPath();
                ctx.moveTo(start.x, start.y);
                ctx.lineTo(end.x, end.y);
                ctx.stroke();
            }

            // Desenha os pontos dos presídios por cima
            ctx.globalAlpha = 1;
            ctx.fillStyle = '#2c3e50';
            prisons.forEach(prison => {
                ctx.beginPath();
                ctx.arc(prison.x, prison.y, 6, 0, 2 * Math.PI);
                ctx.fillStyle = '#2c3e50';
                ctx.fill();
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 2;
                ctx.stroke();
                
                // Opcional: colocar nome
                ctx.font = 'bold 10px Arial';
                ctx.fillStyle = '#2c3e50';
                ctx.fillText(prison.name, prison.x + 8, prison.y - 5);
            });
        }

        // Animação simples: desenha o mapa gradualmente
        let progress = 0;
        function animateMap() {
            ctx.clearRect(0, 0, width, height);
            drawBackground();
            
            // Desenha as linhas gradualmente baseado no progresso
            ctx.save();
            ctx.globalAlpha = 0.4 * progress;
            drawTransferLines(); // Vai desenhar todas, mas a transparência aumenta com progresso
            ctx.restore();
            
            if (progress < 1) {
                progress += 0.02;
                requestAnimationFrame(animateMap);
            }
        }

        // Inicia animação quando a seção de dados estiver visível
        const dadosSection = document.getElementById('dados');
        const observerDados = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && progress < 1) {
                    progress = 0; // Reinicia se quiser
                    animateMap();
                }
            });
        }, { threshold: 0.5 });

        if (dadosSection) {
            observerDados.observe(dadosSection);
        }

        // Desenho inicial estático (caso a animação não dispare)
        drawBackground();
        ctx.globalAlpha = 0.2;
        drawTransferLines();
        ctx.globalAlpha = 1;
    }

    // --- Interatividade do áudio (opcional) ---
    const audio = document.getElementById('audioTestemunho');
    const waveform = document.querySelector('.waveform');
    
    if (audio && waveform) {
        audio.addEventListener('play', () => {
            waveform.style.animationPlayState = 'running';
        });
        audio.addEventListener('pause', () => {
            waveform.style.animationPlayState = 'paused';
        });
        audio.addEventListener('ended', () => {
            waveform.style.animationPlayState = 'paused';
        });
        // Inicia pausado
        waveform.style.animationPlayState = 'paused';
    }

    // --- Botão de leitura do capítulo (simulação) ---
    const btnLeitura = document.getElementById('btnLeitura');
    if (btnLeitura) {
        btnLeitura.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Redirecionamento simulado para o capítulo completo sobre UERCs. Em um site real, isso levaria a um PDF ou página institucional.');
            // window.location.href = '/capitulo-uerc.pdf';
        });
    }
});
