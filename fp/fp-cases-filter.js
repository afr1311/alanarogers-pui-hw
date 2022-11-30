$('.filters-year a, .filters-domain a, .filters-sector a, .all-cases-button a').on('click', function() {
    let filter = $(this).attr('data-filter')

    $('.case-all').hide()

    $(filter).show()

    $('.filters-year a, .filters-domain a, .filters-sector a, .all-cases-button a').removeClass('selected')

    $(this).addClass('selected')

})