import React from "react";
import { View, FlatList } from "react-native";
import Posts from "./posts";
import posts from "../data/posts";

export default function Home() {
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.postId.toString()}
        renderItem={({ item }) => <Posts post={item} />}
        showsVerticalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
}
