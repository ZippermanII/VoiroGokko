function imageIndex(hostURL) {
    return $.ajax({
        url: hostURL + 'ignore/skins_collection.xml',
        type: 'GET',
        dataType: 'xml',
        cache: false,
        timeout: 2000,
    })
}