import { PlatformTypeEnum } from './constant';

export interface App {
  id: string;
  name: string;
  env: string;
  type?: PlatformTypeEnum;
  avatar?: string;
  desc?: string;
}

export interface Instance {
  task_id: string;
  app_id: string;
  env_id: string;
}

export interface PlatformSettings {
  platform_id: string;
  openai_url: string;
  api_key: string;
  prompt: string;
  active: boolean;
}

export type RoleType = 'SELF' | 'OTHER' | 'SYSTEM';
export type MessageType = 'TEXT' | 'IMAGE' | 'VIDEO' | 'FILE';

export interface Reply {
  content: string;
  type: MessageType;
}

export interface Message {
  sender: string;
  content: string;
  role: RoleType; // assistant, user
  type: MessageType;
}

export interface LogBody {
  level: string;
  time: string;
  message: string;
}

export interface GenericConfig {
  appId: string;
  instanceId: string;
  extractPhone: boolean;
  extractProduct: boolean;
  savePath: string;
  replySpeed: number;
  replyRandomSpeed: number;
  contextCount: number;
  waitHumansTime: number;
  defaultReply: string;
}

export interface LLMConfig {
  appId: string;
  instanceId: string;
  baseUrl: string;
  key: string;
  llmType: string;
  model: string;
}

export interface AccountConfig {
  activationCode: string;
}

export interface PluginConfig {
  appId: string;
  instanceId: string;
  usePlugin: boolean;
  pluginCode: string;
}

export interface DriverConfig {
  hasPaused: boolean;
  hasKeywordMatch: boolean;
  hasUseGpt: boolean;
  hasMouseClose: boolean;
}

export interface Session {
  id: number;
  platform: string;
  platform_id: string;
  instance_id: string;
  context: string;
  created_at: Date;
}

export interface MessageModel {
  id: number;
  session_id: number;
  role: RoleType;
  content: string;
  sender: string;
  type: MessageType;
  created_at: Date;
}

export interface Keyword {
  id?: number;
  mode?: string;
  ptf_name?: string;
  platform_id?: string;
  keyword: string;
  reply: string;
}
