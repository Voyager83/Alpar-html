document.addEventListener("DOMContentLoaded", function () {
    const translateBtn = document.getElementById("translate-btn");

    translateBtn.addEventListener("click", function () {
        document.getElementById("name").textContent = "Nicollas Richard";
        document.getElementById("about-title").textContent = "About Me";
        document.getElementById("about-text").textContent = 
            "I am a student of Systems Analysis and Development at Fatec Jundiaí, a Chemistry Technician, and a Systems Development Technician at ETEC. " +
            "I started programming by creating Excel macros with VBA to meet some needs.";

        document.getElementById("skill1").textContent = "Angular";
        document.getElementById("skill2").textContent = "API Rest with Asp.Net";
        document.getElementById("skill3").textContent = "SQL Server";
        document.getElementById("skill4").textContent = "C#";
        document.getElementById("skill5").textContent = "VB.Net";
        document.getElementById("skill6").textContent = "C";

        document.getElementById("experience").textContent = 
            "I have experience in IT infrastructure and support, understanding business rules and requirements gathering. " +
            "Proficiency in Excel, focusing on spreadsheet development and optimization. I am passionate about science and technology, I practice sports and love cooking.";

        document.getElementById("contact-title").textContent = "Contact me:";
        document.getElementById("send-btn").textContent = "Send";
        document.getElementById("footer-text").textContent = "© 2025 Nicollas...";

        translateBtn.textContent = "Traduzir para Português";
        translateBtn.removeEventListener("click", arguments.callee);
        translateBtn.addEventListener("click", resetToPortuguese);
    });

    function resetToPortuguese() {
        document.getElementById("about-title").textContent = "Sobre Mim";
        document.getElementById("about-text").textContent = 
            "Sou graduando em Análise e Desenvolvimento de sistemas pela Fatec Jundiaí, Técnico em Química e Técnico em Desenvolvimento de Sistemas pela ETEC. " +
            "Comecei a ter contato com Programação através de criação de Macros em Excel via VBA para atender algumas necessidades.";

        document.getElementById("skill1").textContent = "Angular";
        document.getElementById("skill2").textContent = "API Rest com Asp.Net";
        document.getElementById("skill3").textContent = "SQL Server";
        document.getElementById("skill4").textContent = "C#";
        document.getElementById("skill5").textContent = "VB.Net";
        document.getElementById("skill6").textContent = "C";

        document.getElementById("experience").textContent = 
            "Tenho Experiência em Infraestrutura e Suporte de TI, compreendendo regras de negócio e levantamentos de requisitos. " +
            "Proficiência em Excel, com foco no desenvolvimento e otimização de planilhas. Sou apaixonado por ciência e tecnologia, pratico esportes e adoro cozinhar.";

        document.getElementById("contact-title").textContent = "Fale comigo:";
        document.getElementById("send-btn").textContent = "Enviar";
        document.getElementById("footer-text").textContent = "© 2025 Nicollas...";

        translateBtn.textContent = "Traduzir para Inglês";
        translateBtn.removeEventListener("click", arguments.callee);
        translateBtn.addEventListener("click", function () {
            document.getElementById("translate-btn").click();
        });
    }
});
