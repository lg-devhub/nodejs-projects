const product = require("./services/products");
const config = require("./services/config");

(async function main(){
    console.log("-----Purschase history-----");
    product.getFullName("408", "mousepad");
    product.getFullName("409", "mouse");
    product.getFullName("410", "earpods");
    product.getFullName("411", "microphone");
    product.getFullName("412", "soundpad");
    product.getProductLabel("MousePad Titorion X")

    console.log("Development Status");
    console.log(config.devArea.version);
    console.log(config.devArea.production);
})();
