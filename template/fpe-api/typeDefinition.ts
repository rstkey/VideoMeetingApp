/*
********************************************
 Copyright © 2021 Agora Lab, Inc., all rights reserved.
 AppBuilder and all associated components, source code, APIs, services, and documentation 
 (the “Materials”) are owned by Agora Lab, Inc. and its licensors. The Materials may not be 
 accessed, used, modified, or distributed for any purpose without a license from Agora Lab, Inc.  
 Use without a license or in violation of any license terms and conditions (including use for 
 any purpose competitive to Agora Lab, Inc.’s business) is strictly prohibited. For more 
 information visit https://appbuilder.agora.io. 
*********************************************
*/
import React from 'react';
import { channelMessage, chatInputInterface } from '../src/components/ChatContext';
import { TextDataInterface, ConditionalTextInferface, DynamicTextInterface, NetworkQualityStatusInterface, MeetingInviteParam } from 'src/language';
import Layout from '../src/subComponents/LayoutEnum';
import { UidInterface } from '../agora-rn-uikit/src';
export const CUSTOM_ROUTES_PREFIX = '/r';

export interface PreCallInterface {
  preview?: React.ComponentType;
  audioMute?: React.ComponentType;
  videoMute?: React.ComponentType;
  meetingName?: React.ComponentType;
  deviceSelect?: React.ComponentType;
  joinButton?: React.ComponentType;
  textBox?: React.ComponentType;
}

export interface ChatCmpInterface {
  chatBubble?: React.ComponentType<channelMessage>;
  chatInput?: React.ComponentType<chatInputInterface>;
}

export interface renderComponentInterface {
  user: UidInterface;
  // ----------
  // incase of single component for min and max
  // with conditional rendering.
  isMax?: Boolean;
  // ----------
  index: number;
}

export interface renderComponentObjectInterface {
  [key: string]: React.ComponentType<renderComponentInterface>
}

export type layoutComponent = React.ComponentType<{
  maxVideoArray: React.ComponentType[];
  minVideoArray: React.ComponentType[];
  setLayout?: React.Dispatch<React.SetStateAction<Layout>>;
}>;

export interface layoutObjectInterface {
  name: string;
  icon?: string;
  component: layoutComponent;
}
export interface VideoCallInterface {
  topBar?: React.ComponentType;
  settingsPanel?: React.ComponentType;
  participantsPanel?: React.ComponentType;
  bottomBar?: React.ComponentType;
  chat?: ChatCmpInterface | React.ComponentType;
  renderComponentObject?: renderComponentObjectInterface;
  customLayout?: (layouts: layoutObjectInterface[]) => layoutObjectInterface[];
}

export type ComponentsInterface = {
  precall?: PreCallInterface | React.ComponentType
  create?: React.ComponentType;
  share?: React.ComponentType;
  join?: React.ComponentType;
  videoCall?: VideoCallInterface | React.ComponentType;
}

export interface CustomRoutesInterface {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
  componentProps?: object;
  privateRoute?: boolean;
  routeProps?: object;
  failureRedirectTo?: string;
};

export interface i18nInterface {
  label?: string;
  locale: string;
  data: {
    [key in keyof TextDataInterface]: string
  } | {
    [key in keyof ConditionalTextInferface]: (input: boolean) => string
  } | {
    [key in keyof DynamicTextInterface]: (input: string) => string
  } | {
    meetingInviteText?: (invite: MeetingInviteParam) => string,
    networkQualityLabel?: (quality: keyof NetworkQualityStatusInterface) => string,
  }
}

export type CustomHookType = () => () => Promise<void>

export interface FpeApiInterface {
  /**
   * components used to replace whole screen or subcomponents
   */
  components?: ComponentsInterface;
  /**
   * custom routes used to add new page/routes
   */
  customRoutes?: CustomRoutesInterface[];
  /**
   * Custom context/api provider wrapped in root level
   */
  appRoot?: React.ReactNode;
  /**
   * 
   */
  i18n?: i18nInterface[],
  /**
   * Life cycle events
   */
  lifecycle?: {
    useBeforeJoin?: CustomHookType,
    useBeforeCreate?: CustomHookType
  }
  /**
   * message callback used to listen for incoming message from private or public 
   */
  //message_callback?: //TODO:hari;
  customUserContext?: {
    useUserContext: () => any
  }
};