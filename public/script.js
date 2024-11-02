$(".quote-button").click(() => {
    $.ajax({
        url: "/quote",
        method: "GET",
        success: function (data) {
            $(".quote-message").text(`"${data.content}"`)
            $(".author").text(`${data.author}`)
        },
        error: function () {
            $('.quote-message').text('Could not load quote. Please try again.');
            $('.author').text('');
        }

    });
});