"use server"

import sqlite3 from "sqlite3"
import {open} from "sqlite"

export default async function CreateTable() {

    const DB=await open({
        filename:"./impact.db",
        driver:sqlite3.Database
    })

    await DB.exec(`
        CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL);
    `)

    console.log("database connected!!");
    return DB
}