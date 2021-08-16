import { promisify } from "../utils";
import { Client } from "./Client";
import {
  ResStatus,
  DescribeIndexResponse,
  GetIndexStateResponse,
  GetIndexBuildProgressResponse,
} from "./types";
import {
  CreateIndexReq,
  DescribeIndexReq,
  DropIndexReq,
  GetIndexBuildProgressReq,
  GetIndexStateReq,
} from "./types/Index";

export class Index extends Client {
  /**
   * Creat index on vector field, it will be async progress.
   *
   * @param data
   *  | Property           | Type   |           Description              |
   *  | :----------------- | :----  | :-------------------------------:  |
   *  | collection_name    | string |       Milvus Collection name       |
   *  | field_name         | string |       Milvus field name       |
   *  | extra_params       | CreateIndexParam[] | CreateIndexParam: {key: "index_type" | "metric_type" | "params";value:string}      |
   *
   * @return
   *  | Property      | Description |
   *  | :-------------| :--------:  |
   *  | error_code    | Number      |
   *  | reason        | Error reason|
   *
   *
   * ### Example
   *
   * ```
   *  new milvusClient(MILUVS_IP).collectionManager.createIndex({
   *     collection_name: COLLECTION_NAME,
   *     field_name: "vector_01",

   *     extra_params: [
   *       {
   *         key: "index_type",
   *         value: "BIN_IVF_FLAT",
   *       },
   *       {
   *         key: "metric_type",
   *         value: "HAMMING",
   *       },
   *       {
   *         key: "params",
   *         value: JSON.stringify({ nlist: 1024 }),
   *       },
   *     ],
   *   });
   * ```
   */
  async createIndex(data: CreateIndexReq): Promise<ResStatus> {
    const promise = await promisify(this.client, "CreateIndex", data);
    return promise;
  }

  /**
   * Get index information, only get collection latest index for now.
   *
   * @param data
   *  | Property           | Type   |           Description              |
   *  | :----------------- | :----  | :-------------------------------:  |
   *  | collection_name    | string |       Milvus Collection name       |
   *
   * @return
   *  | Property      | Description |
   *  | :-------------| :--------:  |
   *  | status        |  { error_code: number,reason:string } |
   *  | index_descriptions        | index information |
   *
   *
   * ### Example
   *
   * ```
   *  new milvusClient(MILUVS_IP).indexManager.describeIndex({
   *     collection_name: COLLECTION_NAME,
   *  });
   * ```
   */
  async describeIndex(data: DescribeIndexReq): Promise<DescribeIndexResponse> {
    const promise = await promisify(this.client, "DescribeIndex", data);
    return promise;
  }

  /**
   * Get index building state
   *
   * @param data
   *  | Property           | Type   |           Description              |
   *  | :----------------- | :----  | :-------------------------------:  |
   *  | collection_name    | string |       Milvus Collection name       |
   *
   * @return
   *  | Property      | Description |
   *  | :-------------| :--------:  |
   *  | status        |  { error_code: number,reason:string } |
   *  | state         | index building state |
   *
   *
   * ### Example
   *
   * ```
   *  new milvusClient(MILUVS_IP).indexManager.getIndexState({
   *     collection_name: COLLECTION_NAME,
   *  });
   * ```
   */
  async getIndexState(data: GetIndexStateReq): Promise<GetIndexStateResponse> {
    const promise = await promisify(this.client, "GetIndexState", data);
    return promise;
  }

  /**
   * Get index building progress.
   *
   * @param data
   *  | Property           | Type   |           Description              |
   *  | :----------------- | :----  | :-------------------------------:  |
   *  | collection_name    | string |       Milvus Collection name       |
   *
   *
   * @return
   *  | Property      | Description |
   *  | :-------------| :--------:  |
   *  | status        |  { error_code: number,reason:string } |
   *  | indexed_rows  | building index success row count |
   *  | total_rows    | total row count|
   *
   *
   *
   * ### Example
   *
   * ```
   *  new milvusClient(MILUVS_IP).indexManager.getIndexBuildProgress({
   *     collection_name: COLLECTION_NAME,
   *  });
   * ```
   */
  async getIndexBuildProgress(
    data: GetIndexBuildProgressReq
  ): Promise<GetIndexBuildProgressResponse> {
    // Now we dont have index name, just empty is fine
    data.index_name = "";
    const promise = await promisify(this.client, "GetIndexBuildProgress", data);
    return promise;
  }

  /**
   * Drop index
   *
   * @param data
   *  | Property           | Type   |           Description              |
   *  | :----------------- | :----  | :-------------------------------:  |
   *  | collection_name    | string |       Milvus Collection name       |
   *
   *
   * @return
   *  | Property      | Description |
   *  | :-------------| :--------:  |
   *  | error_code    | Number      |
   *  | reason        | Error reason|
   *
   * ### Example
   *
   * ```
   *  new milvusClient(MILUVS_IP).indexManager.dropIndex({
   *     collection_name: COLLECTION_NAME,
   *  });
   * ```
   */
  async dropIndex(data: DropIndexReq): Promise<ResStatus> {
    const promise = await promisify(this.client, "DropIndex", data);
    return promise;
  }
}
