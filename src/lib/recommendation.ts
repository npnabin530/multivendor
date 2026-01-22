import prisma from "@/lib/prisma";

export async function getRelatedProducts(productId: string, categoryId: string, limit: number = 4) {
    try {
        const relatedProducts = await prisma.product.findMany({
            where: {
                categoryId,
                id: {
                    not: productId,
                },
            },
            take: limit,
            orderBy: {
                createdAt: "desc",
            },
            include: {
                seller: {
                    select: {
                        shopName: true,
                    },
                },
            },
        });

        return relatedProducts;
    } catch (error) {
        console.error("Error fetching related products:", error);
        return [];
    }
}
