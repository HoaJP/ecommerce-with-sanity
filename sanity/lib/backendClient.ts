import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

//npm i next-sanity@canary
export const backendClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // `false` if you want to ensure fresh data
    token: process.env.SANITY_API_TOKEN,
})