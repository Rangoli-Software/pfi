


function createBreadCrumb(jsonArray) {
var bc = '<nav class="py-5">\
      <div class="container">\
        <div class="row">\
          <div class="col-12">\
            <ol class="breadcrumb mb-0 font-size-xs text-gray-400">';
    for (var i = 0; i < jsonArray.length - 1; i++ ) {
        var item = jsonArray[ i ];
        bc += '<li class="breadcrumb-item"><a class="text-gray-400" href="' + item.url + '">' +   item.text + '</a></li>'

    }
    item = jsonArray[ jsonArray.length - 1];
    bc += '<li class="breadcrumb-item active">' + item.text + '</li>';
    bc += '</ol>\
          </div>\
        </div>\
      </div>\
    </nav>';
    return bc;
}

function createLinkedList(jsonArray, mbcls) {
var res = '<ul class="list-styled ' + mbcls + ' font-size-sm">';
    for (var i = 0; i < jsonArray.length; i++ ) {
        var item = jsonArray[ i ];
        res += '<li class="list-styled-item"><a class="list-styled-link" href="' + item.url + '">' + item.text + '</a></li>'
    }
    res +=  '</ul>';
    return res; 
}

function createMegaMenuSection(json, mbcls) {
    return '<div class="col-6 col-md">\
    <div class="mb-5 font-weight-bold">' + json.text + '</div>'
    + createLinkedList(json.sub, mbcls) + '</div>';
}

function createMegaMenuImage(item) {
    return '<div class="col-4 d-none d-lg-block">\
    <div class="card">\
        <img class="card-img" src="' + item.imageURL + '" alt="...">\
        <div class="card-img-overlay bg-dark-0 bg-hover align-items-center">\
            <div class="text-center">\
            <a class="btn btn-white stretched-link" href="' + item.url + '">' +
                + item.text  + '<i class="fe fe-arrow-right ml-2"></i></a>\
            </div>\
        </div>\
    </div>\
    </div>';
}

function createLgCard(html) {
    return '<div class="card card-lg"><div class="card-body">' + html + '</div></div>';
}

function createTab(html, id) {
    return '<div class="tab-content"><div class="tab-pane fade show active" id="' + id + '">' + html + '</div></div>';
}

function createItemCard(item) {
    var res = '<div class="card mb-7 mb-md-0">'
    if ( item.badge != null ) {
        res += '<div class="badge badge-white card-badge card-badge-left text-uppercase">'
            + item.badge +  '</div>';
    }
    if ( item.imageURL != null) {
        res += '<img src="' + item.imageURL + '" alt="..." class="card-img-top">';
    }
    res += '<div class="card-body px-0 py-7">';
    res += '<h6 class="mb-3">' + item.header + '</h6>';
    res += '<p class="mb-2">' + item.text + '</p>';
    res += '<a class="btn btn-link px-0 text-body" href="' + item.url + '">Read more <i class="fe fe-arrow-right ml-2"></i></a>';
    res += '</div></div>';
    return res;
}

function createMegaMenu() {
    
}
