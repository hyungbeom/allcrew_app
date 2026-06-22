import { Toast } from '@ant-design/react-native';

export function showToast(message: string) {
    Toast.info(message);
}
