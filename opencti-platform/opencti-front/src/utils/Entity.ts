export const resolveLink = (type: string): string | null => {
  switch (type) {
    case 'Attack-Pattern':
      return '/dashboard/techniques/attack_patterns';
    case 'Campaign':
      return '/dashboard/threats/campaigns';
    case 'Note':
      return '/dashboard/analysis/notes';
    case 'Observed-Data':
      return '/dashboard/events/observed_data';
    case 'Opinion':
      return '/dashboard/analysis/opinions';
    case 'Report':
      return '/dashboard/analysis/reports';
    case 'Grouping':
      return '/dashboard/analysis/groupings';
    case 'Course-Of-Action':
      return '/dashboard/techniques/courses_of_action';
    case 'Individual':
      return '/dashboard/entities/individuals';
    case 'Organization':
      return '/dashboard/entities/organizations';
    case 'Sector':
      return '/dashboard/entities/sectors';
    case 'System':
      return '/dashboard/entities/systems';
    case 'Event':
      return '/dashboard/entities/events';
    case 'Indicator':
      return '/dashboard/observations/indicators';
    case 'Infrastructure':
      return '/dashboard/observations/infrastructures';
    case 'Intrusion-Set':
      return '/dashboard/threats/intrusion_sets';
    case 'City':
      return '/dashboard/locations/cities';
    case 'Administrative-Area':
      return '/dashboard/locations/administrative_areas';
    case 'Country':
      return '/dashboard/locations/countries';
    case 'Region':
      return '/dashboard/locations/regions';
    case 'Position':
      return '/dashboard/locations/positions';
    case 'Malware':
      return '/dashboard/arsenal/malwares';
    case 'Threat-Actor':
      return '/dashboard/threats/threat_actors';
    case 'Tool':
      return '/dashboard/arsenal/tools';
    case 'Channel':
      return '/dashboard/arsenal/channels';
    case 'Narrative':
      return '/dashboard/techniques/narratives';
    case 'Language':
      return '/dashboard/techniques/narratives/languages';
    case 'Vulnerability':
      return '/dashboard/arsenal/vulnerabilities';
    case 'Incident':
      return '/dashboard/events/incidents';
    case 'Artifact':
      return '/dashboard/observations/artifacts';
    case 'Data-Component':
      return '/dashboard/techniques/data_components';
    case 'Data-Source':
      return '/dashboard/techniques/data_sources';
    case 'Case-Incident':
      return '/dashboard/cases/incidents';
    case 'Feedback':
      return '/dashboard/cases/feedbacks';
    case 'Case-Rfi':
      return '/dashboard/cases/rfis';
    case 'Case-Rft':
      return '/dashboard/cases/rfts';
    case 'Fimi-Incident':
      return '/dashboard/fimi/incidents';
    case 'Fimi-Threat-Actor':
      return '/dashboard/fimi/threat_actors';
    case 'Fimi-Attack-Pattern':
      return '/dashboard/fimi/attack_patterns';
    case 'Fimi-Course-Of-Action':
      return '/dashboard/fimi/courses_of_action';
    case 'Fimi-Vulnerability':
      return '/dashboard/fimi/vulnerabilities';
    case 'Fimi-Channel':
      return '/dashboard/fimi/channels';
    case 'Fimi-Event':
      return '/dashboard/fimi/events';
    case 'Fimi-Narrative':
      return '/dashboard/fimi/narratives';
    case 'User':
    case 'Creator':
    case 'Assignee':
      return '/dashboard/settings/accesses/users';
    case 'Stix-Cyber-Observable':
    case 'Autonomous-System':
    case 'Directory':
    case 'Domain-Name':
    case 'Email-Addr':
    case 'Email-Message':
    case 'Email-Mime-Part-Type':
    case 'StixFile':
    case 'X509-Certificate':
    case 'IPv4-Addr':
    case 'IPv6-Addr':
    case 'Mac-Addr':
    case 'Mutex':
    case 'Network-Traffic':
    case 'Process':
    case 'Software':
    case 'Url':
    case 'User-Account':
    case 'Windows-Registry-Key':
    case 'Windows-Registry-Value-Type':
    case 'Cryptographic-Key':
    case 'Cryptocurrency-Wallet':
    case 'Hostname':
    case 'Text':
    case 'User-Agent':
    case 'Bank-Account':
    case 'Phone-Number':
    case 'Payment-Card':
    case 'Media-Content':
      return '/dashboard/observations/observables';
    default:
      return null;
  }
};

export const typesWithoutName = ['Observed-Data'];

export const typesContainers = [
  'report',
  'note',
  'case',
  'opinion',
  'observed-data',
  'grouping',
  'feedback',
  'case-incident',
  'case-rfi',
  'case-rft',
];

