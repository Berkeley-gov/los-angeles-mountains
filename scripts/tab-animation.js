// Click event for mountain 1 button tab - changes the background image.
$('#pills-home-tab').click((event) => {
    event.preventDefault();

    $('.tab-content-section').css('background-image', 'url("./assets/mountain-1.png")');
});

// Click event for mountain 2 button tab - changes the background image.
$('#pills-profile-tab').click((event) => {
    event.preventDefault();

    $('.tab-content-section').css('background-image', 'url("./assets/mountain-2.png")');
});