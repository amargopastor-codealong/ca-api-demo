import { Schema, Document, Types, model } from 'mongoose';

export interface CategoryDocument extends Document {
	name: string;
	active: boolean;
}

// The category schema
const schema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			minlength: [3, 'Category name min length 3'],
		},
		active: { type: Boolean, required: true, default: true },
	},
	{
		timestamps: true,
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

// Mongoose model for category schema
export const Category = model('category', schema);
