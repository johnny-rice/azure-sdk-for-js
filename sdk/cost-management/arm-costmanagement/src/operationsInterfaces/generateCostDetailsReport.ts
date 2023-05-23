/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  GenerateCostDetailsReportRequestDefinition,
  GenerateCostDetailsReportCreateOperationOptionalParams,
  GenerateCostDetailsReportCreateOperationResponse,
  GenerateCostDetailsReportGetOperationResultsOptionalParams,
  GenerateCostDetailsReportGetOperationResultsResponse
} from "../models";

/** Interface representing a GenerateCostDetailsReport. */
export interface GenerateCostDetailsReport {
  /**
   * This API is the replacement for all previously release Usage Details APIs. Request to generate a
   * cost details report for the provided date range, billing period (Only enterprise customers) or
   * Invoice Id asynchronously at a certain scope. The initial call to request a report will return a 202
   * with a 'Location' and 'Retry-After' header. The 'Location' header will provide the endpoint to poll
   * to get the result of the report generation. The 'Retry-After' provides the duration to wait before
   * polling for the generated report. A call to poll the report operation will provide a 202 response
   * with a 'Location' header if the operation is still in progress. Once the report generation operation
   * completes, the polling endpoint will provide a 200 response along with details on the report blob(s)
   * that are available for download. The details on the file(s) available for download will be available
   * in the polling response body. To Understand cost details (formerly known as usage details) fields
   * found in files ,see
   * https://learn.microsoft.com/azure/cost-management-billing/automate/understand-usage-details-fields
   * @param scope The ARM Resource ID for subscription, resource group, billing account, or other billing
   *              scopes. For details, see https://aka.ms/costmgmt/scopes.
   * @param parameters Parameters supplied to the Create cost details operation.
   * @param options The options parameters.
   */
  beginCreateOperation(
    scope: string,
    parameters: GenerateCostDetailsReportRequestDefinition,
    options?: GenerateCostDetailsReportCreateOperationOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<GenerateCostDetailsReportCreateOperationResponse>,
      GenerateCostDetailsReportCreateOperationResponse
    >
  >;
  /**
   * This API is the replacement for all previously release Usage Details APIs. Request to generate a
   * cost details report for the provided date range, billing period (Only enterprise customers) or
   * Invoice Id asynchronously at a certain scope. The initial call to request a report will return a 202
   * with a 'Location' and 'Retry-After' header. The 'Location' header will provide the endpoint to poll
   * to get the result of the report generation. The 'Retry-After' provides the duration to wait before
   * polling for the generated report. A call to poll the report operation will provide a 202 response
   * with a 'Location' header if the operation is still in progress. Once the report generation operation
   * completes, the polling endpoint will provide a 200 response along with details on the report blob(s)
   * that are available for download. The details on the file(s) available for download will be available
   * in the polling response body. To Understand cost details (formerly known as usage details) fields
   * found in files ,see
   * https://learn.microsoft.com/azure/cost-management-billing/automate/understand-usage-details-fields
   * @param scope The ARM Resource ID for subscription, resource group, billing account, or other billing
   *              scopes. For details, see https://aka.ms/costmgmt/scopes.
   * @param parameters Parameters supplied to the Create cost details operation.
   * @param options The options parameters.
   */
  beginCreateOperationAndWait(
    scope: string,
    parameters: GenerateCostDetailsReportRequestDefinition,
    options?: GenerateCostDetailsReportCreateOperationOptionalParams
  ): Promise<GenerateCostDetailsReportCreateOperationResponse>;
  /**
   * Get the result of the specified operation. This link is provided in the CostDetails creation request
   * response Location header.
   * @param scope The ARM Resource ID for subscription, resource group, billing account, or other billing
   *              scopes. For details, see https://aka.ms/costmgmt/scopes.
   * @param operationId The target operation Id.
   * @param options The options parameters.
   */
  beginGetOperationResults(
    scope: string,
    operationId: string,
    options?: GenerateCostDetailsReportGetOperationResultsOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<GenerateCostDetailsReportGetOperationResultsResponse>,
      GenerateCostDetailsReportGetOperationResultsResponse
    >
  >;
  /**
   * Get the result of the specified operation. This link is provided in the CostDetails creation request
   * response Location header.
   * @param scope The ARM Resource ID for subscription, resource group, billing account, or other billing
   *              scopes. For details, see https://aka.ms/costmgmt/scopes.
   * @param operationId The target operation Id.
   * @param options The options parameters.
   */
  beginGetOperationResultsAndWait(
    scope: string,
    operationId: string,
    options?: GenerateCostDetailsReportGetOperationResultsOptionalParams
  ): Promise<GenerateCostDetailsReportGetOperationResultsResponse>;
}