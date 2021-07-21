const celia = {};

celia.miniSKU = 'NKSHMI1501PT';
celia.midiSKU = 'NKSHMD1501PT';
celia.minuitSKU = 'NKSHMU1501PT';

celia.createEncoder = function () {
	return {
		toSKU: function (c) {
			switch (c) {
				case 'u':
					return celia.minuitSKU;
				case 'd':
					return celia.midiSKU;
				case 'm':
					return celia.miniSKU;
				default:
					return null;
			}
		},
		toCode: function (sku) {
			switch (sku) {
				case celia.miniSKU:
					return 'm';
				case celia.midiSKU:
					return 'd';
				case celia.minuitSKU:
					return 'u';
				default:
					return null;
			}
		}
	};
}

celia.createURLUpdater = function () {
	return {
		encoder: celia.createEncoder(),
		urlModifier: createURLModifer('s','d')
	};
}

celia.washcareHTML = "<ul><li>Do not soak</li><li>Hand Wash</li><li>Mild Detergent</li><li>Do Not Bleach</li><li>Dry In Shade</li><li>No Need to Iron</li><li>Follow this tie-up procedure to maintain the crushed look-and-feel</li></ul>";

celia.shippingHTML = getShippingInfoUL(['Since our Naksha skirts are on sale in several physical locations in addition to the website, there is a chance that the skirt that you have selected has already been sold. In this case, we will let you select another skirt, or refund your purchase price, as you prefer.']);

celia.createSKUs = function (base) {
	return {
		base: base,
		data: [
			{
				SKU: celia.minuitSKU,
				text: 'Minuit',
				image: 'minuitL4',
				pxWidth: '65'
			},
			{
				SKU: celia.midiSKU,
				text: 'Midi',
				image: 'midiL4',
				pxWidth: '59.28'
			},
			{
				SKU: celia.miniSKU,
				text: 'Mini',
				image: 'miniL3',
				pxWidth: '48.88'
			}
		],
		getImage: function (vidx) {
			var vnt = this.data[vidx];
			return {
				url: this.base + vnt.image + ".jpg"
			}
		},
	};
}

celia.getDimensionsCm = function (sku) {
	switch (sku) {
		case celia.miniSKU:
			return {
				Free: [62, 53, 336, 72, 130]
			};
		case celia.midiSKU:
			return {
				Free: [81, 72, 376, 72, 130]
			};
		case celia.minuitSKU:
			return {
				Free: [102, 93, 392, 72, 130]
			};
		default:
			return null;
	}
};

celia.sizing = {
	sizeGeo: ["US", "UK", "EU", "IT", "GR", "JP", "RU"],
	capGeo: ["US", "UK / AU / NZ", "EU / FR", "IT", "DE", "JP", "RU"],
	chart: {
		Free: {
			US: [6, 30],
			UK: [10, 34],
			EU: [38, 52],
			IT: [42, 56],
			GR: [36, 50],
			JP: [11, 25],
			RU: [44, 58]
		}
	}
};

celia.getSizing = function (sku) {
	switch (sku) {
		case celia.miniSKU:
			return celia.sizing;
		case celia.midiSKU:
			return celia.sizing;
		case celia.minuitSKU:
			return celia.sizing;
		default:
			return null;
	}
}

celia.getVariants = function (sku) {
	switch (sku) {
		case celia.miniSKU:
			return {
				vid: "AW",
				images: ["front", "back", "side", "detail1", "detail2"]
			};
		case celia.midiSKU:
			return {
				vid: "AW",
				images: ["front", "back", "side", "detail1", "detail2"]
			};
		case celia.minuitSKU:
			return {
				vid: "AW",
				images: ["front", "back", "side", "detail1", "detail2"]
			};
		default:
			return null;
	}
};

celia.createSKUSelector = function (skus) {
	return {
		skus: skus,
		divId: 'skuSelector',
		skuRadioName: "skuRadio",
		getSKUIdx: function (sku) {
			for (var i = 0; i < this.skus.data.length; i++) {
				var variant = this.skus.data[i];
				if (variant.SKU == sku) {
					return i;
				}
			}
			return -1;
		},
		getSelectedSKU: function () {
			var selRadio = $("input[name='" + this.skuRadioName + "']:checked");
			return selRadio.val();
		},
		createSKUPanel: function (name, varIdx) {
			var res = '<div class="mb-4 ml-n1">';
			for (var i = 0; i < this.skus.data.length; i++) {
				var opt = this.skus.data[i];
				res += '<div class="custom-control custom-control-inline custom-control-img"><input type="radio" onclick="onSKUChange(\'' + opt.SKU + '\')" class="custom-control-input" id="' + name + i + '" name="' + name + '" value="' + opt.SKU + '"' + (varIdx == i ? " checked" : "") + '><label class="custom-control-label" for="' + name + i + '" style="width: ' + opt.pxWidth + 'px">' +
					'<img class="img-fluid" src="' + this.skus.getImage(i).url + '" loading="lazy">' +
					'</label></div>';
			}
			res += '</div>';
			return res;
		},
		createDiv: function (varIdx) {
			var res = '<form id="' + this.divId + '"><div class="row align-items-center">'
			res += '<div class="col-12 text-center"><figure>' +
				this.createSKUPanel(this.skuRadioName, varIdx) +
				'</figure></div>' +
				'</div></form>';
			return res;
		}
	}
}

