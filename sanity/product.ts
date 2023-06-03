export const product = {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "id",
            title: "Product ID",
            type: "number"
        },
        {
            name: "title",
            title: "Product Title",
            type: "string"
        },
        {
            title: 'Slug',
            name: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: (input:any) => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          },
        {
            name: "description",
            title: "Product Description",
            type: "string"
        },
        {
            name: "category",
            title: "Product Category",
            type: "string"
        },
        {
            name: "subcategory",
            title: "Product Sub Category",
            type: "string"
        },
        {
            name: "price",
            title: "Product price",
            type: "number"
        },
        {
            name: "image",
            title: "Product image",
            type: "image"
        },
    ]
}