export default {
	name: "product",
	title: "Product",
	type: "document",
	fields: [
		{
			name: "tag",
			title: "Tag",
			type: "string",
		},
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "price",
			title: "Price",
			type: "number",
		},
		{
			name: "description",
			title: "Description",
			type: "string",
		},
		{
			name: "howToUse",
			title: "How to use",
			type: "array",
			of: [
				{
					type: "string",
				},
			],
		},
		{
			name: "ingredients",
			title: "Ingredients",
			type: "string",
		},
		{
			name: "image",
			title: "Image",
			type: "array",
			of: [
				{
					type: "image",
				},
			],
			options: {
				hotspot: true,
			},
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 120,
			},
		},
	],
};
