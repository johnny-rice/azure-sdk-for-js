/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates the certificate being used for authentication with the backend.
 *
 * @summary Creates or updates the certificate being used for authentication with the backend.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateCertificate.json
 */
async function apiManagementCreateCertificate() {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const certificateId = "tempcert";
  const parameters = {
    data: "****************Base 64 Encoded Certificate *******************************",
    password: "****Certificate Password******",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.certificate.createOrUpdate(
    resourceGroupName,
    serviceName,
    certificateId,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates the certificate being used for authentication with the backend.
 *
 * @summary Creates or updates the certificate being used for authentication with the backend.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateCertificateWithKeyVault.json
 */
async function apiManagementCreateCertificateWithKeyVault() {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const certificateId = "templateCertkv";
  const parameters = {
    keyVault: {
      identityClientId: "ceaa6b06-c00f-43ef-99ac-f53d1fe876a0",
      secretIdentifier:
        "https://rpbvtkeyvaultintegration.vault-int.azure-int.net/secrets/msitestingCert",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.certificate.createOrUpdate(
    resourceGroupName,
    serviceName,
    certificateId,
    parameters
  );
  console.log(result);
}

async function main() {
  apiManagementCreateCertificate();
  apiManagementCreateCertificateWithKeyVault();
}

main().catch(console.error);