function getMadrasFactory(sku) {
    var listData = [
        [1,["1F.1","1B.1"],"#EEE9E3","Merino",null,"CW4"],
        [2,["2F.1","2B.1"],"#B41C48","Maroon Flush"],
        [3,["3F.1","3B.1"],"#7E1222","Merlot"],
        [5,["5F.1","5B.1"],"#D83C04","Grenadier"],
        [6,["6F.1","6B.1"],"#1B4572","Chathams Blue"],
        [7,["7F.1","7B.1"],"#2A4A63","San Juan",null,"CW2"],
        ];
    var basedir = '/products/artwear/madras/';
    var descMap = {
        CW1: 'Tangail Tradition',
        CW2: 'Indigo In-Love',
        CW3: 'Jamdani Lace',
        CW4: 'Spirit'
    };
	var imgdim = {
		width: "1500",
		height: "1654"
	};
    return createStyleDescFactory(sku, basedir, listData, descMap, imgdim);
}
