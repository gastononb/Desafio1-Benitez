class ProductManajer {
    // contructor 
    constructor(){
        this.products= [];
        this.idIncremental = 1;
    }

    // añadir producto

    addProduct (title, description, price, thumbnail, code, stock){
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error("Todos los campos son obligatorios.");
          }
          if (this.products.some(product => product.code === code)) {
            throw new Error("Un producto con el mismo campo code ya existe")
          }
          const product = {
            id: this.idIncremental,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        }
        // incrementar id
          this.idIncremental++

        //  pushear producto en el array products
          this.products.push(product);
        
    }
    // traer todos los productos
    getProducts(){
        return this.products;
    }
// traer producto por id
    getProductById(id){
        const product= this.products.find(item=> item.id === id);

        if (!product){
            console.log("Not found");
        }return product;
        
        
    }

}

