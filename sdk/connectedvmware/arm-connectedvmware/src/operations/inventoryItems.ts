/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { InventoryItems } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureArcVMwareManagementServiceAPI } from "../azureArcVMwareManagementServiceAPI.js";
import {
  InventoryItem,
  InventoryItemsListByVCenterNextOptionalParams,
  InventoryItemsListByVCenterOptionalParams,
  InventoryItemsListByVCenterResponse,
  InventoryItemsCreateOptionalParams,
  InventoryItemsCreateResponse,
  InventoryItemsGetOptionalParams,
  InventoryItemsGetResponse,
  InventoryItemsDeleteOptionalParams,
  InventoryItemsListByVCenterNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing InventoryItems operations. */
export class InventoryItemsImpl implements InventoryItems {
  private readonly client: AzureArcVMwareManagementServiceAPI;

  /**
   * Initialize a new instance of the class InventoryItems class.
   * @param client Reference to the service client
   */
  constructor(client: AzureArcVMwareManagementServiceAPI) {
    this.client = client;
  }

  /**
   * Returns the list of inventoryItems of the given vCenter.
   * @param resourceGroupName The Resource Group Name.
   * @param vcenterName Name of the vCenter.
   * @param options The options parameters.
   */
  public listByVCenter(
    resourceGroupName: string,
    vcenterName: string,
    options?: InventoryItemsListByVCenterOptionalParams
  ): PagedAsyncIterableIterator<InventoryItem> {
    const iter = this.listByVCenterPagingAll(
      resourceGroupName,
      vcenterName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByVCenterPagingPage(
          resourceGroupName,
          vcenterName,
          options,
          settings
        );
      }
    };
  }

  private async *listByVCenterPagingPage(
    resourceGroupName: string,
    vcenterName: string,
    options?: InventoryItemsListByVCenterOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<InventoryItem[]> {
    let result: InventoryItemsListByVCenterResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByVCenter(
        resourceGroupName,
        vcenterName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByVCenterNext(
        resourceGroupName,
        vcenterName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByVCenterPagingAll(
    resourceGroupName: string,
    vcenterName: string,
    options?: InventoryItemsListByVCenterOptionalParams
  ): AsyncIterableIterator<InventoryItem> {
    for await (const page of this.listByVCenterPagingPage(
      resourceGroupName,
      vcenterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create Or Update InventoryItem.
   * @param resourceGroupName The Resource Group Name.
   * @param vcenterName Name of the vCenter.
   * @param inventoryItemName Name of the inventoryItem.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    vcenterName: string,
    inventoryItemName: string,
    options?: InventoryItemsCreateOptionalParams
  ): Promise<InventoryItemsCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vcenterName, inventoryItemName, options },
      createOperationSpec
    );
  }

  /**
   * Implements InventoryItem GET method.
   * @param resourceGroupName The Resource Group Name.
   * @param vcenterName Name of the vCenter.
   * @param inventoryItemName Name of the inventoryItem.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vcenterName: string,
    inventoryItemName: string,
    options?: InventoryItemsGetOptionalParams
  ): Promise<InventoryItemsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vcenterName, inventoryItemName, options },
      getOperationSpec
    );
  }

  /**
   * Implements inventoryItem DELETE method.
   * @param resourceGroupName The Resource Group Name.
   * @param vcenterName Name of the vCenter.
   * @param inventoryItemName Name of the inventoryItem.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    vcenterName: string,
    inventoryItemName: string,
    options?: InventoryItemsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vcenterName, inventoryItemName, options },
      deleteOperationSpec
    );
  }

  /**
   * Returns the list of inventoryItems of the given vCenter.
   * @param resourceGroupName The Resource Group Name.
   * @param vcenterName Name of the vCenter.
   * @param options The options parameters.
   */
  private _listByVCenter(
    resourceGroupName: string,
    vcenterName: string,
    options?: InventoryItemsListByVCenterOptionalParams
  ): Promise<InventoryItemsListByVCenterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vcenterName, options },
      listByVCenterOperationSpec
    );
  }

  /**
   * ListByVCenterNext
   * @param resourceGroupName The Resource Group Name.
   * @param vcenterName Name of the vCenter.
   * @param nextLink The nextLink from the previous successful call to the ListByVCenter method.
   * @param options The options parameters.
   */
  private _listByVCenterNext(
    resourceGroupName: string,
    vcenterName: string,
    nextLink: string,
    options?: InventoryItemsListByVCenterNextOptionalParams
  ): Promise<InventoryItemsListByVCenterNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vcenterName, nextLink, options },
      listByVCenterNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}/inventoryItems/{inventoryItemName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.InventoryItem
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vcenterName,
    Parameters.inventoryItemName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}/inventoryItems/{inventoryItemName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InventoryItem
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vcenterName,
    Parameters.inventoryItemName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}/inventoryItems/{inventoryItemName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vcenterName,
    Parameters.inventoryItemName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByVCenterOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}/inventoryItems",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InventoryItemsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vcenterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByVCenterNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InventoryItemsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vcenterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
