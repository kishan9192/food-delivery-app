/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {icons, FONTS, COLORS, SIZES, images} from '../constants';

const Restaurant = ({route, navigation}) => {
  const scrollX = new Animated.Value(0);
  const [restaurant, setRestaurant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    let {item, currentLocation} = route.params;
    setRestaurant(item);
    setCurrentLocation(currentLocation);
  });

  const renderHeader = () => {
    return (
      <View style={{flexDirection: 'row', paddingTop: SIZES.padding}}>
        <TouchableOpacity
          style={{
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
            width: 50,
          }}
          onPress={() => navigation.pop()}>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>

        {/*
            FOR FLEX, check Elements by
            applying border.
        */}

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // borderColor:'green',
            // borderWidth:1,
            flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: COLORS.lightGray3,
              borderRadius: SIZES.radius,
              height: 50,
              // width:200,
              paddingHorizontal: SIZES.padding * 3,
              paddingVertical: SIZES.padding,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: COLORS.primary,
              borderWidth: 1,
            }}>
            <Text
              style={{
                ...FONTS.h4,
                fontWeight: 'bold',
              }}>
              {restaurant?.name}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            // marginLeft:SIZES.padding*2,
            paddingRight: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.list}
            resizeMode="contain"
            style={{
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderFoodInfo = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        // snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {restaurant?.menu.map((item, index) => (
          <View key={`menu - ${index}`} style={{alignItems: 'center'}}>
            {/* Image and buttons */}
            <View style={{height: SIZES.height * 0.35}}>
              <Image
                source={item.photo}
                resizeMode="cover"
                style={{
                  height: '100%',
                  width: SIZES.width,
                }}
              />
              <View
                style={{
                  marginHorizontal: SIZES.width * 0.3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                // style = {{
                //     justifyContent:'center',
                //     alignItems:'center',
                //     borderColor:'red',
                //     borderWidth:2
                // }}
                >
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      backgroundColor: COLORS.white,
                      borderTopLeftRadius: 25,
                      borderBottomLeftRadius: 25,
                      justifyContent: 'center',
                      alignItems: 'center',
                      bottom: 25,
                    }}>
                    <Text style={{...FONTS.h1}}>-</Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    height: 50,
                    width: 30,
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: COLORS.white,
                    // borderTopLeftRadius:25,
                    // borderBottomLeftRadius:25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: 25,
                  }}>
                  <Text style={{...FONTS.h1}}>5</Text>
                </View>

                <TouchableOpacity
                // style = {{
                //     justifyContent:'center',
                //     alignItems:'center',
                //     borderColor:'red',
                //     borderWidth:2
                // }}
                >
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      backgroundColor: COLORS.white,
                      borderTopRightRadius: 25,
                      borderBottomRightRadius: 25,
                      justifyContent: 'center',
                      alignItems: 'center',
                      bottom: 25,
                    }}>
                    <Text style={{...FONTS.h1}}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Name and description */}

            <View
              style={{
                width: SIZES.width,
                alignItems: 'center',
                marginTop: 40,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <Text
                style={{textAlign: 'center', fontWeight: 'bold', ...FONTS.h3}}>
                {item.name} - {item.price.toFixed(2)}
              </Text>
              <Text style={{fontWeight: 'bold', ...FONTS.body3, marginTop: 10}}>
                {item.description}
              </Text>
            </View>

            {/* Calories */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image
                source={icons.fire}
                style={{
                  height: 20,
                  width: 20,
                  marginRight: 15,
                }}
              />

              <Text style={{color: COLORS.darkgray, ...FONTS.body3}}>
                {item.calories.toFixed(2)} cal
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  };

  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={{height: 30}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: SIZES.padding,
          }}>
          {restaurant?.menu.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });

            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [
                SIZES.base * 0.8,
                SIZES.base * 1.5,
                SIZES.base * 0.8,
              ],
              extrapolate: 'clamp',
            });

            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
              extrapolate: 'clamp',
            });

            // For this to work we need to have the onScroll prop on the Animated Scroll View
            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderOrder = () => {
    return <View>{renderDots()}</View>;
  };

  return (
    <SafeAreaView style={Styles.container}>
      {renderHeader()}
      {renderFoodInfo()}
      {renderOrder()}
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});
export default Restaurant;
