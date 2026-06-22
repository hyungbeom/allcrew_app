import type { ReactNode } from 'react';

export type MyButtonProps = {
    children: ReactNode;
    onPress?: () => void;
};
