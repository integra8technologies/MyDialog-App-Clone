import { Stack } from "expo-router";
import {
  Activity,
  Bell,
  BookUser,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Cloud,
  Fuel,
  Gamepad2,
  Gift,
  Globe,
  Headset,
  Heart,
  Home,
  Landmark,
  Mail,
  Menu,
  Percent,
  Phone,
  Play,
  QrCode,
  Send,
  ShoppingCart,
  Smartphone,
  Ticket,
  TrendingUp,
  Trophy,
  Users,
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
            <View style={styles.buttonRow}>
              {" "}
              {/* Changed from <div> to <View> */}
              <TouchableOpacity style={styles.outlineBtn}>
                <Text style={styles.outlineBtnText}>TRANSACTIONS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.solidBtn}>
                <Text style={styles.solidBtnText}>RELOAD</Text>
              </TouchableOpacity>
            </View>
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
            badgeColor="#FFD700" // Yellow badge
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

        {/* QUICK ACTIONS GRID */}
        <View style={styles.gridContainer}>
          {/* ... your existing QuickAction components */}
        </View>

        {/* --- NEW: RELOAD FOR OTHERS CONTAINER --- */}
        <View style={styles.reloadOthersContainer}>
          <Text style={styles.reloadOthersTitle}>
            Reload or pay bill for others
          </Text>

          <View style={styles.inputRow}>
            {/* Input Field Wrapper */}
            <View style={styles.inputWrapper}>
              {/* We use a View here to act as the text input background */}
              <View style={styles.fakeInput}>
                {/* Contact Icon positioned to the right */}
                <TouchableOpacity style={styles.contactIcon}>
                  <BookUser color="#666" size={20} />
                </TouchableOpacity>
              </View>
            </View>

            {/* The Red GO Button */}
            <TouchableOpacity style={styles.goButton}>
              <Text style={styles.goButtonText}>GO</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ISOLATED SECTION: GET YOUR NEW CONNECTION */}
        <Text style={styles.connectionHeader}>Get your new connection</Text>
        <View style={styles.connectionContainer}>
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              source={require("../../assets/images/banner5.png")}
              style={styles.connectionBannerImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>

        {/* QUICK RELOAD ACCORDION */}
        <Accordion title="Quick reload">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.cardScroll}
          >
            {[600, 700, 1000].map((amount) => (
              <View key={amount} style={styles.reloadCard}>
                <Text style={styles.reloadCurrency}>
                  Rs. <Text style={styles.reloadAmount}>{amount}</Text>
                </Text>
                <TouchableOpacity style={styles.buyButton}>
                  <Text style={styles.buyButtonText}>BUY</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </Accordion>

        {/* RECOMMENDED DATA PACKAGES ACCORDION */}
        <Accordion title="Recommended Data Packages">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.cardScroll}
          >
            <DataPackageCard
              validity="14 days"
              title="159 Data Plan"
              data="1.5 GB"
              price="159"
            />
            <DataPackageCard
              validity="7 days"
              title="1 GB"
              data="1 GB"
              price="96 + tax"
            />
          </ScrollView>
        </Accordion>

        {/* ALL PACKAGES GRID SECTION */}
        <View style={styles.pkgSectionWrapper}>
          <Text style={styles.connectionHeader}>All Packages</Text>
          <View style={styles.pkgGridContainer}>
            <TouchableOpacity style={styles.pkgCard}>
              <Cloud size={28} color="#800080" strokeWidth={1.5} />
              <Text style={styles.pkgLabel}>Data packages</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pkgCard}>
              <View style={styles.pkgComboRow}>
                <Phone size={18} color="#800080" strokeWidth={1.5} />
                <Cloud
                  size={16}
                  color="#800080"
                  strokeWidth={1.5}
                  style={{ marginLeft: -2 }}
                />
                <Mail
                  size={14}
                  color="#800080"
                  strokeWidth={1.5}
                  style={{ marginLeft: -2 }}
                />
              </View>
              <Text style={styles.pkgLabel}>Combo packages</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pkgCard}>
              <Phone size={26} color="#800080" strokeWidth={1.5} />
              <Text style={styles.pkgLabel}>Voice add-on</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* OTHER SERVICES GRID SECTION */}
        <View style={styles.servicesSectionWrapper}>
          <Text style={styles.connectionHeader}>Other Services</Text>
          <View style={styles.servicesGrid}>
            <ServiceCard
              icon={<Fuel size={24} color="#800080" />}
              label="National Fuel Pass"
            />
            <ServiceCard
              icon={<Building2 size={24} color="#800080" />}
              label="My Bank"
              isNew
            />

            <ServiceCard
              icon={<Gift size={24} color="#800080" />}
              label="Digi Wasana"
            />
            <ServiceCard
              icon={<Ticket size={24} color="#800080" />}
              label="Mission X"
              isNew
            />

            <ServiceCard
              icon={<Gamepad2 size={24} color="#800080" />}
              label="Gaming Arena"
              isNew
            />
            <ServiceCard
              icon={<Users size={24} color="#800080" />}
              label="Power Plan Family"
            />

            <ServiceCard
              icon={<TrendingUp size={24} color="#800080" />}
              label="Upgrade to postpaid"
            />
            <ServiceCard
              icon={<CircleDollarSign size={24} color="#800080" />}
              label="Auto loan"
            />
          </View>
        </View>

        {/* VALUE ADDED SERVICES */}
        <View style={styles.serviceSection}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Value added services</Text>
            <TouchableOpacity>
              <Text style={styles.myServicesText}>MY SERVICES</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            <ColorCard
              title="Sport"
              icon={<Activity size={20} color="#FFF" />}
              color="#0086CB"
            />
            <ColorCard
              title="News"
              icon={<Globe size={20} color="#FFF" />}
              color="#D32F2F"
            />
            <ColorCard
              title="Lifestyle"
              icon={<Heart size={20} color="#FFF" />}
              color="#673AB7"
            />
          </ScrollView>
        </View>

        {/* MY PACKAGES ACCORDION */}
        <Accordion title="My packages">
          <Text style={styles.emptyText}>You have no active packages.</Text>
        </Accordion>

        {/* INTERNATIONAL SERVICES */}
        <View style={styles.serviceSection}>
          <Text style={styles.sectionTitle}>International services</Text>
          <View style={styles.twoColumnGrid}>
            <RectCard title="Roaming" color="#009688" />
            <RectCard title="IDD" color="#C2185B" />
          </View>
        </View>

        {/* LOCATION SERVICES */}
        <View style={styles.serviceSection}>
          <Text style={styles.sectionTitle}>Location services</Text>
          <View style={styles.twoColumnGrid}>
            <RectCard title="Network coverage" color="#5E35B1" />
            <RectCard title="Locate us" color="#03A9F4" />
          </View>
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

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={() => setIsOpen(!isOpen)}
        activeOpacity={0.7}
      >
        <Text style={styles.accordionTitle}>{title}</Text>
        {/* Updated Arrow Logic */}
        <View style={{ transform: [{ rotate: isOpen ? "180deg" : "0deg" }] }}>
          <ChevronDown
            size={20}
            color="#333" // Darker color to ensure visibility when open
          />
        </View>
      </TouchableOpacity>
      {isOpen && <View style={styles.accordionContent}>{children}</View>}
    </View>
  );
}

