/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { RecorderStartOptions } from "@azure-tools/test-recorder";
import { env, Recorder, isPlaybackMode } from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { KustoManagementClient } from "../src/index.js";
import { describe, it, assert, beforeEach, afterEach } from "vitest";

const replaceableVariables: Record<string, string> = {
  SUBSCRIPTION_ID: "88888888-8888-8888-8888-888888888888",
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
  removeCentralSanitizers: [
    "AZSDK3493", // .name in the body is not a secret and is listed below in the beforeEach section
    "AZSDK3430", // .id in the body is not a secret and is listed below in the beforeEach section
  ],
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("KustoManagementClient", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: KustoManagementClient;
  let resourceGroup: string;
  let clusterName_1: string;

  beforeEach(async (ctx) => {
    recorder = new Recorder(ctx);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new KustoManagementClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({}),
    );
    resourceGroup = "myjstest";
    clusterName_1 = "mytestclustername5";
  });

  afterEach(async () => {
    await recorder.stop();
  });

  // kusto_client.clusters.beginCreateOrUpdateAndWait
  it("could create clusters", async () => {
    const res = await client.clusters.beginCreateOrUpdateAndWait(
      resourceGroup,
      clusterName_1,
      {
        location: "eastus",
        sku: { name: "Standard_L16as_v3", capacity: 2, tier: "Standard" },
        identity: {
          type: "SystemAssigned",
        },
        languageExtensions: {
          value: [
            {
              languageExtensionImageName: "Python3_10_8",
              languageExtensionName: "PYTHON",
            },
          ],
        },
      },
      testPollingOptions,
    );
    assert.strictEqual(res.name, clusterName_1);
  });

  // kusto_client.clusters.beginUpdateAndWait
  // it("could update tags in cluster", async () => {
  //   const updateParams: ClusterUpdate = {
  //     tags: {
  //       key1: "value1",
  //       key2: "value2",
  //     }
  //   };
  //   const res = await client.clusters.beginUpdateAndWait(resourceGroup, clusterName_2, updateParams, testPollingOptions);
  //   if (!isPlaybackMode()) {
  //     await delay(isPlaybackMode() ? 1000 :600000);
  //   }
  //   assert.equal(res.name, clusterName_2);
  // });

  // kusto_client.clusters.get
  it("could get cluster", async () => {
    const res = await client.clusters.get(resourceGroup, clusterName_1);
    assert.strictEqual(res.name, clusterName_1);
  });

  // kusto_client.clusters.list
  it("could list cluster filtered by resource group", async () => {
    const resArray = new Array();
    for await (const item of client.clusters.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  // kusto_client.clusters.beginDeleteAndWait
  it("could delete clusters", async () => {
    const resArray = new Array();
    await client.clusters.beginDeleteAndWait(resourceGroup, clusterName_1, testPollingOptions);
    for await (const item of client.clusters.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
});
