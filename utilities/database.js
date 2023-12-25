
// Simulates a database of products.

const Products =[
    // Snacks
    {name: "Oishi Snack Tom", price: "20", type: "Snacks", images:[
        require("../assets/product-images/Snacks/snack2.png"),
        require("../assets/product-images/Snacks/snack21.png"),
        require("../assets/product-images/Snacks/snack22.png")
    ],description:"Sở hữu vị tôm cay đặc trưng, Oishi Snack Tôm cay nay được rang không chiên, cho bạn vô tư ăn liền mà không lo bị nóng!"
},

    {name: "Indo Chips!", price: "20", type: "Snacks", images:[
        require("../assets/product-images/Snacks/snack3.png"),
        require("../assets/product-images/Snacks/snack31.png"),
        require("../assets/product-images/Snacks/snack32.png")
    ],description:"Snack hải sản thượng hạng mang đậm hương vị biển cả, thỏa mãn vị giác của bạn với tôm, mực hoặc cá."},

    {name: "Crab me!", price: "15", type: "Snacks", images:[
        require("../assets/product-images/Snacks/snack4.png"),
        require("../assets/product-images/Snacks/snack41.png"),
        require("../assets/product-images/Snacks/snack4.png")
    ],description:"Vị cua đậm đà, vị ngọt vị chua - Không ai khác chính là Crab Me!"},

    {name: "Marty's", price: "25", type: "Snacks", images:[
        require("../assets/product-images/Snacks/snack10.png"),
        require("../assets/product-images/Snacks/snack101.png"),
        // require("../assets/product-images/Snacks/snack101.png")
    ],description:"Là sự kết hợp đỉnh cao giữa mùi vị đậm đà của da heo và snack rau củ, Marty's nghe là muốn thử ngay!"},

    {name: "Kirei", price: "10", type: "Snacks", images:[
        require("../assets/product-images/Snacks/snack5.png"),
        require("../assets/product-images/Snacks/snack6.png"),
        require("../assets/product-images/Snacks/snack7.png")
    ],description:" Kirei đậm đà vị tôm ngon ưa thích"},

    {name: "Snack Bi Do", price: "15", type: "Snacks", images:[
        require("../assets/product-images/Snacks/snack8.png"),
        require("../assets/product-images/Snacks/snack9.png"),
        require("../assets/product-images/Snacks/snack10.png")
    ],description:"Snack bí đỏ kết hợp đồng điệu giữa bí đỏ và bò nướng chính là bạn đồng hành tuyệt vời cho những khoảnh khắc của riêng bạn."},

    {name: "Luna", price: "20", type: "Snacks", images:[
        require("../assets/product-images/Snacks/snack6.png"),
    ],description:"Những khoanh mực tròn tròn, phủ đượm vị ngọt và cay."},

    {name: "Snack Hanh", price: "10", type: "Snacks", images:[
        require("../assets/product-images/Snacks/snack9.png"),

    ],description:"Snack hành tràn đầy hương vị tươi ngon, tròn tròn giòn tan mang lại trải nghiệm thú vị."},

    {name: "Flutes", price: "20", type: "Snacks", images:[
        require("../assets/product-images/Snacks/snack12.png"),

    ],description:"Tìm đâu vị khoai tây chiên ưa thích? Có Flutes giòn ngon xuất hiện đây!"},

    // Candys
    {name: "Opuff", price: "30", type: "Candys", images:[
        require("../assets/product-images/Candys/candy1.png"),
        require("../assets/product-images/Candys/candy11.png"),
        require("../assets/product-images/Candys/candy12.png"),
    ],description:"Kẹo dẻo xôm xốp với phần nhân căng tràn tuyệt hảo. Hãy cùng trải nghiệm sự ngòn ngọt, mềm mềm đến từ Oishi O Puff bạn nhé!"},
    {name: "Vi Oi", price: "30", type: "Candys", images:[
        require("../assets/product-images/Candys/candy2.png"),
    ],description:"Kẹo cứng với nhiều loại hương vị trái cây và bạc hà ngon ngất ngây."},
    {name: "Vi Vai Thieu", price: "190", type: "Candys", images:[
        require("../assets/product-images/Candys/candy21.png"),
    ],description:"Kẹo cứng với nhiều loại hương vị trái cây và bạc hà ngon ngất ngây."},
    {name: "Vi Me", price: "25", type: "Candys", images:[
        require("../assets/product-images/Candys/candy22.png")
    ],description:"Kẹo cứng với nhiều loại hương vị trái cây và bạc hà ngon ngất ngây."},

    {name: "Thap Cam", price: "35", type: "Candys", images:[
        require("../assets/product-images/Candys/candy3.png"),
        require("../assets/product-images/Candys/candy31.png"),
        require("../assets/product-images/Candys/candy32.png")
    ],description:"Kẹo cứng với nhiều loại hương vị trái cây và bạc hà ngon ngất ngây."},

//Drinks
    {name: "C+ Plus", price: "20", type: "Drinks", images:[
        require("../assets/product-images/Drinks/drink1.png"),
    ],description:"Nước uống bổ sung Vitamin C được làm từ nước trái cây tự nhiên, cung cấp đầy đủ vitamin và tăng cường dinh dưỡng."},

    {name: "T-Rexx", price: "18", type: "Drinks", images:[
        require("../assets/product-images/Drinks/drink2.png"),
        require("../assets/product-images/Drinks/drink21.png"),
    ],description:"Nước tăng lực T-rexx giàu vitamin C, B3, B6 và Taurine giúp cơ thể luôn tỉnh táo, đầy năng lượng, sẵn sàng đối mặt với mọi tình huống."},

    {name: "Tea Go", price: "30", type: "Drinks", images:[
        require("../assets/product-images/Drinks/drink3.png"),
        require("../assets/product-images/Drinks/drink31.png"),
        // require("../assets/product-images/Drinks/drink1.png")
    ],description:"Giải khát tức thì cùng trà xanh với vị chanh thơm mát."},
//cookies
    {name: "BigGie", price: "40", type: "Cookies", images:[
        require("../assets/product-images/Cookies/cookies1.png"),
        require("../assets/product-images/Cookies/cookies11.png"),
        // require("../assets/product-images/Cookies/cookies1.png")
    ],description:"Nhấm nháp nhiều hơn và tận hưởng năng lượng tích cực từ loại bánh quế mới xuất hiện. Bạn sẽ cảm nhận được hương vị thơm ngon và tiếp thêm nguồn năng lượng mỗi ngày."},
    {name: "Akiko", price: "18", type: "Cookies", images:[
        require("../assets/product-images/Cookies/cookies2.png"),
        require("../assets/product-images/Cookies/cookies21.png"),
        require("../assets/product-images/Cookies/cookies22.png")
    ],description:"Theo bạn tới bất kì đâu, Akiko snack que ngọt ngon vui giòn giúp thoả mãn mọi cơn thèm ngọt."},
]

export default Products;