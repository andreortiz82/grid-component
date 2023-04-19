import React from 'react';

type BoxProps = {
    display?: 'flex' | 'inline-flex';
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
    order?: number;
    gap?: number;
    className?: string;
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    children?: any;
};

export const Box = ({
    display = 'flex',
    flexDirection = 'row',
    justifyContent = 'flex-start',
    alignItems = 'stretch',
    alignContent = 'stretch',
    flexWrap = 'nowrap',
    flexGrow,
    flexShrink,
    flexBasis,
    order,
    className,
    alignSelf = 'auto',
  gap = 0,
  children
}: BoxProps) => {
  const styles = {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    alignContent,
    flexWrap,
    flexGrow,
    flexShrink,
    flexBasis,
    order,
    alignSelf,
    className,
    gap
  };

  return (
    <div className={className} style={styles} >
      {children}
    </div>
  );
};

export const Row = (props) =>{
    return <Box flexDirection='row' {...props}>{props.children}</Box>
}

export const Col = (props) =>{
    return <Box {...props}>{props.children}</Box>
}
