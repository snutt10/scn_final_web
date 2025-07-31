// ========================================
// main.js - Simple Dark Mode Toggle
// ========================================

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️ Light Mode';
    }
    
    // Add click event to theme toggle button
    themeToggle.addEventListener('click', function() {
        // Toggle the dark theme class
        body.classList.toggle('dark-theme');
        
        // Check if dark theme is now active
        const isDark = body.classList.contains('dark-theme');
        
        // Update button text
        themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
        
        // Save theme preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // const quoteText = document.getElementByID('quote-text');
    // const quoteTags = document.getElementById('quoute-tags');
    // const quoteAuthor = document.getElementById('quote-author');

    fetch('https://dummyjson.com/quotes')
        .then(response => response.json())
        .then(data => {
            console.log(`${data.quote}, -${data.author}`);
        })

    var image = document.getElementById("aaa");
    var img_array=["IMGs/ghostKitties.jpg","IMGs/howlAndSophie.jpg","IMGs/bridgeAndSKy.jpg","IMGs/hammerHeadShark.jpg","IMGs/ostrich.jpg","IMGs/fuckChatGPT.jpg", "IMGs/hocusPocus.jpg", ];
    var index=0;
    function slide(){

        document["aaa"].src = img_array[index];
        index++;
        if(index>=img_array.length){
            index=0;
        }
    }
    setInterval(slide,20000);
});