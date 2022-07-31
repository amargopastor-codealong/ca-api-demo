import { DocumentDefinition, ObjectId } from 'mongoose';
import { EntryDocument, Entry } from '../entries/Entry.model';

const entries_list: DocumentDefinition<EntryDocument>[] = [
	{
		name: 'Pollo al limón',
		description: 'Rico pollo al limón',
		allergens: 'Pollo y limón',
		pairings: 'Mahou clásica',
		category: '1',
		userID: '1',
	},
	{
		name: 'Hormigas subiendo al árbol',
		description: 'Autentica comida occidental',
		allergens: 'Hormigas y árbol',
		pairings: 'Mahou clásica',
		category: '1',
		userID: '1',
	},
	{
		name: 'Tofu',
		description: 'Tofu',
		allergens: 'Tofu',
		pairings: 'Mahou clásica',
		category: '1',
		userID: '1',
	},
];

export default entries_list;
