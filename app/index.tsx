import { LinearGradient } from "expo-linear-gradient"; // Ensure this is installed!
import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

// Define your color palette as constants
const COLORS = {
  bg: "#ffffff",
  red: "#ED1C24",
  progressBg: "#E0E0E0",
  shine: "rgba(255, 255, 255, 0.6)", // The translucent white sheen
};

export default function SplashScreen() {
  const router = useRouter();

  // Animation Shared Values
  const screenOpacity = useSharedValue(0); // For the full pop-up
  const progress = useSharedValue(0); // Progress bar
  const shinePosition = useSharedValue(-width); // Shine starts off-screen left

  useEffect(() => {
    // 1. Smoothly fade the whole screen in (Pop-Up effect)
    screenOpacity.value = withTiming(1, {
      duration: 800,
      easing: Easing.out(Easing.quad),
    });

    // 2. Start the shine effect shortly after (500ms delay)
    shinePosition.value = withDelay(
      500,
      withTiming(width, {
        duration: 1500, // Speed of the sheen sweep
        easing: Easing.linear,
      }),
    );

    // 3. Keep the progress bar moving (over 3 seconds total)
    progress.value = withTiming(1, { duration: 3000 }, (isFinished) => {
      if (isFinished) {
        // Navigate with a smooth transition
        runOnJS(router.replace)("/(tabs)");
      }
    });
  }, []);

  // Animated Styles
  const animatedScreenStyle = useAnimatedStyle(() => ({
    opacity: screenOpacity.value,
  }));

  const progressStyle = useAnimatedStyle(() => ({
    width: progress.value * (width * 0.6),
  }));

  const animatedShineStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shinePosition.value }],
  }));

  return (
    <>
      <Stack.Screen options={{ headerShown: false, animation: "fade" }} />

      <Animated.View style={[styles.container, animatedScreenStyle]}>
        {/* Logo Container with Shine Overlay */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/dialog-logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          {/* Moving Shine Effect */}
          <Animated.View style={[styles.shineOverlay, animatedShineStyle]}>
            <LinearGradient
              colors={["transparent", COLORS.shine, "transparent"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.shineGradient}
            />
          </Animated.View>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressBarBackground}>
          <Animated.View style={[styles.progressBarFill, progressStyle]} />
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: 200,
    height: 100,
    marginBottom: 30,
    position: "relative", // Necessary for absolute overlays
    overflow: "hidden", // Contain the shine
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  shineOverlay: {
    ...StyleSheet.absoluteFillObject, // Match logoContainer size
    flexDirection: "row",
  },
  shineGradient: {
    width: width / 2, // The width of the sheen band
    height: "100%",
  },
  progressBarBackground: {
    width: "60%",
    height: 4,
    backgroundColor: COLORS.progressBg,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: COLORS.red,
  },
});
