import { Stack } from "expo-router";
import {
  Bell,
  ChevronDown,
  ChevronRight,
  Gamepad2,
  Gift,
  Headset,
  Home,
  Landmark,
  Menu,
  Percent,
  Phone,
  Play,
  QrCode,
  Send,
  ShoppingCart,
  Smartphone,
  Trophy,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const TABS = ["MONEY", "DATA", "VOICE", "SMS"];

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("MONEY");
  const [videoLimit, setVideoLimit] = useState(true);

  const renderTabContent = () => {
    switch (activeTab) {
      case "MONEY":
        return (
          <View>
            <View style={styles.balanceCard}>
              <Text style={styles.cardLabel}>Prepaid Balance</Text>
              <Text style={styles.cardValue}>Rs. 0.00</Text>
              <Text style={styles.cardSub}>Valid till 06 May 2027</Text>
            </View>
            <View style={styles.balanceCard}>
              <Text style={styles.cardLabel}>Loan Balance</Text>
              <Text style={styles.cardValue}>Rs. 39.00</Text>
            </View>
            <div style={styles.buttonRow}>
              <TouchableOpacity style={styles.outlineBtn}>
                <Text style={styles.outlineBtnText}>TRANSACTIONS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.solidBtn}>
                <Text style={styles.solidBtnText}>RELOAD</Text>
              </TouchableOpacity>
            </div>
          </View>
        );

      case "DATA":
        return (
          <View>
            <View style={styles.balanceCard}>
              <View style={styles.cardHeaderRow}>
                <Text style={styles.cardLabel}>Anytime</Text>
                <Smartphone size={16} color="rgba(255,255,255,0.6)" />
              </View>
              <Text style={styles.cardValue}>6.73 GB</Text>
              <View style={styles.cardFooterRow}>
                <Text style={styles.cardSub}>remaining</Text>
                <ChevronRight size={18} color="#FFF" />
              </View>
            </View>
            <View style={styles.splitRow}>
              <View
                style={[
                  styles.balanceCard,
                  { flex: 1, marginRight: 8, padding: 15 },
                ]}
              >
                <Text style={styles.cardLabel}>Night time</Text>
                <Text style={[styles.cardValue, { fontSize: 20 }]}>
                  1.29 GB
                </Text>
                <Text style={styles.cardSub}>remaining</Text>
              </View>
              <View style={[styles.balanceCard, { flex: 1, padding: 15 }]}>
                <Text style={styles.cardLabel}>Social Media</Text>
                <Text style={[styles.cardValue, { fontSize: 20 }]}>
                  Unlimited
                </Text>
                <ChevronRight
                  size={18}
                  color="#FFF"
                  style={styles.bottomRightIcon}
                />
              </View>
            </View>
            <View style={styles.toggleRow}>
              <View>
                <Text style={styles.toggleTitle}>
                  SD Video Quality Limit (360p)
                </Text>
                <Text style={styles.toggleSub}>
                  For Fun Blaster & Unlimited Blaster
                </Text>
              </View>
              <Switch
                value={videoLimit}
                onValueChange={setVideoLimit}
                trackColor={{ false: "#767577", true: "#800080" }}
                thumbColor={videoLimit ? "#FFF" : "#f4f3f4"}
              />
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.outlineBtn, { flex: 1, marginRight: 8 }]}
              >
                <Text style={styles.outlineBtnText}>USAGE HISTORY</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.solidBtn, { flex: 1 }]}>
                <Text style={styles.solidBtnText}>DATA ADD-ON</Text>
              </TouchableOpacity>
            </View>
          </View>
        );

      case "VOICE":
        return (
          <View>
            <View style={styles.balanceCard}>
              <View style={styles.cardHeaderRow}>
                <Text style={styles.cardLabel}>Any net Local</Text>
                <Phone size={16} color="rgba(255,255,255,0.6)" />
              </View>
              <Text style={styles.cardValue}>100 min</Text>
              <Text style={styles.cardSub}>Valid till 05 Jun 2026</Text>
            </View>
            <TouchableOpacity style={styles.fullOutlineBtn}>
              <Text style={styles.outlineBtnText}>USAGE HISTORY</Text>
            </TouchableOpacity>
          </View>
        );

      case "SMS":
        return (
          <View style={styles.emptyContainer}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/7486/7486744.png",
              }}
              style={styles.emptyImage}
            />
            <Text style={styles.emptyText}>
              Seems like you don’t have free SMS
            </Text>
            <TouchableOpacity style={styles.fullOutlineBtn}>
              <Text style={styles.outlineBtnText}>USAGE HISTORY</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Stack.Screen options={{ headerShown: false }} />

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.phoneIconCircle}>
            <Smartphone size={20} color="#FFF" />
          </View>
          <View style={styles.headerTextContainer}>
            <View style={styles.row}>
              <Text style={styles.phoneNumber}>764765245</Text>
              <ChevronDown size={16} color="#666" style={{ marginLeft: 4 }} />
            </View>
            <View style={styles.row}>
              <View style={styles.onlineDot} />
              <Text style={styles.statusText}>Connected</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Bell size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* QUICK ACTIONS GRID */}
        <View style={styles.gridContainer}>
          <QuickAction
            icon={<Landmark color="#ED1C24" size={24} />}
            label="Reload/bill"
          />
          <QuickAction
            icon={<Landmark color="#ED1C24" size={24} />}
            label="My bank"
            badge="New"
          />
          <QuickAction
            icon={<Send color="#ED1C24" size={24} />}
            label="Send money"
          />
          <QuickAction
            icon={<QrCode color="#ED1C24" size={24} />}
            label="My QR"
          />
          <QuickAction
            icon={<Play color="#ED1C24" size={24} />}
            label="Dialog"
          />
          <QuickAction
            icon={<ShoppingCart color="#ED1C24" size={24} />}
            label="Buy connection"
          />
          <QuickAction
            icon={<Gift color="#ED1C24" size={24} />}
            label="Digi Wasana"
            badge="New"
          />
          <QuickAction
            icon={<Trophy color="#ED1C24" size={24} />}
            label="MissionX"
            badge="New"
          />
          <QuickAction
            icon={<Percent color="#ED1C24" size={24} />}
            label="MyOffers"
            dot
          />
          <QuickAction
            icon={<Gamepad2 color="#ED1C24" size={24} />}
            label="Gam"
          />
        </View>

        {/* BANNERS SECTION */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.bannerScroll}
          snapToInterval={width * 0.85 + 15}
          decelerationRate="fast"
        >
          {[
            require("../../assets/images/banner1.png"),
            require("../../assets/images/banner2.png"), // Ensure these exist
            require("../../assets/images/banner3.png"),
            require("../../assets/images/banner4.png"),
          ].map((imageSource, idx) => (
            <TouchableOpacity key={idx} activeOpacity={0.9}>
              <Image
                source={imageSource}
                style={styles.bannerImage}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* DYNAMIC TAB SECTION */}
        <View style={styles.tabSection}>
          <View style={styles.tabHeader}>
            {TABS.map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={[
                  styles.tabButton,
                  activeTab === tab && styles.activeTabButton,
                ]}
              >
                <Text
                  style={[
                    styles.tabButtonText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.contentContainer}>{renderTabContent()}</View>
        </View>
      </ScrollView>

      {/* --- NEW BOTTOM NAVIGATION BAR --- */}
      <View style={styles.bottomNav}>
        <NavItem
          icon={<Home color="#800080" size={24} />}
          label="Home"
          active
        />
        <NavItem icon={<QrCode color="#666" size={24} />} label="Scan QR" />
        <NavItem
          icon={<Percent color="#EAB308" size={24} />}
          label="My Offers"
          dot
        />
        <NavItem icon={<Headset color="#666" size={24} />} label="Support" />
        <NavItem icon={<Menu color="#666" size={24} />} label="Menu" />
      </View>
    </SafeAreaView>
  );
}

// Helper Components
function QuickAction({ icon, label, badge, dot }: any) {
  return (
    <TouchableOpacity style={styles.actionItem}>
      <View style={styles.iconBox}>
        {icon}
        {badge && (
          <View style={styles.newBadge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
        {dot && <View style={styles.redDot} />}
      </View>
      <Text style={styles.actionLabel} numberOfLines={1}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function NavItem({ icon, label, active, dot }: any) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <View>
        {icon}
        {dot && <View style={styles.navDot} />}
      </View>
      <Text style={[styles.navLabel, active && styles.activeNavLabel]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FFF" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  headerLeft: { flexDirection: "row", alignItems: "center" },
  phoneIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#800080",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTextContainer: { marginLeft: 12 },
  phoneNumber: { fontSize: 16, fontWeight: "700", color: "#000" },
  row: { flexDirection: "row", alignItems: "center" },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#4CAF50",
    marginRight: 5,
  },
  statusText: { fontSize: 11, color: "#666" },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: "space-between",
  },
  actionItem: { width: "20%", alignItems: "center", marginBottom: 15 },
  iconBox: {
    width: 52,
    height: 52,
    backgroundColor: "#FFF",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  actionLabel: { fontSize: 10, color: "#555", textAlign: "center" },

  newBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#FFD700",
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  badgeText: { fontSize: 8, fontWeight: "bold" },
  redDot: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#ED1C24",
  },

  bannerScroll: { paddingLeft: 20, marginVertical: 10 },
  bannerImage: {
    width: width * 0.85,
    height: 180,
    borderRadius: 15,
    marginRight: 15,
  },

  tabSection: {
    marginTop: 10,
    backgroundColor: "#FFF",
    marginHorizontal: 15,
    borderRadius: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 10,
  },
  tabHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  tabButton: { flex: 1, paddingVertical: 15, alignItems: "center" },
  activeTabButton: { borderBottomWidth: 3, borderBottomColor: "#800080" },
  tabButtonText: { fontSize: 13, color: "#999", fontWeight: "700" },
  activeTabText: { color: "#800080" },

  contentContainer: { padding: 15 },
  balanceCard: {
    backgroundColor: "#800080",
    borderRadius: 15,
    padding: 20,
    marginBottom: 10,
    position: "relative",
  },
  cardLabel: { color: "rgba(255,255,255,0.7)", fontSize: 12 },
  cardValue: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 4,
  },
  cardSub: { color: "rgba(255,255,255,0.5)", fontSize: 11 },

  cardHeaderRow: { flexDirection: "row", justifyContent: "space-between" },
  cardFooterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  splitRow: { flexDirection: "row", marginBottom: 5 },
  bottomRightIcon: { position: "absolute", bottom: 12, right: 12 },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  solidBtn: {
    backgroundColor: "#ED1C24",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 8,
    alignItems: "center",
  },
  solidBtnText: { color: "#FFF", fontWeight: "bold", fontSize: 13 },
  outlineBtn: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  outlineBtnText: { color: "#ED1C24", fontWeight: "bold", fontSize: 13 },
  fullOutlineBtn: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  toggleTitle: { fontSize: 13, fontWeight: "700", color: "#333" },
  toggleSub: { fontSize: 11, color: "#888" },
  emptyContainer: { alignItems: "center", paddingVertical: 20 },
  emptyImage: { width: 60, height: 60, opacity: 0.3, marginBottom: 15 },
  emptyText: {
    fontSize: 14,
    color: "#555",
    fontWeight: "600",
    marginBottom: 15,
  },

  // Bottom Nav Styles
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    justifyContent: "space-around",
    paddingBottom: 25,
  },
  navItem: { alignItems: "center", justifyContent: "center", flex: 1 },
  navLabel: { fontSize: 12, color: "#666", marginTop: 4 },
  activeNavLabel: { color: "#800080", fontWeight: "600" },
  navDot: {
    position: "absolute",
    top: -2,
    right: -4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF4D4D",
    borderWidth: 1,
    borderColor: "#FFF",
  },
});
