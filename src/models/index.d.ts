export interface AggregateEnterpriseEvent {
  id: number;
  eventTime: string; // date-time
  event: "EDGE_HEARTBEAT" | "GATEWAY_HEARTBEAT" | "USER_LOGIN" | "EDGE_ACTIVATION" | "GATEWAY_ACTIVATION" | "EDGE_FLOW_STATS" | "EDGE_PATHLINK_STATS" | "EDGE_PROVISION" | "CREATE_USER" | "CREATE_PROFILE" | "SOFTWARE_UPLOAD" | "OPERATOR_LOGIN" | "CREATE_SYSTEM_PROPERTY" | "UPDATE_SYSTEM_PROPERTY" | "DELETE_SYSTEM_PROPERTY" | "CREATE_ENTERPRISE" | "DELETE_ENTERPRISE" | "GATEWAY_PROVISION" | "DELETE_GATEWAY" | "EDGE_NEW_DEVICE" | "EDGE_NEW_USER" | "DISABLE_GATEWAY" | "ENABLE_GATEWAY" | "DEACTIVATE_GATEWAY" | "ACTIVATION_EMAIL" | "DELETE_PROFILE" | "SOFTWARE_PKG_DELETE" | "EDGE_REACTIVATION_REQ" | "EDGE_CANCEL_REACTIVATION_REQ" | "VPN_DATACENTER_STATUS" | "EDGE_RADIO_SETTINGS" | "VPN_ENABLE" | "VPN_DISABLE" | "VPN_UPDATE" | "USER_LOCKOUT" | "FIREWALL_ENABLE" | "FIREWALL_DISABLE" | "CREATE_ENTERPRISE_NETWORK_SERVICE" | "EDIT_ENTERPRISE_NETWORK_SERVICE" | "DELETE_ENTERPRISE_NETWORK_SERVICE" | "CREATE_ENTERPRISE_NETWORK" | "EDIT_ENTERPRISE_NETWORK" | "DELETE_ENTERPRISE_NETWORK" | "EDIT_PROFILE" | "SUPPORT_EMAIL" | "META_DATA_UPLOAD" | "META_DATA_DELETE" | "HA_STANDBY_ACTIVATED" | "HA_READY" | "HA_FAILED" | "HA_GOING_ACTIVE" | "HA_TERMINATED" | "EDGE_DOWN" | "EDGE_UP" | "GATEWAY_DOWN" | "CREATE_ENTERPRISE_PROXY" | "DELETE_ENTERPRISE_PROXY" | "DIAGNOSTIC_CLEANUP" | "GATEWAY_ACTIVATION_FAILURE" | "EDGE_ACTIVATION_FAILURE" | "DELETE_EDGE" | "PASSWORD_RESET" | "CRL_GENERATION" | "EDGE_CERTIFICATE_GENERATION" | "GATEWAY_CERTIFICATE_GENERATION" | "EDGE_DEACTIVATION" | "CLEAR_EDGE_HISTORY" | "PATCH_APPLICATION_SUCCESS" | "PATCH_APPLICATION_FAILURE" | "OPERATOR_LOGIN_FAILURE" | "USER_LOGIN_FAILURE" | "REMOTE_ACTION" | "CLONE_APPLICATION_MAP" | "UPDATE_APPLICATION_MAP" | "ROUTE_UPDATE" | "ROUTE_DELETE" | "HA_ACTIVATION_FAILURE" | "DR_CONFIGURATION_STARTED" | "DR_CONFIGURATION_SUCCESS" | "DR_CONFIGURATION_FAILURE" | "DR_CONFIGURATION_ABORTED" | "STORE_FLOW_STATS" | "ENTERPRISE_ENABLE_OPERATOR_USER_MGMT" | "ENTERPRISE_DISABLE_OPERATOR_USER_MGMT" | "ENTERPRISE_ENABLE_OPERATOR_ACCESS" | "ENTERPRISE_DISABLE_OPERATOR_ACCESS" | "ENTERPRISE_ENABLE_PROXY_ACCESS" | "ENTERPRISE_DISABLE_PROXY_ACCESS" | "PROXY_ENABLE_OPERATOR_ACCESS" | "PROXY_DISABLE_OPERATOR_ACCESS" | "EDGE_BGP_NEIGHBOR_UP" | "EDGE_BGP_NEIGHBOR_DOWN" | "GATEWAY_BGP_NEIGHBOR_UP" | "GATEWAY_BGP_NEIGHBOR_DOWN" | "CREATE_NETWORK_SEGMENT" | "UPDATE_NETWORK_SEGMENT" | "DELETE_NETWORK_SEGMENT" | "ADD_PROFILE_NETWORK_SEGMENT" | "REMOVE_PROFILE_NETWORK_SEGMENT" | "EDGE_TO_EDGE_VPN_ENABLE" | "EDGE_TO_EDGE_VPN_DISABLE" | "FIREWALL_LOG_ENABLE" | "FIREWALL_LOG_DISABLE" | "ADD_EDGE_NETWORK_SEGMENT" | "REMOVE_EDGE_NETWORK_SEGMENT" | "ENTERPRISE_SET_TEMPLATE_PROFILE" | "INVENTORY_EDGE_UNASSIGNED" | "INVENTORY_EDGE_IN_STAGING" | "INVENTORY_EDGE_STATE_CHANGE" | "DELETE_USER" | "CREATE_OPERATOR_USER" | "DELETE_OPERATOR_USER" | "EDGE_UPDATE_ATTRIBUTES" | "CREATE_PRIVATE_NETWORK" | "UPDATE_PRIVATE_NETWORK" | "DELETE_PRIVATE_NETWORK" | "CLOUD_SECURITY_ENABLE" | "CLOUD_SECURITY_DISABLE" | "CLOUD_SECURITY_ERROR" | "EDGE_NVS_TUNNEL_UP" | "EDGE_NVS_TUNNEL_DOWN" | "EXTERNAL_API_CALL" | "VRRP_INTO_MASTER_STATE" | "VRRP_OUT_OF_MASTER_STATE" | "VRRP_FAIL_INFO" | "VNF_VM_DEPLOY" | "VNF_VM_DELETE" | "VNF_VM_ERROR" | "VNF_VM_EVENT" | "VNF_INSERTION_ENABLED" | "VNF_INSERTION_DISABLED" | "EDGE_MULTICAST_ROUTES" | "EDGE_NEW_CONFIGURATION_ASSIGNED";
  category: "SYSTEM" | "NETWORK" | "APPLICATION" | "USER" | "SECURITY" | "EDGE" | "GATEWAY" | "CONFIGURATION" | "ENTERPRISE";
  severity: "EMERGENCY" | "ALERT" | "CRITICAL" | "ERROR" | "WARNING" | "NOTICE" | "INFO" | "DEBUG";
  message: string;
  enterpriseId: number;
  enterpriseName: string;
  enterpriseUsername: string;
  edgeName: string;
  detail: string;
}
export interface Application {
  class: number;
  description: string;
  displayName: string;
  id: number;
  knownIpPortMapping: IpPortMapping;
  protocolPortMapping: ProtocolPortMapping;
}
export interface ApplicationMetadata {
  blobId: number;
  created: string; // date-time
  description: string;
  fileName: string;
  id: number;
  logicalId: string;
  manifest: ApplicationMetadataManifest;
  modified: string; // date-time
  name: string;
  networkId: number;
  type: string;
  uploadDetails: ApplicationMetadataUploadDetails;
  version: string;
}
export interface ApplicationMetadataManifest {
  description: string;
  name: string;
  version: string;
}
export interface ApplicationMetadataUploadDetails {
  [name: string]: any;
  size: number;
}
export interface AuthObject {
  email?: string;
  password: string;
  password2?: string; // password
  username: string;
}
export interface BaseEnterpriseUser {
  id?: number;
  created?: string; // date-time
  userType?: string;
  username?: string;
  domain?: string;
  password?: string; // password
  firstName?: string;
  lastName?: string;
  officePhone?: string;
  mobilePhone?: string;
  isNative?: boolean;
  isActive?: boolean;
  isLocked?: boolean;
  email?: string;
  lastLogin?: string; // date-time
  modified?: string; // date-time
}
export interface BaseOperatorUser {
  id?: number;
  created?: string; // date-time
  operatorId?: number;
  userType?: string;
  username?: string;
  domain?: string;
  password?: string; // password
  firstName?: string;
  lastName?: string;
  officePhone?: string;
  mobilePhone?: string;
  isNative?: boolean;
  isActive?: boolean;
  isLocked?: boolean;
  email?: string;
  lastLogin?: string; // date-time
  modified?: string; // date-time
}
export type BasicMetric = "packetsRx" | "packetsTx" | "totalPackets" | "bytesRx" | "bytesTx" | "totalBytes";
export type BasicMetrics = BasicMetric[];
export interface BgpFilterRule {
  action?: {
    type?: string;
    values?: {
      type?: string;
      value?: string;
    }[];
  };
  match?: {
    exactMatch?: boolean;
    type?: string;
    value?: string;
  };
}
export interface BgpPeerStatus {
  neighborIp?: string;
  neighborAS?: number;
  records?: BgpPeerStatusRecord[];
}
export interface BgpPeerStatusRecord {
  timestamp?: string; // date-time
  state?: "IDLE" | "CONNECT" | "ACTIVE" | "OPENSENT" | "OPENCONFIRM" | "ESTABLISHED" | "CLEARING" | "IDLEADMIN" | "IDLEPRFXCT";
  msgRcvd?: number;
  pfxRcvd?: number;
  msgSent?: number;
  upDownTime?: number;
}
export interface ClientDevice {
  id: number;
  created: string; // date-time
  enterpriseId: number;
  macAddress: string;
  hostName: string;
  ipAddress: string;
  os: number;
  osName: string;
  osVersion: string;
  deviceType: string;
  deviceModel: string;
  lastContact: string; // date-time
  modified: string; // date-time
}
export interface ConfigEdgeBgpFilterSet {
  ids?: string[];
}
export interface ConfigEdgeBgpNeighbor {
  neighborAS?: string;
  neighborIp?: string;
  neighborTag?: "UPLINK";
  inboundFilter?: ConfigEdgeBgpFilterSet;
  outboundFilter?: ConfigEdgeBgpFilterSet;
  allowAS?: boolean;
  connect?: string;
  defaultRoute?: boolean;
  holdtime?: string;
  keepalive?: string;
}
export interface ConfigurationCloneAndConvertConfigurationResult {
  /**
   * The ID of the newly cloned configuration
   */
  id: number;
}
export interface ConfigurationCloneConfigurationResult {
  /**
   * The ID of the newly cloned configuration
   */
  id: number;
}
export interface ConfigurationCloneEnterpriseTemplateResult {
  /**
   * The ID of the newly cloned configuration
   */
  id: number;
}
/**
 * example:
 * [object Object]
 */
