// CÂU 1: Khai báo constructor function Product 
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

let products = [
    new Product(1, "iPhone 15", 35000000, 10, "Phone", true),
    new Product(2, "Samsung S24", 25000000, 5, "Phone", true),
    new Product(3, "Laptop Dell", 15000000, 0, "Laptop", true), 
    new Product(4, "Macbook Air", 28000000, 7, "Laptop", true),
    new Product(5, "Ốp lưng iPhone", 50000, 100, "Accessories", true),
    new Product(6, "Sạc dự phòng", 500000, 0, "Accessories", false) 
];

console.log("--- Danh sách sản phẩm ban đầu ---");
console.log(products);

// CÂU 3: Tạo mảng mới chỉ chứa name và price (Dùng map) 
let nameAndPrice = products.map(product => {
    return {
        name: product.name,
        price: product.price
    };
});
console.log("\n--- Câu 3: Mảng chỉ có name và price ---");
console.log(nameAndPrice);

// CÂU 4: Lọc sản phẩm còn hàng (quantity > 0) (Dùng filter) 
let availableProducts = products.filter(product => product.quantity > 0);
console.log("\n--- Câu 4: Sản phẩm còn hàng (quantity > 0) ---");
console.log(availableProducts);

// -CÂU 5: Kiểm tra có ít nhất 1 sp giá trên 30tr (Dùng some) 
let hasExpensiveProduct = products.some(product => product.price > 30000000);
console.log("\n--- Câu 5: Có sản phẩm giá > 30.000.000 không? ---");
console.log(hasExpensiveProduct); 

// CÂU 6: Kiểm tra tất cả sp thuộc danh mục "Accessories" có đang bán không 
// Bước 1: Lọc ra danh mục Accessories
// Bước 2: Kiểm tra tất cả (every) có isAvailable = true không
let accessories = products.filter(p => p.category === "Accessories");
let allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);

console.log("\n--- Câu 6: Tất cả đồ phụ kiện (Accessories) có đang bán không? ---");
console.log(allAccessoriesAvailable);

// CÂU 7: Tính tổng giá trị kho hàng (price * quantity) (Dùng reduce) 
let totalStockValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);

console.log("\n--- Câu 7: Tổng giá trị kho hàng ---");
console.log(totalStockValue.toLocaleString() + " VND"); 

// CÂU 8: Dùng for...of in ra: Tên - Danh mục - Trạng thái 
console.log("\n--- Câu 8: In ra bằng for...of ---");
for (const product of products) {
    let status = product.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${product.name} - ${product.category} - ${status}`);
}

// CÂU 9: Dùng for...in để in tên thuộc tính và giá trị 
console.log("\n--- Câu 9: In thuộc tính sp đầu tiên bằng for...in ---");
let firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`Thuộc tính: ${key} - Giá trị: ${firstProduct[key]}`);
}

// CÂU 10: Lấy danh sách TÊN các sp đang bán (isAvailable) VÀ còn hàng (quantity > 0) ---
let activeProductNames = products
    .filter(p => p.isAvailable === true && p.quantity > 0)
    .map(p => p.name);

console.log("\n--- Câu 10: Tên các sp đang bán và còn hàng ---");
console.log(activeProductNames);