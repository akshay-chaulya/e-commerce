import z from "zod";

export const productSchema = z.object({
    name: z.string({
        required_error: "Product name is required"
    }).min(3, "Product name must be at least 3 characters"),
    
    description: z.string({
        required_error: "Description is required"
    }).min(10, "Description must be at least 10 characters"),
    
    price: z.string({
        required_error: "Price is required"
    }).refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "Price must be a positive number"
    }).transform(Number),
    
    category: z.enum(["Men", "Women", "Kids"], {
        errorMap: () => ({ message: "Category must be Men, Women, or Kids" })
    }),
    
    subCategory: z.enum(["Topwear", "Bottomwear", "Winterwear"], {
        errorMap: () => ({ message: "Invalid sub-category" })
    }),
    
    size: z.string({
        required_error: "Sizes are required"
    }).refine((val) => {
        try {
            const parsed = JSON.parse(val);
            return Array.isArray(parsed) && parsed.length > 0;
        } catch {
            return false;
        }
    }, {
        message: "Sizes must be a valid JSON array"
    }).transform((val) => JSON.parse(val)),
    
    bestSeller: z.string()
        .transform((val) => val === "true")
        .default("false"),
}); 