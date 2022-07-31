import { DocumentDefinition, ObjectId } from 'mongoose';
import { CategoryDocument, Category } from '../categories/Category.model';

const categories_list: DocumentDefinition<CategoryDocument>[] = [
	{
		name: 'platos',
		active: true,
	},
	{
		name: 'postres',
		active: true,
	},
	{
		name: 'refrescos',
		active: true,
	},
	{
		name: 'cafés y tés',
		active: true,
	},
	{
		name: 'vinos',
		active: true,
	},
	{
		name: 'combinados',
		active: true,
	},
	{
		name: 'cervezas',
		active: true,
	},
	{
		name: 'clásicos',
		active: true,
	},
];

export default categories_list;
