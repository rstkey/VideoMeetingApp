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
import { useHistory } from "react-router-dom";
import IconButton, {IconButtonProps} from '../atoms/IconButton';

export interface WhiteBoardButtonProps {
  showLabel?: boolean;
  render?: (onPress: () => void, isRecordingActive: boolean) => JSX.Element;
  isOnActionSheet?: boolean;
}

const WhiteBoard = (props: WhiteBoardButtonProps) => {
  const history = useHistory();
  const {showLabel = $config.ICON_TEXT, isOnActionSheet = false} = props;
  const onPress = () => {
    // history.push('/create')
    const win = window.open("/whiteboard", "_blank");
    win.focus();
  };
  let iconButtonProps: IconButtonProps = {
    iconProps: {
      name: 'arrow-up',
      tintColor: $config.SECONDARY_ACTION_COLOR,
    },
    btnTextProps: {
      text: showLabel ? 'White Board' : '',
      textColor: $config.FONT_COLOR,
    },
    onPress,
    disabled: false,
    containerStyle: {},
  };

  iconButtonProps.isOnActionSheet = isOnActionSheet;

  return (
    <>
      <IconButton {...iconButtonProps} />
    </>
  );
};

export default WhiteBoard;
