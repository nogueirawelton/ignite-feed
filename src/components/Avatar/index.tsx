import { ImgHTMLAttributes } from 'react';

import styles from './Avatar.module.scss'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export const Avatar = ({ hasBorder = false, ...props}: AvatarProps) => {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...props} />
  )
}
