import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Text,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import { FontAwesome } from "@expo/vector-icons";
import ProfileStats from "../components/profileStats";

function Posts(props) {
  const [play, setPlay] = useState(true);
  const [post, setPosts] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);

  const onPlayPause = () => {
    setPlay(!play);
  };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPosts({ ...post, likes: post.likes + likesToAdd });
    setIsLiked(!isLiked);
  };

  return (
    <TouchableWithoutFeedback onPress={onPlayPause}>
      <View style={styles.container}>
        <Video
          source={{ uri: post.videoURI }}
          style={styles.video}
          resizeMode={"cover"}
          onError={() => console.log("Error")}
          isLooping
          shouldPlay={play}
        />

        <View style={styles.componentsContainer}>
          <View style={styles.rightContainer}>
            <Image
              style={styles.profilePicture}
              source={{
                uri: post.user.imageURI,
              }}
            />
            <ProfileStats
              name="heart"
              stat={post.likes}
              color={isLiked ? "red" : "white"}
              onPress={onLikePress}
            />
            <ProfileStats
              name="comment-processing-outline"
              stat={post.comments}
              color="white"
            />
            <ProfileStats name="share" stat={post.shares} color="white" />
          </View>
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.userHandle}>@{post.user.username}</Text>
              <Text style={styles.description}>{post.description}</Text>
              <View style={styles.songRow}>
                <FontAwesome name="music" size={24} color="white" />
                <Text style={styles.songName}>{post.song}</Text>
              </View>
            </View>
            <Image
              style={styles.albumImage}
              source={{
                uri: post.albumImage,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  componentsContainer: {
    justifyContent: "flex-end",
    flex: 1,
  },
  //right container
  rightContainer: {
    alignSelf: "flex-end",
    justifyContent: "space-between",
    height: 280,
    marginRight: 5,
  },
  profilePicture: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
  },
  //bottom container
  bottomContainer: {
    padding: 10,
    marginLeft: 10,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  userHandle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 8,
  },
  songRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  songName: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 5,
  },
  albumImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "grey",
  },
});

export default Posts;
