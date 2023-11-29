import {dirname} from "path"
import { fileURLToPath } from "url"
import bcrypt from 'bcrypt'
import { fakerES as faker } from '@faker-js/faker';
export const __dirname = dirname(fileURLToPath(import.meta.url))


export const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

export const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password)

export const handlePolicies = (policies) => (req, res, next) => {
	const user = req.user || null;
	if (!policies.includes(user.role)) {
		return res.status(401).render("error", { error: "Unauthorized" });
	}
	return next();}

	

export const generateProductMocking = () => {
    return {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price()),
		stock: 100,
		thumbnail:"https://carrefourar.vtexassets.com/arquivos/ids/364926-800-auto?v=638266700150230000&width=800&height=auto&aspect=true",
		category: faker.commerce.productMaterial(),
		code: faker.database.mongodbObjectId(),
		status : true,
		id: faker.database.mongodbObjectId()
    }
}
