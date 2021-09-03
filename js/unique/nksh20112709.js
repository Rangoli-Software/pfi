function createNakshaFactory(base, listData, product, varPL) {
    return {
        listData: listData,
        base: base,
        product: product,
        varPL: varPL,
        getRowId: function(row) {
            return row[0];
        },
        createDescriptor: function (row) {
            var num = this.getRowId(row);
            var cwPrice;
            var cwDesc;
            if (row[5] === undefined) {
                cwPrice = this.product.inrPrice;
                cwDesc = 'Tangail Tradition';
            } else {
                var cw = row[5];
                var vpl = this.varPL[cw];
                cwPrice = vpl === undefined ? this.product.inrPrice : vpl;
                cwDesc = (cw === 'CW1' ? 'Jamdani Lace' : 'Indigo In-Love')
            }
            var collected = (row[4] === undefined) ? null : row[4];
            return {
                name: this.product.name,
                base: this.base,
                number: num,
                hsl: hexToHSL(row[2]),
                inrPrice: cwPrice,
                catDesc: cwDesc,
                collected: collected,
                getNumImages: function () {
                    return row[1].length;
                },
                getImagePath: function (idx) {
                    return this.base + row[1][idx] + '.jpg';
                },
                getHue: function () {
                    return this.hsl.h;
                },
                getSat: function () {
                    return this.hsl.s;
                },
                getV: function () {
                    return this.hsl.l;
                },
                getCWPrice: function () {
                    return this.inrPrice;
                },
                getCWDesc: function () {
                    return this.catDesc;
                },
                isAvailable: function() {
                    return this.collected === null;
                },
				getSize: function () {
					return undefined;
				},
                getCollectedText: function() {
					return createUICollectedText(this.collected);
                }
            };
        }
    };
}

function getNakshaMicroFactory(base, product, varPL) {
    var listData = [
        [1,[1.1,"1.1a"],"#E3CA79","Chenin"],
        [2,[2,"2a"],"#242925","Heavy Metal"],
        [3,[3,"3a"],"#1C2A2D","Mirage"],
        [4,[4,"4a"],"#212B2A","Outer Space"],
        [5,[5,"5a"],"#202A2C","Outer Space"],
        [6,[6,"6a"],"#1F1F1F","Mine Shaft"],
        [7,[7,"7a"],"#222526","Shark"],
        [8,[8,"8a"],"#512F2B","Cork",{"Date":"2020-11","Name":"Michel"}],
        [9,[9.1,"9a.1"],"#CAF1F5","",null,"CW1"],
        [10,[10,"10a"],"#27212D","Bastille",null,"CW1"],
        [11,[11,"11a"],"#A04E78","Tapestry"],
        [12,[12,"12a"],"#547A4C","Dingley"],
    ];
    return createNakshaFactory(base + 'mc/', listData, product, varPL);
}

function getNakshaMiniFactory(base, product, varPL) {
    var listData = [
        [1,[1,"1A"],"#202F25","Log Cabin"],
    ];
    return createNakshaFactory(base + 'mi/', listData, product, varPL);
}

function getNakshaMidiFactory(base, product, varPL) {
    var listData = [
        [1,[1.6,"1a.6"],"#372844","Martinique",{"Date":"2020-11","Name":"Michel"},"CW2"],
        [2,[2.6,"2a.6"],"#15181D","Woodsmoke"],
        [3,[3.6,"3a.6"],"#9D5A68","Coral Tree"],
        [4,[4.6,"4a.6"],"#A9AC8A","Locust"],
        [5,[5.6,"5a.6"],"#E7BA46","Anzac"],
        [6,[6.6,"6a.6"],"#9E4666","Vin Rouge",{"Date":"2020-09","Name":"Indre"}],
        [7,[7.6,"7a.6"],"#8C3042","Solid Pink"],
        [8,[8.6,"8a.6"],"#8D2C42","Stiletto"],
        [9,[9.6,"9a.6"],"#252945","Martinique"],
        [10,[10.6,"10a.6"],"#DACB6D","Chenin",{"Name":"Prema"}],
        [11,[11.6,"11a.6"],"#171B1C","Woodsmoke",{"Date":"2020-12","Name":"Judith"}],
        [12,[12.6,"12a.6"],"#674857","Eggplant"],
        [13,[13.6,"13a.6"],"#DDBEA2","Cameo",{"Date":"2020-07","Name":"Judith"}],
        [14,[14.6,"14a.6"],"#FBFCFD","Zircon",{"Date":"2021-02","Name":"Naomi"}],
        [15,[15.6,"15a.6"],"#753D69","Cosmic"],
        [16,[16.6,"16a.6"],"#244A41","Plantation"],
        [17,[17.6,"17a.6"],"#80505E","Ferra",{"Date":"2021-02","Name":"Naomi"}],
        [18,[18.6,"18a.6"],"#B5AF50","Husk",{"Date":"2020-08","Name":"Naomi"}],
        [19,[19.6,"19a.6"],"#823B6A","Cannon Pink"],
        [20,[20.6,"20a.6"],"#674567","Eggplant"],
        [21,[21.6,"21a.6"],"#2.63E+57","",null,"CW2"],
        [22,[22.6,"22a.6"],"#6F3045","Finn"],
        [23,[23.6,"23a.6"],"#389288","Lochinvar",{"Date":"2021-02","Name":"Naomi"}],
        [24,[24.6,"24a.6"],"#C7AA64","Laser"],
        [25,[25.6,"25a.6"],"#7E3D51","Cosmic",{"Date":"2021-01","Name":"Ange"}],
        [26,[26.6,"26a.6"],"#7EB54E","Sushi"],
        [27,[27,"27a"],"#A5516F","Cadillac"],
        [28,[28,"28a"],"#1E2223","Shark"],
        [29,[29,"29a"],"#f6f162","",null,"CW1"],
        [30,[30,"30a"],"#cb6ba8","",null,"CW1"],
        [31,[31,"31a"],"#69bc54","",null,"CW1"],
    ];
    return createNakshaFactory(base + 'md/', listData, product, varPL);
}

function getNakshaMinuitFactory(base, product, varPL) {
    var listData = [
        [2,["2.6","2a.6"],"#852A47","Camelot",{"Date":"2020-12","Name":"Judith"},"CW1"],
        [4,["4.6","4a.6"],"#F1E04E","Energy Yellow",null,"CW1"],
        [5,["5.6","5a.6"],"#D26690","Hopbush",null,"CW1"],
        [6,["6.6","6a.6"],"#D96A56","Terracotta",{"Date":"2020-09","Name":"Indre"}],
        [7,["7.6","7a.6"],"#D29E59","Di Serria",null,"CW1"],
        [8,["8.6","8a.6"],"#498640","Fern Green",{"Date":"2021-01","Name":"Margaret"},"CW1"],
        [9,["9.6","9a.6"],"#C97983","Old Rose"],
        [10,["10.6","10a.6"],"#CAF1F5","",null,"CW1"],
        [11,["11","11a"],"#6BB3C1","Tradewind",null,"CW1"],
        [12,["12","12a"],"#B09690","Del Rio",{"Date":"2020-10","Name":"Marieke"},"CW1"],
    ];
    return createNakshaFactory(base + 'mu/', listData, product, varPL);
}
