document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('quadratic-form');
    const solutionArea = document.getElementById('solution-area');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);
        const c = parseFloat(document.getElementById('c').value);

        const discriminant = b * b - 4 * a * c;
        let solutionText = "";

        if (discriminant > 0) {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            solutionText = `x1 = ${x1}, x2 = ${x2}`;
        } else if (discriminant === 0) {
            const x = -b / (2 * a);
            solutionText = `x = ${x}`;
        } else {
            const realPart = -b / (2 * a);
            const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
            solutionText = `x1 = ${realPart}+${imaginaryPart}i, x2 = ${realPart}-${imaginaryPart}i`;
        }

        solutionArea.textContent = solutionText;
    });
});