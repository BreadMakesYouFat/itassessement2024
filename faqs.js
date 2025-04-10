document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".faq-title");

    faqs.forEach(faq => {
        faq.addEventListener("click", function () {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
            this.querySelector(".toggle").textContent = content.style.display === "block" ? "-" : "+";
        });
    });
});
