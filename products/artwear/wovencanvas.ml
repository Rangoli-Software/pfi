---
layout: product
funnel: ViewContent
title: Woven Canvas on T-Shirt
description: Wearable artwork. One-of-a-kind T-Shirt for that unique individual.
keywords: t shirt, mens t shirt, mens t shirt designer, t shirt women, vintage sari border, fabric art, textile art, artwear, artwork, collage art, abstract art, gift item, corporate gift, modern art, quilting, patchwork, art collectors
---
<script type="text/javascript" src="wc/wc20062000.js"></script>
<script>
    var prodData = {
        imageFile: "sizing.jpg",
        dimensionNames: ["Shoulder", "Chest", "Length"],
        dimensionsCm: {
        S: [
            15.5,
            38,
            26
        ],
        M: [
            16.5,
            40,
            27
        ],
        L: [
            17.5,
            42,
            28
        ],
        XL: [
            18.5,
            44,
            29
        ],
        XXL: [
            19.5,
            46,
            30
        ]
        },
        data: [{
            vid: "CW1",
            images: ["nfm01", "b-f", "b-b", "b-l", "many-1"]
        }],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: '<p>A piece of wearable art! Our T-Shirt with a <strong>numbered</strong> Woven Canvas makes the perfect gift for that unique individual. I create each panel individually as a collage composed of textile strips.</p><p>The fabric strips come from my <a href="/journey/treasuretrove.html">treasure-trove</a> of vintage Tangail sari borders (hand-woven in the finest cotton, silk and metal-zari).</p><p>Each panel is a labour of love. You can read more about the process <a href="/tangailcollage.html">here</a></p><p>Along with your T-shirt, you will receive one of our gift bags: a delicate transparent cotton organza envelope with a mother-of-pearl button closure, making it a perfect gift item!</p>',
        garmentDetails: '',
    }
    
    const washcareHTML = "<ul><li>Wash before first use</li><li>Do not soak</li><li>Hand Wash</li><li>Mild Detergent</li><li>Do Not Bleach</li><li>Dry In Shade</li></ul>";

    const shippingHTML = getShippingInfoUL(['If the item is in stock, it will be ready to ship within 1 business day of your order.']);

    var browseInfo = createBrowseInfo(
        [
            [[origin, '/tangailcollage.html'],[origin, '/journey/treasuretrove.html']],[[clients, '/look/gg.html']]
        ],
        [1,1],
        pg_blacklist
    );
    pg_blacklist = pg_blacklist.concat(browseInfo.getFlattenedURLs());

    const productCatalog = getProductCatalog();

    var factory = getWovenCanvasTFactory();
    var prodJSON = createUIProductJSON('AWTSHT1604Je',factory.base, prodData, null);
    var storyViewer = browseInfo.getStoryViewer();
    var viewerFactory = {
        createPre: function() {
            return createEmptyViewer();
        },
        create: function() {
            return createCatenatedViewer([storyViewer]);
        }
    };
    var cardCreator = createUICardCreator();
    var componentGenerator = createComponentGenerator(
        factory, prodJSON, viewerFactory,
        createColSelData(factory.base,[
                {colourName: 'Neutral', image: 'neutrals-sm'},
                {colourName: 'Violet - Yellow', image: 'v-to-y-sm'},
                {colourName: 'Green - Indigo', image: 'g-to-i-sm'}
        ]),
        true,
        cardCreator,
        ""
    );

    var itemsComponent = componentGenerator.createUIC(loadShopWithParam());
    var itemCategorySelector = itemsComponent.itemCategorySelector;
    var sizeSelector = itemsComponent.sizeSelector;
    const pageComponent = createUIPageComponent(productCatalog, itemsComponent);

    var productComponent = itemsComponent.productComponent;
    var dimensioner = productComponent.sizePanelr.dimensioner;

    $(document).ready(onDocumentReady);
    document.write(productComponent.getSizeModal());
</script>
<section>
    <div class="container">
        <script>
            document.write(productComponent.createProductDiv(0, 0));
        </script>
    </div>
</section>
<h5>Buy Now</h5>
    <p>These are the panels that are currrently available. The entire series, including the panels that have already been collected, can be viewed <a href="/tangailcollage.html#fullseries">here</a>. As new panels are created, they will be numbered and listed here for sale.</p>
<p>Our unisex T-shirts are crew-neck and regular-fit, made of soft bio-washed, 100% cotton (160 gsm weight).
</p>
<p> Select a T-Shirt size (see the size chart below for dimensions) and colour to find what works for you. When you order your one-of-a-kind numbered collage, it will be stitched on to a T-shirt and shipped to you.
</p>
<form><div class="row align-items-center">
<div class="col-12 col-md-4 text-center">
    <script>document.write(sizeSelector.createDiv(0));</script>
</div>
<div class="col-12 col-md-8 text-center">
    <script>document.write(itemCategorySelector.createDiv(itemCategorySelector.categories.getFirstNonEmptyIdx(),0));</script>
</div>
</div></form>
<script>
    document.write(itemsComponent.createDiv());
</script>
<script>
    document.write(renderProductDetails(
        'prodJSON.skuInfo.description,
        null,
        washcareHTML,
        shippingHTML));
</script>
