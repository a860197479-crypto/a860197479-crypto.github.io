document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("graficoODS");

    if(canvas){

        const ctx = canvas.getContext("2d");

        new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Pobreza", "Educación", "Salud", "Vivienda"],
                datasets: [{
                    label: "Impacto Social",
                    data: [90, 70, 60, 50],
                    backgroundColor: [
                        "#4CAF50",
                        "#2196F3",
                        "#FFC107",
                        "#FF5722"
                    ]
                }]
            },
            options: {
                responsive: true
            }
        });
    }

});
