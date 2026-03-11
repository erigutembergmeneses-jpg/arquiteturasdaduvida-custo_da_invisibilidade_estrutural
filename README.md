# Relatório Interativo: 11 Anos de Isolamento

Este projeto é uma **landing page interativa** desenvolvida para ser acessada via **QR Code**, funcionando como um infográfico animado e relatório digital. Ele conta a história de um caso (composto) de 11 anos de prisão e 24 transferências, destacando o isolamento como obstáculo à defesa e apresentando a proposta das **UERCs (Unidades Especializadas de Regramento de Conduta)** como solução.

## 📋 Sobre o Projeto

O conteúdo é dividido em quatro seções principais, inspiradas em um roteiro de vídeo, mas adaptadas para o formato web interativo:

1.  **Abertura:** Silhueta do personagem (identidade preservada) + manchetes de jornal + frase de impacto.
2.  **Visualização de Dados:** Mapa animado (em Canvas) mostrando as 24 transferências entre presídios.
3.  **Depoimento:** Player de áudio com um trecho de depoimento e animação de onda sonora.
4.  **Conclusão Institucional:** Explicação sobre as UERCs e chamada para ação.

## 🚀 Como Executar

1.  **Clone ou baixe** este repositório.
2.  **Estrutura de pastas:** Certifique-se de que a estrutura de pastas (`css/`, `script/`, `assets/`) esteja organizada conforme indicado abaixo.
3.  **Adicione os assets:** Coloque as imagens de exemplo (`silhouette-profile.jpg`, `newspaper-headline-1.jpg`, `newspaper-headline-2.jpg`) e o áudio (`testimony-cut.mp3`) dentro da pasta `assets/`.
    - *Nota: As imagens e o áudio não estão incluídos neste código por questões de direitos autorais e privacidade. Utilize assets próprios ou placeholders.*
4.  **Abra o arquivo `index.html`** em um navegador web moderno (Chrome, Firefox, Edge).

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da página.
- **CSS3:** Estilização, design responsivo, animações (fade-in, onda sonora).
- **JavaScript (ES6):**
    - Intersection Observer para animações baseadas em rolagem.
    - Canvas API para desenho do mapa interativo e animação das linhas de transferência.
    - Manipulação do DOM e eventos de áudio.

## 📁 Estrutura de Arquivos
# Relatório Interativo: 11 Anos de Isolamento

Este projeto é uma **landing page interativa** desenvolvida para ser acessada via **QR Code**, funcionando como um infográfico animado e relatório digital. Ele conta a história de um caso (composto) de 11 anos de prisão e 24 transferências, destacando o isolamento como obstáculo à defesa e apresentando a proposta das **UERCs (Unidades Especializadas de Regramento de Conduta)** como solução.

## 📋 Sobre o Projeto

O conteúdo é dividido em quatro seções principais, inspiradas em um roteiro de vídeo, mas adaptadas para o formato web interativo:

1.  **Abertura:** Silhueta do personagem (identidade preservada) + manchetes de jornal + frase de impacto.
2.  **Visualização de Dados:** Mapa animado (em Canvas) mostrando as 24 transferências entre presídios.
3.  **Depoimento:** Player de áudio com um trecho de depoimento e animação de onda sonora.
4.  **Conclusão Institucional:** Explicação sobre as UERCs e chamada para ação.

## 🚀 Como Executar

1.  **Clone ou baixe** este repositório.
2.  **Estrutura de pastas:** Certifique-se de que a estrutura de pastas (`css/`, `script/`, `assets/`) esteja organizada conforme indicado abaixo.
3.  **Adicione os assets:** Coloque as imagens de exemplo (`silhouette-profile.jpg`, `newspaper-headline-1.jpg`, `newspaper-headline-2.jpg`) e o áudio (`testimony-cut.mp3`) dentro da pasta `assets/`.
    - *Nota: As imagens e o áudio não estão incluídos neste código por questões de direitos autorais e privacidade. Utilize assets próprios ou placeholders.*
4.  **Abra o arquivo `index.html`** em um navegador web moderno (Chrome, Firefox, Edge).

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da página.
- **CSS3:** Estilização, design responsivo, animações (fade-in, onda sonora).
- **JavaScript (ES6):**
    - Intersection Observer para animações baseadas em rolagem.
    - Canvas API para desenho do mapa interativo e animação das linhas de transferência.
    - Manipulação do DOM e eventos de áudio.

## 📁 Estrutura de Arquivos

## ⚠️ Avisos e Conformidade

- **LGPD e Direitos de Imagem:** Este projeto é um **estudo de caso composto**. As imagens e áudios sugeridos devem ser substituídos por materiais que você tenha autorização para usar. Incluímos uma nota de rodapé na página: *"Este é um estudo de caso composto, baseado em situações reais, com nomes e características preservados em conformidade com a LGPD."*
- **Acessibilidade:** O HTML utiliza tags semânticas. O player de áudio é nativo (acessível por leitores de tela). Para maior acessibilidade, recomenda-se adicionar legendas ao áudio (CC) ou uma transcrição completa.
- **Hospedagem:** Para uso real via QR Code, publique estes arquivos em um serviço de hospedagem (como GitHub Pages, Netlify, Vercel) ou em um domínio institucional.

## ✨ Personalização

- **Conteúdo do Mapa:** As coordenadas das linhas no Canvas são geradas aleatoriamente para simular as 24 transferências. Para um caso real, você pode substituir a função `drawTransferLines()` por um conjunto de coordenadas pré-definidas que representem rotas reais.
- **Estilos:** As cores principais (variáveis CSS no início do `style.css`) podem ser alteradas para se adequar à identidade visual da sua instituição.
- **Áudio:** Substitua o arquivo `testimony-cut.mp3` pelo depoimento real (com as devidas autorizações).

## 📄 Licença

Este código é fornecido como exemplo e pode ser adaptado para seus próprios projetos. Não inclui os assets de imagem e áudio, que devem ser próprios ou devidamente licenciados.

---

**Baseado em roteiro sugerido para conteúdo de QR Code.**
