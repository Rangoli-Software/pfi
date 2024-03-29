function getTamaraiFactory(sku) {
    var listData = [
        [1,["1F","1B"],"#1C272B","Ebony Clay",null,"CW2"],
        [2,["2F","2B"],"#1D1E2B","Steel Gray",{"Date":"2020-09","Name":"Priyanka"},"CW2"],
        [3,["3F","3B"],"#EFF1F2","Porcelain",{"Date":"2020-11","Name":"Michel"}],
        [4,["4F","4B"],"#E1E7B2","Caper"],
        [5,["5F","5B"],"#6C5C42","Tobacco"],
        [6,["6F","6B"],"#962E33","Stiletto"],
    ];
    var basedir = '/products/artwear/tamarai/';
    var descMap = {
        CW1: 'Tangail Tradition',
        CW2: 'Indigo In-Love'
    };
	var imgdim = {
		width: "1200",
		height: "1848"
	};
    return createStyleDescFactory(sku, basedir, listData, descMap, imgdim);
}
