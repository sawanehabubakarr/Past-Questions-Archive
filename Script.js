document.addEventListener("DOMContentLoaded", function () {
    // Get all toggle headings
    const toggleHeadings = document.querySelectorAll('.toggle-heading');

    // Add click event listener to each toggle heading
    toggleHeadings.forEach(heading => {
        heading.addEventListener('click', function () {
            // Toggle the visibility of the next element (in this case, the semesters div)
            const semesters = heading.nextElementSibling;
            semesters.style.display = semesters.style.display === 'none' ? 'block' : 'none';
        });
    });
});
