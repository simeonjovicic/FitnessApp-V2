import React from 'react';
import { ScrollView, Dimensions, StyleSheet, View, Text } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryTooltip, VictoryScatter } from 'victory-native';

export default function WeightTrackingChart() {
  const screenWidth = Dimensions.get('window').width;

  const data = [
    { x: 'Jan', y: 80 },
    { x: 'Feb', y: 82 },
    { x: 'Mar', y: 78 },
    { x: 'Apr', y: 79 },
    { x: 'May', y: 77 },
    { x: 'Jun', y: 75 },
    { x: 'Jul', y: 78 },
    { x: 'Aug', y: 76 },
    { x: 'Sep', y: 75 },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <VictoryChart
          theme={VictoryTheme.material}
          width={screenWidth * 1.5} // Adjust the width for horizontal scrolling
          height={250}
          domainPadding={{ x: 50, y: [0, 20] }}
        >
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => `${x}kg`} // Add 'kg' to the Y-axis
            style={{
              tickLabels: { fill: 'white' }, // Customize the Y-axis label color
            }}
          />
          <VictoryAxis
            style={{
              tickLabels: { fill: 'white' }, // Customize the X-axis label color
            }}
          />
          <VictoryLine
            data={data}
            style={{
              data: { stroke: "#c43a31", strokeWidth: 2 }, // Customize the line color
            }}
          />
          <VictoryScatter
            data={data}
            size={5}
            style={{ data: { fill: "#c43a31" } }}
            labels={({ datum }) => `${datum.y}kg`} // Show weight on hover
            labelComponent={<VictoryTooltip dy={-10} />}
          />
        </VictoryChart>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
});