export interface ConfigurationDeleteConfigurationResult {
  /**
   * The id of the deleted object.
   */
  id?: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface ConfigurationEnterprise {
  id?: number;
  created?: string; // date-time
  networkId?: number;
  gatewayPoolId?: number;
  alertsEnabled?: boolean;
  operatorAlertsEnabled?: boolean;
  endpointPkiMode?: "CERTIFICATE_DISABLED" | "CERTIFICATE_OPTIONAL" | "CERTIFICATE_REQUIRED";
  name?: string;
  domain?: string;
  prefix?: string;
  logicalId?: string;
  accountNumber?: string;
  description?: string;
  contactName?: string;
  contactPhone?: string;
  contactMobile?: string;
  contactEmail?: string;
  streetAddress?: string;
  streetAddress2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  lat?: number;
  lon?: number;
  timezone?: string;
  locale?: string;
  modified?: string; // date-time
  configurationAssociationId?: number;
}
export interface ConfigurationGetConfigurationModulesResultItem {
  id: number;
  name: "imageUpdate" | "controlPlane" | "managementPlane" | "firewall" | "QOS" | "deviceSettings" | "WAN" | "metaData" | "properties";
  type: "ENTERPRISE" | "OPERATOR" | "GATEWAY";
  description: string;
  configurationId: number;
  data: {
  };
  refs: {
  };
}
export interface ConfigurationGetConfigurationResult {
  created: string;
  description: string;
  edgeCount?: number;
  effective: string;
  id: number;
  modified: string;
  modules?: ConfigurationModule[];
  name: string;
  version: string;
}
export interface ConfigurationGetRoutableApplicationsResult {
  /**
   * Maps application class IDs (strings) to application IDs (integers)
   */
  applicationClassToApplication: {
    [name: string]: number;
  };
  /**
   * Maps application IDs (strings) to class IDs (integers)
   */
  applicationToApplicationClass: {
    [name: string]: number;
  };
  applications: Application[];
  metaData: ApplicationMetadata;
}
export interface ConfigurationInsertConfigurationModuleResult {
  /**
   * The ID of the newly created configuration module
   */
  id: number;
}
export interface ConfigurationModule {
  id?: number;
  name: "imageUpdate" | "controlPlane" | "managementPlane" | "firewall" | "QOS" | "deviceSettings" | "WAN" | "metaData" | "properties";
  type?: "ENTERPRISE" | "OPERATOR" | "GATEWAY";
  description?: string;
  configurationId?: number;
  data?: {
  };
  refs?: {
  };
}
export type ConfigurationOptionsList = ("modules" | "edgeCount" | "enterprises" | "enterpriseCount" | "counts")[];
/**
 * example:
 * [object Object]
 */
export interface ConfigurationUpdateConfigurationModuleResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface ControlPlane {
  id?: number;
  name: "imageUpdate" | "controlPlane" | "managementPlane" | "firewall" | "QOS" | "deviceSettings" | "WAN" | "metaData" | "properties";
  type?: "ENTERPRISE" | "OPERATOR" | "GATEWAY";
  description?: string;
  configurationId?: number;
  data: ControlPlaneData;
  refs?: {
  };
}
export interface ControlPlaneData {
  gatewaySelection?: {
    mode?: string;
    primary?: string;
    primaryDetail?: {
      ipAddress?: string;
      logicalId?: string;
      name?: string;
    };
    secondary?: string;
    secondaryDetail?: {
      ipAddress?: string;
      logicalId?: string;
      name?: string;
    };
    super?: string;
    superDetail?: {
      ipAddress?: string;
      logicalId?: string;
      name?: string;
    };
  };
  vpn?: {
    dataCenterEdges?: {
      logicalId?: string;
      name?: string;
    }[];
    edgeToDataCenter?: boolean;
    edgeToEdge?: boolean;
    edgeToEdgeDetail?: {
      dynamic?: {
        enabled?: boolean;
        timeout?: number;
        type?: string;
      };
      encryptionProtocol?: string;
      profileIsolation?: {
        enabled?: boolean;
        isolateDynamic?: boolean;
      };
      useCloudGateway?: boolean;
      vpnHubs?: {
      }[];
      autoSelectVpnHubs?: boolean;
    };
    edgeToEdgeList?: {
      isolateDynamic?: number;
      logicalId?: string;
      name?: string;
      profileLogicalId?: string;
    }[];
  };
  ipsecGatewayDetail?: {
    [name: string]: {
      strictHostCheck?: boolean;
      strictHostCheckDN?: string;
    };
  };
}
export interface CosMapping {
  high?: CosMappingValue;
  normal?: CosMappingValue;
  low?: CosMappingValue;
}
export interface CosMappingValue {
  value?: number;
  ratelimit?: boolean;
}
/**
 * example:
 * [object Object]
 */
export interface DeletionConfirmation {
  /**
   * The id of the deleted object.
   */
  id?: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface Destinations {
  ip_addr?: string;
  name?: string;
}
export interface DeviceSettings {
  id?: number;
  name: "imageUpdate" | "controlPlane" | "managementPlane" | "firewall" | "QOS" | "deviceSettings" | "WAN" | "metaData" | "properties";
  type?: "ENTERPRISE" | "OPERATOR" | "GATEWAY";
  description?: string;
  configurationId?: number;
  data: DeviceSettingsData;
  refs?: DeviceSettingsRefs;
}
export interface DeviceSettingsData {
  lan?: {
    allocation?: {
      ref?: string;
      assignableVlans?: number[];
      managementVlans?: number[];
    };
  };
  ospf?: {
    enabled?: boolean;
    areas?: {
      id?: number;
      name?: string;
      type?: string;
    }[];
  };
  bgp?: {
    enabled?: boolean;
    asn?: string;
    neighbors?: {
    }[];
  };
  dns?: {
    primaryProvider?: {
      ref?: string;
    };
    backupProvider?: {
      ref?: string;
    };
    privateProviders?: {
      ref?: string;
    };
  };
  authentication?: {
    ref?: string;
  };
  softwareUpdate?: {
    windowed?: boolean;
    window?: {
      day?: number;
      beginHour?: number;
      endHour?: number;
    };
  };
  radioSettings?: {
    country?: string;
    radios?: {
      radioId?: number;
      isEnabled?: boolean;
      name?: string;
      band?: string;
      channel?: string;
      width?: string;
      mode?: string;
    }[];
  };
  netflow?: {
    enabled?: boolean;
    version?: number;
    collectors?: {
      address?: string;
      port?: number;
    }[];
  };
  vqm?: {
    enabled?: boolean;
    protocol?: string;
    collectors?: {
      address?: string;
      port?: number;
    }[];
  };
  snmp?: {
    port?: number;
    snmpv2c?: {
      enabled?: boolean;
      community?: string;
      allowedIp?: string[];
    };
    snmpv3?: {
      enabled?: boolean;
      users?: {
        name?: string;
        passphrase?: string;
        authAlg?: string;
        privacy?: boolean;
        encrAlg?: string;
      }[];
    };
  };
  multiSourceQos?: {
    enabled?: boolean;
    highRatio?: number;
    normalRatio?: number;
    lowRatio?: number;
    maxCapThreshold?: number;
    minCapThreshold?: number;
  };
  models?: {
    virtual?: {
      routedInterfaces?: {
        name?: string;
        disabled?: boolean;
        addressing?: {
          type?: string;
          cidrPrefix?: number;
          cidrIp?: string;
          netmask?: string;
          gateway?: string;
        };
        wanOverlay?: string;
        natDirect?: boolean;
        ospf?: {
          enabled?: boolean;
          area?: number;
          authentication?: boolean;
          authId?: number;
          authPassphrase?: string;
          helloTimer?: number;
          deadTimer?: number;
          md5Authentication?: boolean;
          cost?: number;
          MTU?: number;
          passive?: boolean;
          inboundRouteLearning?: {
            defaultAction?: string;
            filters?: {
            }[];
          };
          outboundRouteAdvertisement?: {
            defaultAction?: string;
            filters?: {
            }[];
          };
        };
        vlanId?: number;
        l2?: {
          autonegotiation?: boolean;
          speed?: string;
          duplex?: string;
          MTU?: number;
        };
        underlayAccounting?: boolean;
        trusted?: boolean;
        rpf?: "SPECIFIC" | "LOOSE" | "DISABLED";
      }[];
      lan?: {
        interfaces?: {
          space?: string;
          name?: string;
          type?: string;
          cwp?: boolean;
          portMode?: string;
          untaggedVlan?: string;
          disabled?: boolean;
          l2?: {
            autonegotiation?: boolean;
            speed?: string;
            duplex?: string;
            MTU?: number;
          };
          vlanIds?: number[];
        }[];
      };
    };
  };
  vpn?: {
    enabled?: boolean;
    edgeToDataCenter?: boolean;
    ref?: string;
    edgeToEdgeHub?: {
      enabled?: boolean;
      ref?: string;
    };
    edgeToEdge?: boolean;
    edgeToEdgeDetail?: {
      useCloudGateway?: boolean;
      encryptionProtocol?: string;
      dynamic?: {
        enabled?: boolean;
        type?: string;
        timeout?: number;
      };
      vpnHubs?: {
      }[];
      autoSelectVpnHubs?: boolean;
    };
  };
}
export interface DeviceSettingsRefs {
  "deviceSettings:segment"?: Segment;
  "deviceSettings:dns:primaryProvider"?: Dns;
  "deviceSettings:dns:backupProvider"?: Dns;
  "deviceSettings:dns:privateProviders"?: Dns[];
  "deviceSettings:lan:allocation"?: EnterpriseServiceNetwork;
}
export interface DisasterRecoveryClientContact {
  activeAddress: string;
  activeLastResponseTime: string; // date-time
  clientLogicalId: string;
  clientType: "EDGE" | "GATEWAY";
  id: number;
  modified: string; // date-time
  standbyAddress: string;
  standbyLastResponseTime: string; // date-time
}
/**
 * example:
 * [object Object]
 */
export interface DisasterRecoveryConfigureActiveForReplicationResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
/**
 * example:
 * [object Object]
 */
export interface DisasterRecoveryDemoteActiveResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface DisasterRecoveryGetReplicationBlob {
}
export interface DisasterRecoveryGetReplicationBlobResult {
  activeAccessFromStandby: string;
}
export interface DisasterRecoveryGetReplicationStatusResult {
  activeAddress: string;
  activeReplicationAddress?: string;
  clientContact?: DisasterRecoveryClientContact[];
  clientCount?: {
    edgeCount?: number;
    gatewayCount?: number;
    currentActiveEdgeCount?: number;
    currentStandbyEdgeCount?: number;
    currentActiveGatewayCount?: number;
    currentStandbyGatewayCount?: number;
  };
  drState: "UNCONFIGURED" | "ACTIVE_CONFIGURING" | "ACTIVE_CONFIGURED" | "LAUNCHING_STANDBY" | "LAUNCHED_STANDBY" | "ACTIVE_WAIT_STANDBY" | "PENDING_STANDBY_CANDIDATE" | "STANDBY_CANDIDATE" | "STANDBY_CONFIG_RQST" | "STANDBY_CONFIGURING" | "STANDBY_CONFIGURED" | "PENDING_STANDBY_UNCONFIG" | "STANDBY_UNCONFIG" | "PENDING_STANDBY_PROMOTION" | "STANDBY_PROMOTED" | "PENDING_ACTIVE_DEMOTION" | "COPYING_DB" | "COPY_DB_DONE" | "COPYING_FILES" | "COPY_FILES_DONE" | "SYNC_CONFIGURING" | "STANDBY_SYNC" | "STANDBY_BACKGROUND_IMPORT" | "STANDBY_RUNNING" | "UPGRADING" | "FAILURE_ACTIVE_CONFIGURING" | "FAILURE_LAUNCHING_STANDBY" | "FAILURE_STANDBY_CONFIGURING" | "FAILURE_GET_STANDBY_CONFIG" | "FAILURE_COPYING_DB" | "FAILURE_COPYING_FILES" | "FAILURE_SYNC_CONFIGURING" | "FAILURE_BACKGROUND_IMPORT" | "FAILURE_SYNCING_FILES" | "FAILURE_GET_STANDBY_STATUS" | "FAILURE_GET_ACTIVE_STATUS" | "FAILURE_MYSQL_ACTIVE_STATUS" | "FAILURE_MYSQL_STANDBY_STATUS" | "FAILURE_STANDBY_CANDIDATE" | "FAILURE_STANDBY_UNCONFIG" | "FAILURE_STANDBY_PROMOTION" | "FAILURE_ACTIVE_DEMOTION";
  drVCOUser: string;
  failureDescription: string;
  lastDrProtectedTime?: string; // date-time
  role: "STANDALONE" | "ACTIVE" | "STANDBY" | "ZOMBIE";
  roleTimestamp: string; // date-time
  standbyList: {
    standbyAddress?: string;
    standbyReplicationAddress?: string;
    standbyUuid?: string;
  }[];
  stateHistory?: {
    from?: "UNCONFIGURED" | "ACTIVE_CONFIGURING" | "ACTIVE_CONFIGURED" | "LAUNCHING_STANDBY" | "LAUNCHED_STANDBY" | "ACTIVE_WAIT_STANDBY" | "PENDING_STANDBY_CANDIDATE" | "STANDBY_CANDIDATE" | "STANDBY_CONFIG_RQST" | "STANDBY_CONFIGURING" | "STANDBY_CONFIGURED" | "PENDING_STANDBY_UNCONFIG" | "STANDBY_UNCONFIG" | "PENDING_STANDBY_PROMOTION" | "STANDBY_PROMOTED" | "PENDING_ACTIVE_DEMOTION" | "COPYING_DB" | "COPY_DB_DONE" | "COPYING_FILES" | "COPY_FILES_DONE" | "SYNC_CONFIGURING" | "STANDBY_SYNC" | "STANDBY_BACKGROUND_IMPORT" | "STANDBY_RUNNING" | "UPGRADING" | "FAILURE_ACTIVE_CONFIGURING" | "FAILURE_LAUNCHING_STANDBY" | "FAILURE_STANDBY_CONFIGURING" | "FAILURE_GET_STANDBY_CONFIG" | "FAILURE_COPYING_DB" | "FAILURE_COPYING_FILES" | "FAILURE_SYNC_CONFIGURING" | "FAILURE_BACKGROUND_IMPORT" | "FAILURE_SYNCING_FILES" | "FAILURE_GET_STANDBY_STATUS" | "FAILURE_GET_ACTIVE_STATUS" | "FAILURE_MYSQL_ACTIVE_STATUS" | "FAILURE_MYSQL_STANDBY_STATUS" | "FAILURE_STANDBY_CANDIDATE" | "FAILURE_STANDBY_UNCONFIG" | "FAILURE_STANDBY_PROMOTION" | "FAILURE_ACTIVE_DEMOTION";
    to?: "UNCONFIGURED" | "ACTIVE_CONFIGURING" | "ACTIVE_CONFIGURED" | "LAUNCHING_STANDBY" | "LAUNCHED_STANDBY" | "ACTIVE_WAIT_STANDBY" | "PENDING_STANDBY_CANDIDATE" | "STANDBY_CANDIDATE" | "STANDBY_CONFIG_RQST" | "STANDBY_CONFIGURING" | "STANDBY_CONFIGURED" | "PENDING_STANDBY_UNCONFIG" | "STANDBY_UNCONFIG" | "PENDING_STANDBY_PROMOTION" | "STANDBY_PROMOTED" | "PENDING_ACTIVE_DEMOTION" | "COPYING_DB" | "COPY_DB_DONE" | "COPYING_FILES" | "COPY_FILES_DONE" | "SYNC_CONFIGURING" | "STANDBY_SYNC" | "STANDBY_BACKGROUND_IMPORT" | "STANDBY_RUNNING" | "UPGRADING" | "FAILURE_ACTIVE_CONFIGURING" | "FAILURE_LAUNCHING_STANDBY" | "FAILURE_STANDBY_CONFIGURING" | "FAILURE_GET_STANDBY_CONFIG" | "FAILURE_COPYING_DB" | "FAILURE_COPYING_FILES" | "FAILURE_SYNC_CONFIGURING" | "FAILURE_BACKGROUND_IMPORT" | "FAILURE_SYNCING_FILES" | "FAILURE_GET_STANDBY_STATUS" | "FAILURE_GET_ACTIVE_STATUS" | "FAILURE_MYSQL_ACTIVE_STATUS" | "FAILURE_MYSQL_STANDBY_STATUS" | "FAILURE_STANDBY_CANDIDATE" | "FAILURE_STANDBY_UNCONFIG" | "FAILURE_STANDBY_PROMOTION" | "FAILURE_ACTIVE_DEMOTION";
    timestamp?: string; // date-time
  }[];
  stateTimestamp?: string; // date-time
  vcoIp: string;
  vcoReplicationIp?: string;
  vcoUuid: string;
}
export interface DisasterRecoveryPrepareForStandby {
}
/**
 * example:
 * [object Object]
 */
export interface DisasterRecoveryPrepareForStandbyResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
/**
 * example:
 * [object Object]
 */
export interface DisasterRecoveryPromoteStandbyToActiveResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface DisasterRecoveryRemoveStandby {
}
/**
 * example:
 * [object Object]
 */
export interface DisasterRecoveryRemoveStandbyResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
/**
 * example:
 * [object Object]
 */
export interface DisasterRecoveryTransitionToStandbyResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface Dns {
  id?: number;
  enterpriseObjectId?: number;
  configurationId?: number;
  moduleId?: number;
  ref?: string;
  data?: DnsData;
  version?: string;
  object?: string;
  name?: string;
  type: string;
  logicalId?: string;
}
export interface DnsData {
  primary?: string;
  secondary?: string;
  isPrivate?: boolean;
  domains?: {
    rule?: string;
    description?: string;
  }[];
}
/**
 * example:
 * [object Object]
 */
export interface EdgeDeleteEdgeBgpNeighborRecordsResult {
  /**
   * The id of the deleted object.
   */
  id?: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
/**
 * example:
 * [object Object]
 */
export interface EdgeDeleteEdgeResultItem {
  /**
   * The id of the deleted object.
   */
  id?: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface EdgeDeviceSettings {
  id?: number;
  name: "imageUpdate" | "controlPlane" | "managementPlane" | "firewall" | "QOS" | "deviceSettings" | "WAN" | "metaData" | "properties";
  type?: "ENTERPRISE" | "OPERATOR" | "GATEWAY";
  description?: string;
  configurationId?: number;
  data?: EdgeDeviceSettingsData;
  refs?: DeviceSettingsRefs;
}
export interface EdgeDeviceSettingsData {
  bgp?: {
    ASN?: string;
    connectedRoutes?: boolean;
    disableASPathCarryOver?: boolean;
    enabled?: boolean;
    filters?: {
      id?: string;
      name?: string;
      rules?: BgpFilterRule[];
    }[];
    holdtime?: string;
    keepalive?: string;
    neighbors?: ConfigEdgeBgpNeighbor[];
    networks?: {
      cidrIp?: string;
      cidrPrefix?: number;
    }[];
    overlayPrefix?: boolean;
    propagateUplink?: boolean;
    routerId?: string;
    uplinkCommunity?: number;
  };
  lan?: {
    networks?: {
      space?: string;
      guest?: boolean;
      secure?: boolean;
      advertise?: boolean;
      cost?: number;
      dhcp?: {
        enabled?: boolean;
        leaseTimeSeconds?: number;
        override?: boolean;
        dhcpRelay?: {
          servers?: string[];
        };
      };
      staticReserved?: number;
      netmask?: string;
      cidrPrefix?: number;
      cidrIp?: string;
      baseDhcpAddr?: number;
      numDhcpAddr?: number;
      name?: string;
      interfaces?: string[];
      vlanId?: number;
      managementIp?: string;
      disabled?: boolean;
    }[];
  };
  routedInterfaces?: {
    addressing?: {
      type?: "DHCP" | "STATIC" | "PPPOE";
      cidrPrefix?: number;
      cidrIp?: string;
      netmask?: string;
      gateway?: string;
      username?: string;
      password?: string;
    };
    advertise?: boolean;
    disabled?: boolean;
    dhcpServer?: EdgeDeviceSettingsDataDhcpServer;
    encryptOverlay?: boolean;
    l2?: {
      autonegotiation?: boolean;
      speed?: string;
      duplex?: string;
      MTU?: number;
    };
    name?: string;
    natDirect?: boolean;
    ospf?: {
      area?: number;
      authentication?: boolean;
      authId?: number;
      authPassphrase?: string;
      cost?: number;
      deadTimer?: number;
      enabled?: boolean;
      helloTimer?: number;
      inboundRouteLearning?: {
        defaultAction?: string;
        filters?: {
        }[];
      };
      md5Authentication?: boolean;
      MTU?: number;
      outboundRouteAdvertisement?: {
        defaultAction?: string;
        filters?: {
        }[];
      };
      passive?: boolean;
      vlanId?: number;
    };
    override?: boolean;
    subinterfaces?: {
      addressing?: {
        cidrIp?: string;
        cidrPrefix?: number;
        gateway?: string;
        netmask?: string;
        type?: "DHCP" | "STATIC" | "PPPOE";
        username?: string;
        password?: string;
      };
      advertise?: boolean;
      dhcpServer?: EdgeDeviceSettingsDataDhcpServer;
      disabled?: boolean;
      natDirect?: boolean;
      ospf?: {
        area?: number;
        authentication?: boolean;
        authId?: number;
        authPassphrase?: string;
        cost?: number;
        deadTimer?: number;
        enabled?: boolean;
        helloTimer?: number;
        inboundRouteLearning?: {
          defaultAction?: string;
          filters?: {
          }[];
        };
        md5Authentication?: boolean;
        MTU?: number;
        outboundRouteAdvertisement?: {
          defaultAction?: string;
          filters?: {
          }[];
        };
        passive?: boolean;
      };
      override?: boolean;
      subinterfaceId?: number;
      subinterfaceType?: string;
      /**
       * static only
       */
      vlanId?: number;
      trusted?: boolean;
      rpf?: "SPECIFIC" | "LOOSE" | "DISABLED";
    }[];
    /**
     * static only
     */
    vlanId?: number;
    wanOverlay?: "DISABLED" | "AUTO_DISCOVERED" | "USER_DEFINED";
    trusted?: boolean;
    rpf?: "SPECIFIC" | "LOOSE" | "DISABLED";
    underlayAccounting?: boolean;
  }[];
  routes?: {
    icmpProbes?: {
    }[];
    icmpResponders?: {
    }[];
    static?: {
      destination?: string;
      netmask?: string;
      sourceIp?: string;
      gateway?: string;
      cost?: number;
      preferred?: boolean;
      description?: string;
      cidrPrefix?: string;
      wanInterface?: string;
      icmpProbeLogicalId?: string;
      vlanId?: number;
      advertise?: boolean;
      subinterfaceId?: number;
    }[];
  };
  ha?: {
    enabled?: boolean;
    interface?: string;
  };
  dns?: {
    primaryProvider?: {
      ref?: string;
    };
    backupProvider?: {
      ref?: string;
    };
    privateProviders?: {
      ref?: string;
    };
  };
  netflow?: {
    enable?: boolean;
    enabled?: boolean;
    version?: number;
    collectors?: {
      address?: string;
      port?: number;
    }[];
  };
  vqm?: {
    enable?: boolean;
    enabled?: boolean;
    protocol?: string;
    collectors?: {
      address?: string;
      port?: number;
    }[];
  };
  vrrp?: {
    enabled?: boolean;
    data?: {
      cidrIp?: string;
      interface?: string;
      interval?: number;
      preempt?: boolean;
      preemptDelay?: number;
      priority?: number;
      subinterfaceId?: number;
      vlanId?: number;
      vrid?: number;
    }[];
  };
  snmp?: {
    port?: number;
    snmpv2c?: {
      enable?: boolean;
      enabled?: boolean;
      community?: string;
      allowedIp?: string[];
    };
    snmpv3?: {
      enabled?: boolean;
      enable?: boolean;
      users?: {
        name?: string;
        passphrase?: string;
        authAlg?: string;
        privacy?: boolean;
        encrAlg?: string;
      }[];
    };
  };
  multiSourceQos?: {
    enable?: boolean;
    enabled?: boolean;
    highRatio?: number;
    normalRatio?: number;
    lowRatio?: number;
    maxCapThreshold?: number;
    minCapThreshold?: number;
  };
}
export interface EdgeDeviceSettingsDataDhcpServer {
  baseDhcpAddr?: number;
  enabled?: boolean;
  leaseTimeSeconds?: number;
  dhcpRelay?: {
    servers?: string[];
  };
  numDhcpAddr?: number;
  staticReserved?: number;
  options?: {
    option?: number;
    value?: string;
    type?: string;
    metaData?: {
      dataType?: string;
      description?: string;
      display?: boolean;
      list?: boolean;
      name?: string;
      option?: number;
    };
  }[];
}
/**
 * example:
 * [object Object]
 */
export interface EdgeEdgeCancelReactivationResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface EdgeEdgeProvisionResult {
  id: number;
  activationKey: string;
  generatedCertificate?: {
    certificate?: string;
    "ca-certificate"?: string;
    privateKey?: string;
    privateKeyPassword?: string;
    csr?: string;
  };
}
export interface EdgeEdgeRequestReactivationResult {
  activationKey: string;
  activationKeyExpires: string; // date-time
}
export interface EdgeGetEdgeConfigurationStackResultItem {
  created: string;
  description: string;
  edgeCount?: number;
  effective?: string;
  id: number;
  modified: string;
  modules: ConfigurationModule[];
  name: string;
  version: string;
}
export interface EdgeGetEdgeResult {
  activationKey: string;
  activationKeyExpires: string;
  activationState: "UNASSIGNED" | "PENDING" | "ACTIVATED" | "REACTIVATION_PENDING";
  activationTime: string;
  alertsEnabled: number;
  buildNumber: string;
  created: string;
  description: string;
  deviceFamily: string;
  deviceId: string;
  dnsName: string;
  edgeHardwareId: string;
  edgeState: "NEVER_ACTIVATED" | "DEGRADED" | "OFFLINE" | "DISABLED" | "EXPIRED" | "CONNECTED";
  edgeStateTime: string;
  endpointPkiMode: "CERTIFICATE_DISABLED" | "CERTIFICATE_OPTIONAL" | "CERTIFICATE_REQUIRED";
  enterpriseId: number;
  haLastContact: string;
  haPreviousState: "UNCONFIGURED" | "PENDING_INIT" | "PENDING_CONFIRMATION" | "PENDING_CONFIRMED" | "PENDING_DISSOCIATION" | "READY" | "FAILED";
  haSerialNumber: string;
  haState: "UNCONFIGURED" | "PENDING_INIT" | "PENDING_CONFIRMATION" | "PENDING_CONFIRMED" | "PENDING_DISSOCIATION" | "READY" | "FAILED";
  id: number;
  isLive: number;
  lastContact: string;
  logicalId: string;
  modelNumber: "edge500" | "edge5X0" | "edge510" | "edge840" | "edge1000" | "edge1000qat" | "virtual";
  modified: string;
  name: string;
  operatorAlertsEnabled: number;
  selfMacAddress: string;
  serialNumber: string;
  serviceState: "IN_SERVICE" | "OUT_OF_SERVICE" | "PENDING_SERVICE";
  serviceUpSince: string;
  siteId: number;
  softwareUpdated: string;
  softwareVersion: string;
  systemUpSince: string;
  configuration?: ModelConfiguration;
  enterprise?: Enterprise;
  links?: Link[];
  recentLinks?: Link[];
  site?: Site;
}
export type EdgeLinkMetric = "bytesRx" | "bytesTx" | "totalBytes" | "p1BytesRx" | "p1BytesTx" | "p1PacketsRx" | "p1PacketsTx" | "p2BytesRx" | "p2BytesTx" | "p2PacketsRx" | "p2PacketsTx" | "p3BytesRx" | "p3BytesTx" | "p3PacketsRx" | "p3PacketsTx" | "controlBytesRx" | "controlBytesTx" | "controlPacketsRx" | "controlPacketsTx" | "bestBwKbpsRx" | "bestBwKbpsTx" | "bestJitterMsRx" | "bestJitterMsTx" | "bestLatencyMsRx" | "bestLatencyMsTx" | "bestLossPctRx" | "bestLossPctTx" | "bpsOfBestPathRx" | "bpsOfBestPathTx" | "signalStrength" | "scoreTx" | "scoreRx";
export interface EdgeObject {
  activationKey?: string;
  activationKeyExpires?: string;
  activationState?: "UNASSIGNED" | "PENDING" | "ACTIVATED" | "REACTIVATION_PENDING";
  activationTime?: string;
  alertsEnabled?: number;
  buildNumber?: string;
  created?: string;
  description?: string;
  deviceFamily?: string;
  deviceId?: string;
  dnsName?: string;
  edgeHardwareId?: string;
  edgeState?: "NEVER_ACTIVATED" | "DEGRADED" | "OFFLINE" | "DISABLED" | "EXPIRED" | "CONNECTED";
  edgeStateTime?: string;
  endpointPkiMode?: "CERTIFICATE_DISABLED" | "CERTIFICATE_OPTIONAL" | "CERTIFICATE_REQUIRED";
  enterpriseId?: number;
  haLastContact?: string;
  haPreviousState?: "UNCONFIGURED" | "PENDING_INIT" | "PENDING_CONFIRMATION" | "PENDING_CONFIRMED" | "PENDING_DISSOCIATION" | "READY" | "FAILED";
  haSerialNumber?: string;
  haState?: "UNCONFIGURED" | "PENDING_INIT" | "PENDING_CONFIRMATION" | "PENDING_CONFIRMED" | "PENDING_DISSOCIATION" | "READY" | "FAILED";
  id?: number;
  isLive?: number;
  lastContact?: string;
  logicalId?: string;
  modelNumber?: "edge500" | "edge5X0" | "edge510" | "edge840" | "edge1000" | "edge1000qat" | "virtual";
  modified?: string;
  name?: string;
  operatorAlertsEnabled?: number;
  selfMacAddress?: string;
  serialNumber?: string;
  serviceState?: "IN_SERVICE" | "OUT_OF_SERVICE" | "PENDING_SERVICE";
  serviceUpSince?: string;
  siteId?: number;
  softwareUpdated?: string;
  softwareVersion?: string;
  systemUpSince?: string;
}
export interface EdgeQOS {
  id?: number;
  name: "imageUpdate" | "controlPlane" | "managementPlane" | "firewall" | "QOS" | "deviceSettings" | "WAN" | "metaData" | "properties";
  type?: "ENTERPRISE" | "OPERATOR" | "GATEWAY";
  description?: string;
  configurationId?: number;
  data?: EdgeQOSData;
  refs?: GenericRefs;
}
export interface EdgeQOSData {
  rules?: {
    name?: string;
    match?: {
      appid?: number;
      classid?: number;
      dscp?: number;
      sip?: string;
      sport_high?: number;
      sport_low?: number;
      ssm?: string;
      svlan?: number;
      os_version?: number;
      hostname?: string;
      dip?: string;
      dport_low?: number;
      dport_high?: number;
      dsm?: string;
      dvlan?: number;
      proto?: number;
    };
    action?: {
      routeType?: string;
      edge2EdgeRouteAction?: RouteActionObject;
      edge2DataCenterRouteAction?: RouteActionObject;
      edge2CloudRouteAction?: RouteActionObject;
      QoS?: {
      };
      sla?: {
      };
    };
  }[];
  defaults?: {
  }[];
  webProxy?: {
    providers?: {
    }[];
  };
  serviceRateLimit?: {
    enabled?: boolean;
    inputType?: string;
    value?: number;
  };
  cosMapping?: {
    lsInputType?: string;
    bulk?: CosMapping;
    realtime?: CosMapping;
    transactional?: CosMapping;
  };
}
/**
 * example:
 * [object Object]
 */
export interface EdgeSetEdgeEnterpriseConfigurationResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
/**
 * example:
 * [object Object]
 */
export interface EdgeSetEdgeHandOffGatewaysResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
/**
 * example:
 * [object Object]
 */
export interface EdgeSetEdgeOperatorConfigurationResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
export interface EdgeUpdateEdgeAdminPasswordResult {
  /**
   * The ID of the action queued
   */
  id: string;
}
/**
 * example:
 * [object Object]
 */
export interface EdgeUpdateEdgeAttributesResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface EdgeUpdateEdgeCredentialsByConfigurationResult {
  actionIds: number[];
}
export interface EmptyObject {
}
export interface Enterprise {
  id?: number;
  created?: string; // date-time
  networkId?: number;
  gatewayPoolId?: number;
  alertsEnabled?: boolean;
  operatorAlertsEnabled?: boolean;
  endpointPkiMode?: "CERTIFICATE_DISABLED" | "CERTIFICATE_OPTIONAL" | "CERTIFICATE_REQUIRED";
  name?: string;
  domain?: string;
  prefix?: string;
  logicalId?: string;
  accountNumber?: string;
  description?: string;
  contactName?: string;
  contactPhone?: string;
  contactMobile?: string;
  contactEmail?: string;
  streetAddress?: string;
  streetAddress2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  lat?: number;
  lon?: number;
  timezone?: string;
  locale?: string;
  modified?: string; // date-time
}
export interface EnterpriseAlertConfiguration {
  id?: number;
  created?: string; // date-time
  alertDefinitionId?: number;
  enterpriseId?: number;
  enabled?: boolean;
  name?: "EDGE_DOWN" | "EDGE_UP" | "LINK_DOWN" | "LINK_UP" | "VPN_TUNNEL_DOWN" | "EDGE_HA_FAILOVER" | "EDGE_SERVICE_DOWN" | "GATEWAY_SERVICE_DOWN" | "VNF_VM_EVENT" | "VNF_VM_DEPLOYED" | "VNF_VM_POWERED_ON" | "VNF_VM_POWERED_OFF" | "VNF_VM_DELETED" | "VNF_VM_ERROR" | "VNF_INSERTION_EVENT" | "VNF_INSERTION_ENABLED" | "VNF_INSERTION_DISABLED" | "TEST_ALERT";
  description?: string;
  type?: "EDGE_DOWN" | "EDGE_UP" | "LINK_DOWN" | "LINK_UP" | "VPN_TUNNEL_DOWN" | "EDGE_HA_FAILOVER" | "EDGE_SERVICE_DOWN" | "GATEWAY_SERVICE_DOWN" | "VNF_VM_EVENT" | "VNF_VM_DEPLOYED" | "VNF_VM_POWERED_ON" | "VNF_VM_POWERED_OFF" | "VNF_VM_DELETED" | "VNF_VM_ERROR" | "VNF_INSERTION_EVENT" | "VNF_INSERTION_ENABLED" | "VNF_INSERTION_DISABLED" | "TEST_ALERT";
  definition?: EnterpriseAlertDefinition;
  firstNotificationSeconds?: number;
  maxNotifications?: number;
  notificationIntervalSeconds?: number;
  resetIntervalSeconds?: number;
  modified?: string; // date-time
}
export interface EnterpriseAlertDefinition {
  isSystemOnly?: boolean;
  isOperatorOnly?: boolean;
}
export interface EnterpriseAlertNotificationUserData {
  email: string;
  emailEnabled: number;
  enabled: number;
  enterpriseUserId: number;
  mobileEnabled: number;
  mobilePhone: string;
  smsEnabled: number;
  username: string;
}
export interface EnterpriseAlertTrigger {
  id?: number;
  created?: string; // date-time
  triggerTime?: string; // date-time
  enterpriseAlertConfigurationId?: number;
  enterpriseId?: number;
  edgeId?: number;
  edgeName?: string;
  linkId?: number;
  linkName?: string;
  enterpriseObjectId?: number;
  enterpriseObjectName?: string;
  name?: "EDGE_DOWN" | "EDGE_UP" | "LINK_DOWN" | "LINK_UP" | "VPN_TUNNEL_DOWN" | "EDGE_HA_FAILOVER" | "EDGE_SERVICE_DOWN" | "GATEWAY_SERVICE_DOWN" | "VNF_VM_EVENT" | "VNF_VM_DEPLOYED" | "VNF_VM_POWERED_ON" | "VNF_VM_POWERED_OFF" | "VNF_VM_DELETED" | "VNF_VM_ERROR" | "VNF_INSERTION_EVENT" | "VNF_INSERTION_ENABLED" | "VNF_INSERTION_DISABLED" | "TEST_ALERT";
  type?: "EDGE_DOWN" | "EDGE_UP" | "LINK_DOWN" | "LINK_UP" | "VPN_TUNNEL_DOWN" | "EDGE_HA_FAILOVER" | "EDGE_SERVICE_DOWN" | "GATEWAY_SERVICE_DOWN" | "VNF_VM_EVENT" | "VNF_VM_DEPLOYED" | "VNF_VM_POWERED_ON" | "VNF_VM_POWERED_OFF" | "VNF_VM_DELETED" | "VNF_VM_ERROR" | "VNF_INSERTION_EVENT" | "VNF_INSERTION_ENABLED" | "VNF_INSERTION_DISABLED" | "TEST_ALERT";
  state?: "PENDING" | "ACTIVE" | "CLOSED";
  stateSetTime?: string; // date-time
  lastContact?: string; // date-time
  firstNotificationSeconds?: number;
  maxNotifications?: number;
  notificationIntervalSeconds?: number;
  resetIntervalSeconds?: number;
  comment?: string;
  nextNotificationTime?: string; // date-time
  remainingNotifications?: number;
  timezone?: string;
  locale?: string;
  modified?: string; // date-time
}
export interface EnterpriseDeleteEnterpriseDeleteEnterpriseGatewayRecordsRecord {
  gatewayId?: number;
  neighborIp?: string;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseDeleteEnterpriseGatewayRecordsResult {
  /**
   * The id of the deleted object.
   */
  id?: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseDeleteEnterpriseNetworkAllocationResult {
  /**
   * The id of the deleted object.
   */
  id?: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseDeleteEnterpriseResult {
  /**
   * The id of the deleted object.
   */
  id?: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseDeleteEnterpriseServiceResult {
  /**
   * The id of the deleted object.
   */
  id?: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface EnterpriseEnterpriseProxy {
  id: number;
  created: string; // date-time
  networkId: number;
  proxyType: "PARTNER" | "MSP";
  operateGateways: boolean;
  logicalId: string;
  name: string;
  domain: string;
  prefix: string;
  description: string;
  contactName: string;
  contactPhone: string;
  contactMobile: string;
  contactEmail: string;
  streetAddress: string;
  streetAddress2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  lat: number;
  lon: number;
  modified: string; // date-time
}
export interface EnterpriseEvent {
  id: number;
  eventTime: string; // date-time
  event: "EDGE_HEARTBEAT" | "GATEWAY_HEARTBEAT" | "USER_LOGIN" | "EDGE_ACTIVATION" | "GATEWAY_ACTIVATION" | "EDGE_FLOW_STATS" | "EDGE_PATHLINK_STATS" | "EDGE_PROVISION" | "CREATE_USER" | "CREATE_PROFILE" | "SOFTWARE_UPLOAD" | "OPERATOR_LOGIN" | "CREATE_SYSTEM_PROPERTY" | "UPDATE_SYSTEM_PROPERTY" | "DELETE_SYSTEM_PROPERTY" | "CREATE_ENTERPRISE" | "DELETE_ENTERPRISE" | "GATEWAY_PROVISION" | "DELETE_GATEWAY" | "EDGE_NEW_DEVICE" | "EDGE_NEW_USER" | "DISABLE_GATEWAY" | "ENABLE_GATEWAY" | "DEACTIVATE_GATEWAY" | "ACTIVATION_EMAIL" | "DELETE_PROFILE" | "SOFTWARE_PKG_DELETE" | "EDGE_REACTIVATION_REQ" | "EDGE_CANCEL_REACTIVATION_REQ" | "VPN_DATACENTER_STATUS" | "EDGE_RADIO_SETTINGS" | "VPN_ENABLE" | "VPN_DISABLE" | "VPN_UPDATE" | "USER_LOCKOUT" | "FIREWALL_ENABLE" | "FIREWALL_DISABLE" | "CREATE_ENTERPRISE_NETWORK_SERVICE" | "EDIT_ENTERPRISE_NETWORK_SERVICE" | "DELETE_ENTERPRISE_NETWORK_SERVICE" | "CREATE_ENTERPRISE_NETWORK" | "EDIT_ENTERPRISE_NETWORK" | "DELETE_ENTERPRISE_NETWORK" | "EDIT_PROFILE" | "SUPPORT_EMAIL" | "META_DATA_UPLOAD" | "META_DATA_DELETE" | "HA_STANDBY_ACTIVATED" | "HA_READY" | "HA_FAILED" | "HA_GOING_ACTIVE" | "HA_TERMINATED" | "EDGE_DOWN" | "EDGE_UP" | "GATEWAY_DOWN" | "CREATE_ENTERPRISE_PROXY" | "DELETE_ENTERPRISE_PROXY" | "DIAGNOSTIC_CLEANUP" | "GATEWAY_ACTIVATION_FAILURE" | "EDGE_ACTIVATION_FAILURE" | "DELETE_EDGE" | "PASSWORD_RESET" | "CRL_GENERATION" | "EDGE_CERTIFICATE_GENERATION" | "GATEWAY_CERTIFICATE_GENERATION" | "EDGE_DEACTIVATION" | "CLEAR_EDGE_HISTORY" | "PATCH_APPLICATION_SUCCESS" | "PATCH_APPLICATION_FAILURE" | "OPERATOR_LOGIN_FAILURE" | "USER_LOGIN_FAILURE" | "REMOTE_ACTION" | "CLONE_APPLICATION_MAP" | "UPDATE_APPLICATION_MAP" | "ROUTE_UPDATE" | "ROUTE_DELETE" | "HA_ACTIVATION_FAILURE" | "DR_CONFIGURATION_STARTED" | "DR_CONFIGURATION_SUCCESS" | "DR_CONFIGURATION_FAILURE" | "DR_CONFIGURATION_ABORTED" | "STORE_FLOW_STATS" | "ENTERPRISE_ENABLE_OPERATOR_USER_MGMT" | "ENTERPRISE_DISABLE_OPERATOR_USER_MGMT" | "ENTERPRISE_ENABLE_OPERATOR_ACCESS" | "ENTERPRISE_DISABLE_OPERATOR_ACCESS" | "ENTERPRISE_ENABLE_PROXY_ACCESS" | "ENTERPRISE_DISABLE_PROXY_ACCESS" | "PROXY_ENABLE_OPERATOR_ACCESS" | "PROXY_DISABLE_OPERATOR_ACCESS" | "EDGE_BGP_NEIGHBOR_UP" | "EDGE_BGP_NEIGHBOR_DOWN" | "GATEWAY_BGP_NEIGHBOR_UP" | "GATEWAY_BGP_NEIGHBOR_DOWN" | "CREATE_NETWORK_SEGMENT" | "UPDATE_NETWORK_SEGMENT" | "DELETE_NETWORK_SEGMENT" | "ADD_PROFILE_NETWORK_SEGMENT" | "REMOVE_PROFILE_NETWORK_SEGMENT" | "EDGE_TO_EDGE_VPN_ENABLE" | "EDGE_TO_EDGE_VPN_DISABLE" | "FIREWALL_LOG_ENABLE" | "FIREWALL_LOG_DISABLE" | "ADD_EDGE_NETWORK_SEGMENT" | "REMOVE_EDGE_NETWORK_SEGMENT" | "ENTERPRISE_SET_TEMPLATE_PROFILE" | "INVENTORY_EDGE_UNASSIGNED" | "INVENTORY_EDGE_IN_STAGING" | "INVENTORY_EDGE_STATE_CHANGE" | "DELETE_USER" | "CREATE_OPERATOR_USER" | "DELETE_OPERATOR_USER" | "EDGE_UPDATE_ATTRIBUTES" | "CREATE_PRIVATE_NETWORK" | "UPDATE_PRIVATE_NETWORK" | "DELETE_PRIVATE_NETWORK" | "CLOUD_SECURITY_ENABLE" | "CLOUD_SECURITY_DISABLE" | "CLOUD_SECURITY_ERROR" | "EDGE_NVS_TUNNEL_UP" | "EDGE_NVS_TUNNEL_DOWN" | "EXTERNAL_API_CALL" | "VRRP_INTO_MASTER_STATE" | "VRRP_OUT_OF_MASTER_STATE" | "VRRP_FAIL_INFO" | "VNF_VM_DEPLOY" | "VNF_VM_DELETE" | "VNF_VM_ERROR" | "VNF_VM_EVENT" | "VNF_INSERTION_ENABLED" | "VNF_INSERTION_DISABLED" | "EDGE_MULTICAST_ROUTES" | "EDGE_NEW_CONFIGURATION_ASSIGNED";
  category: "SYSTEM" | "NETWORK" | "APPLICATION" | "USER" | "SECURITY" | "EDGE" | "GATEWAY" | "CONFIGURATION" | "ENTERPRISE";
  severity: "EMERGENCY" | "ALERT" | "CRITICAL" | "ERROR" | "WARNING" | "NOTICE" | "INFO" | "DEBUG";
  message: string;
  detail: string;
  enterpriseUsername: string;
  edgeName: string;
}
export interface EnterpriseGetEnterpriseAddressesResultItem {
  address?: string | {
  };
  entity?: "ACTIVE_VCO" | "STANDBY_VCO" | "GATEWAY" | "DATACENTER";
}
export interface EnterpriseGetEnterpriseAlertConfigurationsResultItem {
  id: number;
  created: string; // date-time
  alertDefinitionId: number;
  enterpriseId: number;
  enabled: boolean;
  name: "EDGE_DOWN" | "EDGE_UP" | "LINK_DOWN" | "LINK_UP" | "VPN_TUNNEL_DOWN" | "EDGE_HA_FAILOVER" | "EDGE_SERVICE_DOWN" | "GATEWAY_SERVICE_DOWN" | "VNF_VM_EVENT" | "VNF_VM_DEPLOYED" | "VNF_VM_POWERED_ON" | "VNF_VM_POWERED_OFF" | "VNF_VM_DELETED" | "VNF_VM_ERROR" | "VNF_INSERTION_EVENT" | "VNF_INSERTION_ENABLED" | "VNF_INSERTION_DISABLED" | "TEST_ALERT";
  description: string;
  type: "EDGE_DOWN" | "EDGE_UP" | "LINK_DOWN" | "LINK_UP" | "VPN_TUNNEL_DOWN" | "EDGE_HA_FAILOVER" | "EDGE_SERVICE_DOWN" | "GATEWAY_SERVICE_DOWN" | "VNF_VM_EVENT" | "VNF_VM_DEPLOYED" | "VNF_VM_POWERED_ON" | "VNF_VM_POWERED_OFF" | "VNF_VM_DELETED" | "VNF_VM_ERROR" | "VNF_INSERTION_EVENT" | "VNF_INSERTION_ENABLED" | "VNF_INSERTION_DISABLED" | "TEST_ALERT";
  definition: EnterpriseAlertDefinition;
  firstNotificationSeconds: number;
  maxNotifications: number;
  notificationIntervalSeconds: number;
  resetIntervalSeconds: number;
  modified: string; // date-time
}
export interface EnterpriseGetEnterpriseAlertsResultItem {
  id: number;
  created: string; // date-time
  triggerTime: string; // date-time
  enterpriseAlertConfigurationId: number;
  enterpriseId: number;
  edgeId: number;
  edgeName: string;
  linkId: number;
  linkName: string;
  enterpriseObjectId: number;
  enterpriseObjectName: string;
  name: "EDGE_DOWN" | "EDGE_UP" | "LINK_DOWN" | "LINK_UP" | "VPN_TUNNEL_DOWN" | "EDGE_HA_FAILOVER" | "EDGE_SERVICE_DOWN" | "GATEWAY_SERVICE_DOWN" | "VNF_VM_EVENT" | "VNF_VM_DEPLOYED" | "VNF_VM_POWERED_ON" | "VNF_VM_POWERED_OFF" | "VNF_VM_DELETED" | "VNF_VM_ERROR" | "VNF_INSERTION_EVENT" | "VNF_INSERTION_ENABLED" | "VNF_INSERTION_DISABLED" | "TEST_ALERT";
  type: "EDGE_DOWN" | "EDGE_UP" | "LINK_DOWN" | "LINK_UP" | "VPN_TUNNEL_DOWN" | "EDGE_HA_FAILOVER" | "EDGE_SERVICE_DOWN" | "GATEWAY_SERVICE_DOWN" | "VNF_VM_EVENT" | "VNF_VM_DEPLOYED" | "VNF_VM_POWERED_ON" | "VNF_VM_POWERED_OFF" | "VNF_VM_DELETED" | "VNF_VM_ERROR" | "VNF_INSERTION_EVENT" | "VNF_INSERTION_ENABLED" | "VNF_INSERTION_DISABLED" | "TEST_ALERT";
  state: "PENDING" | "ACTIVE" | "CLOSED";
  stateSetTime: string; // date-time
  lastContact: string; // date-time
  firstNotificationSeconds: number;
  maxNotifications: number;
  notificationIntervalSeconds: number;
  resetIntervalSeconds: number;
  comment: string;
  nextNotificationTime: string; // date-time
  remainingNotifications: number;
  timezone: string;
  locale: string;
  modified: string; // date-time
}
export interface EnterpriseGetEnterpriseAllAlertRecipientsResult {
  emailEnabled: boolean;
  emailList: string[];
  enterpriseUsers: EnterpriseAlertNotificationUserData[];
  mobileEnabled: boolean;
  mobileList: string[];
  smsEnabled: boolean;
  smsList: string[];
  snmpEnabled?: boolean;
  snmpList?: string[];
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseGetEnterpriseCapabilitiesResult {
  enableBGP?: boolean;
  enableCosMapping?: boolean;
  enableFwLogs?: boolean;
  enableOSPF?: boolean;
  enablePKI?: boolean;
  enablePremium?: boolean;
  enableServiceRateLimiting?: boolean;
}
export interface EnterpriseGetEnterpriseConfigurationsResultItem {
  created: string;
  description: string;
  edgeCount?: number;
  effective: string;
  id: number;
  modified: string;
  modules?: ConfigurationModule[];
  name: string;
  version: string;
}
export interface EnterpriseGetEnterpriseEdgesResultItem {
  activationKey: string;
  activationKeyExpires: string;
  activationState: "UNASSIGNED" | "PENDING" | "ACTIVATED" | "REACTIVATION_PENDING";
  activationTime: string;
  alertsEnabled: number;
  buildNumber: string;
  created: string;
  description: string;
  deviceFamily: string;
  deviceId: string;
  dnsName: string;
  edgeHardwareId: string;
  edgeState: "NEVER_ACTIVATED" | "DEGRADED" | "OFFLINE" | "DISABLED" | "EXPIRED" | "CONNECTED";
  edgeStateTime: string;
  endpointPkiMode: "CERTIFICATE_DISABLED" | "CERTIFICATE_OPTIONAL" | "CERTIFICATE_REQUIRED";
  enterpriseId: number;
  haLastContact: string;
  haPreviousState: "UNCONFIGURED" | "PENDING_INIT" | "PENDING_CONFIRMATION" | "PENDING_CONFIRMED" | "PENDING_DISSOCIATION" | "READY" | "FAILED";
  haSerialNumber: string;
  haState: "UNCONFIGURED" | "PENDING_INIT" | "PENDING_CONFIRMATION" | "PENDING_CONFIRMED" | "PENDING_DISSOCIATION" | "READY" | "FAILED";
  id: number;
  isLive: number;
  lastContact: string;
  logicalId: string;
  modelNumber: "edge500" | "edge5X0" | "edge510" | "edge840" | "edge1000" | "edge1000qat" | "virtual";
  modified: string;
  name: string;
  operatorAlertsEnabled: number;
  selfMacAddress: string;
  serialNumber: string;
  serviceState: "IN_SERVICE" | "OUT_OF_SERVICE" | "PENDING_SERVICE";
  serviceUpSince: string;
  siteId: number;
  softwareUpdated: string;
  softwareVersion: string;
  systemUpSince: string;
  configuration?: ModelConfiguration;
  links?: Link[];
  recentLinks?: Link[];
  site?: Site;
}
export interface EnterpriseGetEnterpriseGatewayHandoffResult {
  enterpriseId: number;
  value: {
    type?: "802.1Q" | "802.1ad" | "QinQ (0x9100)" | "QinQ (0x8100)";
    override?: boolean;
    cTag?: number;
    sTag?: number;
    localAddress?: {
      cidrIp?: string;
      cidrPrefix?: number;
      useForPrivate?: boolean;
      advertiseViaBgp?: boolean;
      override?: boolean;
    };
    staticRoutes?: {
      override?: boolean;
      subnets?: {
        name?: string;
        cidrIp?: string;
        cidrPrefix?: number;
        encrypt?: boolean;
        handOffType?: "NAT" | "VLAN";
        routeCost?: number;
      }[];
    };
    bgp?: {
      enabled?: boolean;
      ASN?: string;
      neighborIp?: string;
      neighborASN?: string;
      encryption?: boolean;
    };
    bgpInboundMap?: GatewayHandoffBgpRulesMap;
    bgpOutboundMap?: GatewayHandoffBgpRulesMap;
    overrides?: {
      VLAN?: {
        [name: string]: {
          type?: string;
          cTag?: number;
          sTag?: number;
          transportLanVLAN?: string;
        };
      };
      bgp?: {
        [name: string]: {
          enabled?: boolean;
          ASN?: string;
          neighborIp?: string;
          neighborASN?: string;
          encryption?: boolean;
        };
      };
      bgpInboundMap?: {
        [name: string]: GatewayHandoffBgpRulesMap;
      };
      bgpOutboundMap?: {
        [name: string]: GatewayHandoffBgpRulesMap;
      };
      localAddress?: {
        [name: string]: {
          cidrIp?: string;
          cidrPrefix?: number;
          useForPrivate?: boolean;
          advertiseViaBgp?: boolean;
        };
      };
      subnets?: {
        [name: string]: {
        }[];
      };
    };
  };
  id?: number;
  created?: string; // date-time
  name?: string;
  isPassword?: boolean;
  dataType?: string;
  description?: string;
  modified?: string; // date-time
}
export interface EnterpriseGetEnterpriseNetworkAllocationResult {
  id: number;
  created: string; // date-time
  operatorId: number;
  networkId: number;
  enterpriseId: number;
  edgeId: number;
  gatewayId: number;
  parentGroupId: number;
  description: string;
  object: string;
  name: string;
  type: string;
  logicalId: string;
  alertsEnabled: boolean;
  operatorAlertsEnabled: boolean;
  status: string;
  statusModified: string; // date-time
  previousData: string;
  previousCreated: string; // date-time
  draftData: string;
  draftCreated: string; // date-time
  draftComment: string;
  data: {
  };
  lastContact: string; // date-time
  version: string;
  modified: string; // date-time
}
export interface EnterpriseGetEnterpriseNetworkAllocationsResultItem {
  id: number;
  created: string; // date-time
  operatorId: number;
  networkId: number;
  enterpriseId: number;
  edgeId: number;
  gatewayId: number;
  parentGroupId: number;
  description: string;
  object: string;
  name: string;
  type: string;
  logicalId: string;
  alertsEnabled: boolean;
  operatorAlertsEnabled: boolean;
  status: string;
  statusModified: string; // date-time
  previousData: string;
  previousCreated: string; // date-time
  draftData: string;
  draftCreated: string; // date-time
  draftComment: string;
  data: {
  };
  lastContact: string; // date-time
  version: string;
  modified: string; // date-time
}
export interface EnterpriseGetEnterprisePropertyResult {
  id: number;
  enterpriseId: number;
  created: string; // date-time
  name: string;
  value: string;
  isPassword: boolean;
  dataType: "STRING" | "NUMBER" | "BOOLEAN" | "JSON" | "DATE" | "DATETIME";
  description: string;
  modified: string; // date-time
}
export interface EnterpriseGetEnterpriseResult {
  id: number;
  created: string; // date-time
  networkId: number;
  gatewayPoolId: number;
  alertsEnabled: boolean;
  operatorAlertsEnabled: boolean;
  endpointPkiMode: "CERTIFICATE_DISABLED" | "CERTIFICATE_OPTIONAL" | "CERTIFICATE_REQUIRED";
  name: string;
  domain: string;
  prefix: string;
  logicalId: string;
  accountNumber: string;
  description: string;
  contactName: string;
  contactPhone: string;
  contactMobile: string;
  contactEmail: string;
  streetAddress: string;
  streetAddress2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  lat: number;
  lon: number;
  timezone: string;
  locale: string;
  modified: string; // date-time
  enterpriseProxy?: EnterpriseEnterpriseProxy;
}
export interface EnterpriseGetEnterpriseRouteConfigurationResult {
  id: number;
  created: string; // date-time
  operatorId: number;
  networkId: number;
  enterpriseId: number;
  edgeId: number;
  gatewayId: number;
  parentGroupId: number;
  description: string;
  object: string;
  name: string;
  type: string;
  logicalId: string;
  alertsEnabled: boolean;
  operatorAlertsEnabled: boolean;
  status: string;
  statusModified: string; // date-time
  previousData: string;
  previousCreated: string; // date-time
  draftData: string;
  draftCreated: string; // date-time
  draftComment: string;
  data: {
  };
  lastContact: string; // date-time
  version: string;
  modified: string; // date-time
}
export interface EnterpriseGetEnterpriseRouteTableResult {
  profiles?: {
    created?: string;
    description: string;
    edgeCount?: number;
    effective?: string;
    id: number;
    modified?: string;
    modules?: ConfigurationModule[];
    name: string;
    version?: string;
  }[];
  subnets?: EnterpriseRouteCollection[];
}
export interface EnterpriseGetEnterpriseServicesResultItem {
  id: number;
  created: string; // date-time
  operatorId: number;
  networkId: number;
  enterpriseId: number;
  edgeId: number;
  gatewayId: number;
  parentGroupId: number;
  description: string;
  object: string;
  name: string;
  type: string;
  logicalId: string;
  alertsEnabled: boolean;
  operatorAlertsEnabled: boolean;
  status: string;
  statusModified: string; // date-time
  previousData: string;
  previousCreated: string; // date-time
  draftData: string;
  draftCreated: string; // date-time
  draftComment: string;
  data: {
  };
  lastContact: string; // date-time
  version: string;
  modified: string; // date-time
}
export interface EnterpriseGetEnterpriseUsersResultItem {
  id: number;
  created: string; // date-time
  userType: string;
  username: string;
  domain: string;
  password: string; // password
  firstName: string;
  lastName: string;
  officePhone: string;
  mobilePhone: string;
  isNative: boolean;
  isActive: boolean;
  isLocked: boolean;
  email: string;
  lastLogin: string; // date-time
  modified: string; // date-time
  roleId: number;
  roleName: string;
}
export interface EnterpriseInsertEnterprise {
  city?: string;
  contactEmail?: string; // email
  contactMobile?: string;
  contactName?: string;
  contactPhone?: string;
  country?: string;
  lat?: number;
  lon?: number;
  name: string;
  postalCode?: string;
  state?: string;
  streetAddress?: string;
  streetAddress2?: string;
  gatewayPoolId?: number;
  networkId: number;
  returnData?: boolean;
  user?: AuthObject;
  configurationId: number;
  enableEnterpriseDelegationToOperator?: boolean;
  enableEnterpriseDelegationToProxy?: boolean;
  enableEnterpriseUserManagementDelegationToOperator?: boolean;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseInsertEnterpriseNetworkAllocationResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseInsertEnterpriseNetworkSegmentResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseInsertEnterpriseResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseInsertEnterpriseServiceResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseInsertEnterpriseUserResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
export interface EnterpriseInsertOrUpdateEnterpriseAlertConfigurationsResult {
  enterpriseAlertConfigurations?: EnterpriseAlertConfiguration[];
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseInsertOrUpdateEnterpriseCapabilityResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
export interface EnterpriseInsertOrUpdateEnterpriseGatewayHandoff {
  enterpriseId?: number;
  value?: {
    type?: "802.1Q" | "802.1ad" | "QinQ (0x9100)" | "QinQ (0x8100)";
    override?: boolean;
    cTag?: number;
    sTag?: number;
    localAddress?: {
      cidrIp?: string;
      cidrPrefix?: number;
      useForPrivate?: boolean;
      advertiseViaBgp?: boolean;
      override?: boolean;
    };
    staticRoutes?: {
      override?: boolean;
      subnets?: {
        name?: string;
        cidrIp?: string;
        cidrPrefix?: number;
        encrypt?: boolean;
        handOffType?: "NAT" | "VLAN";
        routeCost?: number;
      }[];
    };
    bgp?: {
      enabled?: boolean;
      ASN?: string;
      neighborIp?: string;
      neighborASN?: string;
      encryption?: boolean;
    };
    bgpInboundMap?: GatewayHandoffBgpRulesMap;
    bgpOutboundMap?: GatewayHandoffBgpRulesMap;
    overrides?: {
      VLAN?: {
        [name: string]: {
          type?: string;
          cTag?: number;
          sTag?: number;
          transportLanVLAN?: string;
        };
      };
      bgp?: {
        [name: string]: {
          enabled?: boolean;
          ASN?: string;
          neighborIp?: string;
          neighborASN?: string;
          encryption?: boolean;
        };
      };
      bgpInboundMap?: {
        [name: string]: GatewayHandoffBgpRulesMap;
      };
      bgpOutboundMap?: {
        [name: string]: GatewayHandoffBgpRulesMap;
      };
      localAddress?: {
        [name: string]: {
          cidrIp?: string;
          cidrPrefix?: number;
          useForPrivate?: boolean;
          advertiseViaBgp?: boolean;
        };
      };
      subnets?: {
        [name: string]: {
        }[];
      };
    };
  };
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseInsertOrUpdateEnterpriseGatewayHandoffResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseInsertOrUpdateEnterprisePropertyResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
export interface EnterpriseNetworkSpace {
  name?: string;
  mode?: "static" | "dynamic";
  cidrIp?: string;
  cidrPrefix?: number;
  maxVlans?: number;
  vlans?: Vlan[];
}
export interface EnterpriseObject {
  city?: string;
  contactEmail?: string; // email
  contactMobile?: string;
  contactName?: string;
  contactPhone?: string;
  country?: string;
  lat?: number;
  lon?: number;
  name?: string;
  postalCode?: string;
  state?: string;
  streetAddress?: string;
  streetAddress2?: string;
  gatewayPoolId?: number;
  networkId?: number;
  returnData?: boolean;
  user?: AuthObject;
}
export interface EnterpriseObjectBase {
  id: number;
  created: string; // date-time
  operatorId: number;
  networkId: number;
  enterpriseId: number;
  edgeId: number;
  gatewayId: number;
  parentGroupId: number;
  description: string;
  object: string;
  name: string;
  type: string;
  logicalId: string;
  alertsEnabled: boolean;
  operatorAlertsEnabled: boolean;
  status: string;
  statusModified: string; // date-time
  previousData: string;
  previousCreated: string; // date-time
  draftData: string;
  draftCreated: string; // date-time
  draftComment: string;
  data: {
  };
  lastContact: string; // date-time
  version: string;
  modified: string; // date-time
}
export interface EnterpriseProperty {
  id?: number;
  enterpriseId?: number;
  created?: string; // date-time
  name?: string;
  value?: string;
  isPassword?: boolean;
  dataType?: "STRING" | "NUMBER" | "BOOLEAN" | "JSON" | "DATE" | "DATETIME";
  description?: string;
  modified?: string; // date-time
}
export interface EnterpriseProxy {
  id?: number;
  created?: string; // date-time
  networkId?: number;
  proxyType?: "PARTNER" | "MSP";
  operateGateways?: boolean;
  logicalId?: string;
  name?: string;
  domain?: string;
  prefix?: string;
  description?: string;
  contactName?: string;
  contactPhone?: string;
  contactMobile?: string;
  contactEmail?: string;
  streetAddress?: string;
  streetAddress2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  lat?: number;
  lon?: number;
  modified?: string; // date-time
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseProxyDeleteEnterpriseProxyUserResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface EnterpriseProxyGetEnterpriseProxyEdgeInventoryResultItem {
  enterpriseName: string;
  enterpriseId: number;
  edgeName: string;
  edgeId: number;
  created: string; // date-time
  edgeState: "NEVER_ACTIVATED" | "DEGRADED" | "OFFLINE" | "DISABLED" | "EXPIRED" | "CONNECTED";
  serialNumber: string;
  haSerialNumber: string;
  activationState: "UNASSIGNED" | "PENDING" | "ACTIVATED" | "REACTIVATION_PENDING";
  activationTime: string; // date-time
  modelNumber: string;
  softwareVersion: string;
  softwareUpdated: string; // date-time
  lastContact: string; // date-time
}
export interface EnterpriseProxyGetEnterpriseProxyEnterprisesResultItem {
  id?: number;
  created?: string; // date-time
  networkId?: number;
  gatewayPoolId?: number;
  alertsEnabled?: boolean;
  operatorAlertsEnabled?: boolean;
  endpointPkiMode?: "CERTIFICATE_DISABLED" | "CERTIFICATE_OPTIONAL" | "CERTIFICATE_REQUIRED";
  name?: string;
  domain?: string;
  prefix?: string;
  logicalId?: string;
  accountNumber?: string;
  description?: string;
  contactName?: string;
  contactPhone?: string;
  contactMobile?: string;
  contactEmail?: string;
  streetAddress?: string;
  streetAddress2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  lat?: number;
  lon?: number;
  timezone?: string;
  locale?: string;
  modified?: string; // date-time
  edgeCount?: number;
  edges?: EnterpriseObject[];
}
export interface EnterpriseProxyGetEnterpriseProxyGatewayPoolsResultItem {
  id?: number;
  networkId?: number;
  enterpriseProxyId?: number;
  created?: string; // date-time
  name?: string;
  description?: string;
  isDefault?: boolean;
  handOffType?: "NONE" | "ALLOW" | "ONLY";
  modified?: string; // date-time
  enterprises?: Enterprise[];
  gateways?: GatewayPoolGateway[];
}
export interface EnterpriseProxyGetEnterpriseProxyOperatorProfilesResultItem {
  created: string;
  description: string;
  edgeCount?: number;
  effective: string;
  id: number;
  modified: string;
  modules?: ConfigurationModule[];
  name: string;
  version: string;
  edges?: EdgeObject[];
  enterprises?: ConfigurationEnterprise[];
}
export interface EnterpriseProxyGetEnterpriseProxyUserResult {
  id?: number;
  created?: string; // date-time
  userType?: string;
  username?: string;
  domain?: string;
  password?: string; // password
  firstName?: string;
  lastName?: string;
  officePhone?: string;
  mobilePhone?: string;
  isNative?: boolean;
  isActive?: boolean;
  isLocked?: boolean;
  email?: string;
  lastLogin?: string; // date-time
  modified?: string; // date-time
  roleId?: number;
  roleName?: string;
  enterpriseProxyId?: number;
  networkId?: number;
}
export interface EnterpriseProxyGetEnterpriseProxyUsersResultItem {
  id?: number;
  created?: string; // date-time
  userType?: string;
  username?: string;
  domain?: string;
  password?: string; // password
  firstName?: string;
  lastName?: string;
  officePhone?: string;
  mobilePhone?: string;
  isNative?: boolean;
  isActive?: boolean;
  isLocked?: boolean;
  email?: string;
  lastLogin?: string; // date-time
  modified?: string; // date-time
  roleId?: number;
  roleName?: string;
  enterpriseProxyId?: number;
  networkId?: number;
}
export interface EnterpriseProxyInsertEnterpriseProxyEnterprise {
  city?: string;
  contactEmail?: string; // email
  contactMobile?: string;
  contactName?: string;
  contactPhone?: string;
  country?: string;
  lat?: number;
  lon?: number;
  name: string;
  postalCode?: string;
  state?: string;
  streetAddress?: string;
  streetAddress2?: string;
  gatewayPoolId?: number;
  networkId: number;
  returnData?: boolean;
  user?: AuthObject;
  configurationId: number;
  enableEnterpriseDelegationToOperator?: boolean;
  enableEnterpriseDelegationToProxy?: boolean;
  enableEnterpriseUserManagementDelegationToOperator?: boolean;
  enterpriseProxyId?: number;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseProxyInsertEnterpriseProxyEnterpriseResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseProxyInsertEnterpriseProxyUserResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseProxyUpdateEnterpriseProxyUserResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface EnterpriseRoute {
  type?: string;
  exitType?: string;
  edgeId?: number;
  edgeName?: string;
  profileId?: number;
  cidrIp?: string;
  cost?: number;
  advertise?: boolean;
}
export interface EnterpriseRouteCollection {
  eligableExits?: EnterpriseRoute[];
  preferredExits?: EnterpriseRoute[];
  subnet?: string;
}
export interface EnterpriseService {
  id?: number;
  enterpriseObjectId?: number;
  configurationId?: number;
  moduleId?: number;
  ref?: string;
  data?: {
  };
  version?: string;
  object?: string;
  name?: string;
  type: string;
  logicalId?: string;
}
export interface EnterpriseServiceNetwork {
  id?: number;
  enterpriseObjectId?: number;
  configurationId?: number;
  moduleId?: number;
  ref?: string;
  data?: EnterpriseServiceNetworkData;
  version?: string;
  object?: string;
  name?: string;
  type: string;
  logicalId?: string;
}
export interface EnterpriseServiceNetworkData {
  zone?: string;
  spaces?: {
    cidrIp?: string;
    cidrPrefix?: number;
    maxVlans?: number;
    mode?: string;
    name?: string;
    branchCidrPrefix?: number;
    guest?: boolean;
    vlans?: {
      name?: string;
      vlanId?: number;
      advertise?: boolean;
      cost?: number;
      staticReserved?: number;
      dhcp?: {
        enabled?: boolean;
        leaseTimeSeconds?: number;
      };
    }[];
  }[];
}
export interface EnterpriseSetEnterpriseAllAlertRecipientsResult {
  emailEnabled: boolean;
  emailList: string[];
  enterpriseUsers: EnterpriseAlertNotificationUserData[];
  mobileEnabled: boolean;
  mobileList: string[];
  smsEnabled: boolean;
  smsList: string[];
  snmpEnabled?: boolean;
  snmpList?: string[];
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseUpdateEnterpriseNetworkAllocationResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseUpdateEnterpriseNetworkSegmentResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseUpdateEnterpriseResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseUpdateEnterpriseRouteConfigurationResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface EnterpriseUpdateEnterpriseRouteResult {
  eligableExits: EnterpriseRoute[];
  preferredExits: EnterpriseRoute[];
  subnet: string;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseUpdateEnterpriseSecurityPolicyResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseUpdateEnterpriseServiceResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseUserDeleteEnterpriseUserResult {
  /**
   * The id of the deleted object.
   */
  id?: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface EnterpriseUserGetEnterpriseUserResult {
  id: number;
  created: string; // date-time
  userType: string;
  username: string;
  domain: string;
  password: string; // password
  firstName: string;
  lastName: string;
  officePhone: string;
  mobilePhone: string;
  isNative: boolean;
  isActive: boolean;
  isLocked: boolean;
  email: string;
  lastLogin: string; // date-time
  modified: string; // date-time
  roleId: number;
  roleName: string;
  enterpriseId: number;
  enterpriseProxyId: number;
  networkId: number;
}
/**
 * example:
 * [object Object]
 */
export interface EnterpriseUserUpdateEnterpriseUserResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface EnterpriseUserWithRoleAndAssocs {
  id?: number;
  created?: string; // date-time
  userType?: string;
  username?: string;
  domain?: string;
  password?: string; // password
  firstName?: string;
  lastName?: string;
  officePhone?: string;
  mobilePhone?: string;
  isNative?: boolean;
  isActive?: boolean;
  isLocked?: boolean;
  email?: string;
  lastLogin?: string; // date-time
  modified?: string; // date-time
  roleId?: number;
  roleName?: string;
  enterpriseId?: number;
  enterpriseProxyId?: number;
  networkId?: number;
}
export interface EnterpriseUserWithRoleInfo {
  id?: number;
  created?: string; // date-time
  userType?: string;
  username?: string;
  domain?: string;
  password?: string; // password
  firstName?: string;
  lastName?: string;
  officePhone?: string;
  mobilePhone?: string;
  isNative?: boolean;
  isActive?: boolean;
  isLocked?: boolean;
  email?: string;
  lastLogin?: string; // date-time
  modified?: string; // date-time
  roleId?: number;
  roleName?: string;
}
export interface EnterpriseWithProxyAttributes {
  id: number;
  created: string; // date-time
  networkId: number;
  gatewayPoolId: number;
  alertsEnabled: boolean;
  operatorAlertsEnabled: boolean;
  endpointPkiMode: "CERTIFICATE_DISABLED" | "CERTIFICATE_OPTIONAL" | "CERTIFICATE_REQUIRED";
  name: string;
  domain: string;
  prefix: string;
  logicalId: string;
  accountNumber: string;
  description: string;
  contactName: string;
  contactPhone: string;
  contactMobile: string;
  contactEmail: string;
  streetAddress: string;
  streetAddress2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  lat: number;
  lon: number;
  timezone: string;
  locale: string;
  modified: string; // date-time
  enterpriseProxyId?: number;
  enterpriseProxyName?: string;
}
export interface Error {
  error: {
    /**
     * A JSON-RPC error code (see http://www.jsonrpc.org/specification#error_object for details)
     * example:
     * -32600
     */
    code: number;
    /**
     * example:
     * An error occurred while processing your request
     */
    message: string;
  };
}
export interface EventBase {
  id?: number;
  eventTime?: string; // date-time
  event?: "EDGE_HEARTBEAT" | "GATEWAY_HEARTBEAT" | "USER_LOGIN" | "EDGE_ACTIVATION" | "GATEWAY_ACTIVATION" | "EDGE_FLOW_STATS" | "EDGE_PATHLINK_STATS" | "EDGE_PROVISION" | "CREATE_USER" | "CREATE_PROFILE" | "SOFTWARE_UPLOAD" | "OPERATOR_LOGIN" | "CREATE_SYSTEM_PROPERTY" | "UPDATE_SYSTEM_PROPERTY" | "DELETE_SYSTEM_PROPERTY" | "CREATE_ENTERPRISE" | "DELETE_ENTERPRISE" | "GATEWAY_PROVISION" | "DELETE_GATEWAY" | "EDGE_NEW_DEVICE" | "EDGE_NEW_USER" | "DISABLE_GATEWAY" | "ENABLE_GATEWAY" | "DEACTIVATE_GATEWAY" | "ACTIVATION_EMAIL" | "DELETE_PROFILE" | "SOFTWARE_PKG_DELETE" | "EDGE_REACTIVATION_REQ" | "EDGE_CANCEL_REACTIVATION_REQ" | "VPN_DATACENTER_STATUS" | "EDGE_RADIO_SETTINGS" | "VPN_ENABLE" | "VPN_DISABLE" | "VPN_UPDATE" | "USER_LOCKOUT" | "FIREWALL_ENABLE" | "FIREWALL_DISABLE" | "CREATE_ENTERPRISE_NETWORK_SERVICE" | "EDIT_ENTERPRISE_NETWORK_SERVICE" | "DELETE_ENTERPRISE_NETWORK_SERVICE" | "CREATE_ENTERPRISE_NETWORK" | "EDIT_ENTERPRISE_NETWORK" | "DELETE_ENTERPRISE_NETWORK" | "EDIT_PROFILE" | "SUPPORT_EMAIL" | "META_DATA_UPLOAD" | "META_DATA_DELETE" | "HA_STANDBY_ACTIVATED" | "HA_READY" | "HA_FAILED" | "HA_GOING_ACTIVE" | "HA_TERMINATED" | "EDGE_DOWN" | "EDGE_UP" | "GATEWAY_DOWN" | "CREATE_ENTERPRISE_PROXY" | "DELETE_ENTERPRISE_PROXY" | "DIAGNOSTIC_CLEANUP" | "GATEWAY_ACTIVATION_FAILURE" | "EDGE_ACTIVATION_FAILURE" | "DELETE_EDGE" | "PASSWORD_RESET" | "CRL_GENERATION" | "EDGE_CERTIFICATE_GENERATION" | "GATEWAY_CERTIFICATE_GENERATION" | "EDGE_DEACTIVATION" | "CLEAR_EDGE_HISTORY" | "PATCH_APPLICATION_SUCCESS" | "PATCH_APPLICATION_FAILURE" | "OPERATOR_LOGIN_FAILURE" | "USER_LOGIN_FAILURE" | "REMOTE_ACTION" | "CLONE_APPLICATION_MAP" | "UPDATE_APPLICATION_MAP" | "ROUTE_UPDATE" | "ROUTE_DELETE" | "HA_ACTIVATION_FAILURE" | "DR_CONFIGURATION_STARTED" | "DR_CONFIGURATION_SUCCESS" | "DR_CONFIGURATION_FAILURE" | "DR_CONFIGURATION_ABORTED" | "STORE_FLOW_STATS" | "ENTERPRISE_ENABLE_OPERATOR_USER_MGMT" | "ENTERPRISE_DISABLE_OPERATOR_USER_MGMT" | "ENTERPRISE_ENABLE_OPERATOR_ACCESS" | "ENTERPRISE_DISABLE_OPERATOR_ACCESS" | "ENTERPRISE_ENABLE_PROXY_ACCESS" | "ENTERPRISE_DISABLE_PROXY_ACCESS" | "PROXY_ENABLE_OPERATOR_ACCESS" | "PROXY_DISABLE_OPERATOR_ACCESS" | "EDGE_BGP_NEIGHBOR_UP" | "EDGE_BGP_NEIGHBOR_DOWN" | "GATEWAY_BGP_NEIGHBOR_UP" | "GATEWAY_BGP_NEIGHBOR_DOWN" | "CREATE_NETWORK_SEGMENT" | "UPDATE_NETWORK_SEGMENT" | "DELETE_NETWORK_SEGMENT" | "ADD_PROFILE_NETWORK_SEGMENT" | "REMOVE_PROFILE_NETWORK_SEGMENT" | "EDGE_TO_EDGE_VPN_ENABLE" | "EDGE_TO_EDGE_VPN_DISABLE" | "FIREWALL_LOG_ENABLE" | "FIREWALL_LOG_DISABLE" | "ADD_EDGE_NETWORK_SEGMENT" | "REMOVE_EDGE_NETWORK_SEGMENT" | "ENTERPRISE_SET_TEMPLATE_PROFILE" | "INVENTORY_EDGE_UNASSIGNED" | "INVENTORY_EDGE_IN_STAGING" | "INVENTORY_EDGE_STATE_CHANGE" | "DELETE_USER" | "CREATE_OPERATOR_USER" | "DELETE_OPERATOR_USER" | "EDGE_UPDATE_ATTRIBUTES" | "CREATE_PRIVATE_NETWORK" | "UPDATE_PRIVATE_NETWORK" | "DELETE_PRIVATE_NETWORK" | "CLOUD_SECURITY_ENABLE" | "CLOUD_SECURITY_DISABLE" | "CLOUD_SECURITY_ERROR" | "EDGE_NVS_TUNNEL_UP" | "EDGE_NVS_TUNNEL_DOWN" | "EXTERNAL_API_CALL" | "VRRP_INTO_MASTER_STATE" | "VRRP_OUT_OF_MASTER_STATE" | "VRRP_FAIL_INFO" | "VNF_VM_DEPLOY" | "VNF_VM_DELETE" | "VNF_VM_ERROR" | "VNF_VM_EVENT" | "VNF_INSERTION_ENABLED" | "VNF_INSERTION_DISABLED" | "EDGE_MULTICAST_ROUTES" | "EDGE_NEW_CONFIGURATION_ASSIGNED";
  category?: "SYSTEM" | "NETWORK" | "APPLICATION" | "USER" | "SECURITY" | "EDGE" | "GATEWAY" | "CONFIGURATION" | "ENTERPRISE";
  severity?: "EMERGENCY" | "ALERT" | "CRITICAL" | "ERROR" | "WARNING" | "NOTICE" | "INFO" | "DEBUG";
  message?: string;
}
export interface EventGetEnterpriseEventsResult {
  data: EnterpriseEvent[];
  metaData: ListMetadata;
}
export interface EventGetOperatorEventsResult {
  data: OperatorEvent[];
  metaData: ListMetadata;
}
export interface Firewall {
  id?: number;
  name: "imageUpdate" | "controlPlane" | "managementPlane" | "firewall" | "QOS" | "deviceSettings" | "WAN" | "metaData" | "properties";
  type?: "ENTERPRISE" | "OPERATOR" | "GATEWAY";
  description?: string;
  configurationId?: number;
  data: FirewallData;
  refs?: {
  };
}
export interface FirewallData {
  firewall_enabled: boolean;
  firewall_logging_enabled: boolean;
  inbound: FirewallInboundRule[];
  outbound: FirewallOutboundRule[];
  services: {
    loggingEnabled: boolean;
    ssh?: {
      enabled: boolean;
      allowSelectedIp?: string[];
      ruleLogicalId?: string;
    };
    localUi?: {
      enabled: boolean;
      /**
       * List of IP addresses allowed UI access
       */
      allowSelectedIp?: string[];
      portNumber: number;
      ruleLogicalId?: string;
    };
    snmp?: {
      enabled: boolean;
      /**
       * List of IP addresses allowed SNMP access
       */
      allowSelectedIp?: string[];
      ruleLogicalId?: string;
    };
    icmp?: {
      enabled: boolean;
      /**
       * List of IP addresses allowed ICMP access
       */
      allowSelectedIp?: string[];
      ruleLogicalId?: string;
    };
  };
}
export interface FirewallGetEnterpriseFirewallLogsResult {
  metaData?: ListMetadata;
  data?: FirewallLogData[];
  rules?: {
    [name: string]: FirewallRule;
  };
}
export interface FirewallInboundRule {
  name?: string;
  match: FirewallRuleMatch;
  action: {
    type: "port_forwarding" | "one_to_one_nat";
    nat: {
      lan_ip: string;
      lan_port?: number;
      outbound?: boolean;
    };
    /**
     * The name of the interface from which traffic should be forwarded
     */
    interface: string;
    subinterfaceId?: number;
  };
  ruleLogicalId?: string;
}
export interface FirewallLogData {
  id?: number;
  edgeId?: number;
  timestamp?: string; // date-time
  allow?: number;
  ruleLogicalId?: string;
  interface?: string;
  protocol?: "ICMP" | "TCP" | "UDP" | "GRE";
  sourceIp?: string;
  sourcePort?: number;
  destIp?: string;
  destPort?: number;
  icmpType?: string;
  length?: number;
}
export interface FirewallOutboundRule {
  name?: string;
  match: FirewallRuleMatch;
  action: {
    allow_or_deny?: "allow" | "deny";
  };
  ruleLogicalId?: string;
}
export interface FirewallRule {
  created?: string; // date-time
  data?: string;
  deactivated?: string;
  edgeLogicalId?: string;
  enterpriseId?: number;
  id?: number;
  logicalId?: string;
  name?: string;
  type?: "INBOUND" | "OUTBOUND" | "SERVICE";
}
export interface FirewallRuleMatch {
  /**
   * Integer ID corresponding to an application in the network-level application map
   */
  appid?: number;
  /**
   * Integer ID corresponding to an application class in the network-level application map
   */
  classid?: number;
  /**
   * Integer ID indicating DSCP classification
   */
  dscp?: number;
  /**
   * Source IP address
   */
  sip?: string;
  /**
   * Upper bound of a source port range
   */
  sport_high?: number;
  /**
   * Lower bound of a source port range
   */
  sport_low?: number;
  /**
   * Source subnet mask, e.g. 255.255.255.0
   */
  ssm?: string;
  /**
   * Source MAC address
   */
  smac?: string;
  /**
   * Integer ID for the source VLAN
   */
  svlan?: number;
  os_version?: number;
  hostname?: string;
  /**
   * Destination IP address
   */
  dip?: string;
  /**
   * Lower bound of a destination port range
   */
  dport_low?: number;
  /**
   * Upper bound of a destination port range
   */
  dport_high?: number;
  /**
   * Destination subnet mask e.g. 255.255.255.0
   */
  dsm?: string;
  /**
   * Destination MAC address
   */
  dmac?: string;
  /**
   * Integer ID for the destination VLAN
   */
  dvlan?: number;
  /**
   * Integer ID corresponding to a protocol
   */
  proto?: number;
}
export interface FlowMetricSummary {
  bytesRx?: number;
  bytesTx?: number;
  flowCount?: number;
  packetsRx?: number;
  packetsTx?: number;
  totalBytes?: number;
  totalPackets?: number;
}
export interface FlowMetricTimeSeriesItem {
  data: number[];
  max: number;
  metric: BasicMetric;
  min: number;
  startTime: string; // date-time
  tickInterval: number;
  total: number;
}
export interface FlowMetricTimeSeriesMetaBase {
  series: FlowMetricTimeSeriesItem[];
}
export interface GatewayCertificate {
  id?: number;
  created?: string; // date-time
  csrId?: number;
  gatewayId?: number;
  networkId?: number;
  certificate?: string;
  serialNumber?: string;
  subjectKeyId?: string;
  fingerPrint?: string;
  validFrom?: string; // date-time
  validTo?: string; // date-time
}
/**
 * example:
 * [object Object]
 */
export interface GatewayDeleteGatewayResult {
  /**
   * The id of the deleted object.
   */
  id?: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface GatewayEnterpriseAssoc {
  id?: number;
  created?: string; // date-time
  networkId?: number;
  gatewayPoolId?: number;
  alertsEnabled?: boolean;
  operatorAlertsEnabled?: boolean;
  endpointPkiMode?: "CERTIFICATE_DISABLED" | "CERTIFICATE_OPTIONAL" | "CERTIFICATE_REQUIRED";
  name?: string;
  domain?: string;
  prefix?: string;
  logicalId?: string;
  accountNumber?: string;
  description?: string;
  contactName?: string;
  contactPhone?: string;
  contactMobile?: string;
  contactEmail?: string;
  streetAddress?: string;
  streetAddress2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  lat?: number;
  lon?: number;
  timezone?: string;
  locale?: string;
  modified?: string; // date-time
  enterpriseId?: number;
  enterpriseObjectId?: number;
  edgeId?: number;
  gatewayType?: "OTHER" | "SUPER" | "DATACENTER" | "HANDOFF";
  pinned?: number;
  enterpriseObjectName?: string;
  enterpriseObjectType?: string;
  edgeName?: string;
  edgeLogicalId?: string;
}
export interface GatewayGatewayPool {
  id?: number;
  networkId?: number;
  enterpriseProxyId?: number;
  created?: string; // date-time
  name?: string;
  description?: string;
  isDefault?: boolean;
  handOffType?: "NONE" | "ALLOW" | "ONLY";
  modified?: string; // date-time
  gatewayPoolAssocId?: number;
  gatewayId?: number;
}
export interface GatewayGatewayProvisionResult {
  activationKey: string;
  id: number;
  logicalId: string;
}
export interface GatewayHandoff {
  enterpriseId?: number;
  value?: {
    type?: "802.1Q" | "802.1ad" | "QinQ (0x9100)" | "QinQ (0x8100)";
    override?: boolean;
    cTag?: number;
    sTag?: number;
    localAddress?: {
      cidrIp?: string;
      cidrPrefix?: number;
      useForPrivate?: boolean;
      advertiseViaBgp?: boolean;
      override?: boolean;
    };
    staticRoutes?: {
      override?: boolean;
      subnets?: {
        name?: string;
        cidrIp?: string;
        cidrPrefix?: number;
        encrypt?: boolean;
        handOffType?: "NAT" | "VLAN";
        routeCost?: number;
      }[];
    };
    bgp?: {
      enabled?: boolean;
      ASN?: string;
      neighborIp?: string;
      neighborASN?: string;
      encryption?: boolean;
    };
    bgpInboundMap?: GatewayHandoffBgpRulesMap;
    bgpOutboundMap?: GatewayHandoffBgpRulesMap;
    overrides?: {
      VLAN?: {
        [name: string]: {
          type?: string;
          cTag?: number;
          sTag?: number;
          transportLanVLAN?: string;
        };
      };
      bgp?: {
        [name: string]: {
          enabled?: boolean;
          ASN?: string;
          neighborIp?: string;
          neighborASN?: string;
          encryption?: boolean;
        };
      };
      bgpInboundMap?: {
        [name: string]: GatewayHandoffBgpRulesMap;
      };
      bgpOutboundMap?: {
        [name: string]: GatewayHandoffBgpRulesMap;
      };
      localAddress?: {
        [name: string]: {
          cidrIp?: string;
          cidrPrefix?: number;
          useForPrivate?: boolean;
          advertiseViaBgp?: boolean;
        };
      };
      subnets?: {
        [name: string]: {
        }[];
      };
    };
  };
}
export interface GatewayHandoffBgpRule {
  action?: {
    type?: string;
    values?: {
      type?: string;
      value?: string;
    }[];
  };
  match?: {
    exactMatch?: boolean;
    type?: string;
    value?: string;
  };
}
export interface GatewayHandoffBgpRulesMap {
  rules?: GatewayHandoffBgpRule[];
  override?: boolean;
}
export interface GatewayHandoffDetail {
  type?: string;
  subnets?: {
    name?: string;
    routeCost?: number;
    cidrIp?: string;
    cidrPrefix?: number;
    encrypt?: boolean;
    handOffType?: "NAT" | "VLAN";
  }[];
  icmpProbe?: {
    enabled?: boolean;
    probeType?: string;
    cTag?: number;
    sTag?: number;
    destinationIp?: string;
    frequencySeconds?: number;
    threshold?: number;
  };
  icmpResponder?: {
    enabled?: boolean;
    ipAddress?: string;
    mode?: string;
  };
}
export interface GatewayHandoffEdge {
  activationKey?: string;
  activationKeyExpires?: string;
  activationState?: "UNASSIGNED" | "PENDING" | "ACTIVATED" | "REACTIVATION_PENDING";
  activationTime?: string;
  alertsEnabled?: number;
  buildNumber?: string;
  created?: string;
  description?: string;
  deviceFamily?: string;
  deviceId?: string;
  dnsName?: string;
  edgeHardwareId?: string;
  edgeState?: "NEVER_ACTIVATED" | "DEGRADED" | "OFFLINE" | "DISABLED" | "EXPIRED" | "CONNECTED";
  edgeStateTime?: string;
  endpointPkiMode?: "CERTIFICATE_DISABLED" | "CERTIFICATE_OPTIONAL" | "CERTIFICATE_REQUIRED";
  enterpriseId?: number;
  haLastContact?: string;
  haPreviousState?: "UNCONFIGURED" | "PENDING_INIT" | "PENDING_CONFIRMATION" | "PENDING_CONFIRMED" | "PENDING_DISSOCIATION" | "READY" | "FAILED";
  haSerialNumber?: string;
  haState?: "UNCONFIGURED" | "PENDING_INIT" | "PENDING_CONFIRMATION" | "PENDING_CONFIRMED" | "PENDING_DISSOCIATION" | "READY" | "FAILED";
  id?: number;
  isLive?: number;
  lastContact?: string;
  logicalId?: string;
  modelNumber?: "edge500" | "edge5X0" | "edge510" | "edge840" | "edge1000" | "edge1000qat" | "virtual";
  modified?: string;
  name?: string;
  operatorAlertsEnabled?: number;
  selfMacAddress?: string;
  serialNumber?: string;
  serviceState?: "IN_SERVICE" | "OUT_OF_SERVICE" | "PENDING_SERVICE";
  serviceUpSince?: string;
  siteId?: number;
  softwareUpdated?: string;
  softwareVersion?: string;
  systemUpSince?: string;
  edgeId?: number;
  isPrimary?: number;
  pinned?: number;
  enterpriseLogicalId?: string;
  enterpriseName?: string;
}
export interface GatewayHandoffIpsecGatewayDetail {
  ipsecGatewayAddress: string;
  strictHostCheck?: boolean;
  strictHostCheckDN?: string;
}
export interface GatewayPool {
  id?: number;
  networkId?: number;
  enterpriseProxyId?: number;
  created?: string; // date-time
  name?: string;
  description?: string;
  isDefault?: boolean;
  handOffType?: "NONE" | "ALLOW" | "ONLY";
  modified?: string; // date-time
}
export interface GatewayPoolGateway {
  gatewayPoolAssocId?: number;
  poolName?: string;
  id?: number;
  created?: string; // date-time
  networkId?: number;
  enterpriseProxyId?: number;
  siteId?: number;
  activationKey?: string;
  activationState?: string;
  activationTime?: string; // date-time
  softwareVersion?: string;
  buildNumber?: string;
  utilization?: number;
  utilizationDetail?: {
    load?: number;
    overall?: number;
    cpu?: number;
    memory?: number;
  };
  connectedEdges?: number;
  connectedEdgeList?: {
    vceid?: string;
  }[];
  deviceId?: string;
  logicalId?: string;
  name?: string;
  gatewayState?: string;
  alertsEnabled?: number;
  description?: string;
  dnsName?: string;
  isLoadBalanced?: number;
  privateIpAddress?: string;
  ipAddress?: string;
  lastContact?: string; // date-time
  systemUpSince?: string; // date-time
  serviceUpSince?: string; // date-time
  serviceState?: string;
  endpointPkiMode?: string;
  handOffDetail?: GatewayHandoffDetail;
  ipsecGatewayDetail?: {
    strictHostCheck?: boolean;
    strictHostCheckDN?: string;
  };
  modified?: string; // date-time
}
export interface GatewayRole {
  created?: string; // date-time
  gatewayId?: number;
  gatewayRole?: "DATA_PLANE" | "CONTROL_PLANE" | "VPN_TUNNEL" | "ON_PREMISE" | "CDE";
  required?: number;
}
export type GatewayRolesObject = {
  gatewayRole?: "DATA_PLANE" | "CONTROL_PLANE" | "VPN_TUNNEL" | "ON_PREMISE" | "CDE";
  required?: boolean;
}[];
export interface GatewaySite {
  city?: string;
  contactEmail?: string; // email
  contactMobile?: string;
  contactName?: string;
  contactPhone?: string;
  country?: string;
  lat?: number;
  lon?: number;
  name?: string;
  postalCode?: string;
  state?: string;
  streetAddress?: string;
  streetAddress2?: string;
  id?: number;
  created?: string; // date-time
  modified?: string; // date-time
  timezone?: string;
  locale?: string;
  shippingSameAsLocation?: number;
  shippingContactName?: string;
  shippingAddress?: string;
  shippingAddress2?: string;
  shippingCity?: string;
  shippingState?: string;
  shippingPostalCode?: string;
  shippingCountry?: string;
}
/**
 * example:
 * [object Object]
 */
export interface GatewayUpdateGatewayAttributesResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface GenericRefs {
  [name: string]: EnterpriseService;
}
export interface IdMapOneToMany {
  [name: string]: number;
}
export interface ImageUpdate {
  id?: number;
  name: "imageUpdate" | "controlPlane" | "managementPlane" | "firewall" | "QOS" | "deviceSettings" | "WAN" | "metaData" | "properties";
  type?: "ENTERPRISE" | "OPERATOR" | "GATEWAY";
  description?: string;
  configurationId?: number;
  data: ImageUpdateData;
  refs?: {
  };
}
export interface ImageUpdateData {
  buildNumber?: string;
  profileDeviceFamily?: string;
  profileVersion?: string;
  softwarePackageId?: number;
  softwarePackageName?: string;
  version?: string;
  windowDurationMins?: number;
  windowed?: boolean;
}
/**
 * example:
 * [object Object]
 */
export interface InsertionConfirmation {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
export interface Interval {
  end?: string; // date-time
  start: string; // date-time
}
export interface InventoryItem {
  id?: number;
  deviceSerialNumber?: string;
  deviceUuid?: string;
  modelNumber?: string;
  siteId?: number;
  description?: string;
  acknowledged?: number;
  edgeId?: number;
  edge?: {
    id?: number;
    edge?: string;
    site?: {
      name?: string;
    };
  };
  inventoryState?: string;
  inventoryEdgeState?: string;
  inventoryAction?: string;
  vcoOwnerId?: number;
  vcoOwner?: {
    accountNumber?: string;
    name?: string;
  };
  modified?: string; // date-time
}
export interface IpPortMapping {
  subnets?: string[];
  tcpPorts?: number[];
  udpPorts?: number[];
}
export interface Link {
  id: number;
  created: string; // date-time
  edgeId: number;
  logicalId: string;
  internalId: string;
  interface: string;
  macAddress: string;
  ipAddress: string;
  netmask: string;
  networkSide: "UNKOWN" | "WAN" | "LAN";
  networkType: "UNKNOWN" | "WIRELESS" | "ETHERNET" | "WIFI";
  displayName: string;
  isp: string;
  org: string;
  lat: number;
  lon: number;
  lastActive: string; // date-time
  state: "UNKNOWN" | "STABLE" | "UNSTABLE" | "DISCONNECTED" | "QUIET" | "INITIAL" | "STANDBY";
  backupState: "UNCONFIGURED" | "STANDBY" | "ACTIVE";
  vpnState: "UNKNOWN" | "STABLE" | "UNSTABLE" | "DEAD" | "STANDBY";
  lastEvent: string; // date-time
  lastEventState: "UNKNOWN" | "STABLE" | "UNSTABLE" | "DISCONNECTED" | "QUIET" | "INITIAL" | "STANDBY";
  alertsEnabled: number;
  operatorAlertsEnabled: number;
  serviceState: "IN_SERVICE" | "OUT_OF_SERVICE" | "HISTORICAL";
  modified: string; // date-time
  serviceGroups?: LinkServiceGroups;
}
export interface LinkQualityEventGetLinkQualityEventsResult {
  [name: string]: LinkQualityObject;
  overallLinkQuality?: LinkQualityObject;
}
export interface LinkQualityObject {
  distribution: LinkQualityObjectDistribution;
  sampleCount: number;
  sampleLength: number;
  score: {
    [name: string]: number;
  };
  timeseries: LinkQualityObjectTimeseriesData[];
  totalScore: number;
}
export interface LinkQualityObjectDistribution {
  [name: string]: {
    [name: string]: number;
  };
}
export interface LinkQualityObjectTimeseriesData {
  before?: {
    [name: string]: number;
  };
  after: {
    [name: string]: number;
  };
  metadata: {
    detail?: {
      latencyMsRx?: number;
      latencyMsTx?: number;
      lossPctRx?: number;
      lossPctTx?: number;
      jitterMsRx?: number;
      jitterMsTx?: number;
    };
    metrics?: {
      trafficType?: 0 | 1 | 2;
      action?: 0 | 1 | 2 | 3 | 4;
      metric?: 0 | 1 | 2 | 3 | 4 | 5;
      beforeState?: 0 | 1 | 2 | 3 | 4;
      afterState?: 0 | 1 | 2 | 3 | 4;
    }[];
    stateMap?: {
      [name: string]: {
        [name: string]: {
          before?: number;
          after?: number;
          action?: number;
        };
      };
    };
  };
  timestamp: number;
}
export type LinkServiceGroups = ("ALL" | "PRIVATE_WIRED" | "PUBLIC_WIRED" | "PUBLIC_WIRELESS")[];
export interface ListMetadata {
  limit: number;
  more: boolean;
}
export interface LiveModeData {
  linkStats: LiveModeDataLinkStats;
}
export interface LiveModeDataLinkStats {
  data: LiveModeDataLinkStatsData[];
  timestamp: string; // date-time
  type: string;
}
export interface LiveModeDataLinkStatsData {
  data: LiveModeDataLinkStatsDataData[];
  timestamp: string; // date-time
  type: string;
}
export interface LiveModeDataLinkStatsDataData {
  backupOnly?: number;
  bestJitterMsRx?: number;
  bestJitterMsTx?: number;
  bestLatencyMsRx?: number;
  bestLatencyMsTx?: number;
  bestLossPctRx?: number;
  bestLossPctTx?: number;
  bpsOfBestPathRx?: number;
  bpsOfBestPathTx?: number;
  controlBytesRx?: number;
  controlBytesTx?: number;
  controlPacketsRx?: number;
  controlPacketsTx?: number;
  destinations?: Destinations[];
  icmpBytesRx?: number;
  icmpBytesTx?: number;
  icmpPacketsRx?: number;
  icmpPacketsTx?: number;
  interface?: string;
  internalId?: string;
  localIpAddress?: string;
  logicalId?: string;
  mode?: "PUBLIC" | "PRIVATE";
  mtu?: number;
  name?: string;
  otherBytesRx?: number;
  otherBytesTx?: number;
  otherPacketsRx?: number;
  otherPacketsTx?: number;
  p1BytesRx?: number;
  p1BytesTx?: number;
  p1PacketsRx?: number;
  p1PacketsTx?: number;
  p2BytesRx?: number;
  p2BytesTx?: number;
  p2PacketsRx?: number;
  p2PacketsTx?: number;
  p3BytesRx?: number;
  p3BytesTx?: number;
  p3PacketsRx?: number;
  p3PacketsTx?: number;
  publicIpAddress?: string;
  scoreRx?: number;
  scoreTx?: number;
  signalStrength?: number;
  state?: "UNKNOWN" | "STABLE" | "UNSTABLE" | "DISCONNECTED" | "QUIET" | "INITIAL" | "STANDBY";
  tcpBytesRx?: number;
  tcpBytesTx?: number;
  tcpPacketsRx?: number;
  tcpPacketsTx?: number;
  type?: "WIRED" | "WIRELESS";
  udpBytesRx?: number;
  udpBytesTx?: number;
  udpHolePunching?: number;
  udpPacketsRx?: number;
  udpPacketsTx?: number;
  vlanId?: number;
  vpnState?: "UNKNOWN" | "STABLE" | "UNSTABLE" | "DEAD" | "STANDBY";
}
export interface LiveModeEnterLiveModeResult {
  /**
   * The ID of the action queued
   */
  actionId?: number;
  alreadyLive?: boolean;
  lastContact?: number;
  refreshIntervalMs?: number;
  token?: string;
  url?: string;
}
export interface LiveModeExitLiveModeResult {
  /**
   * The ID of the action queued
   */
  id: string;
}
export interface LiveModeReadLiveDataResult {
  data: LiveModeData;
  status: LiveModeStatus;
  timestamp: number;
}
export interface LiveModeStatus {
  isActive: boolean;
  lastContact: number;
}
export interface ManagementPlane {
  id?: number;
  name: "imageUpdate" | "controlPlane" | "managementPlane" | "firewall" | "QOS" | "deviceSettings" | "WAN" | "metaData" | "properties";
  type?: "ENTERPRISE" | "OPERATOR" | "GATEWAY";
  description?: string;
  configurationId?: number;
  data: ManagementPlaneData;
  refs?: {
  };
}
export interface ManagementPlaneData {
  heartBeatSeconds?: number;
  managementPlaneProxy?: {
    primary?: string;
    secondary?: string;
  };
  statsUploadSeconds?: number;
  timeSliceSeconds?: number;
}
export interface MetaData {
  id?: number;
  name: "imageUpdate" | "controlPlane" | "managementPlane" | "firewall" | "QOS" | "deviceSettings" | "WAN" | "metaData" | "properties";
  type?: "ENTERPRISE" | "OPERATOR" | "GATEWAY";
  description?: string;
  configurationId?: number;
  data: MetadataData;
  refs?: {
  };
}
export interface MetadataData {
  applications?: {
    logicalId?: string;
    type?: string;
    version?: string;
  };
}
export interface MetricsGetEdgeAppLinkMetricsResultItem {
  bytesRx?: number;
  bytesTx?: number;
  flowCount?: number;
  packetsRx?: number;
  packetsTx?: number;
  totalBytes?: number;
  totalPackets?: number;
  linkId: number;
  name: number;
  serviceGroups: LinkServiceGroups;
}
export interface MetricsGetEdgeAppLinkSeriesResultItem {
  series: FlowMetricTimeSeriesItem[];
  name: number;
  serviceGroups: LinkServiceGroups;
}
export interface MetricsGetEdgeAppMetricsResultItem {
  bytesRx?: number;
  bytesTx?: number;
  flowCount?: number;
  packetsRx?: number;
  packetsTx?: number;
  totalBytes?: number;
  totalPackets?: number;
  application: number;
  category?: number;
  name: number;
  linkId?: number;
}
export interface MetricsGetEdgeAppSeriesResultItem {
  series: FlowMetricTimeSeriesItem[];
  name: number;
}
export interface MetricsGetEdgeCategoryMetricsResultItem {
  bytesRx?: number;
  bytesTx?: number;
  flowCount?: number;
  packetsRx?: number;
  packetsTx?: number;
  totalBytes?: number;
  totalPackets?: number;
  category: number;
  name: number;
}
export interface MetricsGetEdgeCategorySeriesResultItem {
  series: FlowMetricTimeSeriesItem[];
  name: number;
}
export interface MetricsGetEdgeDestMetricsResultItem {
  bytesRx?: number;
  bytesTx?: number;
  flowCount?: number;
  packetsRx?: number;
  packetsTx?: number;
  totalBytes?: number;
  totalPackets?: number;
  destDomain: string;
  name: string;
}
export interface MetricsGetEdgeDestSeriesResultItem {
  series: FlowMetricTimeSeriesItem[];
  name: string;
}
export interface MetricsGetEdgeDeviceMetricsDeviceEdgeInfo {
  edgeId?: number;
  enterpriseId?: number;
  hostName?: string;
  id?: number;
  ipAddress?: string;
  lastContact?: string; // date-time
  macAddress?: string;
}
export interface MetricsGetEdgeDeviceMetricsResultItem {
  bytesRx?: number;
  bytesTx?: number;
  flowCount?: number;
  packetsRx?: number;
  packetsTx?: number;
  totalBytes?: number;
  totalPackets?: number;
  edgeInfo: MetricsGetEdgeDeviceMetricsDeviceEdgeInfo;
  info: ClientDevice;
  name: string;
  sourceMac: string;
}
export interface MetricsGetEdgeDeviceSeriesResultItem {
  series: FlowMetricTimeSeriesItem[];
  name: string;
}
export interface MetricsGetEdgeLinkMetricsResultItem {
  bestJitterMsRx?: number;
  bestJitterMsTx?: number;
  bestLatencyMsRx?: number;
  bestLatencyMsTx?: number;
  bestLossPctRx?: number;
  bestLossPctTx?: number;
  bpsOfBestPathRx?: number;
  bpsOfBestPathTx?: number;
  controlBytesRx?: number;
  controlBytesTx?: number;
  controlPacketsRx?: number;
  controlPacketsTx?: number;
  link: Link;
  linkId: number;
  name: string;
  p1BytesRx?: number;
  p1BytesTx?: number;
  p1PacketsRx?: number;
  p1PacketsTx?: number;
  p2BytesRx?: number;
  p2BytesTx?: number;
  p2PacketsRx?: number;
  p2PacketsTx?: number;
  p3BytesRx?: number;
  p3BytesTx?: number;
  p3PacketsRx?: number;
  p3PacketsTx?: number;
  scoreRx?: number;
  scoreTx?: number;
  signalStrength?: number;
  state?: number;
}
export interface MetricsGetEdgeLinkSeriesResultItem {
  series: FlowMetricTimeSeriesItem[];
  edgeId: number;
  link: Link;
  linkId: number;
}
export interface MetricsGetEdgeOsMetricsResultItem {
  bytesRx?: number;
  bytesTx?: number;
  flowCount?: number;
  packetsRx?: number;
  packetsTx?: number;
  totalBytes?: number;
  totalPackets?: number;
  name: number;
  os: number;
}
export interface MetricsGetEdgeOsSeriesResultItem {
  series: FlowMetricTimeSeriesItem[];
  name: number;
}
export interface MetricsGetEdgeSegmentMetricsResultItem {
  bytesRx?: number;
  bytesTx?: number;
  flowCount?: number;
  packetsRx?: number;
  packetsTx?: number;
  totalBytes?: number;
  totalPackets?: number;
  segment: number;
  name: number;
}
export interface MetricsGetEdgeSegmentSeriesResultItem {
  series: FlowMetricTimeSeriesItem[];
  name: number;
}
export interface ModelConfiguration {
  created?: string;
  description?: string;
  edgeCount?: number;
  effective?: string;
  id?: number;
  modified?: string;
  modules?: ConfigurationModule[];
  name?: string;
  version?: string;
}
export interface MonitoringGetAggregateEdgeLinkMetricsResultItem {
  bestJitterMsRx?: number;
  bestJitterMsTx?: number;
  bestLatencyMsRx?: number;
  bestLatencyMsTx?: number;
  bestLossPctRx?: number;
  bestLossPctTx?: number;
  bpsOfBestPathRx?: number;
  bpsOfBestPathTx?: number;
  controlBytesRx?: number;
  controlBytesTx?: number;
  controlPacketsRx?: number;
  controlPacketsTx?: number;
  link: {
    enterpriseName?: string;
    enterpriseId?: number;
    edgeName?: string;
    edgeSerialNumber?: string;
    edgeHASerialNumber?: string;
    edgeState?: "NEVER_ACTIVATED" | "DEGRADED" | "OFFLINE" | "DISABLED" | "EXPIRED" | "CONNECTED";
    edgeLastContact?: string; // date-time
    edgeId: number;
    edgeSystemUpSince?: string; // date-time
    edgeServiceUpSince?: string; // date-time
    edgeModelNumber?: "edge500" | "edge5X0" | "edge510" | "edge840" | "edge1000" | "edge1000qat" | "virtual";
    isp: string;
    displayName: string;
    interface: string;
    linkId?: number;
    linkState?: "UNKNOWN" | "STABLE" | "UNSTABLE" | "DISCONNECTED" | "QUIET" | "INITIAL" | "STANDBY";
    linkLastActive?: string; // date-time
    linkVpnState?: "UNKNOWN" | "STABLE" | "UNSTABLE" | "DEAD" | "STANDBY";
  };
  linkId: number;
  name: string;
  p1BytesRx?: number;
  p1BytesTx?: number;
  p1PacketsRx?: number;
  p1PacketsTx?: number;
  p2BytesRx?: number;
  p2BytesTx?: number;
  p2PacketsRx?: number;
  p2PacketsTx?: number;
  p3BytesRx?: number;
  p3BytesTx?: number;
  p3PacketsRx?: number;
  p3PacketsTx?: number;
  scoreRx?: number;
  scoreTx?: number;
  signalStrength?: number;
  state?: number;
}
export interface MonitoringGetAggregateEnterpriseEventsResult {
  data: AggregateEnterpriseEvent[];
  metaData: ListMetadata;
}
export interface MonitoringGetAggregatesResult {
  edgeCount?: number;
  edges?: {
    [name: string]: number;
  };
  enterprises?: EnterpriseWithProxyAttributes[];
}
export interface MonitoringGetEnterpriseBgpPeerStatusResultItem {
  gatewayName?: string;
  gatewayLogicalId?: string;
  neighbors?: BgpPeerStatus[];
}
export interface MonitoringGetEnterpriseEdgeBgpPeerStatusResultItem {
  edgeName?: string;
  edgeId?: number;
  edgeLogicalId?: string;
  neighbors?: BgpPeerStatus[];
}
export interface MonitoringGetEnterpriseEdgeLinkStatusResultItem {
  edgeId: number;
  edgeLastContact: string; // date-time
  edgeModelNumber: string;
  edgeName: string;
  edgeServiceUpSince: string; // date-time
  edgeState: "NEVER_ACTIVATED" | "DEGRADED" | "OFFLINE" | "DISABLED" | "EXPIRED" | "CONNECTED";
  edgeSystemUpSince: string; // date-time
  enterpriseId: number;
  enterpriseName: string;
  interface: string;
  isp: string;
  linkId: number;
  linkLastActive: string; // date-time
  linkState: "UNKNOWN" | "STABLE" | "UNSTABLE" | "DISCONNECTED" | "QUIET" | "INITIAL" | "STANDBY";
}
export interface MonitoringGetEnterpriseEdgeVnfStatusResultItem {
  id: number;
  created: string; // date-time
  operatorId: number;
  networkId: number;
  enterpriseId: number;
  edgeId: number;
  gatewayId: number;
  parentGroupId: number;
  description: string;
  object: string;
  name: string;
  type: string;
  logicalId: string;
  alertsEnabled: boolean;
  operatorAlertsEnabled: boolean;
  status: string;
  statusModified: string; // date-time
  previousData: string;
  previousCreated: string; // date-time
  draftData: string;
  draftCreated: string; // date-time
  draftComment: string;
  data: {
    type?: string;
    vendor?: string;
    vendorSpecificData?: {
    };
  };
  lastContact: string; // date-time
  version: string;
  modified: string; // date-time
  edgeCount?: number;
  edgeUsage?: {
    configurationId?: number;
    edgeSpecificId?: number;
    name?: string;
    logicalId?: string;
    profileId?: number;
    vnfStatus?: {
      description?: string;
      status?: string;
      vmStatus?: string;
      vnfInsertionEnabled?: string;
    };
  }[];
}
/**
 * example:
 * [object Object]
 */
export interface NetworkDeleteNetworkGatewayPoolResult {
  /**
   * The id of the deleted object.
   */
  id?: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface NetworkGetNetworkConfigurationsResultItem {
  created: string;
  description: string;
  edgeCount?: number;
  effective: string;
  id: number;
  modified: string;
  modules?: ConfigurationModule[];
  name: string;
  version: string;
}
export interface NetworkGetNetworkEnterprisesResultItem {
  id?: number;
  created?: string; // date-time
  networkId?: number;
  gatewayPoolId?: number;
  alertsEnabled?: boolean;
  operatorAlertsEnabled?: boolean;
  endpointPkiMode?: "CERTIFICATE_DISABLED" | "CERTIFICATE_OPTIONAL" | "CERTIFICATE_REQUIRED";
  name?: string;
  domain?: string;
  prefix?: string;
  logicalId?: string;
  accountNumber?: string;
  description?: string;
  contactName?: string;
  contactPhone?: string;
  contactMobile?: string;
  contactEmail?: string;
  streetAddress?: string;
  streetAddress2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  lat?: number;
  lon?: number;
  timezone?: string;
  locale?: string;
  modified?: string; // date-time
  enterpriseProxyId?: number;
  enterpriseProxyName?: string;
  edgeCount?: number;
  edges?: EdgeObject[];
  edgeConfigUpdate?: {
    enabled?: boolean;
    enabledOnUpgrade?: boolean;
  };
}
export interface NetworkGetNetworkGatewayPoolsResultItem {
  id: number;
  networkId: number;
  enterpriseProxyId: number;
  created: string; // date-time
  name: string;
  description: string;
  isDefault: boolean;
  handOffType: "NONE" | "ALLOW" | "ONLY";
  modified: string; // date-time
  gateways?: GatewayPoolGateway[];
  enterprises?: EnterpriseWithProxyAttributes[];
}
export interface NetworkGetNetworkGatewaysResultItem {
  activationKey?: string;
  activationState?: "UNASSIGNED" | "PENDING" | "ACTIVATED" | "REACTIVATION_PENDING";
  activationTime?: string;
  alertsEnabled?: boolean;
  buildNumber?: string;
  certificates?: GatewayCertificate[];
  connectedEdges?: number;
  connectedEdgeList?: {
    vceid?: string;
  }[];
  created?: string; // date-time
  dataCenters?: EnterpriseObjectBase[];
  description?: string;
  deviceId?: string;
  dnsName?: string;
  endpointPkiMode?: "CERTIFICATE_DISABLED" | "CERTIFICATE_OPTIONAL" | "CERTIFICATE_REQUIRED";
  enterpriseAssociations?: GatewayEnterpriseAssoc[];
  enterprises?: Enterprise[];
  enterpriseProxyId?: number;
  gatewayState?: "NEVER_ACTIVATED" | "DEGRADED" | "QUIESCED" | "DISABLED" | "OUT_OF_SERVICE" | "CONNECTED" | "OFFLINE";
  handOffDetail?: GatewayHandoffDetail;
  handOffEdges?: GatewayHandoffEdge[];
  id?: number;
  ipAddress?: string;
  ipsecGatewayDetail?: {
    strictHostCheck?: boolean;
    strictHostCheckDN?: string;
  };
  isLoadBalanced?: boolean;
  lastContact?: string;
  logicalId?: string;
  modified?: string; // date-time
  name?: string;
  networkId?: number;
  pools?: GatewayGatewayPool[];
  privateIpAddress?: string;
  roles?: GatewayRole[];
  serviceState?: "IN_SERVICE" | "OUT_OF_SERVICE" | "PENDING_SERVICE" | "QUIESCED";
  serviceUpSince?: string;
  site?: GatewaySite;
  siteId?: number;
  softwareVersion?: string;
  systemUpSince?: string;
  utilization?: number;
  utilizationDetail?: {
    load?: number;
    overall?: number;
    cpu?: number;
    memory?: number;
  };
}
export interface NetworkGetNetworkOperatorUsersResultItem {
  id?: number;
  created?: string; // date-time
  operatorId?: number;
  userType?: string;
  username?: string;
  domain?: string;
  password?: string; // password
  firstName?: string;
  lastName?: string;
  officePhone?: string;
  mobilePhone?: string;
  isNative?: boolean;
  isActive?: boolean;
  isLocked?: boolean;
  email?: string;
  lastLogin?: string; // date-time
  modified?: string; // date-time
  roleId?: number;
  roleName?: string;
}
/**
 * example:
 * [object Object]
 */
export interface NetworkInsertNetworkGatewayPoolResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
/**
 * example:
 * [object Object]
 */
export interface NetworkUpdateNetworkGatewayPoolAttributesResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface NewEnterpriseProxyUser {
  id?: number;
  created?: string; // date-time
  userType?: string;
  username: string;
  domain?: string;
  password: string; // password
  firstName?: string;
  lastName?: string;
  officePhone?: string;
  mobilePhone?: string;
  isNative?: boolean;
  isActive?: boolean;
  isLocked?: boolean;
  email?: string;
  lastLogin?: string; // date-time
  modified?: string; // date-time
  enterpriseId?: number;
  enterpriseProxyId?: number;
  roleId: number;
}
export interface NewEnterpriseUser {
  id?: number;
  created?: string; // date-time
  userType?: string;
  username: string;
  domain?: string;
  password: string; // password
  firstName?: string;
  lastName?: string;
  officePhone?: string;
  mobilePhone?: string;
  isNative?: boolean;
  isActive?: boolean;
  isLocked?: boolean;
  email?: string;
  lastLogin?: string; // date-time
  modified?: string; // date-time
  enterpriseId?: number;
  enterpriseProxyId?: number;
  roleId: number;
}
export interface OperatorEvent {
  id: number;
  eventTime: string; // date-time
  event: "EDGE_HEARTBEAT" | "GATEWAY_HEARTBEAT" | "USER_LOGIN" | "EDGE_ACTIVATION" | "GATEWAY_ACTIVATION" | "EDGE_FLOW_STATS" | "EDGE_PATHLINK_STATS" | "EDGE_PROVISION" | "CREATE_USER" | "CREATE_PROFILE" | "SOFTWARE_UPLOAD" | "OPERATOR_LOGIN" | "CREATE_SYSTEM_PROPERTY" | "UPDATE_SYSTEM_PROPERTY" | "DELETE_SYSTEM_PROPERTY" | "CREATE_ENTERPRISE" | "DELETE_ENTERPRISE" | "GATEWAY_PROVISION" | "DELETE_GATEWAY" | "EDGE_NEW_DEVICE" | "EDGE_NEW_USER" | "DISABLE_GATEWAY" | "ENABLE_GATEWAY" | "DEACTIVATE_GATEWAY" | "ACTIVATION_EMAIL" | "DELETE_PROFILE" | "SOFTWARE_PKG_DELETE" | "EDGE_REACTIVATION_REQ" | "EDGE_CANCEL_REACTIVATION_REQ" | "VPN_DATACENTER_STATUS" | "EDGE_RADIO_SETTINGS" | "VPN_ENABLE" | "VPN_DISABLE" | "VPN_UPDATE" | "USER_LOCKOUT" | "FIREWALL_ENABLE" | "FIREWALL_DISABLE" | "CREATE_ENTERPRISE_NETWORK_SERVICE" | "EDIT_ENTERPRISE_NETWORK_SERVICE" | "DELETE_ENTERPRISE_NETWORK_SERVICE" | "CREATE_ENTERPRISE_NETWORK" | "EDIT_ENTERPRISE_NETWORK" | "DELETE_ENTERPRISE_NETWORK" | "EDIT_PROFILE" | "SUPPORT_EMAIL" | "META_DATA_UPLOAD" | "META_DATA_DELETE" | "HA_STANDBY_ACTIVATED" | "HA_READY" | "HA_FAILED" | "HA_GOING_ACTIVE" | "HA_TERMINATED" | "EDGE_DOWN" | "EDGE_UP" | "GATEWAY_DOWN" | "CREATE_ENTERPRISE_PROXY" | "DELETE_ENTERPRISE_PROXY" | "DIAGNOSTIC_CLEANUP" | "GATEWAY_ACTIVATION_FAILURE" | "EDGE_ACTIVATION_FAILURE" | "DELETE_EDGE" | "PASSWORD_RESET" | "CRL_GENERATION" | "EDGE_CERTIFICATE_GENERATION" | "GATEWAY_CERTIFICATE_GENERATION" | "EDGE_DEACTIVATION" | "CLEAR_EDGE_HISTORY" | "PATCH_APPLICATION_SUCCESS" | "PATCH_APPLICATION_FAILURE" | "OPERATOR_LOGIN_FAILURE" | "USER_LOGIN_FAILURE" | "REMOTE_ACTION" | "CLONE_APPLICATION_MAP" | "UPDATE_APPLICATION_MAP" | "ROUTE_UPDATE" | "ROUTE_DELETE" | "HA_ACTIVATION_FAILURE" | "DR_CONFIGURATION_STARTED" | "DR_CONFIGURATION_SUCCESS" | "DR_CONFIGURATION_FAILURE" | "DR_CONFIGURATION_ABORTED" | "STORE_FLOW_STATS" | "ENTERPRISE_ENABLE_OPERATOR_USER_MGMT" | "ENTERPRISE_DISABLE_OPERATOR_USER_MGMT" | "ENTERPRISE_ENABLE_OPERATOR_ACCESS" | "ENTERPRISE_DISABLE_OPERATOR_ACCESS" | "ENTERPRISE_ENABLE_PROXY_ACCESS" | "ENTERPRISE_DISABLE_PROXY_ACCESS" | "PROXY_ENABLE_OPERATOR_ACCESS" | "PROXY_DISABLE_OPERATOR_ACCESS" | "EDGE_BGP_NEIGHBOR_UP" | "EDGE_BGP_NEIGHBOR_DOWN" | "GATEWAY_BGP_NEIGHBOR_UP" | "GATEWAY_BGP_NEIGHBOR_DOWN" | "CREATE_NETWORK_SEGMENT" | "UPDATE_NETWORK_SEGMENT" | "DELETE_NETWORK_SEGMENT" | "ADD_PROFILE_NETWORK_SEGMENT" | "REMOVE_PROFILE_NETWORK_SEGMENT" | "EDGE_TO_EDGE_VPN_ENABLE" | "EDGE_TO_EDGE_VPN_DISABLE" | "FIREWALL_LOG_ENABLE" | "FIREWALL_LOG_DISABLE" | "ADD_EDGE_NETWORK_SEGMENT" | "REMOVE_EDGE_NETWORK_SEGMENT" | "ENTERPRISE_SET_TEMPLATE_PROFILE" | "INVENTORY_EDGE_UNASSIGNED" | "INVENTORY_EDGE_IN_STAGING" | "INVENTORY_EDGE_STATE_CHANGE" | "DELETE_USER" | "CREATE_OPERATOR_USER" | "DELETE_OPERATOR_USER" | "EDGE_UPDATE_ATTRIBUTES" | "CREATE_PRIVATE_NETWORK" | "UPDATE_PRIVATE_NETWORK" | "DELETE_PRIVATE_NETWORK" | "CLOUD_SECURITY_ENABLE" | "CLOUD_SECURITY_DISABLE" | "CLOUD_SECURITY_ERROR" | "EDGE_NVS_TUNNEL_UP" | "EDGE_NVS_TUNNEL_DOWN" | "EXTERNAL_API_CALL" | "VRRP_INTO_MASTER_STATE" | "VRRP_OUT_OF_MASTER_STATE" | "VRRP_FAIL_INFO" | "VNF_VM_DEPLOY" | "VNF_VM_DELETE" | "VNF_VM_ERROR" | "VNF_VM_EVENT" | "VNF_INSERTION_ENABLED" | "VNF_INSERTION_DISABLED" | "EDGE_MULTICAST_ROUTES" | "EDGE_NEW_CONFIGURATION_ASSIGNED";
  category: "SYSTEM" | "NETWORK" | "APPLICATION" | "USER" | "SECURITY" | "EDGE" | "GATEWAY" | "CONFIGURATION" | "ENTERPRISE";
  severity: "EMERGENCY" | "ALERT" | "CRITICAL" | "ERROR" | "WARNING" | "NOTICE" | "INFO" | "DEBUG";
  message: string;
  detail: string;
  operatorUsername: string;
  networkName: string;
  gatewayName: string;
}
/**
 * example:
 * [object Object]
 */
export interface OperatorUserDeleteOperatorUserResult {
  /**
   * The id of the deleted object.
   */
  id?: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface OperatorUserGetOperatorUserResult {
  id?: number;
  created?: string; // date-time
  operatorId?: number;
  userType?: string;
  username?: string;
  domain?: string;
  password?: string; // password
  firstName?: string;
  lastName?: string;
  officePhone?: string;
  mobilePhone?: string;
  isNative?: boolean;
  isActive?: boolean;
  isLocked?: boolean;
  email?: string;
  lastLogin?: string; // date-time
  modified?: string; // date-time
  roleId?: number;
  roleName?: string;
}
export interface OperatorUserInsertOperatorUser {
  id?: number;
  created?: string; // date-time
  userType?: string;
  username: string;
  domain?: string;
  password: string; // password
  firstName?: string;
  lastName?: string;
  officePhone?: string;
  mobilePhone?: string;
  isNative?: boolean;
  isActive?: boolean;
  isLocked?: boolean;
  email?: string;
  lastLogin?: string; // date-time
  modified?: string; // date-time
  networkId: number;
  roleId: number;
}
/**
 * example:
 * [object Object]
 */
export interface OperatorUserInsertOperatorUserResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
/**
 * example:
 * [object Object]
 */
export interface OperatorUserUpdateOperatorUserResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface OperatorUserWithRoleInfo {
  id?: number;
  created?: string; // date-time
  operatorId?: number;
  userType?: string;
  username?: string;
  domain?: string;
  password?: string; // password
  firstName?: string;
  lastName?: string;
  officePhone?: string;
  mobilePhone?: string;
  isNative?: boolean;
  isActive?: boolean;
  isLocked?: boolean;
  email?: string;
  lastLogin?: string; // date-time
  modified?: string; // date-time
  roleId?: number;
  roleName?: string;
}
export interface ProtocolPortMapping {
  tcpPorts?: number[];
  udpPorts?: number[];
}
export interface ProxyEdgeInventoryObject {
  enterpriseName: string;
  enterpriseId: number;
  edgeName: string;
  edgeId: number;
  created: string; // date-time
  edgeState: "NEVER_ACTIVATED" | "DEGRADED" | "OFFLINE" | "DISABLED" | "EXPIRED" | "CONNECTED";
  serialNumber: string;
  haSerialNumber: string;
  activationState: "UNASSIGNED" | "PENDING" | "ACTIVATED" | "REACTIVATION_PENDING";
  activationTime: string; // date-time
  modelNumber: string;
  softwareVersion: string;
  softwareUpdated: string; // date-time
  lastContact: string; // date-time
}
export interface Role {
  id?: number;
  created?: string; // date-time
  operatorId?: number;
  networkId?: number;
  enterpriseId?: number;
  enterpriseProxyId?: number;
  name?: string;
  userType?: "OPERATOR" | "MSP" | "PARTNER" | "ENTERPRISE" | "END_USER" | "CUSTOM";
  fromUserType?: "OPERATOR" | "MSP" | "PARTNER" | "ENTERPRISE" | "END_USER" | "CUSTOM";
  isSuper?: number;
  description?: string;
  precedence?: number;
  modified?: string; // date-time
}
export interface RoleCreateRoleCustomizationResult {
}
/**
 * example:
 * [object Object]
 */
export interface RoleDeleteRoleCustomizationResult {
  /**
   * The id of the deleted object.
   */
  id?: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface RoleGetUserTypeRolesResultItem {
  id: number;
  created: string; // date-time
  operatorId: number;
  networkId: number;
  enterpriseId: number;
  enterpriseProxyId: number;
  name: string;
  userType: "OPERATOR" | "MSP" | "PARTNER" | "ENTERPRISE" | "END_USER" | "CUSTOM";
  fromUserType: "OPERATOR" | "MSP" | "PARTNER" | "ENTERPRISE" | "END_USER" | "CUSTOM";
  isSuper: number;
  description: string;
  precedence: number;
  modified: string; // date-time
}
export interface RoleSetEnterpriseDelegatedToEnterpriseProxyResult {
  isDelegated: boolean;
}
export interface RoleSetEnterpriseDelegatedToOperatorResult {
  isDelegated: boolean;
}
export interface RoleSetEnterpriseProxyDelegatedToOperatorResult {
  isDelegated: boolean;
}
export interface RoleSetEnterpriseUserManagementDelegatedToOperatorResult {
  isDelegated: boolean;
}
export interface RouteActionObject {
  interface?: string;
  linkInternalLogicalId?: string;
  linkPolicy?: string;
  routeCfg?: {
  };
  routePolicy?: string;
  serviceGroup?: string;
  vlanId?: number;
  wanlink?: string;
  linkCosLogicalId?: string;
  linkOuterDscpTag?: string;
  linkInnerDscpTag?: string;
}
/**
 * example:
 * [object Object]
 */
export interface RowsModifiedConfirmation {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface Segment {
  id?: number;
  enterpriseObjectId?: number;
  configurationId?: number;
  moduleId?: number;
  ref?: string;
  data?: SegmentData;
  version?: string;
  object?: string;
  name?: string;
  type: string;
  logicalId?: string;
}
export interface SegmentData {
  segmentId?: number;
  delegateToEnterprise?: boolean;
  delegateToEnterpriseProxy?: boolean;
}
/**
 * example:
 * [object Object]
 */
export interface SetClientDeviceHostNameResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export interface SetDelegatedResult {
  isDelegated: boolean;
}
export interface Site {
  city?: string;
  contactEmail?: string; // email
  contactMobile?: string;
  contactName?: string;
  contactPhone?: string;
  country?: string;
  lat?: number;
  lon?: number;
  name?: string;
  postalCode?: string;
  state?: string;
  streetAddress?: string;
  streetAddress2?: string;
}
export interface SiteObject {
  city?: string;
  contactEmail?: string; // email
  contactMobile?: string;
  contactName?: string;
  contactPhone?: string;
  country?: string;
  lat?: number;
  lon?: number;
  name?: string;
  postalCode?: string;
  state?: string;
  streetAddress?: string;
  streetAddress2?: string;
}
export interface SystemProperty {
  id?: number;
  created?: string; // date-time
  name?: string;
  value?: string;
  defaultValue?: string;
  isReadOnly?: boolean;
  isPassword?: boolean;
  dataType?: "STRING" | "NUMBER" | "BOOLEAN" | "JSON" | "DATE" | "DATETIME";
  description?: string;
  modified?: string; // date-time
}
export interface SystemPropertyGetSystemPropertiesResultItem {
  id: number;
  created: string; // date-time
  name: string;
  value: string;
  defaultValue: string;
  isReadOnly: boolean;
  isPassword: boolean;
  dataType: "STRING" | "NUMBER" | "BOOLEAN" | "JSON" | "DATE" | "DATETIME";
  description: string;
  modified?: string; // date-time
}
export interface SystemPropertyGetSystemPropertyResult {
  id: number;
  created: string; // date-time
  name: string;
  value: string;
  defaultValue: string;
  isReadOnly: boolean;
  isPassword: boolean;
  dataType: "STRING" | "NUMBER" | "BOOLEAN" | "JSON" | "DATE" | "DATETIME";
  description: string;
  modified?: string; // date-time
}
/**
 * example:
 * [object Object]
 */
export interface SystemPropertyInsertOrUpdateSystemPropertyResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
/**
 * example:
 * [object Object]
 */
export interface SystemPropertyInsertSystemPropertyResult {
  /**
   * The id of the newly-created object.
   */
  id?: number;
  /**
   * The number of rows modified
   */
  rows: number;
  /**
   * An error message explaining why the method failed
   */
  error?: string;
}
/**
 * example:
 * [object Object]
 */
export interface SystemPropertyUpdateSystemPropertyResult {
  /**
   * An error message explaining why the method failed
   */
  error?: string;
  /**
   * The number of rows modified
   */
  rows: number;
}
export type VcoInventoryGetInventoryItemsResult = InventoryItem[];
export interface Vlan {
  name?: string;
  vlanId?: number;
  staticReserved?: number;
}
export interface WAN {
  id?: number;
  name: "imageUpdate" | "controlPlane" | "managementPlane" | "firewall" | "QOS" | "deviceSettings" | "WAN" | "metaData" | "properties";
  type?: "ENTERPRISE" | "OPERATOR" | "GATEWAY";
  description?: string;
  configurationId?: number;
  data?: WANData;
  refs?: GenericRefs;
}
export interface WANData {
  links?: {
    logicalId?: string;
    internalId?: string;
    discovery?: "DISABLED" | "AUTO_DISCOVERED" | "USER_DEFINED";
    mode?: "PUBLIC" | "PRIVATE";
    type?: "WIRED" | "WIRELESS";
    name?: string;
    isp?: string;
    publicIpAddress?: string;
    sourceIpAddress?: string;
    nextHopIpAddress?: string;
    customVlanId?: boolean;
    vlanId?: number;
    virtualIpAddress?: string;
    dynamicBwAdjustmentEnabled?: boolean;
    bwMeasurement?: string;
    upstreamMbps?: string;
    downstreamMbps?: string;
    backupOnly?: boolean;
    overheadBytes?: number;
    udpHolePunching?: boolean;
    MTU?: number;
    mplsNetwork?: string;
    dscpTag?: string;
    staticSlaEnabled?: boolean;
    classesofServiceEnabled?: boolean;
    encryptOverlay?: boolean;
    staticSLA?: {
      latencyMs?: number;
      jitterMs?: number;
      lossPct?: number;
    };
    classesOfService?: {
      classId?: number;
      classesOfService?: {
        id?: string;
        name?: string;
        dscpTags?: string[];
        staticSLA?: {
          latencyMs?: number;
          jitterMs?: number;
          lossPct?: string;
        };
        bandwidthPct?: number;
        bandwidthGuaranteed?: boolean;
        defaultClassOfService?: boolean;
      }[];
    };
    interfaces?: string[];
    lastActive?: string;
  }[];
  networks?: {
    mode?: string;
    type?: string;
    name?: string;
    logicalId?: string;
    interface?: string;
    internalId?: string;
    ipAddress?: string;
    isp?: string;
    lastActive?: number;
  }[];
}
