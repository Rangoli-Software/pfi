function getFaceMaskFactory(sku) {
var listData = [
    [1,["1b"],"#588E79","Patina"],
    [2,["2a"],"#A35367","Brown Rust"],
    [3,["3a"],"#DBD8C5","Moon Mist"],
    [4,["4a"],"#914A50","Copper Rust"],
    [5,[5],"#7B8539","Pesto"],
    [6,[6],"#1B1B19","Tuatara",null,"CW3"],
    [7,[7],"#5D262B","Buccaneer"],
    [8,[8],"#AD4426","Paarl"],
    [9,[9],"#7D6659","Russet",{"Date":"2021-08","Name":"Raghu"}],
    [10,[10],"#972328","Old Brick"],
    [11,["11a"],"#A6Ad53","Olive Green"],
    [12,["12a"],"#9BA060","Green Smoke",{"Date":"2021-08","Name":"Raghu"}],
    [13,[13],"#4D5687","East Bay\""],
    [14,[14],"#403248","BlackCurrant"],
    [15,[15],"#204565","Astronaut",{"Date":"2021-08","Name":"Raghu"}],
    [16,[16],"#3A7681","Ming",{"Date":"2021-08","Name":"Raghu"}],
    [17,[17],"#EEE8CE","Parchment",{"Date":"2021-08","Name":"Raghu"}],
    [18,["18a"],"#595647","Soya Bean"],
    [19,[19],"#B4A23D","Roti"],
    [20,[20],"#1E6461","Green Pea",{"Date":"2021-08","Name":"Raghu"}],
    [21,[21],"#BC7606","Pirate Gold",{"Date":"2021-08","Name":"Raghu"}],
    [22,[22],"#CCD5C5","Pale Leaf",{"Date":"2020-07","Name":"Tamara"}],
    [23,[23],"#424642","Cape Cod",null,"CW3"],
    [24,[24],"#E2DCBF","Stark White",{"Date":"2020-07"}],
    [25,[25],"#EDF4E2","Loafer"],
    [26,[26],"#304970","San Juan"],
    [27,[27],"#E2B440","Anzac",{"Date":"2020-09","Name":"Indre"}],
    [28,[28],"#8E4563","Cannon Pink"],
    [29,[29],"#898b2d",""],
    [30,[30],"#EFF7EC","Feta"],
    [31,[31],"#A9AF98","Bud",{"Date":"2021-08","Name":"Raghu"}],
    [32,[32],"#EEF7E6","Feta",{"Date":"2021-08","Name":"Raghu"}],
    [33,[33],"#E36D7E","Deep Blush"],
    [34,[34],"#107586","Surfie Green",null,"CW2"],
    [35,[35],"#A72850","Night Shadz",null,"CW2"],
    [36,[36],"#32423D","Outer Space",null,"CW2"],
    [37,[37],"#3A9C7A","Ocean Green",null,"CW2"],
    [38,[38],"#b29680",""],
    [39,[39],"#485f27",""],
    [40,[40],"#285b32",""],
    [41,[41],"#b5a051",""],
];
	var basedir = '/products/accessories/fm/';
    var descMap = {
        CW1: 'Art Wear',
        CW2: 'Cruise',
        CW3: 'Ce Soir',
    };
	var imgdim = {
		width: "1000",
		height: "1000"
	};
    return createStyleDescFactory(sku, basedir, listData, descMap, imgdim);
}
