function getPayaraFactory(sku) {
    var listData = [
        [1,["1F.1","1B.1"],"#1C1C1A","Tuatara"],
        [2,["2F.1","2B.1"],"#55B4DC","Shakespeare"],
        [3,["3F.1","3B.1"],"#51141C","Heath"],
        [4,["4F.1","4B.1"],"#4C393A","Matterhorn"],
        [5,["5F.1","5B.1"],"#4F1821","Wine Berry"],
        [6,["6F.1","6B.1"],"#543528","Saddle"],
    ];
    var basedir = '/products/artwear/payara/';
    var descMap = {
        CW1: 'Tangail Tradition'
    };
	var imgdim = {
		width: "1500",
		height: "1654"
	};
    return createStyleDescFactory(sku, basedir, listData, descMap, imgdim);
}
