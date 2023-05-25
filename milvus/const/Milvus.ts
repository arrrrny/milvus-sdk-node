export const DEFAULT_MILVUS_PORT = 19530; // default milvus port
export const DEFAULT_CONNECT_TIMEOUT = 10 * 1000; // 10s
export const DEFAULT_TOPK = 100; // default topk
export const DEFAULT_METRIC_TYPE = 'L2';
export const DEFAULT_MAX_RETRIES = 3; // max retry time
export const DEFAULT_RETRY_DELAY = 30; // retry delay, 30ms
export const DEFAULT_DEBUG = false;
export const DEFAULT_PARTITIONS_NUMBER = 64;
export const MAX_PARTITION_KEY_FIELD_COUNT = 1;
export const MAX_PARTITIONS_NUMBER = 4096;
export const DEFAULT_DB = 'default';

enum ErrorCode {
  Success = 0,
  UnexpectedError = 1,
  ConnectFailed = 2,
  PermissionDenied = 3,
  CollectionNotExists = 4,
  IllegalArgument = 5,
  IllegalDimension = 7,
  IllegalIndexType = 8,
  IllegalCollectionName = 9,
  IllegalTOPK = 10,
  IllegalRowRecord = 11,
  IllegalVectorID = 12,
  IllegalSearchResult = 13,
  FileNotFound = 14,
  MetaFailed = 15,
  CacheFailed = 16,
  CannotCreateFolder = 17,
  CannotCreateFile = 18,
  CannotDeleteFolder = 19,
  CannotDeleteFile = 20,
  BuildIndexError = 21,
  IllegalNLIST = 22,
  IllegalMetricType = 23,
  OutOfMemory = 24,
  IndexNotExist = 25,
  EmptyCollection = 26,
  UpdateImportTaskFailure = 27,
  CollectionNameNotFound = 28,
  CreateCredentialFailure = 29,
  UpdateCredentialFailure = 30,
  DeleteCredentialFailure = 31,
  GetCredentialFailure = 32,
  ListCredUsersFailure = 33,
  GetUserFailure = 34,
  CreateRoleFailure = 35,
  DropRoleFailure = 36,
  OperateUserRoleFailure = 37,
  SelectRoleFailure = 38,
  SelectUserFailure = 39,
  SelectResourceFailure = 40,
  OperatePrivilegeFailure = 41,
  SelectGrantFailure = 42,
  RefreshPolicyInfoCacheFailure = 43,
  ListPolicyFailure = 44,
  NotShardLeader = 45,
  NoReplicaAvailable = 46,
  SegmentNotFound = 47,
  ForceDeny = 48,
  RateLimit = 49,
  NodeIDNotMatch = 50,

  // Service availability.
  // NA: Not Available.
  DataCoordNA = 100,

  // internal error code.
  DDRequestRace = 1000,
}

export enum ConsistencyLevelEnum {
  Strong = 0,
  Session = 1, // default in PyMilvus
  Bounded = 2,
  Eventually = 3,
  Customized = 4, // Users pass their own `guarantee_timestamp`.
}

export enum SegmentState {
  SegmentStateNone,
  NotExist,
  Growing,
  Sealed,
  Flushed = 'Flushed',
  Flushing = 'Flushing',
}

export enum CompactionState {
  UndefiedState = 0,
  Executing = 1,
  Completed = 2,
}

export enum ImportState {
  ImportPending = 'ImportPending', // Task is in pending list
  ImportFailed = 'ImportFailed', // Task is failed, use state.infos["failed_reason"] to get the failed reason
  ImportStarted = 'ImportStarted', // Task is dispatched to data node, gonna to be executed.
  ImportPersisted = 'ImportPersisted', // New segments have been generated and persisted.
  ImportCompleted = 'ImportCompleted', // If the collection index has been specified, ImportCompleted indicates the new segments have been indexed successfully. Otherwise,  the task state will be directly converted from ImportPersisted to ImportCompleted.
  ImportFailedAndCleaned = 'ImportFailedAndCleaned', // The task is failed, and the temporary data generated by this task has been cleaned.
}

export enum ObjectType {
  Collection = 0,
  Global = 1,
  User = 2,
}

