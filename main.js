console.log ('in Ojibwe')

// $(selector).action()

// $(this).hide() - hides the current element.

// $("p").hide() - hides all <p> elements.

// $(".test").hide() - hides all elements with class="test".

// $("#test").hide() - hides the element with id="test".

$('.box').mouseenter(function () {
    $('.box').addClass('revealed');
})

$('.box').mouseleave(function () {
    $('.box').removeClass('revealed');
})
