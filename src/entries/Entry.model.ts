import { Schema, Document, model, Types } from 'mongoose';
import { Category } from '../categories/Category.model';

export interface EntryDocument extends Document {
	name: string;
	description: string;
	allergens: string;
	pairings: string;
	category: Types.ObjectId;
	userID: string;
}

// The entry schema
const schema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			minlength: [3, 'Entry name min length 3'],
		},
		description: {
			type: String,
			required: true,
			minlength: [3, 'Description min length 3'],
		},
		allergens: {
			type: String,
			required: true,
			minlength: [3, 'Allergens min length 3'],
		},
		pairings: {
			type: String,
			required: false,
			minlength: [3, 'Pairings min length 3'],
		},
		category: {
			type: Schema.Types.ObjectId,
			ref: 'Category',
			required: [true, `All entries must be related to a category`],
		},
		userID: { type: String, required: true, default: '1' },
	},
	{
		timestamps: true,
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

// Mongoose model for entry schema
export const Entry = model('entry', schema);
