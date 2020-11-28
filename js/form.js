$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        var data = $('#form').serialize().replace(/\&/g, '%20');
        window.location.href = `https://wa.me/17812059488?text=Hello,%20${data}%20applied%20for`;
        // console.log(data)
    })
})