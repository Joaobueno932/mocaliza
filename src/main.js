const express = require('express');
const {Database} = require('./configs/sequelize');
const{Category} = require('./models/category');

const db = Database.getInstance();

const app = express();

app.get('/api/categories', async (req,res) => {
	const categories = Category.findAll();

	res.json({
		data: categories
	});
});

app.post('/api/categories', async (req,res) => {
	const categories = await Category.create(req.params);
	res.json({
		data: categories
	});
});

app.listen(8000, async() => {
	
	await db.sync();
	console.log('Server is running on port 8000!');
});
