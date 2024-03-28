import { LineChart } from"react-native-chart-kit";
import { StyleSheet, View, Text } from 'react-native';
const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(14, 17, 22, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};
export const LineChartHome = props => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        // labels: props.date,
        datasets: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
      };
    return (
        <View >
            <Text>React Native Chart Kit</Text>
            <LineChart
                data={data}
                width={400}
                height={200}
                yAxisInterval={1}
                animate
                chartConfig={chartConfig}
                withDots={false}
            />
      </View>
    )
}