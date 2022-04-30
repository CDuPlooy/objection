export interface IAndroidFilesystem {
  files: any;
  path: string;
  readable: boolean;
  writable: boolean;
}

export interface IExecutedCommand {
  command: string;
  stdOut: string;
  stdErr: string;
}

export interface IKeyStoreEntry {
  alias: string;
  is_certificate: boolean;
  is_key: boolean;
}

export interface ICurrentActivityFragment {
  activivity: string | null;
  fragment: string | null;
}

export interface IHeapClassDictionary {
  [index: string]: IHeapObject[];
}

export interface IHeapObject {
  hashcode: number;
  instance: Java.Wrapper;
}

export interface IHeapNormalised {
  hashcode: number;
  classname: string;
  tostring: string;
}

export interface IJavaField {
  name: string;
  value: string;
}

export interface IKeyStoreDetail {
  keyAlgorithm?: string;
  keySize?: string;
  blockModes?: string;
  digests?: string;
  encryptionPaddings?: string;
  keyValidityForConsumptionEnd?: string;
  keyValidityForOriginationEnd?: string;
  keyValidityStart?: string;
  keystoreAlias?: string;
  origin?: string;
  purposes?: string;
  signaturePaddings?: string;
  userAuthenticationValidityDurationSeconds?: string;
  isInsideSecureHardware?: string;
  isInvalidatedByBiometricEnrollment?: string;
  isUserAuthenticationRequired?: string;
  isUserAuthenticationRequirementEnforcedBySecureHardware?: string;
  isUserAuthenticationValidWhileOnBody?: string;
  // "crashy" fields
  isTrustedUserPresenceRequired?: string;
  isUserConfirmationRequired?: string;
}

// I think these types will be generic, so we can create an IExtendedComponentInfo which has aliases IActivityInfo etc etc

export interface IExtendedComponentInfo {
  exported: boolean;
  enabled: boolean,
  processName: string,
  splitName: string,
  name: string,
  permission?: string,
};

// In the Android docs for example, a BroadcastReceiverInfo object just uses the ActivityInfo class
// so these should be fairly accurate imo
export type IActivityInfo = IExtendedComponentInfo
export type IServiceInfo = IExtendedComponentInfo
export type IBroadcastReceiverInfo = IExtendedComponentInfo

// An example of what to do if you want some other fields
export interface IContentProviderInfo extends IExtendedComponentInfo {
  readPermission: string;
  writePermission: string;
  multiprocess: boolean;
  isSyncable: boolean;
  authority: string;
}