export enum ObjectPrivilege {
  PrivilegeAll = 0,
  PrivilegeCreateCollection = 1,
  PrivilegeDropCollection = 2,
  PrivilegeDescribeCollection = 3,
  PrivilegeShowCollections = 4,
  PrivilegeLoad = 5,
  PrivilegeRelease = 6,
  PrivilegeCompaction = 7,
  PrivilegeInsert = 8,
  PrivilegeDelete = 9,
  PrivilegeGetStatistics = 10,
  PrivilegeCreateIndex = 11,
  PrivilegeIndexDetail = 12,
  PrivilegeDropIndex = 13,
  PrivilegeSearch = 14,
  PrivilegeFlush = 15,
  PrivilegeQuery = 16,
  PrivilegeLoadBalance = 17,
  PrivilegeImport = 18,
  PrivilegeCreateOwnership = 19,
  PrivilegeUpdateUser = 20,
  PrivilegeDropOwnership = 21,
  PrivilegeSelectOwnership = 22,
  PrivilegeManageOwnership = 23,
  PrivilegeSelectUser = 24,
}

export enum StateCode {
  Initializing = 0,
  Healthy = 1,
  Abnormal = 2,
  StandBy = 3,
}

export enum MetricType {
  // L2 euclidean distance
  L2 = 'L2',
  // IP inner product
  IP = 'IP',
  // support cosine 2.3
  // COSINE = 'COSINE',
  // HAMMING hamming distance
  HAMMING = 'HAMMING',
  // JACCARD jaccard distance
  JACCARD = 'JACCARD',
  // TANIMOTO tanimoto distance
  TANIMOTO = 'TANIMOTO',
  // SUBSTRUCTURE substructure distance
  SUBSTRUCTURE = 'SUBSTRUCTURE',
  // SUPERSTRUCTURE superstructure
  SUPERSTRUCTURE = 'SUPERSTRUCTURE',
}

export enum IndexType {
  FLAT = 'FLAT',
  IVF_FLAT = 'IVF_FLAT',
  IVF_SQ8 = 'IVF_SQ8',
  IVF_PQ = 'IVF_PQ',
  HNSW = 'HNSW',
  ANNOY = 'ANNOY',
  BIN_FLAT = 'BIN_FLAT',
  BIN_IVF_FLAT = 'BIN_IVF_FLAT',
  DISKANN = 'DISKANN',
  AUTOINDEX = 'AUTOINDEX',
  // GPU_IVF_FLAT = 'GPU_IVF_FLAT', // 2.3
  // GPU_IVF_PQ = 'GPU_IVF_PQ' // 2.3
}

export enum MsgType {
  Undefined = 0,
  /* DEFINITION REQUESTS: COLLECTION */
  CreateCollection = 100,
  DropCollection = 101,
  HasCollection = 102,
  DescribeCollection = 103,
  ShowCollections = 104,
  GetSystemConfigs = 105,
  LoadCollection = 106,
  ReleaseCollection = 107,
  CreateAlias = 108,
  DropAlias = 109,
  AlterAlias = 110,
  AlterCollection = 111,

  /* DEFINITION REQUESTS: PARTITION */
  CreatePartition = 200,
  DropPartition = 201,
  HasPartition = 202,
  DescribePartition = 203,
  ShowPartitions = 204,
  LoadPartitions = 205,
  ReleasePartitions = 206,

  /* DEFINE REQUESTS: SEGMENT */
  ShowSegments = 250,
  DescribeSegment = 251,
  LoadSegments = 252,
  ReleaseSegments = 253,
  HandoffSegments = 254,
  LoadBalanceSegments = 255,
  DescribeSegments = 256,

  /* DEFINITION REQUESTS: INDEX */
  CreateIndex = 300,
  DescribeIndex = 301,
  DropIndex = 302,

  /* MANIPULATION REQUESTS */
  Insert = 400,
  Delete = 401,
  Flush = 402,
  ResendSegmentStats = 403,

  /* QUERY */
  Search = 500,
  SearchResult = 501,
  GetIndexState = 502,
  GetIndexBuildProgress = 503,
  GetCollectionStatistics = 504,
  GetPartitionStatistics = 505,
  Retrieve = 506,
  RetrieveResult = 507,
  WatchDmChannels = 508,
  RemoveDmChannels = 509,
  WatchQueryChannels = 510,
  RemoveQueryChannels = 511,
  SealedSegmentsChangeInfo = 512,
  WatchDeltaChannels = 513,
  GetShardLeaders = 514,
  GetReplicas = 515,
  UnsubDmChannel = 516,
  GetDistribution = 517,
  SyncDistribution = 518,

