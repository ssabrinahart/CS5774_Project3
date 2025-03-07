$(document).ready(function () {
    // Get the search query from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("query");

    // Predefined keyphrase for matching
    const predefinedSearchResults = {
        "litter box": `
            <h2>How to train a kitten to use a litter box?</h2>
            <p>Hi fellow cat lovers! I just adopted my first ever kitten...</p>
        `,
        "introduce cats": `
            <h2>How to introduce two cats?</h2>
            <p>Good morning!! Today I am headed to my local animal shelter...</p>
        `,
        "kitten food": `
            <h2>What food is best to feed a kitten?</h2>
            <p>I have a 5 month old male cat that refuses to drink water...</p>
        `
    };

    if (searchQuery && predefinedSearchResults[searchQuery.toLowerCase()]) {
        $("#results").html(predefinedSearchResults[searchQuery.toLowerCase()]);
    } else {
        $("#results").html("<p>No results found. Try searching for 'litter box', 'introduce cats', or 'kitten food'.</p>");
    }
});
