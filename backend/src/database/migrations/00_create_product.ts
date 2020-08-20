import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('products', table => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('description').nullable();
        table.integer('quantity').notNullable();
        table.float('value').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('products')
}