export const pascalize = (str: string): string => str.replace(
  /(\w)(\w*)/g,
  (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase(),
);

export const resolveIdentityClass = (identityType: string): string => {
  if (identityType === 'Individual') {
    return 'individual';
  }
  if (identityType === 'Sector') {
    return 'class';
  }
  if (identityType === 'System') {
    return 'system';
  }
  return 'organization';
};

export const resolveIdentityType = (identityClass: string): string => {
  if (identityClass === 'individual') {
    return 'Individual';
  }
  if (identityClass === 'class') {
    return 'Sector';
  }
  if (identityClass === 'system') {
    return 'System';
  }
  return 'Organization';
};

export const resolveLocationType = (entity: Record<string, string>): string => {
  if (entity.x_opencti_location_type) {
    return entity.x_opencti_location_type;
  }
  if (entity.city) {
    return 'City';
  }
  if (entity.country) {
    return 'Country';
  }
  if (entity.region) {
    return 'Region';
  }
  return 'Position';
};

export const ignoredAttributes = [
  'internal_id',
  'standard_id',
  'x_opencti_description',
  'x_opencti_stix_ids',
  'entity_type',
  'spec_version',
  'extensions',
  'created',
  'modified',
  'created_at',
  'x_opencti_score',
  'updated_at',
  'observable_value',
  'indicators',
  'importFiles',
  'startup_info',
  'creator_id',
];

export const workbenchAttributes = [
  'name',
  'description',
  'case_type',
  'pattern',
  'x_opencti_description',
  'first_seen',
  'last_seen',
  'start_time',
  'stop_time',
  'published',
  'content',
];

export const ignoredAttributesInFeeds = [
  'x_opencti_stix_ids',
  'spec_version',
  'extensions',
  'importFiles',
];

export const ignoredAttributesInDashboards = [
  'spec_version',
  'extensions',
  'importFiles',
  'x_opencti_graph_data',
  'x_opencti_workflow_id',
  'x_opencti_stix_ids',
  'creator',
  'created',
  'created_at',
  'modified',
  'updated_at',
  'internal_id',
  'standard_id',
  'published',
];

export const dateAttributes = [
  'ctime',
  'mtime',
  'atime',
  'attribute_date',
  'validity_not_before',
  'validity_not_after',
  'private_key_usage_period_not_before',
  'private_key_usage_period_not_after',
  'start',
  'end',
  'created_time',
  'modified_time',
  'account_created',
  'account_expires',
  'credential_last_changed',
  'account_first_login',
  'account_last_login',
  'expiration_date',
  'publication_date',
  'first_seen',
  'last_seen',
  'published',
  'start_time',
  'stop_time',
];

export const numberAttributes = [
  'number',
  'src_port',
  'dst_port',
  'src_byte_count',
  'dst_byte_count',
  'src_packets',
  'dst_packets',
  'pid',
  'size',
  'number_of_subkeys',
  'subject_public_key_exponent',
  'cvv',
];

export const booleanAttributes = [
  'is_self_signed',
  'is_multipart',
  'is_hidden',
  'is_active',
  'is_disabled',
  'is_privileged',
  'is_service_account',
  'can_escalate_privs',
  'aslr_enabled',
  'dep_enabled',
];

export const multipleAttributes = [
  'x_opencti_additional_names',
  'protocols',
  'descriptions',
];

export const markdownAttributes = ['description', 'x_opencti_description'];

export const typesWithOpenCTIAliases = [
  'Course-Of-Action',
  'Identity',
  'Individual',
  'Organization',
  'Sector',
  'Position',
  'Administrative-Area',
  'Location',
  'City',
  'Country',
  'Region',
  'Event',
  'Channel',
  'Narrative',
];

export const typesWithoutAliases = [
  'Indicator',
  'Vulnerability',
  'Language',
  'Grouping',
  'Report',
];

// TODO replace this by a proper hook using backend information
export const stixDomainObjectTypes = [
  'Stix-Domain-Object',
  'Threat-Actor',
  'Intrusion-Set',
  'Campaign',
  'Incident',
  'Malware',
  'Tool',
  'Attack-Pattern',
  'Course-Of-Action',
  'Data-Component',
  'Data-Source',
  'Organization',
  'Sector',
  'Position',
  'Administrative-Area',
  'Location',
  'City',
  'Country',
  'Region',
  'Event',
  'Channel',
  'Narrative',
  'Indicator',
  'Vulnerability',
  'Language',
  'Grouping',
  'Report',
  'Narrative',
  'Channel',
];

export const stixCyberObservableTypes = [
  'Stix-Cyber-Observable',
  'Autonomous-System',
  'Directory',
  'Domain-Name',
  'Email-Addr',
  'Email-Message',
  'Email-Mime-Part-Type',
  'StixFile',
  'X509-Certificate',
  'IPv4-Addr',
  'IPv6-Addr',
  'Mac-Addr',
  'Mutex',
  'Network-Traffic',
  'Process',
  'Software',
  'Url',
  'User-Account',
  'Windows-Registry-Key',
  'Windows-Registry-Value-Type',
  'Cryptographic-Key',
  'Cryptocurrency-Wallet',
  'Hostname',
  'Text',
  'User-Agent',
  'Bank-Account',
  'Phone-Number',
  'Payment-Card',
  'Media-Content',
];
