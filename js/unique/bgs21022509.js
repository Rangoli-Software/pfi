function getToteFactory(sku) {
var listData = [
    [1,[1],"#AD546C","Cadillac"],
    [2,[2],"#A50124","Carmine"],
    [3,[3],"#CA250D","Thunderbird"],
    [4,[4],"#ED8810","Zest"],
    [5,[5],"#795A3B","Yellow Metal"],
    [6,[6],"#8F7D65","Cement"],
    [7,[7],"#B8AA77","Mongoose"],
    [8,[8],"#C59358","Twine"],
    [9,[9],"#0D5F79","Atoll"],
    [10,[10],"#212221","Heavy Metal"],
    [11,[11],"#E7E4DF","Pearl Bush"],
];
	var basedir = '/products/accessories/tote/';
    var descMap = {
        CW1: 'Art Wear'
    };
	var imgdim = {
		width: "1200",
		height: "2052"
	};
    return createStyleDescFactory(sku, basedir, listData, descMap, imgdim);
}

function getLilJholaFactory(sku) {
var listData = [
    [1,["1F","1B","1R"],"#BB7333","Copper"],
    [2,["2F","2B","2R"],"#CF6B3A","Red"],
    [3,["3F","3B","3R"],"#7C623F","Yellow"],
    [4,["4F","4B","4R"],"#40411A","Thatch"],
    [5,["5F","5B","5R"],"#C4C383","Pine"],
    [6,["6F","6B","6R"],"#A02631","Mexican"],
];
	var basedir = '/products/accessories/liljhola/';
    var descMap = {
        CW1: 'Art Wear'
    };
	var imgdim = {
		width: "1200",
		height: "1200"
	};
    return createStyleDescFactory(sku, basedir, listData, descMap, imgdim);
}

function getPostmanJholaFactory(sku) {
var listData = [
    [1,["1F","1B","1R"],"#6ACCC7","Downy"],
    [2,["2F","2B","2R"],"#2F1B17","Eclipse"],
    [3,["3F","3B","3R"],"#6ABABB","Tradewind"],
    [4,["4F","4B","4R"],"#AC3D25","Terracotta"],
    [5,["5F","5B","5R"],"#792320","Metallic Copper"],
    [6,["6F","6B","6R"],"#C53F1E","Thunderbird"],
    [7,["7F","7B","7R"],"#66633B","Verdigris"],
    [8,["8F","8B","8R"],"#DE5024","Punch"],
    [9,["9F","9B","9R"],"#2791A5","Jelly Bean"],
    [10,["10F","10B","10R"],"#2D3919","Mallard"],
];
	var basedir = '/products/accessories/postmanJ/';
    var descMap = {
        CW1: 'Art Wear'
    };
	var imgdim = {
		width: "1500",
		height: "1500"
	};
    return createStyleDescFactory(sku, basedir, listData, descMap, imgdim);
}

function getTabletJholaFactory(sku) {
var listData = [
    [1,["1F","1B","1R"],"#DD725B","Terracotta"],
    [2,["2F","2B","2R"],"#CB7552","Raw Sienna"],
    [3,["3F","3B","3R"],"#C06548","Crail"],
    [4,["4F","4B","4R"],"#6A362C","Spice"],
    [5,["5F","5B","5R"],"#B46251","Matrix"],
    [6,["6F","6B","6R"],"#6A272F","Tawny Port"],
    [7,["7F","7B","7R"],"#798B42","Sycamore"],
    [8,["8F","8B","8R"],"#BE7A68","Contessa"],
];
	var basedir = '/products/accessories/tabletJ/';
    var descMap = {
        CW1: 'Art Wear'
    };
	var imgdim = {
		width: "1500",
		height: "1500"
	};
    return createStyleDescFactory(sku, basedir, listData, descMap, imgdim);
}

function getLilaJholaFactory(sku) {
var listData = [
    [1,["1F","1B","1R"],"#B57633","Copper"],
    [2,["2F","2B","2R"],"#D9C499","Pavlova",{"Date":"2021-04","Name":"Michel"}],
    [3,["3F","3B","3R"],"#C02F52","Brick Red"],
];
	var basedir = '/products/accessories/lila/';
    var descMap = {
        CW1: 'Art Wear'
    };
	var imgdim = {
		width: "1500",
		height: "1500"
	};
    return createStyleDescFactory(sku, basedir, listData, descMap, imgdim);
}

function getCorsetBeltFactory(sku, basedir, listData, descMap, imgdim) {
var listData = [
    [1, ["1F.1", "1B.1"], "#826228", "Kumera", null],
    [2, ["2F.1", "2B.1"], "#78342E", "Nutmeg", null],
    [3, ["3F.1", "3B.1"], "#625D44", "Finch", null],
    [4, ["4F.1", "4B.1"], "#502E24", "Saddle", null],
    [5, ["5F.1", "5B.1"], "#652221", "Espresso", null],
    [6, ["6F.1", "6B.1"], "#847557", "Shadow", null],
    [7, ["7F.1", "7B.1"], "#AA8424", "Alpine", null],
    [8, ["8F.1", "8B.1"], "#474A22", "Woodland", null],
    [9, ["9F.1", "9B.1"], "#B5AD82", "Mongoose", null],
];
	var basedir = '/products/accessories/corsetbelt/';
    var descMap = {
        CW1: 'Art Wear'
    };
	var imgdim = {
		width: "1500",
		height: "1500"
	};
    return createStyleDescFactory(sku, basedir, listData, descMap, imgdim);
}
