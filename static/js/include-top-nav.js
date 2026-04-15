document.addEventListener("DOMContentLoaded", async () => {
    const mountPoint = document.querySelector("[data-include-top-nav]");
    if (!mountPoint) return;

    try {
        const response = await fetch("/partials/top-nav.fragment");
        if (!response.ok) {
            throw new Error(`Failed to load top nav: ${response.status}`);
        }

        mountPoint.innerHTML = await response.text();
    } catch (error) {
        console.error(error);
    }
});