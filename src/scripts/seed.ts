import { MongoServerError } from 'mongodb';
import { Entry } from '../entries/Entry.model';
import { Category } from '../categories/Category.model';
import { prepare_db } from '../db';
import categories_list from '../utils/categories_list';
import entries_list from '../utils/entries_list';

(async () => {
	// Connect to database
	const { close_connection } = await prepare_db();

	// Delete all previous entries and categories if collection exists previously
	try {
		await Category.collection.drop();
		console.log('✅ Deleted all previous categories');
		await Entry.collection.drop();
		console.log('✅ Deleted all previous entries');
	} catch (error) {
		const e = error as MongoServerError;
		if (e.codeName === 'NamespaceNotFound') {
			console.log('❌ Collection does not exist, cannot drop');
		}
	}

	// Create all categories
	await Promise.all(
		categories_list.map(async (e) => {
			await Category.create(e);
		})
	);

	console.log(`✅ All categories created`);

	const related_category = await Category.findOne({ name: 'platos' }).then(
		(e) => {
			return e?._id;
		}
	);

	// Create all entries
	await Promise.all(
		entries_list.map(async (e) => {
			await Entry.create({
				name: e.name,
				description: e.description,
				allergens: e.allergens,
				pairings: e.pairings,
				category: related_category,
				userID: e.userID,
			});
		})
	);

	console.log(`✅ All entries created`);

	// Close db
	await close_connection();
})();
