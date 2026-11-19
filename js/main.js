// 1. Inyectar el Footer con tus redes sociales en todas las páginas
const footerHTML = `
<footer class="w-full py-12 bg-surface-container border-t border-primary-container/20 relative z-10">
    <div class="flex flex-col md:flex-row justify-between items-center px-8 max-w-max-width mx-auto gap-4">
        <span class="font-headline-md text-headline-md text-primary font-bold text-glow">Portfolio</span>
        <p class="font-body-md text-body-md text-on-surface-variant">© 2026 Aurelio Reyes Sánchez. All rights reserved.</p>
        <div class="flex gap-6">
            <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary-container hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] transition-all" href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary-container hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] transition-all" href="https://github.com/kingaurelio1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary-container hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] transition-all" href="https://x.com/tu-usuario" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
    </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById("footer-placeholder");
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});

// 2. Función centralizada para descargar el CV
function downloadCV() {
    const link = document.createElement('a');
    link.href = '../Archivos_CV/ARS_2026_CV_Software.pdf';
    link.download = 'Aurelio_Reyes_CV_Software.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}