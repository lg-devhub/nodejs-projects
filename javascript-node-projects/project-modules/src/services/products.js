//all functions that deal with the products

const productType = {
    version: "digital",
    tax: "x1",
};

const apiURL = {
    url: "www.google.com/api",
};

async function getFullName(codeId, productName){
   console.log("product" + codeId + " ---> " + productName);
   await doBreakLine();
}

async function getProductLabel(productName){
    console.log("Product " + productName);
}

async function doBreakLine() {
    console.log("\n");
}

module.exports = {
    getFullName,
    getProductLabel,
    productType,
};