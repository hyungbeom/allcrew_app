import { Button } from '@ant-design/react-native';

import type { MyButtonProps } from './MyButton.types';

export function MyButton({ children, onPress }: MyButtonProps) {
    return (
        <Button type="primary" onPress={onPress}>
            {children}
        </Button>
    );
}
