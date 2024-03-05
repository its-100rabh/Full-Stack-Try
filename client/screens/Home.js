import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import FooterMenu from "../components/MENUS/FooterMenu";
import { PostContext } from "../context/postContext";
import PostComponent from "../components/PostComponent";

const Home = () => {
  // const [state] = useContext(AuthContext);
  const [post, getAllPosts] = useContext(PostContext);
  const [refreshing, setRefreshing] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(post, null, 4)}</Text> */}
      <ScrollView>
        <PostComponent post={post} />
        {/* <Text>{JSON.stringify(post, null, 4)}</Text> */}
      </ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <FooterMenu />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
  },
});
