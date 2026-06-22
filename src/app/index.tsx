import { MyButton } from '@/components/MyButton';
import { MyIcon } from '@/components/MyIcon';
import { showToast } from '@/components/showToast';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <MyIcon />
            <View style={styles.spacerLg} />
            <Text style={styles.text}>모바일 앱 스타일 화면입니다</Text>
            <View style={styles.spacerXl} />
            <MyButton onPress={() => showToast('Ant Design Mobile RN이 정상 동작합니다!')}>
                토스트 띄우기
            </MyButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    spacerLg: {
        height: 16,
    },
    spacerXl: {
        height: 24,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});
