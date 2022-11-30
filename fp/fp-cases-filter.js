// filter function on cases page
$('.filters-year a, .filters-domain a, .filters-sector a, .all-cases-button a').on('click', function() {
    let filter = $(this).attr('data-filter')

    // hide
    $('.case-all').hide()

    // show
    $(filter).show()

    // remove .selected class
    $('.filters-year a, .filters-domain a, .filters-sector a, .all-cases-button a').removeClass('selected')

    // add selected class when selected
    $(this).addClass('selected')
})