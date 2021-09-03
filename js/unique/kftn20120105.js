function getKaftanFactory(sku) {
    var listData = [
        [1,["1F","1B"],"#27283D","Ebony Clay",{"Date":"2021-02","Name":"Ananda Shanti"}],
        [2,["2F","2B"],"#A25C6D","Tapestry"],
        [3,["3F","3B"],"#6D302B","Spice"],
        [4,["4F","4B"],"#C1A85F","Husk"],
        [5,["5F","5B"],"#6A3C3E","Congo Brown",{"Date":"2021-07","Name":"Laime"}],
    ];
    var basedir = '/products/artwear/kaftan/';
    var descMap = {
        CW1: 'Tangail Tradition'
    };
	var imgdim = {
		width: "1200",
		height: "1883"
	};
    return createStyleDescFactory(sku, basedir, listData, descMap, imgdim);
}
