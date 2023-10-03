function AgeCalc() {
    document.addEventListener('DOMContentLoaded', function () {
        var birthDate = new Date('2004-08-15'); // Replace with your birthdate in 'YYYY-MM-DD' format
        var today = new Date();
        var age = today.getFullYear() - birthDate.getFullYear();

        if (today.getMonth() < birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
            age--;
        }

        document.getElementById('age').textContent = "I am " + age + " years old.";
    });
}
AgeCalc()