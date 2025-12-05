document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.getElementById('darkModeToggle');
        const currentTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateButtonText(currentTheme);

        toggleButton.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                updateButtonText('light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                updateButtonText('dark');
            }
        });

        function updateButtonText(theme) {
            toggleButton.textContent = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        }
    }
);

var url=`https://api.chucknorris.io/jokes/random`;
fetch(url)
.then(function(response){
    response.json().then(data =>{
        console.log(data);

        var value=data.value;
        document.getElementById("joke").innerHTML=value;
    });
});