import {Icon,IconProps} from '@iconify/react';
import { Box,BoxProps} from '@material-ui/core';
interface IconifyProps extends BoxProps
{
   icon:IconProps['icon']; 
}

const IconifyIcon = ({icon,width,height,...rest}:IconifyProps)=>{
    return <Box component={Icon} icon={icon} {...rest} width={width} height={height}></Box>;
};

export default IconifyIcon;