celia.createProdData = function (sku) {
	return {
		imageFile: "sizing.jpg",
		dimensionNames: ["A. Length", "B. Outer Layer Length", "C. Hem", "D. Waist - Relaxed", "D. Waist - Stretched"],
		dimensionsCm: celia.getDimensionsCm(sku),
		data: [celia.getVariants(sku)],
		sizes: ['Free'],
		description: 'Celia Skirt is one of our favourite silhouettes. It\'s cut in the finest cotton P.F.I. Tangail. This exquisite cotton is often mistaken as silk by my clients. It has an incredible volume to play around in and is freesize! The waist band is made up of 9 rows of elastic. Because of the need for care while working with the delicate Tangail fabric, it can take a skilled tailor almost a full day of work to create this waistband. The result is a freesize waist with a snug, comfortable fit. It can work from day to night and it\'s groovy flare will have you swirling all day. Pair it with our Portia Top to take it up a notch or wear a basic t-shirt to keep it subtle.',
    	garmentDetails: '<li>Freesize - Broad elastic at the waist</li><li>P.F.I. Tangail</li><li>Midi length</li><li>A line with voluminous flare</li>'
	};
}

celia.createProductJSON = function (sku, base) {
	var prodData = celia.createProdData(sku);
	return createProductJSON(sku, base, prodData, celia.getSizing(sku));
}

celia.createStyle = function (sku, base) {
	return {
		SKU: sku,
		base: base,
		sizing: celia.getSizing(sku),
		prodData: celia.createProdData(sku),
		washcareHTML: celia.washcareHTML,
		shippingHTML: celia.shippingHTML,
		createCardCreator: celia.createCardCreator,
		createJSON: function (style) {
			return celia.createProductJSON(this.SKU, this.base);
		}
	};
}

celia.createUICFactory = function (scope, colSelData, browseInfo) {
	var skus = scope.createSKUs(scope.base);
	var skuSelector = scope.createSKUSelector(skus);
	return {
		scope: scope,
		skuSelector: skuSelector,
		browseInfo: browseInfo,
		createGenerator: function (sku) {
			var factory = this.scope.factory.createSKU(sku);
			var prodData = this.scope.createProdData(sku);
			var prodJSON = createUIProductJSON(sku, factory.base, prodData, this.scope.getSizing(sku));
			var skuSelViewer = createHTMLViewer(skuSelector.createDiv(skuSelector.getSKUIdx(sku)));
			var detailViewer = createHTMLViewer(prodJSON.skuInfo.garmentDetails);
			var storyViewer = this.browseInfo.getStoryViewer();
			var viewerFactory = {
				product: prodJSON.product,
				createPre: function () {
					return skuSelViewer;
				},
				createBase: function (shop) {
					return createBasePanelr(shop, null, this.product);
				},
				create: function () {
					return createCatenatedViewer([detailViewer, storyViewer]);
				},
				createNavHelper: function () {
					return createNavHelper(prodJSON, artwear.categorizer, artwear.catalog.title);
				},
				createList: function () {
					return createUniqueItemList(factory.listData, factory);
				},
				createCategorySelector: function () {
					var selCategory = createColourCategories(colSelData, factory);
					return createColourCategorySelector(selCategory);
				},
				createVarSel: function () {
					return {
						getSelectedIdx: function () {
							return 0;
						}
					}
				},
				createPanelRVs: function () {
					var itemsRVlist = [SelChangeReason.colorCategoryChange, SelChangeReason.skuChange];
					return createPanelRVs(
						SelChangeReason.createValidator(itemsRVlist),
						SelChangeReason.createValidator([SelChangeReason.colorChange, SelChangeReason.skuChange]),
						SelChangeReason.createValidator([SelChangeReason.skuChange, SelChangeReason.currencyChange]),
						SelChangeReason.createValidator([SelChangeReason.unitChange, SelChangeReason.skuChange])
					);
				}
			};
			var sizeSelector = createSizeSelector(prodJSON.skuInfo.sizes, pfiavG.sizeModalInfo.getToggleHTML(), null, "The model is 5 ft 3 in (160 cm).", "Size");
			return createComponentGenerator(factory, prodJSON, viewerFactory, sizeSelector, true, this.scope.createCardCreator(sku),0);
		},
		updateURL: function (sku) {
			var encoder = this.scope.urlUpdater.encoder;
			var urlModifier = this.scope.urlUpdater.urlModifier;
			var c = encoder.toCode(sku);
			urlModifier.updateURL(c);
		}
	}
}

celia.urlUpdater = celia.createURLUpdater();
