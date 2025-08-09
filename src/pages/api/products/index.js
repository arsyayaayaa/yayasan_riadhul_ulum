import prisma from "@/lib/prisma";

const getMethodHandler = async (req, res) => {
  try {
    const products = await prisma.products.findMany();
    return res.status(200).json({
      message: "success to get products data",
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

async function handler(req, res) {
  if (req.method === "GET") {
    return getMethodHandler(req, res);
  }

  return res.status(405).json({ message: "Method not allowed" });
}

export default handler;
