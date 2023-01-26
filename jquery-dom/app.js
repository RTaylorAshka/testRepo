// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
console.log("Let’s get ready to party with jQuery!")
// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('img').addClass('image-center')
// Remove the last paragraph in the article.
$('p').last().remove()
// Set the font size of the title to be a random pixel size from 0 to 100.
$('h1').css('font-size', `${(Math.floor(Math.random() * 100)).toString()}px`)
// Add an item to the list; it can say whatever you want.
$('ol').append('<li>whatever you want</li>')
// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside').html('<p>So sorry for this list that was removed. It was silly.</p>');
// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$('.form-control').on('keyup blur change', function(){
    let colors = {
        r: $('input').eq(0).val(),
        g: $('input').eq(1).val(),
        b: $('input').eq(2).val()
    }
    let rgb = `rgb(${colors.r},${colors.g},${colors.b})`;
    // console.log(rgb);
    $('body').css('background-color', rgb)
})
// Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').click(function(e){
    $(e.target).remove()
})