  /* DATA SERVICE */
  SegmentInfo = 600,
  SystemInfo = 601,
  GetRecoveryInfo = 602,
  GetSegmentState = 603,

  /* SYSTEM CONTROL */
  TimeTick = 1200,
  QueryNodeStats = 1201, // GOOSE TODO: Remove kQueryNodeStats
  LoadIndex = 1202,
  RequestID = 1203,
  RequestTSO = 1204,
  AllocateSegment = 1205,
  SegmentStatistics = 1206,
  SegmentFlushDone = 1207,

  DataNodeTt = 1208,

  /* Credential */
  CreateCredential = 1500,
  GetCredential = 1501,
  DeleteCredential = 1502,
  UpdateCredential = 1503,
  ListCredUsernames = 1504,

  /* RBAC */
  CreateRole = 1600,
  DropRole = 1601,
  OperateUserRole = 1602,
  SelectRole = 1603,
  SelectUser = 1604,
  SelectResource = 1605,
  OperatePrivilege = 1606,
  SelectGrant = 1607,
  RefreshPolicyInfoCache = 1608,
  ListPolicy = 1609,
}

/**
 * @brief Field data type
 */
export enum DataType {
  None = 0,
  Bool = 1,
  Int8 = 2,
  Int16 = 3,
  Int32 = 4,
  Int64 = 5,

  Float = 10,
  Double = 11,

  String = 20,
  VarChar = 21, // variable-length strings with a specified maximum length
  JSON = 23,

  BinaryVector = 100,
  FloatVector = 101,
}

export const DataTypeMap: { [key in keyof typeof DataType]: number } = {
  None: 0,
  Bool: 1,
  Int8: 2,
  Int16: 3,
  Int32: 4,
  Int64: 5,
  Float: 10,
  Double: 11,
  String: 20,
  VarChar: 21,
  JSON: 23,
  BinaryVector: 100,
  FloatVector: 101,
};

export enum OperateUserRoleType {
  AddUserToRole = 0,
  RemoveUserFromRole = 1,
}

export enum OperatePrivilegeType {
  Grant = 0,
  Revoke = 1,
}

export enum Roles {
  ADMIN = 'admin',
  PUBLIC = 'public',
}

export enum RbacObjects {
  Collection = 'Collection',
  Global = 'Global',
  User = 'User',
}

export enum CollectionPrivileges {
  CreateIndex = 'CreateIndex',
  DropIndex = 'DropIndex',
  IndexDetail = 'IndexDetail',
  Load = 'Load',
  Release = 'Release',
  Insert = 'Insert',
  Delete = 'Delete',
  Search = 'Search',
  Flush = 'Flush',
  Query = 'Query',
  GetStatistics = 'GetStatistics',
  Compaction = 'Compaction',
  Alias = 'Alias',
  Import = 'Import',
  LoadBalance = 'LoadBalance',
}

export enum GlobalPrivileges {
  All = '*',
  CreateCollection = 'CreateCollection',
  DropCollection = 'DropCollection',
  DescribeCollection = 'DescribeCollection',
  ShowCollections = 'ShowCollections',
  CreateOwnership = 'CreateOwnership',
  DropOwnership = 'DropOwnership',
  SelectOwnership = 'SelectOwnership',
  ManageOwnership = 'ManageOwnership',
}

export enum UserPrivileges {
  UpdateUser = 'UpdateUser',
  SelectUser = 'SelectUser',
}

export const Privileges = {
  ...CollectionPrivileges,
  ...UserPrivileges,
  ...GlobalPrivileges,
};

export const DEFAULT_RESOURCE_GROUP = '__default_resource_group';

export enum LoadState {
  LoadStateNotExist = 'LoadStateNotExist',
  LoadStateNotLoad = 'LoadStateNotLoad',
  LoadStateLoading = 'LoadStateLoading',
  LoadStateLoaded = 'LoadStateLoaded',
}
