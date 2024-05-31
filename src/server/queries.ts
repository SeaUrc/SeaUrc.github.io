import { db } from "~/server/db";
import "server-only";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
    const user = auth();
    if (!user.userId) console.log("uh oh stinky")

    const images = await db.query.images.findMany({
        // where: (model, {eq}) => eq(model.userId, user.userId),
        orderBy: (model, {desc}) => desc(model.id),
    });  
    return images;
}