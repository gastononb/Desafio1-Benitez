import { generateProductMocking } from '../utils.js'

export const getProductMocking=  async(req, res) => {
    const products= []
    for (let index = 0; index < 50; index++) {
        products.push(generateProductMocking())
    }
    res.render("mockingProducts",{products} )
}