// Add this at the bottom of your file
function DataPackageCard({
  validity,
  title,
  data,
  price,
}: {
  validity: string;
  title: string;
  data: string;
  price: string;
}) {
  return (
    <View style={styles.dataCard}>
      <Text style={styles.dataValidity}>Valid for {validity}</Text>
      <Text style={styles.dataTitle}>{title}</Text>
      <Text style={styles.dataValue}>{data}</Text>
      <Text style={styles.dataPrice}>Rs. {price}</Text>
      <TouchableOpacity>
        <Text style={styles.activateText}>ACTIVATE</Text>
      </TouchableOpacity>
    </View>
  );
}

function ServiceCard({
  icon,
  label,
  isNew,
}: {
  icon: any;
  label: string;
  isNew?: boolean;
}) {
  return (
    <TouchableOpacity style={styles.serviceCard}>
      {isNew && (
        <View style={styles.newBadge}>
          <Text style={styles.newBadgeText}>New</Text>
        </View>
      )}
      <View style={styles.serviceIconContainer}>{icon}</View>
      <Text style={styles.serviceLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

function ColorCard({ title, icon, color }: any) {
  return (
    <TouchableOpacity style={[styles.colorCard, { backgroundColor: color }]}>
      <View style={styles.cardIconWrapper}>{icon}</View>
      <Text style={styles.colorCardTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

function RectCard({ title, color }: any) {
  return (
    <TouchableOpacity style={[styles.rectCard, { backgroundColor: color }]}>
      <Text style={styles.rectCardTitle}>{title}</Text>
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

  // Badge Styles
  newBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#ED1C24",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 10,
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
    marginTop: 12,
    gap: 10, // Adds space between buttons
  },
  solidBtn: {
    flex: 1, // Makes button take 50% width
    backgroundColor: "#ED1C24",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  solidBtnText: { color: "#FFF", fontWeight: "bold", fontSize: 13 },
  outlineBtn: {
    flex: 1, // Makes button take 50% width
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingVertical: 12,
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
    fontSize: 13,
    color: "#999",
    textAlign: "center",
    paddingVertical: 10,
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

  reloadOthersContainer: {
    backgroundColor: "#FFF",
    marginHorizontal: 15,
    padding: 16,
    borderRadius: 15,
    // Add shadow/elevation to match the Tab Section
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 5,
    marginBottom: 15,
  },
  reloadOthersTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputWrapper: {
    flex: 1, // Takes up remaining space
  },
  fakeInput: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  contactIcon: {
    alignSelf: "flex-end", // Pushes the icon to the right of the input
  },
  goButton: {
    backgroundColor: "#ED1C24",
    height: 48,
    paddingHorizontal: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
  goButtonText: {
    color: "#FFF",
    fontWeight: "800",
    fontSize: 14,
  },
  // Section Header for Banners
  sectionHeader: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    marginLeft: 15,
    marginTop: 10,
  },

  // Reload for Others Card
  reloadOthersCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 15,
    padding: 18,
    borderRadius: 18,
    marginTop: 5,
    marginBottom: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 1.5,
    borderColor: "#EAEAEA",
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  // Unique styles for the New Connection section to avoid affecting other designs
  connectionHeader: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  connectionContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
    width: width, // Uses the device width imported at the top
  },
  connectionBannerImage: {
    width: "100%",
    height: 180,
    borderRadius: 18,
    // Explicitly defining dimensions here so it doesn't inherit from .bannerImage
  },

  accordionContainer: {
    backgroundColor: "#FFF",
    marginHorizontal: 15,
    borderRadius: 15,
    marginBottom: 12,
    // Ensure overflow doesn't clip the rotation shadow/icon
    overflow: "visible",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    backgroundColor: "#FFF", // Explicit background helps visibility
    borderRadius: 15,
  },
  accordionTitle: { fontSize: 15, fontWeight: "700", color: "#666" },
  accordionContent: { paddingBottom: 18, paddingHorizontal: 15 },
  cardScroll: { flexDirection: "row" },

  // Reload Card Styles
  reloadCard: {
    backgroundColor: "#F9F9F9",
    width: 110,
    padding: 15,
    borderRadius: 12,
    marginRight: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  reloadCurrency: { fontSize: 12, color: "#444" },
  reloadAmount: { fontSize: 20, fontWeight: "800", color: "#222" },
  buyButton: { marginTop: 10 },
  buyButtonText: { color: "#ED1C24", fontWeight: "800", fontSize: 13 },

  // Data Package Card Styles
  dataCard: {
    backgroundColor: "#FFF",
    width: 140,
    padding: 15,
    borderRadius: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    alignItems: "center",
  },
  dataValidity: { fontSize: 11, color: "#999", marginBottom: 8 },
  dataTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#800080",
    textAlign: "center",
  },
  dataValue: {
    fontSize: 22,
    fontWeight: "800",
    color: "#222",
    marginVertical: 5,
  },
  dataPrice: { fontSize: 12, color: "#666", marginBottom: 10 },
  activateText: { color: "#ED1C24", fontWeight: "800", fontSize: 13 },

  // Header Style
  allPackagesHeader: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginLeft: 15,
    marginTop: 25,
    marginBottom: 15,
  },

  // Grid Container
  packagesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    justifyContent: "flex-start",
  },

  // Individual Card
  packageCard: {
    backgroundColor: "#FFF",
    width: width / 2 - 20, // Calculates half screen width minus margins
    margin: 8,
    height: 100,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  packageCardText: {
    fontSize: 14,
    color: "#444",
    marginTop: 10,
    fontWeight: "500",
  },

  // Special layout for the Combo package icons
  multiIconRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 28,
  },
  // Clean Package Grid
  cleanHeader: {
    fontSize: 18,
    fontWeight: "800",
    color: "#000",
    marginLeft: 20,
    marginTop: 25,
    marginBottom: 15,
  },
  cleanGridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
    paddingBottom: 30,
  },
  cleanPackageCard: {
    backgroundColor: "#FFF",
    width: width / 2 - 20,
    margin: 8,
    height: 120,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
  },
  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#FDF0FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  cleanPackageText: { fontSize: 14, fontWeight: "600", color: "#444" },

  pkgSectionWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 30, // Extra space at bottom of scroll
  },
  pkgHeaderText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#000",
    marginBottom: 12,
  },
  pkgGridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  pkgCard: {
    backgroundColor: "#FFF",
    width: "48.5%", // Perfect 2-column fit
    height: 110,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    // Professional clean shadow
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  pkgLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#444",
    marginTop: 10,
  },
  pkgComboRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  // Section Layout
  servicesSectionWrapper: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 40,
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  // Card Design
  serviceCard: {
    backgroundColor: "#FFF",
    width: "48.5%",
    height: 105,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    position: "relative", // Necessary for absolute positioning of the badge
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  serviceIconContainer: {
    marginBottom: 8,
  },
  serviceLabel: {
    fontSize: 13,
    fontWeight: "500",
    color: "#444",
    textAlign: "center",
    paddingHorizontal: 5,
  },

  newBadgeText: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "800",
  },
  serviceSection: {
    paddingHorizontal: 16,
    marginTop: 25,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  myServicesText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#ED1C24",
  },
  horizontalScroll: {
    flexDirection: "row",
  },
  twoColumnGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  // Color Card (Value Added)
  colorCard: {
    width: 140,
    height: 100,
    borderRadius: 12,
    padding: 15,
    marginRight: 12,
    justifyContent: "flex-end",
  },
  cardIconWrapper: {
    position: "absolute",
    top: 10,
    right: 10,
    opacity: 0.8,
  },
  colorCardTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "800",
  },

  // Rectangular Card (International/Location)
  rectCard: {
    width: "48.5%",
    height: 90,
    borderRadius: 12,
    padding: 15,
    justifyContent: "flex-end",
  },
  rectCardTitle: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "800",
  },
});
