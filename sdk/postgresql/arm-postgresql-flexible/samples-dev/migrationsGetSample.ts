/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PostgreSQLManagementFlexibleServerClient } from "@azure/arm-postgresql-flexible";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets details of a migration.
 *
 * @summary Gets details of a migration.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/preview/2023-03-01-preview/examples/Migrations_Get.json
 */
async function migrationsGet() {
  const subscriptionId =
    process.env["POSTGRESQL_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["POSTGRESQL_RESOURCE_GROUP"] || "testrg";
  const targetDbServerName = "testtarget";
  const migrationName = "testmigration";
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(
    credential,
    subscriptionId
  );
  const result = await client.migrations.get(
    subscriptionId,
    resourceGroupName,
    targetDbServerName,
    migrationName
  );
  console.log(result);
}

async function main() {
  migrationsGet();
}

main().catch(console.error);