"use server"

import { currentUser } from "@clerk/nextjs/server"

// Inicialize the Clerk client
import { SchematicClient } from "@schematichq/schematic-typescript-node"

const apiKey = process.env.SCHEMATIC_API_KEY
const client = new SchematicClient({apiKey})