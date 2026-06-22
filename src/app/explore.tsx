import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Explore Screen</Text>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#ffffff', // 배경을 하얗게 시작
  },
  contentContainer: {
    // 스크롤 뷰 내부 컨텐츠를 중앙에 정렬하고 싶을 때 사용
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});