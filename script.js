// Select the Learn More button and extra info div
const learnMoreBtn = document.getElementById('learn-more-btn');
const extraInfo = document.getElementById('extra-info');

// Add click event listener to the button
learnMoreBtn.addEventListener('click', () => {
    if (extraInfo.classList.contains('hidden')) {
        extraInfo.classList.remove('hidden');
        learnMoreBtn.textContent = 'Show Less';
    } else {
        extraInfo.classList.add('hidden');
        learnMoreBtn.textContent = 'Learn More';
    }
});
